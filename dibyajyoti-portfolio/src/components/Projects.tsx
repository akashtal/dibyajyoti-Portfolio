"use client";
import { Section, SectionHeading } from "@/components/Section";
import { PROJECTS } from "@/lib/constants";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import React from "react";
import { Button } from "@/components/ui/button";
import { useInView } from "react-intersection-observer";
import { 
  FaEye, 
  FaRocket,
  FaWordpress,
  FaShoppingCart,
  FaChartLine,
  FaSearch,
  FaEyeSlash
} from "react-icons/fa";
import { 
  ExternalLink, 
  Github, 
  Eye, 
  Code2,
  Rocket,
  Lightbulb,
  Star,
  Zap,
  ChevronDown,
  ChevronUp
} from "lucide-react";

// Additional projects data
const ADDITIONAL_PROJECTS = [
  {
    title: "E-commerce WordPress Store",
    description: "A fully functional e-commerce platform built with WordPress and WooCommerce, featuring custom themes, payment gateway integration, inventory management, product catalog, user accounts, and responsive design optimized for mobile shopping.",
    tech: ["WordPress", "WooCommerce", "PHP", "MySQL", "Custom CSS", "JavaScript", "PayPal API"],
    image: "/e1.jpeg",
    live: "#",
    github: "#",
    category: "WordPress Development",
    icon: FaShoppingCart,
  },
  {
    title: "Creative Portfolio WordPress",
    description: "A stunning portfolio website built with WordPress featuring custom post types, advanced custom fields, responsive design, SEO optimization, contact forms, and gallery showcase for creative professionals and agencies.",
    tech: ["WordPress", "PHP", "Advanced Custom Fields", "Custom CSS", "JavaScript", "SEO", "Contact Form 7"],
    image: "/p1.jpeg",
    live: "#",
    github: "#",
    category: "WordPress Development",
    icon: FaWordpress,
  },
  {
    title: "Company Data Scraper",
    description: "An automated web scraping solution built with Next.js that extracts company details, contact information, market data, and business insights from multiple sources with real-time data processing and export capabilities.",
    tech: ["Next.js", "Puppeteer", "Cheerio", "Node.js", "MongoDB", "TypeScript", "CSV Export"],
    image: "/web-scap.png",
    live: "#",
    github: "#",
    category: "Data Extraction",
    icon: FaSearch,
  },
  {
    title: "Analytics Dashboard Pro",
    description: "An interactive data visualization dashboard featuring dynamic charts, real-time data updates, filtering capabilities, comprehensive business intelligence visualization with line charts, bar charts, pie charts, and custom metrics.",
    tech: ["Next.js", "D3.js", "Recharts", "Shadcn UI", "TypeScript", "Tailwind CSS", "Chart.js"],
    image: "/data-v.png",
    live: "#",
    github: "#",
    category: "Data Visualization",
    icon: FaChartLine,
  },
  {
    title: "AI/ML Company Official Website",
    description: "A modern and professional corporate website for an AI/ML company featuring responsive design, interactive elements, service showcases, team profiles, and contact integration. Built with clean HTML, CSS, and JavaScript for optimal performance and user experience.",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design", "SEO"],
    image: "/goti.png",
    live: "#",
    github: "#",
    category: "Corporate Website",
    icon: FaRocket, // Changed from FaChartLine since it's a company website, not data visualization
  },
];

