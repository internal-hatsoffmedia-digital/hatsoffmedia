"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services does Hatsoff Media provide?",
    answer:
      "Hatsoff Media offers branding, logo design, website design & development, social media management, video production, performance marketing, AI creative content, graphic design, advertising campaigns, and complete digital branding solutions for businesses of all sizes.",
  },
  {
    question: "How do I choose the right package?",
    answer:
      "Our packages are designed based on your business stage. Whether you're starting a new business, improving your social media presence, generating leads, or looking for complete brand support, we'll recommend the most suitable package after understanding your goals.",
  },
  {
    question: "Can I customize my package?",
    answer:
      "Absolutely. Every business has unique requirements. We can customize any package by adding or removing services to create a solution that aligns with your business objectives and budget.",
  },
  {
    question: "How long does a project usually take?",
    answer:
      "Project timelines depend on the scope of work. Branding projects generally take 1–2 weeks, websites may take 2–6 weeks, while ongoing services like social media management and digital marketing operate on monthly plans.",
  },
  {
    question: "Do you work with businesses outside Chennai?",
    answer:
      "Yes. We work with clients across India and internationally through online meetings, phone calls, email, and collaborative project management tools.",
  },
  {
    question: "How soon will I receive a response after submitting the enquiry form?",
    answer:
      "Our team typically responds within one business day. For urgent enquiries, you can also contact us directly by phone or WhatsApp for faster assistance.",
  },
];

export default function ContactFAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <span
            className="
            inline-flex
            rounded-full
            border
            border-[#ffcc00]/30
            bg-[#fceb77]/40
            px-5
            py-2
            text-xs
            font-bold
            uppercase
            tracking-[0.35em]
            text-[#4c4c4c]
            "
          >
            Frequently Asked Questions
          </span>

          <h2
            className="
            mt-6
            text-5xl
            font-black
            leading-tight
            tracking-[-0.05em]
            text-[#4c4c4c]
            md:text-6xl
            "
          >
            Questions?
            <br />
            <span className="text-[#ffcc00]">
              We've Got Answers.
            </span>
          </h2>

          <p
            className="
            mx-auto
            mt-6
            max-w-2xl
            text-lg
            leading-8
            text-[#4c4c4c]/70
            "
          >
            Here are answers to the most common questions about our
            services, packages, and project process.
          </p>
        </motion.div>

        {/* FAQ */}

        <div className="mt-16 space-y-5">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              layout
              className="
                overflow-hidden
                rounded-[28px]
                border
                border-[#4c4c4c]/10
                bg-white
                shadow-sm
              "
            >
              <button
                onClick={() =>
                  setActiveIndex(
                    activeIndex === index ? null : index
                  )
                }
                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  p-8
                  text-left
                "
              >
                <h3 className="text-xl font-bold text-[#4c4c4c]">
                  {faq.question}
                </h3>

                <motion.div
                  animate={{
                    rotate: activeIndex === index ? 180 : 0,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    bg-[#fceb77]
                  "
                >
                  <ChevronDown className="text-[#4c4c4c]" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.35,
                    }}
                  >
                    <div className="px-8 pb-8">
                      <p className="leading-8 text-[#4c4c4c]/70">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}