"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Github, ArrowRight } from "lucide-react";
import { personalInfo } from "@/data/personal";

export function ContactCompact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 lg:py-28 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16 mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white text-center">
            Let&apos;s Collaborate
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto text-center">
            Ready to start your project? Our team is here to help
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-10 lg:mb-12">
            <motion.a
              href={`mailto:${personalInfo.email}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm dark:bg-gray-800/50 rounded-2xl p-6 sm:p-8 text-center hover:bg-white/20 dark:hover:bg-gray-800/70 hover:scale-105 transition-all border border-white/10"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Email</h3>
              <p className="text-sm text-gray-300 break-all">
                {personalInfo.email}
              </p>
            </motion.a>

            <motion.a
              href={`https://wa.me/${personalInfo.phone.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/10 backdrop-blur-sm dark:bg-gray-800/50 rounded-2xl p-6 sm:p-8 text-center hover:bg-white/20 dark:hover:bg-gray-800/70 hover:scale-105 transition-all border border-white/10"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">WhatsApp</h3>
              <p className="text-sm text-gray-300">
                {personalInfo.phone}
              </p>
            </motion.a>

            <motion.a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-sm dark:bg-gray-800/50 rounded-2xl p-6 sm:p-8 text-center hover:bg-white/20 dark:hover:bg-gray-800/70 hover:scale-105 transition-all border border-white/10"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Github className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">GitHub</h3>
              <p className="text-sm text-gray-300">
                View Repositories
              </p>
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <a
              href={`mailto:${personalInfo.email}?subject=Project Inquiry`}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 hover:from-blue-700 hover:via-purple-700 hover:to-blue-700 text-white font-bold rounded-full shadow-lg hover:shadow-2xl transition-all hover:scale-105 text-base sm:text-lg animate-gradient bg-[length:200%_100%]"
            >
              Start a Conversation
              <ArrowRight className="h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
