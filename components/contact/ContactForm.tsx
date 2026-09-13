"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertCircle,
  CheckCircle2,
  Loader2,
  Send,
} from "lucide-react";

const contactSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name is too long"),

  company: z
    .string()
    .trim()
    .max(150, "Company name is too long")
    .optional(),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address"),

  phone: z
    .string()
    .trim()
    .min(8, "Please enter a valid phone number")
    .max(20, "Please enter a valid phone number"),

  service: z
    .string()
    .min(1, "Please select a service"),

  budget: z
    .string()
    .min(1, "Please select a budget range"),

  message: z
    .string()
    .trim()
    .min(10, "Project details must be at least 10 characters")
    .max(3000, "Project details must be below 3000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

type ApiResponse = {
  success?: boolean;
  message?: string;
};

const initialValues: ContactFormData = {
  fullName: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  budget: "",
  message: "",
};

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: initialValues,
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmissionError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      let result: ApiResponse = {};

      try {
        result = await response.json();
      } catch {
        result = {};
      }

      if (!response.ok || result.success === false) {
        throw new Error(
          result.message ||
            "Unable to send your enquiry. Please try again."
        );
      }

      reset(initialValues);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Contact form submission error:", error);

      setSubmissionError(
        error instanceof Error
          ? error.message
          : "Unable to send your enquiry. Please try again."
      );
    }
  };

  const handleAnotherEnquiry = () => {
    reset(initialValues);
    setSubmissionError("");
    setIsSubmitted(false);
  };

  const inputClassName =
    "mt-4 w-full border-0 border-b-2 border-[#4c4c4c]/10 bg-transparent pb-4 text-lg text-[#4c4c4c] outline-none transition-all duration-300 placeholder:text-[#4c4c4c]/35 focus:border-[#ffcc00]";

  const labelClassName =
    "text-sm font-bold uppercase tracking-[0.25em] text-[#4c4c4c]/60";

  const errorClassName =
    "mt-2 flex items-center gap-1.5 text-xs font-semibold text-red-600";

  return (
    <section
      id="contact-form"
      className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-20 h-[420px] w-[420px] rounded-full bg-[#fceb77]/40 blur-[150px]" />

        <div className="absolute bottom-0 right-0 h-[520px] w-[520px] rounded-full bg-[#ffcc00]/10 blur-[180px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-[#ffcc00]/30 bg-[#fceb77]/30 px-5 py-2 text-xs font-bold uppercase tracking-[0.35em] text-[#4c4c4c]">
            Start Your Project
          </span>

          <h2 className="mt-8 text-5xl font-black leading-[0.9] tracking-[-0.06em] text-[#4c4c4c] md:text-7xl">
            Tell Us About
            <br />

            <span className="text-[#ffcc00]">Your Vision.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#4c4c4c]/70">
            Share your requirements with us and our team will recommend the
            right branding, website, marketing or creative solution for your
            business.
          </p>
        </motion.div>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="mt-16 rounded-[40px] border border-[#4c4c4c]/10 bg-white/80 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.05)] backdrop-blur-xl sm:p-12"
        >
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center justify-center py-16 text-center"
              >
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#ffcc00]/15">
                  <CheckCircle2
                    size={56}
                    strokeWidth={1.8}
                    className="text-[#d6aa00]"
                  />
                </div>

                <h3 className="mt-7 text-3xl font-black text-[#4c4c4c]">
                  Message Received!
                </h3>

                <p className="mt-4 max-w-md text-base leading-7 text-[#4c4c4c]/70">
                  Thank you for reaching out. Our team will review your
                  requirements and contact you within 24 hours.
                </p>

                <button
                  type="button"
                  onClick={handleAnotherEnquiry}
                  className="mt-8 rounded-full bg-[#ffcc00] px-8 py-4 font-bold text-[#4c4c4c] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(255,204,0,0.35)]"
                >
                  Send Another Enquiry
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="space-y-10"
              >
                {/* Full Name and Company */}
                <div className="grid gap-10 md:grid-cols-2">
                  <div>
                    <label htmlFor="fullName" className={labelClassName}>
                      Full Name *
                    </label>

                    <input
                      id="fullName"
                      type="text"
                      autoComplete="name"
                      placeholder="John Doe"
                      aria-invalid={Boolean(errors.fullName)}
                      {...register("fullName")}
                      className={inputClassName}
                    />

                    {errors.fullName && (
                      <p className={errorClassName}>
                        <AlertCircle size={13} />

                        {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="company" className={labelClassName}>
                      Company
                    </label>

                    <input
                      id="company"
                      type="text"
                      autoComplete="organization"
                      placeholder="Company Name"
                      aria-invalid={Boolean(errors.company)}
                      {...register("company")}
                      className={inputClassName}
                    />

                    {errors.company && (
                      <p className={errorClassName}>
                        <AlertCircle size={13} />

                        {errors.company.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email and Phone */}
                <div className="grid gap-10 md:grid-cols-2">
                  <div>
                    <label htmlFor="email" className={labelClassName}>
                      Email Address *
                    </label>

                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      placeholder="hello@email.com"
                      aria-invalid={Boolean(errors.email)}
                      {...register("email")}
                      className={inputClassName}
                    />

                    {errors.email && (
                      <p className={errorClassName}>
                        <AlertCircle size={13} />

                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className={labelClassName}>
                      Phone Number *
                    </label>

                    <input
                      id="phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      placeholder="+91 XXXXX XXXXX"
                      aria-invalid={Boolean(errors.phone)}
                      {...register("phone")}
                      className={inputClassName}
                    />

                    {errors.phone && (
                      <p className={errorClassName}>
                        <AlertCircle size={13} />

                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Service and Budget */}
                <div className="grid gap-10 md:grid-cols-2">
                  <div>
                    <label htmlFor="service" className={labelClassName}>
                      Service Required *
                    </label>

                    <select
                      id="service"
                      aria-invalid={Boolean(errors.service)}
                      {...register("service")}
                      className={inputClassName}
                    >
                      <option value="" disabled>
                        Choose a Service
                      </option>

                      <option value="Branding">Branding</option>

                      <option value="Website Design & Development">
                        Website Design & Development
                      </option>

                      <option value="Social Media Marketing">
                        Social Media Marketing
                      </option>

                      <option value="Performance Marketing">
                        Performance Marketing
                      </option>

                      <option value="Video Production">
                        Video Production
                      </option>

                      <option value="Graphic Design">
                        Graphic Design
                      </option>

                      <option value="AI Creative Content">
                        AI Creative Content
                      </option>

                      <option value="Complete Brand Solution">
                        Complete Brand Solution
                      </option>
                    </select>

                    {errors.service && (
                      <p className={errorClassName}>
                        <AlertCircle size={13} />

                        {errors.service.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="budget" className={labelClassName}>
                      Budget Range *
                    </label>

                    <select
                      id="budget"
                      aria-invalid={Boolean(errors.budget)}
                      {...register("budget")}
                      className={inputClassName}
                    >
                      <option value="" disabled>
                        Select Budget
                      </option>

                      <option value="Below ₹25,000">
                        Below ₹25,000
                      </option>

                      <option value="₹25,000 – ₹50,000">
                        ₹25,000 – ₹50,000
                      </option>

                      <option value="₹50,000 – ₹1,00,000">
                        ₹50,000 – ₹1,00,000
                      </option>

                      <option value="₹1,00,000+">
                        ₹1,00,000+
                      </option>

                      <option value="Let's Discuss">
                        Let&apos;s Discuss
                      </option>
                    </select>

                    {errors.budget && (
                      <p className={errorClassName}>
                        <AlertCircle size={13} />

                        {errors.budget.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <label htmlFor="message" className={labelClassName}>
                    Project Details *
                  </label>

                  <textarea
                    id="message"
                    rows={6}
                    placeholder="Tell us about your business, project goals, timeline and any specific requirements..."
                    aria-invalid={Boolean(errors.message)}
                    {...register("message")}
                    className={`${inputClassName} resize-none leading-8`}
                  />

                  {errors.message && (
                    <p className={errorClassName}>
                      <AlertCircle size={13} />

                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submission Error */}
                {submissionError && (
                  <div
                    role="alert"
                    className="flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-medium leading-6 text-red-700"
                  >
                    <AlertCircle
                      size={19}
                      className="mt-0.5 shrink-0"
                    />

                    <span>{submissionError}</span>
                  </div>
                )}

                {/* Submit */}
                <div className="flex flex-col gap-6 pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-md text-sm leading-7 text-[#4c4c4c]/60">
                    By submitting this form, you agree to be contacted
                    regarding your enquiry. We respect your privacy and never
                    share your information.
                  </p>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex min-w-[190px] items-center justify-center gap-3 rounded-full bg-[#ffcc00] px-8 py-5 font-bold text-[#4c4c4c] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(255,204,0,0.35)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                  >
                    {isSubmitting ? (
                      <>
                        Submitting
                        <Loader2 size={18} className="animate-spin" />
                      </>
                    ) : (
                      <>
                        Send Enquiry

                        <Send
                          size={18}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </>
                    )}
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}