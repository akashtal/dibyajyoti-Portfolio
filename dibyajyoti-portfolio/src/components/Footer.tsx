import { SITE } from "@/lib/constants";
import { FiGithub, FiLinkedin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/60 dark:border-slate-800/60 py-8 mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600 dark:text-slate-400">
        <div className="flex items-center gap-4">
          <a href={SITE.github} target="_blank" rel="noreferrer" className="hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-2">
            <FiGithub /> GitHub
          </a>
          <a href={SITE.linkedin} target="_blank" rel="noreferrer" className="hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-2">
            <FiLinkedin /> LinkedIn
          </a>
        </div>
        <p className="text-center sm:text-right">© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}