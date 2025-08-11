"use client";
import { Section, SectionHeading } from "@/components/Section";
import { SITE } from "@/lib/constants";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import {
  FaCode,
  FaLightbulb,
  FaRocket,
  FaHeart,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUserTie
} from "react-icons/fa";
import {
  Target,
  Zap,
  Users,
  Award,
  Globe
} from "lucide-react";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  const stats = [
    { icon: FaCode, label: "2+ Years", value: "Experience" },
    { icon: FaRocket, label: "10+", value: "Projects" },
    { icon: FaLightbulb, label: "15+", value: "Technologies" },
    { icon: FaHeart, label: "100%", value: "Passion" },
  ];

  const highlights = [
    {
      icon: Target,
      title: "Problem Solver",
      description: "I love tackling complex challenges and finding elegant solutions."
    },
    {
      icon: Zap,
      title: "Fast Learner",
      description: "Quick to adapt to new technologies and frameworks."
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Excellent communication and collaboration skills."
    },
    {
      icon: Award,
      title: "Quality Focused",
      description: "Writing clean, maintainable, and scalable code."
    },
  ];

  return (
    <Section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-r from-pink-400 to-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="About Me" />

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-16">
          {/* Left Column - Image and Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Fixed Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative group"
            >
              <div className="relative w-80 h-80 mx-auto rounded-3xl overflow-hidden ring-4 ring-slate-200 dark:ring-slate-800 shadow-2xl">
                <Image
                  src="/photo.jpg"
                  alt="Dibyajyoti Talukdar"
                  className="w-full h-full object-cover"
                  fill // If using Next.js Image component
                  sizes="320px"
                />
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg"
              >
                <FaUserTie className="inline mr-2" />
                Full-Stack Developer
              </motion.div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="text-center p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 hover-lift"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-blue-500" />
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">{stat.label}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">{stat.value}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Main Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Hello! I'm <span className="gradient-text">Dibyajyoti</span> 👋
              </h3>

              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                {SITE.description}
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
  I'm passionate about creating innovative solutions that make a difference.
  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
  or sharing knowledge with the developer community.
</p>

            </motion.div>

            {/* Personal Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-4"
            >
              <h4 className="text-xl font-semibold text-slate-900 dark:text-white">Personal Information</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                  <FaMapMarkerAlt className="w-5 h-5 text-blue-500" />
                  <div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Location</div>
                    <div className="font-medium text-slate-900 dark:text-white">Guwahati, Assam, India</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                  <FaCalendarAlt className="w-5 h-5 text-purple-500" />
                  <div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Experience</div>
                    <div className="font-medium text-slate-900 dark:text-white">2+ Years</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                  <FaGraduationCap className="w-5 h-5 text-green-500" />
                  <div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Education</div>
                    <div className="font-medium text-slate-900 dark:text-white">Bachelor of Arts</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/50">
                  <Globe className="w-5 h-5 text-orange-500" />
                  <div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Languages</div>
                    <div className="font-medium text-slate-900 dark:text-white">English, Hindi, Assamese, Bengali</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="space-y-4"
            >
              <h4 className="text-xl font-semibold text-slate-900 dark:text-white">What I Bring</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 hover-lift"
                  >
                    <highlight.icon className="w-6 h-6 mb-3 text-blue-500" />
                    <h5 className="font-semibold text-slate-900 dark:text-white mb-2">{highlight.title}</h5>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{highlight.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