export default function Projects() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [showMoreProjects, setShowMoreProjects] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const toggleMoreProjects = () => {
    setShowMoreProjects(!showMoreProjects);
  };

  const allProjects = showMoreProjects ? [...PROJECTS, ...ADDITIONAL_PROJECTS] : PROJECTS;

  return (
    <Section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Featured Projects" subtitle="Showcasing my best work" />
        
        <div ref={ref} className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, idx) => {
              const ProjectIcon = (project).icon;
              
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: (idx % 8) * 0.1 }}
                  className="group relative h-full"
                >
                  <div className="relative overflow-hidden rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 hover-lift hover-glow h-full flex flex-col">
                    {/* Project Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image 
                        src={project.image || "/placeholder.svg"} 
                        alt={project.title} 
                        fill 
                        className="object-cover transition-transform duration-700 group-hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Category Badge for All Projects */}
                      {project.category && (
  <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-sm font-medium">
    {ProjectIcon && <ProjectIcon className="w-4 h-4" />}
    <span>{project.category}</span>
  </div>
)}

                      
                      {/* Overlay Icons */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex gap-4">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
                            onClick={() => setOpenIdx(idx)}
                          >
                            <Eye className="w-5 h-5" />
                          </motion.button>
                          {project.live && (
                            <motion.a
                              href={project.live}
                              target="_blank"
                              rel="noreferrer"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
                            >
                              <ExternalLink className="w-5 h-5" />
                            </motion.a>
                          )}
                          {project.github && (
                            <motion.a
                              href={project.github}
                              target="_blank"
                              rel="noreferrer"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="p-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
                            >
                              <Github className="w-5 h-5" />
                            </motion.a>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-1 text-yellow-500 flex-shrink-0 ml-2">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="text-sm font-medium">Featured</span>
                        </div>
                      </div>
                      
                      <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed flex-1">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                          <Code2 className="w-4 h-4" />
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, techIdx) => (
                            <motion.span
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={inView ? { opacity: 1, scale: 1 } : {}}
                              transition={{ duration: 0.3, delay: idx * 0.1 + 0.4 + techIdx * 0.02 }}
                              className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* See More Projects Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <button
              onClick={toggleMoreProjects}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              {showMoreProjects ? (
                <>
                  <FaEyeSlash className="w-5 h-5" />
                  <span>Show Less Projects</span>
                  <ChevronUp className="w-5 h-5 group-hover:translate-y-[-2px] transition-transform" />
                </>
              ) : (
                <>
                  <FaEye className="w-5 h-5" />
                  <span>See More Projects</span>
                  <ChevronDown className="w-5 h-5 group-hover:translate-y-[2px] transition-transform" />
                </>
              )}
            </button>
            
            {/* Project Counter */}
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
              Showing <span className="font-semibold text-purple-600 dark:text-purple-400">{allProjects.length}</span> of <span className="font-semibold">{PROJECTS.length + ADDITIONAL_PROJECTS.length}</span> projects
            </p>
          </motion.div>

          {/* Projects Summary */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-20 p-8 rounded-3xl bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200/50 dark:border-purple-700/50"
          >
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                {showMoreProjects ? "Complete Project Portfolio" : "More Projects Available!"}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                {showMoreProjects 
                  ? "This comprehensive collection showcases my diverse skills across different technologies and platforms, from modern web applications to WordPress development and data visualization."
                  : "I'm constantly working on new projects and improving existing ones. Each project represents a unique challenge and learning opportunity."
                }
              </p>
              <div className="flex justify-center gap-8 pt-4">
                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <Rocket className="w-4 h-4 text-purple-500" />
                  <span>Innovation</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <Lightbulb className="w-4 h-4 text-yellow-500" />
                  <span>Creativity</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <Zap className="w-4 h-4 text-blue-500" />
                  <span>Performance</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {openIdx !== null && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setOpenIdx(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 sm:h-96">
                <Image 
                  src={allProjects[openIdx].image || "/placeholder.svg"} 
                  alt={allProjects[openIdx].title} 
                  fill 
                  className="object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
{/* Category Badge in Modal */}
{allProjects[openIdx]?.category && (
  <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-2 rounded-full bg-black/50 backdrop-blur-sm text-white font-medium">
    {allProjects[openIdx]?.icon &&
      React.createElement(allProjects[openIdx].icon!, {
        className: "w-5 h-5",
      })}
    <span>{allProjects[openIdx].category}</span>
  </div>
)}

                
                <div className="absolute bottom-4 left-4 right-4">
                  <h2 className="text-2xl font-bold text-white mb-2">{allProjects[openIdx].title}</h2>
                  <p className="text-white/90">{allProjects[openIdx].description}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-6">
                  {allProjects[openIdx].tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <Button onClick={() => setOpenIdx(null)} variant="secondary">
                    Close
                  </Button>
                  {allProjects[openIdx].live && (
                    <a 
                      href={allProjects[openIdx].live} 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none h-10 px-4 py-2 bg-[#3B82F6] text-white hover:bg-[#2563eb] focus-visible:ring-[#3B82F6]"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Live
                    </a>
                  )}
                  {allProjects[openIdx].github && (
                    <a 
                      href={allProjects[openIdx].github} 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none h-10 px-4 py-2 bg-transparent border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100/60 dark:hover:bg-slate-800/60"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}