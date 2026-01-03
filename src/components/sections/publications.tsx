"use client";

import { motion, useInView } from "framer-motion";
import { publications } from "@/data/publications";
import { ExternalLink, BookOpen, Calendar } from "lucide-react";
import { useRef } from "react";

export function Publications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="publications" className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Research Publications
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Peer-reviewed research in AI, medical imaging, and assistive technologies
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-8">
          {publications.map((publication, index) => (
            <motion.article
              key={publication.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all overflow-hidden group"
            >
              <div className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Publication Number Badge */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                      {String(publication.id).padStart(2, "0")}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {publication.title}
                    </h3>

                    {/* Journal and Year */}
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <BookOpen className="h-5 w-5" />
                        <span className="font-semibold">{publication.journal}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <Calendar className="h-5 w-5" />
                        <span>{publication.year}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      {publication.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {publication.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* DOI and Link */}
                    <div className="flex flex-wrap gap-4">
                      <a
                        href={publication.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all group/link"
                      >
                        <span>View Publication</span>
                        <ExternalLink className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                      </a>
                      <div className="flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
                        <span className="text-sm font-mono text-gray-600 dark:text-gray-400">
                          DOI: {publication.doi}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              {publications.length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              Publications
            </div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              2025
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              Latest Year
            </div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <div className="text-4xl font-bold text-pink-600 dark:text-pink-400 mb-2">
              4
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              Research Areas
            </div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <div className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">
              100%
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              Peer-Reviewed
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
