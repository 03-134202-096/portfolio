"use client";

import { motion, useInView } from "framer-motion";
import { publications } from "@/data/publications";
import { ExternalLink, Award } from "lucide-react";
import { useRef } from "react";

export function PublicationsCompact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="publications" className="py-20 lg:py-28 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="h-8 w-8 sm:h-10 sm:w-10 text-blue-600 dark:text-blue-400" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Research Publications
            </h2>
          </div>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {publications.length} peer-reviewed papers in prestigious journals (2025)
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {publications.map((publication, index) => (
            <motion.article
              key={publication.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transition-all overflow-hidden group"
            >
              <div className={`h-1.5 sm:h-2 bg-gradient-to-r ${
                index === 0 ? 'from-blue-500 to-cyan-500' :
                index === 1 ? 'from-purple-500 to-pink-500' :
                index === 2 ? 'from-green-500 to-emerald-500' :
                'from-orange-500 to-red-500'
              }`} />
              
              <div className="p-4 sm:p-6">
                <div className="flex items-start justify-between mb-3 gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-base sm:text-lg font-bold flex-shrink-0">
                    {publication.id}
                  </div>
                  <a
                    href={publication.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors flex-shrink-0"
                    aria-label="View publication"
                  >
                    <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 dark:text-blue-400" />
                  </a>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-gray-800 dark:text-white mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                  {publication.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3">
                  {publication.journal} • {publication.year}
                </p>

                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {publication.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-0.5 sm:py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
