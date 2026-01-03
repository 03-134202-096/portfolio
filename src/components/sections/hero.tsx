"use client";

import { motion } from "framer-motion";
import { Github, Mail, Phone, MapPin, Award, ArrowRight } from "lucide-react";
import { personalInfo } from "@/data/personal";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Profile Picture */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center lg:justify-center order-1 lg:order-1"
            >
              <div className="relative">
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-50"
                />
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl">
                  <Image
                    src="/images/ProfilePicture.webp"
                    alt={personalInfo.name}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
                  />
                </div>
              </div>
            </motion.div>

            {/* Right: Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left order-2 lg:order-2 space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-4"
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent leading-tight">
                  {personalInfo.name}
                </h1>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-700 dark:text-gray-300">
                  {personalInfo.title}
                </h2>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4"
              >
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 shadow-lg">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">4</div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 dark:text-gray-400">Publications</div>
                </div>
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 shadow-lg">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-600 dark:text-purple-400">50+</div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 dark:text-gray-400">Services</div>
                </div>
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 shadow-lg">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-pink-600 dark:text-pink-400">AI/ML</div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-gray-600 dark:text-gray-400">Expert</div>
                </div>
              </motion.div>

              {/* Quick Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
              >
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
                >
                  <Mail className="h-5 w-5" />
                  Get In Touch
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 border border-gray-200 dark:border-gray-700"
                >
                  <Award className="h-5 w-5" />
                  Explore Services
                  <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>

              {/* Contact Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start pt-2"
              >
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-gradient-to-br from-gray-700 to-gray-900 hover:from-gray-800 hover:to-black dark:from-gray-600 dark:to-gray-800 dark:hover:from-gray-500 dark:hover:to-gray-700 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="group p-3 bg-gradient-to-br from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 dark:from-blue-600 dark:to-blue-800 dark:hover:from-blue-500 dark:hover:to-blue-700 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all hover:scale-110"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </a>
                <a
                  href={`https://wa.me/${personalInfo.phone.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-gradient-to-br from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 dark:from-green-600 dark:to-green-800 dark:hover:from-green-500 dark:hover:to-green-700 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all hover:scale-110"
                  aria-label="WhatsApp"
                >
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </a>
                <div className="p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg flex items-center gap-2">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-red-600 dark:text-red-400" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 hidden sm:inline">{personalInfo.location}</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-gray-600 dark:bg-gray-400 rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
