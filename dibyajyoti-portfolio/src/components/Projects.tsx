"use client";
import { Section, SectionHeading } from "@/components/Section";
import { PROJECTS } from "@/lib/constants";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <Section id="projects" className="py-20">
      <SectionHeading title="Projects" subtitle="Selected work" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((p, idx) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="group rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 backdrop-blur"
          >
            <div className="relative h-44 overflow-hidden">
              <Image src={p.image || "/placeholder.svg"} alt={p.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-slate-900 dark:text-white">{p.title}</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                {p.tech.map((t) => (
                  <span key={t} className="px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">{t}</span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3">
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer">
                    <Button variant="primary" size="sm">Live</Button>
                  </a>
                )}
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer">
                    <Button variant="ghost" size="sm">GitHub</Button>
                  </a>
                )}
                <Button variant="secondary" size="sm" onClick={() => setOpenIdx(idx)}>Preview</Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {openIdx !== null && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/60 flex items-center justify-center p-4"
            onClick={() => setOpenIdx(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 sm:h-96">
                <Image src={PROJECTS[openIdx].image || "/placeholder.svg"} alt={PROJECTS[openIdx].title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-slate-900 dark:text-white">{PROJECTS[openIdx].title}</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{PROJECTS[openIdx].description}</p>
                <div className="mt-4 flex items-center gap-3">
                  <Button variant="ghost" onClick={() => setOpenIdx(null)}>Close</Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}