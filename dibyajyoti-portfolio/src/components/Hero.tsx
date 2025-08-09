"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { SITE } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

function useTypewriter(text: string, speedMs = 50) {
  const [display, setDisplay] = useState("");
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      setDisplay(text.slice(0, i + 1));
      i += 1;
      if (i >= text.length) clearInterval(id);
    }, speedMs);
    return () => clearInterval(id);
  }, [text, speedMs]);
  return display;
}

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 80]);
  const typed = useTypewriter(SITE.tagline, 35);

  return (
    <section id="hero" className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="pointer-events-none absolute -inset-[10%] opacity-70">
          <div className="animate-[pulse_10s_ease-in-out_infinite] absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.35),transparent_45%),radial-gradient(ellipse_at_bottom_right,rgba(251,191,36,0.25),transparent_45%)]" />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-white/60 dark:to-slate-900/60" />
      </div>

      <motion.div style={{ y }} className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white"
        >
          {SITE.name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 text-lg sm:text-xl text-slate-700 dark:text-slate-300"
        >
          {SITE.role}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-xl sm:text-2xl text-slate-800 dark:text-slate-200 min-h-[2.5rem]"
        >
          {typed}
          <span className="inline-block w-[10px] h-[1.25em] -mb-1 ml-0.5 bg-slate-800 dark:bg-slate-200 animate-pulse" />
        </motion.p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <Link href="#projects">
            <Button size="lg">View Projects</Button>
          </Link>
          <a href={SITE.resumeUrl} download>
            <Button size="lg" variant="secondary">Download Resume</Button>
          </a>
        </div>
      </motion.div>
    </section>
  );
}