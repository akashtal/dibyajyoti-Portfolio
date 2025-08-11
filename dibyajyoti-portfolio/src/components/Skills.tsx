"use client";
import { Section, SectionHeading } from "@/components/Section";
import { SKILLS, type Skill } from "@/lib/constants";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaCode,
  FaStar,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiTailwindcss,
  SiWebrtc,
  SiBootstrap,
} from "react-icons/si";
import React from "react";
import {
  Code2,
  Database,
  Wrench,
  Layers,
  Zap,
  Target,
  TrendingUp,
  Settings,
  Palette,
  Rocket,
} from "lucide-react";

const categories: Skill["category"][] = [
  "Languages",
  "Frameworks & Libraries",
  "Databases",
  "Tools & Tech",
  "Others",
];

const categoryIcons = {
  "Languages": Code2,
  "Frameworks & Libraries": Layers,
  "Databases": Database,
  "Tools & Tech": Wrench,
  "Others": Settings,
};

const skillIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "JavaScript": FaJs,
  "TypeScript": SiTypescript,
  "HTML5": FaHtml5,
  "CSS3": FaCss3Alt,
  "Next.js": SiNextdotjs,
  "React.js": FaReact,
  "Node.js": FaNodeJs,
  "Express.js": SiExpress,
  "MongoDB": SiMongodb,
  "MySQL": SiMysql,
  "PostgreSQL": SiPostgresql,
  "Tailwind CSS": SiTailwindcss,
  "Git & GitHub": FaGithub,
  "REST API": Code2,
  "Auth.Js": Code2,
  "JWT Auth": FaCode,
  "Bootstrap": SiBootstrap,
  "WebSockets": SiWebrtc,
  "Frontend design": Palette,
  "API integration": Code2,
  "Deployment (Vercel)": Rocket,
};

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <Section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Skills & Expertise" subtitle="Technologies I work with" />

        <div ref={ref} className="mt-16 space-y-12">
          {categories.map((cat, catIndex) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: catIndex * 0.2 }}
              className="space-y-6"
            >
              {/* Category Header */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: catIndex * 0.2 + 0.2 }}
                className="flex items-center gap-4"
              >
                <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                  {React.createElement(categoryIcons[cat], { size: 24 })}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{cat}</h3>
              </motion.div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {SKILLS.filter((s) => s.category === cat).map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: catIndex * 0.2 + 0.4 + skillIndex * 0.1 }}
                    className="group relative p-6 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 hover-lift hover-glow"
                  >
                    {/* Skill Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50">
                          {React.createElement(skillIcons[skill.name] || FaCode, {
                            className: "w-5 h-5 text-blue-600 dark:text-blue-400"
                          })}
                        </div>
                        <span className="font-semibold text-slate-900 dark:text-white">{skill.name}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(skill.levelPercent / 20)
                                ? "text-yellow-400"
                                : "text-slate-300 dark:text-slate-600"
                              }`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600 dark:text-slate-400">Proficiency</span>
                        <span className="font-medium text-slate-900 dark:text-white">{skill.levelPercent}%</span>
                      </div>
                      <div className="h-3 w-full rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.levelPercent}%` } : {}}
                          transition={{ duration: 1, delay: catIndex * 0.2 + 0.6 + skillIndex * 0.1 }}
                          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600 relative"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                        </motion.div>
                      </div>
                    </div>

                    {/* Skill Level Indicator */}
                    <div className="mt-4 flex items-center gap-2">
                      <div className="flex-1 h-1 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                          style={{ width: `${skill.levelPercent}%` }}
                        />
                      </div>
                      <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
                        {skill.levelPercent >= 90 ? "Expert" :
                          skill.levelPercent >= 80 ? "Advanced" :
                            skill.levelPercent >= 70 ? "Intermediate" : "Beginner"}
                      </span>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-20 p-8 rounded-3xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200/50 dark:border-blue-700/50"
        >
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Always Learning & Growing
            </h3>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
  I'm constantly exploring new technologies and frameworks to stay current with industry trends. 
  My passion for learning drives me to master new skills and deliver cutting-edge solutions.
</p>

            <div className="flex justify-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                <TrendingUp className="w-4 h-4 text-green-500" />
                <span>Continuous Learning</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                <Target className="w-4 h-4 text-blue-500" />
                <span>Problem Solving</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                <Zap className="w-4 h-4 text-yellow-500" />
                <span>Fast Adaptation</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}