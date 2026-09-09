"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

// Form Validation Schema
const contactSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  company: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(8, "Please enter a valid phone number"),
  service: z.string().refine((val) => val !== "Choose a Service", {
    message: "Please select a service",
  }),
  budget: z.string().refine((val) => val !== "Select Budget", {
    message: "Please select a budget range",
  }),
  message: z.string().min(10, "Project details must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      service: "Choose a Service",
      budget: "Select Budget",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to submit request");

      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
      {/* Background Decorator */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-32 top-20 h-[420px] w-[420px] rounded-full bg-[#fceb77]/40 blur-[150px]" />
        <div className="absolute right-0 bottom-0 h-[520px] w-[520px] rounded-full bg-[#ffcc00]/10 blur-[180px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-[#ffcc00]/30 bg-[#fceb77]/30 px-5 py-2 text-xs font-bold uppercase tracking-[0.35em] text-[#4c4c4c]">
            START YOUR PROJECT
          </span>

          <h2 className="mt-8 text-5xl font-black leading-[0.9] tracking-[-0.06em] text-[#4c4c4c] md:text-7xl">
            Tell Us About <br />
            <span className="text-[#ffcc00]">Your Vision.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#4c4c4c]/70">
            Share your requirements with us and our team will recommend the right branding, website, marketing or creative solution for your business.
          </p>
        </motion.div>

        {/* Centered Main Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-[40px] border border-[#4c4c4c]/10 bg-white/80 p-8 sm:p-12 shadow-[0_30px_80px_rgba(0,0,0,.05)] backdrop-blur-xl"
        >
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex flex-col items-center justify-center py-16 text-center"
              >
                <CheckCircle2 size={64} className="text-[#ffcc00]" />
                <h3 className="mt-6 text-3xl font-black text-[#4c4c4c]">Message Received!</h3>
                <p className="mt-3 max-w-md text-base leading-7 text-[#4c4c4c]/70">
                  Thank you for reaching out. A team member will review your details and get back to you within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 rounded-full bg-[#ffcc00] px-8 py-4 font-bold text-[#4c4c4c] transition-all hover:shadow-[0_10px_30px_rgba(255,204,0,.35)]"
                >
                  Send Another Enquiry
                </button>
              </motion.div>
            ) : (
              <form key="form" onSubmit={handleSubmit(onSubmit)} className="space-y-10">
                {/* Row 1: Name & Company */}
                <div className="grid gap-10 md:grid-cols-2">
                  <div>
                    <label htmlFor="fullName" className="text-sm font-bold uppercase tracking-[0.25em] text-[#4c4c4c]/60">
                      Full Name *
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      placeholder="John Doe"
                      {...register("fullName")}
                      className="mt-4 w-full border-0 border-b-2 border-[#4c4c4c]/10 bg-transparent pb-4 text-lg outline-none transition-all duration-300 focus:border-[#ffcc00]"
                    />
                    {errors.fullName && (
                      <p className="mt-2 text-xs font-semibold text-red-500">{errors.fullName.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="company" className="text-sm font-bold uppercase tracking-[0.25em] text-[#4c4c4c]/60">
                      Company
                    </label>
                    <input
                      id="company"
                      type="text"
                      placeholder="Company Name"
                      {...register("company")}
                      className="mt-4 w-full border-0 border-b-2 border-[#4c4c4c]/10 bg-transparent pb-4 text-lg outline-none transition-all duration-300 focus:border-[#ffcc00]"
                    />
                  </div>
                </div>

                {/* Row 2: Email & Phone */}
                <div className="grid gap-10 md:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="text-sm font-bold uppercase tracking-[0.25em] text-[#4c4c4c]/60">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="hello@email.com"
                      {...register("email")}
                      className="mt-4 w-full border-0 border-b-2 border-[#4c4c4c]/10 bg-transparent pb-4 text-lg outline-none transition-all duration-300 focus:border-[#ffcc00]"
                    />
                    {errors.email && (
                      <p className="mt-2 text-xs font-semibold text-red-500">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="text-sm font-bold uppercase tracking-[0.25em] text-[#4c4c4c]/60">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      {...register("phone")}
                      className="mt-4 w-full border-0 border-b-2 border-[#4c4c4c]/10 bg-transparent pb-4 text-lg outline-none transition-all duration-300 focus:border-[#ffcc00]"
                    />
                    {errors.phone && (
                      <p className="mt-2 text-xs font-semibold text-red-500">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                {/* Row 3: Service & Budget */}
                <div className="grid gap-10 md:grid-cols-2">
                  <div>
                    <label htmlFor="service" className="text-sm font-bold uppercase tracking-[0.25em] text-[#4c4c4c]/60">
                      Service Required *
                    </label>
                    <select
                      id="service"
                      {...register("service")}
                      className="mt-4 w-full border-0 border-b-2 border-[#4c4c4c]/10 bg-transparent pb-4 text-lg outline-none transition-all duration-300 focus:border-[#ffcc00]"
                    >
                      <option value="Choose a Service" disabled>Choose a Service</option>
                      <option value="Branding">Branding</option>
                      <option value="Website Design & Development">Website Design & Development</option>
                      <option value="Social Media Marketing">Social Media Marketing</option>
                      <option value="Performance Marketing">Performance Marketing</option>
                      <option value="Video Production">Video Production</option>
                      <option value="Graphic Design">Graphic Design</option>
                      <option value="AI Creative Content">AI Creative Content</option>
                      <option value="Complete Brand Solution">Complete Brand Solution</option>
                    </select>
                    {errors.service && (
                      <p className="mt-2 text-xs font-semibold text-red-500">{errors.service.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="budget" className="text-sm font-bold uppercase tracking-[0.25em] text-[#4c4c4c]/60">
                      Budget Range *
                    </label>
                    <select
                      id="budget"
                      {...register("budget")}
                      className="mt-4 w-full border-0 border-b-2 border-[#4c4c4c]/10 bg-transparent pb-4 text-lg outline-none transition-all duration-300 focus:border-[#ffcc00]"
                    >
                      <option value="Select Budget" disabled>Select Budget</option>
                      <option value="Below ₹25,000">Below ₹25,000</option>
                      <option value="₹25,000 – ₹50,000">₹25,000 – ₹50,000</option>
                      <option value="₹50,000 – ₹1,00,000">₹50,000 – ₹1,00,000</option>
                      <option value="₹1,00,000+">₹1,00,000+</option>
                      <option value="Let's Discuss">Let's Discuss</option>
                    </select>
                    {errors.budget && (
                      <p className="mt-2 text-xs font-semibold text-red-500">{errors.budget.message}</p>
                    )}
                  </div>
                </div>

                {/* Row 4: Message */}
                <div>
                  <label htmlFor="message" className="text-sm font-bold uppercase tracking-[0.25em] text-[#4c4c4c]/60">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    placeholder="Tell us about your business, project goals, timeline and any specific requirements..."
                    {...register("message")}
                    className="mt-4 w-full resize-none border-0 border-b-2 border-[#4c4c4c]/10 bg-transparent pb-4 text-lg leading-8 outline-none transition-all duration-300 focus:border-[#ffcc00]"
                  />
                  {errors.message && (
                    <p className="mt-2 text-xs font-semibold text-red-500">{errors.message.message}</p>
                  )}
                </div>

                {/* Submission Footer */}
                <div className="flex flex-col gap-6 pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-md text-sm leading-7 text-[#4c4c4c]/60">
                    By submitting this form, you agree to be contacted regarding your enquiry. We respect your privacy and never share your information.
                  </p>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#ffcc00] px-8 py-5 font-bold text-[#4c4c4c] transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_20px_40px_rgba(255,204,0,.35)] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        Submitting...
                        <Loader2 size={18} className="animate-spin" />
                      </>
                    ) : (
                      <>
                        Send Enquiry
                        <Send size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
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