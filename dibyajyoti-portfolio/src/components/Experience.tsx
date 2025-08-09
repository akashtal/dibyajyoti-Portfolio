"use client";
import { Section, SectionHeading } from "@/components/Section";
import { EXPERIENCES } from "@/lib/constants";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <Section id="experience" className="py-20">
      <SectionHeading title="Work Experience" />
      <div className="relative pl-6 sm:pl-10">
        <div className="absolute left-2 sm:left-3 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800" />
        <ul className="space-y-10">
          {EXPERIENCES.map((exp, idx) => (
            <li key={exp.company} className="relative">
              <div className="absolute -left-0.5 sm:-left-1 top-2 size-3 sm:size-3.5 rounded-full bg-[#3B82F6] ring-4 ring-white dark:ring-slate-900" />
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-white/60 dark:bg-slate-900/60 backdrop-blur border border-slate-200 dark:border-slate-800 rounded-lg p-5"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div className="text-lg font-semibold text-slate-900 dark:text-white">{exp.role} — {exp.company}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">{exp.period}</div>
                </div>
                <ul className="mt-3 list-disc pl-4 text-slate-700 dark:text-slate-300 space-y-1">
                  {exp.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}