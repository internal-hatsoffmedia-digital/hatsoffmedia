"use client";

import { motion } from "framer-motion";
import PortfolioCard from "./PortfolioCard";
import { portfolioData } from "./portfolioData";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function PortfolioGrid() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className="grid gap-8 md:grid-cols-2"
    >
      {portfolioData.map((project) => (
        <motion.div
          key={project.id}
          variants={itemVariants}
        >
          <PortfolioCard project={project} />
        </motion.div>
      ))}
    </motion.div>
  );
}