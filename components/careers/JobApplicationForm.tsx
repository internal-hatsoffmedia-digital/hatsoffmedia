"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, CheckCircle2, Loader2, Send } from "lucide-react";

const applicationSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(8, "Please enter a valid phone number"),
  position: z.string().refine((value) => value !== "Select a role", {
    message: "Please select a role",
  }),
  location: z.string().min(2, "Please share your location or work preference"),
  experience: z.string().refine((value) => value !== "Select experience", {
    message: "Please select your experience level",
  }),
  portfolio: z.string().optional().or(z.literal("")),
  linkedin: z.string().optional().or(z.literal("")),
  coverLetter: z.string().min(20, "Please share a short note about why you are a fit"),
});

type CareerApplicationFormData = z.infer<typeof applicationSchema>;

const roleOptions = [
  "Social Media Manager",
  "Senior Video Editor",
  "UI/UX Designer",
  "Performance Marketer",
  "Creative Strategist",
  "Brand Designer",
  "Content Producer",
];

export default function JobApplicationForm() {
  const searchParams = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<CareerApplicationFormData>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      position: searchParams.get("position") || "Select a role",
    },
  });

  useEffect(() => {
    const selectedPosition = searchParams.get("position");
    if (selectedPosition) {
      setValue("position", selectedPosition);
    }
  }, [searchParams, setValue]);

  const onSubmit = async (data: CareerApplicationFormData) => {
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 900));
      console.log("Career application submitted:", data);
      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#f7f7f5] py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,204,0,0.22),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(0,0,0,0.05),_transparent_30%)]" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-10 flex items-center">
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold text-neutral-700 transition hover:border-[#ffcc00] hover:text-black"
          >
            <ArrowLeft size={16} />
            Back to careers
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-[#ffcc00]/30 bg-[#ffcc00]/15 px-5 py-2 text-xs font-bold uppercase tracking-[0.28em] text-neutral-700">
            Apply now
          </span>
          <p className="mt-5 text-xs font-bold uppercase tracking-[0.35em] text-neutral-500">
            Career Application Form
          </p>
          <h1 className="mt-4 text-4xl font-black uppercase tracking-tight text-black sm:text-5xl lg:text-6xl">
            Join the <span className="text-[#ffcc00]">Hatsoff</span> team.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-neutral-600">
            Share a few details and let us know what kind of impact you want to make with us.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 rounded-[32px] border border-neutral-200 bg-white p-6 shadow-[0_25px_70px_rgba(0,0,0,0.04)] sm:p-8 lg:p-12"
        >
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                className="flex flex-col items-center justify-center py-14 text-center"
              >
                <CheckCircle2 size={64} className="text-[#ffcc00]" />
                <h2 className="mt-6 text-3xl font-black text-black">Application received.</h2>
                <p className="mt-3 max-w-xl text-base leading-7 text-neutral-600">
                  Thank you for applying. Our hiring team will review your profile and reach out to the shortlisted candidates soon.
                </p>
                <Link
                  href="/careers"
                  className="mt-8 inline-flex items-center justify-center rounded-full bg-[#ffcc00] px-7 py-3 font-bold text-black transition hover:shadow-[0_16px_28px_rgba(255,204,0,0.35)]"
                >
                  Return to careers
                </Link>
              </motion.div>
            ) : (
              <form key="form" onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <label htmlFor="fullName" className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-500">
                      Full name *
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      placeholder="John Doe"
                      {...register("fullName")}
                      className="mt-3 w-full border-0 border-b-2 border-neutral-200 bg-transparent pb-3 text-base text-black outline-none transition focus:border-[#ffcc00]"
                    />
                    {errors.fullName && <p className="mt-2 text-xs text-red-600">{errors.fullName.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-500">
                      Email address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="hello@email.com"
                      {...register("email")}
                      className="mt-3 w-full border-0 border-b-2 border-neutral-200 bg-transparent pb-3 text-base text-black outline-none transition focus:border-[#ffcc00]"
                    />
                    {errors.email && <p className="mt-2 text-xs text-red-600">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-500">
                      Phone number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+91 98XXXXXX"
                      {...register("phone")}
                      className="mt-3 w-full border-0 border-b-2 border-neutral-200 bg-transparent pb-3 text-base text-black outline-none transition focus:border-[#ffcc00]"
                    />
                    {errors.phone && <p className="mt-2 text-xs text-red-600">{errors.phone.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="position" className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-500">
                      Applying for *
                    </label>
                    <select
                      id="position"
                      {...register("position")}
                      className="mt-3 w-full border-0 border-b-2 border-neutral-200 bg-transparent pb-3 text-base text-black outline-none transition focus:border-[#ffcc00]"
                    >
                      <option value="Select a role">Select a role</option>
                      {roleOptions.map((role) => (
                        <option key={role} value={role}>
                          {role}
                        </option>
                      ))}
                    </select>
                    {errors.position && <p className="mt-2 text-xs text-red-600">{errors.position.message}</p>}
                  </div>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <label htmlFor="location" className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-500">
                      Location / work preference *
                    </label>
                    <input
                      id="location"
                      type="text"
                      placeholder="Mumbai, India / Remote"
                      {...register("location")}
                      className="mt-3 w-full border-0 border-b-2 border-neutral-200 bg-transparent pb-3 text-base text-black outline-none transition focus:border-[#ffcc00]"
                    />
                    {errors.location && <p className="mt-2 text-xs text-red-600">{errors.location.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="experience" className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-500">
                      Experience level *
                    </label>
                    <select
                      id="experience"
                      {...register("experience")}
                      className="mt-3 w-full border-0 border-b-2 border-neutral-200 bg-transparent pb-3 text-base text-black outline-none transition focus:border-[#ffcc00]"
                    >
                      <option value="Select experience">Select experience</option>
                      <option value="0-1 years">0-1 years</option>
                      <option value="1-3 years">1-3 years</option>
                      <option value="3-5 years">3-5 years</option>
                      <option value="5-8 years">5-8 years</option>
                      <option value="8+ years">8+ years</option>
                    </select>
                    {errors.experience && <p className="mt-2 text-xs text-red-600">{errors.experience.message}</p>}
                  </div>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <label htmlFor="portfolio" className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-500">
                      Portfolio / website
                    </label>
                    <input
                      id="portfolio"
                      type="url"
                      placeholder="https://yourportfolio.com"
                      {...register("portfolio")}
                      className="mt-3 w-full border-0 border-b-2 border-neutral-200 bg-transparent pb-3 text-base text-black outline-none transition focus:border-[#ffcc00]"
                    />
                  </div>

                  <div>
                    <label htmlFor="linkedin" className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-500">
                      LinkedIn profile
                    </label>
                    <input
                      id="linkedin"
                      type="url"
                      placeholder="https://linkedin.com/in/yourname"
                      {...register("linkedin")}
                      className="mt-3 w-full border-0 border-b-2 border-neutral-200 bg-transparent pb-3 text-base text-black outline-none transition focus:border-[#ffcc00]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="coverLetter" className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-500">
                    Why do you want to join us? *
                  </label>
                  <textarea
                    id="coverLetter"
                    rows={6}
                    placeholder="Tell us about your experience, strengths, and why you are a fit for this role..."
                    {...register("coverLetter")}
                    className="mt-3 w-full resize-none border-0 border-b-2 border-neutral-200 bg-transparent pb-3 text-base leading-7 text-black outline-none transition focus:border-[#ffcc00]"
                  />
                  {errors.coverLetter && <p className="mt-2 text-xs text-red-600">{errors.coverLetter.message}</p>}
                </div>

                <div className="flex flex-col gap-5 border-t border-neutral-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-lg text-sm leading-6 text-neutral-500">
                    We respect your privacy and only use your details to review your application.
                  </p>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-3 rounded-full bg-[#ffcc00] px-7 py-4 font-bold text-black transition hover:translate-y-[-1px] hover:shadow-[0_16px_36px_rgba(255,204,0,0.35)] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        Submitting...
                        <Loader2 size={18} className="animate-spin" />
                      </>
                    ) : (
                      <>
                        Send application
                        <Send size={18} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
