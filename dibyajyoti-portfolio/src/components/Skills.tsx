"use client";
import { Section, SectionHeading } from "@/components/Section";
import { SKILLS, type Skill } from "@/lib/constants";
import { motion } from "framer-motion";

const categories: Skill["category"][] = [
  "Languages",
  "Frameworks",
  "Databases",
  "Tools & Tech",
  "Others",
];

export default function Skills() {
  return (
    <Section id="skills" className="py-20">
      <SectionHeading title="Skills" subtitle="A snapshot of my toolkit" />
      <div className="grid gap-8">
        {categories.map((cat) => (
          <div key={cat}>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">{cat}</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {SKILLS.filter((s) => s.category === cat).map((skill) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5 }}
                  className="p-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-slate-800 dark:text-slate-200">{skill.name}</span>
                    <span className="text-sm text-slate-600 dark:text-slate-400">{skill.levelPercent}%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.levelPercent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      className="h-full rounded-full bg-[#3B82F6]"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}