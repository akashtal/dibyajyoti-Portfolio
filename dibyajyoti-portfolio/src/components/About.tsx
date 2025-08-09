"use client";
import Image from "next/image";
import { Section, SectionHeading } from "@/components/Section";
import { SITE } from "@/lib/constants";
import { motion } from "framer-motion";

export default function About() {
  return (
    <Section id="about" className="py-20">
      <SectionHeading title="About Me" />
      <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8 items-start">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative w-44 h-44 md:w-56 md:h-56 rounded-2xl overflow-hidden ring-2 ring-slate-200 dark:ring-slate-800"
        >
          <Image
            src="/profile.jpg"
            alt="Portrait"
            fill
            className="object-cover"
          />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-slate-700 dark:text-slate-300 leading-7"
        >
          {SITE.description}
        </motion.p>
      </div>
    </Section>
  );
}