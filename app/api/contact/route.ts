import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const scriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL;
    const sharedSecret = process.env.CONTACT_FORM_SECRET;

    if (!scriptUrl || !sharedSecret) {
      console.error("Contact form environment variables are missing");

      return NextResponse.json(
        {
          success: false,
          message: "Contact service is not configured",
        },
        { status: 500 }
      );
    }

    const response = await fetch(scriptUrl, {
      method: "POST",
      redirect: "follow",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify({
        ...data,
        secret: sharedSecret,
      }),
      cache: "no-store",
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.message || "Google Apps Script submission failed");
    }

    return NextResponse.json({
      success: true,
      message: "Enquiry submitted successfully",
    });
  } catch (error) {
    console.error("Contact submission error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to submit your enquiry. Please try again.",
      },
      { status: 500 }
    );
  }
}