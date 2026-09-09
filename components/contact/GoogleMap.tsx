"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Clock } from "lucide-react";
import Link from "next/link";

export default function GoogleMap() {
  return (
    <section id="map" className="bg-[#fafafa] py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
          className="mb-14 text-center"
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
            OUR OFFICE
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
            Visit
            <span className="text-[#ffcc00]"> Hatsoff.</span>
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
            We'd love to meet you in person. Visit our office for project
            discussions, strategy meetings, or creative consultations.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[1.4fr_.6fr]">
          {/* Google Map */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            className="
              overflow-hidden
              rounded-[36px]
              border
              border-[#4c4c4c]/10
              shadow-xl
            "
          >
            <iframe
              title="Hatsoff Media Office"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124351.17827658671!2d80.02541816249999!3d13.100813300000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ae7b21b4d9%3A0x456ba906cff36e4b!2sHatsoff%20Media%20Pvt.Ltd!5e0!3m2!1sen!2sin!4v1786013693490!5m2!1sen!2sin"
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              className="h-[600px] w-full border-0"
            />
          </motion.div>

          {/* Office Info */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            className="space-y-6"
          >
            {/* Address */}

            <div
              className="
                rounded-[30px]
                border
                border-[#4c4c4c]/10
                bg-white
                p-8
              "
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ffcc00]">
                <MapPin className="text-[#4c4c4c]" size={28} />
              </div>

              <h3 className="mt-8 text-2xl font-black text-[#4c4c4c]">
                Office Address
              </h3>

              <p className="mt-5 leading-8 text-[#4c4c4c]/70">
                Hatsoff Media Pvt Ltd
                <br />
                Chennai,
                <br />
                Tamil Nadu,
                <br />
                India.
              </p>
            </div>

            {/* Office Hours */}

            <div
              className="
                rounded-[30px]
                border
                border-[#4c4c4c]/10
                bg-white
                p-8
              "
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fceb77]">
                <Clock className="text-[#4c4c4c]" size={28} />
              </div>

              <h3 className="mt-8 text-2xl font-black text-[#4c4c4c]">
                Working Hours
              </h3>

              <div className="mt-6 space-y-3">
                <div className="flex justify-between">
                  <span>Monday - Saturday</span>
                  <span className="font-semibold">09:30 - 18:30</span>
                </div>

                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-semibold">Closed</span>
                </div>
              </div>
            </div>

            {/* Direction */}

            <Link
              href="https://maps.google.com"
              target="_blank"
              className="
                group
                flex
                items-center
                justify-center
                gap-3
                rounded-[30px]
                bg-[#ffcc00]
                p-6
                font-bold
                text-[#4c4c4c]
                transition-all
                duration-300
                hover:scale-[1.03]
              "
            >
              <Navigation size={22} />
              Get Directions
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
