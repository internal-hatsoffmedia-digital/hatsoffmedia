"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, MapPin } from "lucide-react";

const positions = [
  {
    id: "social-media-manager",
    title: "Social Media Manager",
    department: "Marketing",
    location: "On-site / Hybrid",
    type: "Full-time",
  },
  {
    id: "senior-video-editor",
    title: "Senior Video Editor",
    department: "Production",
    location: "On-site",
    type: "Full-time",
  },
  {
    id: "ui-ux-designer",
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
  },
  {
    id: "performance-marketer",
    title: "Performance Marketer",
    department: "Marketing",
    location: "On-site / Hybrid",
    type: "Full-time",
  },
];

export default function OpenPositions() {
  return (
    <section id="open-positions" className="bg-white py-20 lg:py-32">
      <div className="mx-auto max-w-[1000px] px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-black uppercase tracking-tight text-black sm:text-5xl md:text-6xl">
            Open <span className="text-[#FFCC00]">Positions.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-neutral-600">
            Ready to make an impact? Explore our current openings and find your fit at Hatsoff Media.
          </p>
        </motion.div>

        <div className="mt-16 flex flex-col gap-4">
          {positions.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link
                href={{ pathname: "/careers/apply", query: { position: job.title } }}
                className="group flex flex-col justify-between gap-6 rounded-[24px] border border-neutral-200 bg-white p-8 transition-all hover:border-[#FFCC00] hover:shadow-xl sm:flex-row sm:items-center"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-neutral-600">
                      {job.department}
                    </span>
                    <span className="rounded-full bg-[#FFCC00]/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-black">
                      {job.type}
                    </span>
                  </div>

                  <h3 className="mt-4 text-2xl font-bold text-black transition-colors group-hover:text-[#ffcc00]">
                    {job.title}
                  </h3>

                  <div className="mt-3 flex items-center gap-4 text-sm font-medium text-neutral-500">
                    <div className="flex items-center gap-1.5">
                      <MapPin size={16} />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Briefcase size={16} />
                      <span>Experience Required</span>
                    </div>
                  </div>
                </div>

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-black text-[#FFCC00] transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14">
                  <ArrowRight size={24} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.6 }}
           className="mt-12 text-center"
        >
            <p className="text-neutral-500 font-medium">Don't see a perfect match? Send your portfolio to <a href="mailto:careers@hatsoffmedia.com" className="text-black underline font-bold hover:text-[#ffcc00]">careers@hatsoffmedia.com</a></p>
        </motion.div>
      </div>
    </section>
  );
}
