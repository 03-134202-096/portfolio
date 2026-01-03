"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Code2, GraduationCap, Cloud } from "lucide-react";

const skillCategories = [
  {
    name: "AI & Machine Learning",
    icon: Brain,
    color: "from-blue-500 to-cyan-500",
    skills: ["Deep Learning", "Computer Vision", "NLP", "Transformers", "GAT", "ML Frameworks"]
  },
  {
    name: "Development",
    icon: Code2,
    color: "from-purple-500 to-pink-500",
    skills: ["Next.js", "React", "Nest.js", "TypeScript", "Python", "Full-Stack"]
  },
  {
    name: "Academic",
    icon: GraduationCap,
    color: "from-green-500 to-emerald-500",
    skills: ["Research Writing", "LaTeX", "Publishing", "Literature Review", "Citation Management"]
  },
  {
    name: "Data & Cloud",
    icon: Cloud,
    color: "from-orange-500 to-red-500",
    skills: ["Data Science", "AWS", "Visualization", "Analytics", "Big Data"]
  }
];

export function SkillsCompact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 lg:py-28 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16 mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent text-center">
            Expertise
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-center">
            Comprehensive skill set across multiple domains
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-xl hover:shadow-2xl transition-all"
              >
                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4`}>
                  <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
