"use client";
import { Section, SectionHeading } from "@/components/Section";
import { EXPERIENCES } from "@/lib/constants";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaBriefcase,
  FaRocket,
} from "react-icons/fa";
import {
  Building2,
  Calendar,
  Code2,
  Users,
  TrendingUp,
  Zap
} from "lucide-react";

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <Section id="experience" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Professional Journey" subtitle="My work experience and achievements" />

        <div ref={ref} className="mt-16">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-orange-500 rounded-full" />

            <div className="space-y-12">
              {EXPERIENCES.map((exp, idx) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: idx * 0.2 }}
                  className="relative flex items-start gap-8"
                >
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-lg">
                      <FaBriefcase className="w-6 h-6" />
                    </div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 animate-ping opacity-20" />
                  </div>

                  {/* Content Card */}
                  <motion.div
                    key={exp.role}

                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: idx * 0.2 + 0.2 }}
                    className="flex-1 group"
                  >
                    <div className="relative p-8 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 hover-lift hover-glow">
                      {/* Header */}
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
                        <div className="space-y-2">
                          <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {exp.role}
                          </h3>
                          <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400">
                            <div className="flex items-center gap-2">
                              <Building2 className="w-4 h-4" />
                              <span className="font-medium">{exp.company}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span>{exp.period}</span>
                            </div>
                          </div>
                        </div>

                        {/* Status Badge */}
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 text-green-700 dark:text-green-400 font-medium">
                          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                          <span>Current</span>
                        </div>
                      </div>

                      {/* Experience Points */}
                      <div className="space-y-4">
                        {exp.points.map((point, pointIdx) => (
                          <motion.div
                            key={pointIdx}
                            initial={{ opacity: 0, x: 20 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: idx * 0.2 + 0.4 + pointIdx * 0.1 }}
                            className="flex items-start gap-3"
                          >
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mt-0.5">
                              <FaRocket className="w-3 h-3 text-white" />
                            </div>
                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{point}</p>
                          </motion.div>
                        ))}
                      </div>

                      {/* Skills Used */}
                      <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                        <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                          <Code2 className="w-4 h-4" />
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {["Next.js", "React", "Node.js", "MongoDB", "TypeScript", "Tailwind CSS"].map((tech, techIdx) => (
                            <motion.span
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={inView ? { opacity: 1, scale: 1 } : {}}
                              transition={{ duration: 0.3, delay: idx * 0.2 + 0.6 + techIdx * 0.05 }}
                              className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Hover Effect */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience Summary */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-20 p-8 rounded-3xl bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border border-orange-200/50 dark:border-orange-700/50"
          >
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Key Achievements & Growth
              </h3>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
  Throughout my professional journey, I've consistently delivered high-quality solutions,
  collaborated with cross-functional teams, and contributed to the success of various projects.
</p>

              <div className="flex justify-center gap-8 pt-4">
                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <TrendingUp className="w-4 h-4 text-green-500" />
                  <span>Career Growth</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <Users className="w-4 h-4 text-blue-500" />
                  <span>Team Collaboration</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <Zap className="w-4 h-4 text-yellow-500" />
                  <span>Technical Excellence</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}