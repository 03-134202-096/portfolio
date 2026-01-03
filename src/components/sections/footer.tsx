"use client";

import { motion } from "framer-motion";
import { Github, Mail, Heart } from "lucide-react";
import { personalInfo } from "@/data/personal";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-8 lg:mb-12">
          {/* About */}
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {personalInfo.name}
            </h3>
            <p className="text-gray-400 mb-4 text-sm sm:text-base leading-relaxed">
              Research Scientist & Full-Stack Developer specializing in AI/ML, Academic Support, and Technical Solutions.
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 bg-gray-800 hover:bg-purple-600 rounded-lg transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <a href="#services" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#publications" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Publications
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="text-center sm:col-span-2 lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li>Academic & Research</li>
              <li>AI/ML Development</li>
              <li>Full-Stack Development</li>
              <li>Data Science & Analytics</li>
              <li>Content Writing</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 flex flex-wrap items-center justify-center gap-2 text-sm sm:text-base">
            © {currentYear} {personalInfo.name}. Made with{" "}
            <Heart className="h-4 w-4 text-red-500 fill-red-500" /> using Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
