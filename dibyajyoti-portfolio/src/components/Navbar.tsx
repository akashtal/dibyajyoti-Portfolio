"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { FiSun, FiMoon, FiGithub, FiLinkedin } from "react-icons/fi";
import { SITE } from "@/lib/constants";

export default function Navbar() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = (mounted ? resolvedTheme : theme) === "dark";

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-900/60 border-b border-slate-200/60 dark:border-slate-800/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="#hero" className="font-semibold tracking-tight text-slate-900 dark:text-white">
          {SITE.name}
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700 dark:text-slate-300">
          <a href="#about" className="hover:text-slate-900 dark:hover:text-white transition-colors">About</a>
          <a href="#skills" className="hover:text-slate-900 dark:hover:text-white transition-colors">Skills</a>
          <a href="#experience" className="hover:text-slate-900 dark:hover:text-white transition-colors">Experience</a>
          <a href="#projects" className="hover:text-slate-900 dark:hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="hover:text-slate-900 dark:hover:text-white transition-colors">Contact</a>
          <a href={SITE.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-slate-900 dark:hover:text-white"><FiGithub size={18} /></a>
          <a href={SITE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-slate-900 dark:hover:text-white"><FiLinkedin size={18} /></a>
          <Button
            aria-label="Toggle dark mode"
            variant="ghost"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="ml-2"
          >
            {isDark ? <FiSun /> : <FiMoon />}
          </Button>
        </nav>
        <div className="md:hidden flex items-center gap-2">
          <Button
            aria-label="Toggle dark mode"
            variant="ghost"
            onClick={() => setTheme(isDark ? "light" : "dark")}
          >
            {isDark ? <FiSun /> : <FiMoon />}
          </Button>
        </div>
      </div>
    </header>
  );
}