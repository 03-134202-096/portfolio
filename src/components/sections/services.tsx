"use client";

import { motion, useInView } from "framer-motion";
import { serviceCategories } from "@/data/services";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, FileText, Code, PenTool, Check } from "lucide-react";

const categoryIcons = {
  academic: FileText,
  technical: Code,
  writing: PenTool,
};

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState(0);

  const nextCategory = () => {
    setActiveCategory((prev) => (prev + 1) % serviceCategories.length);
  };

  const prevCategory = () => {
    setActiveCategory((prev) => (prev - 1 + serviceCategories.length) % serviceCategories.length);
  };

  const currentCategory = serviceCategories[activeCategory];
  const Icon = categoryIcons[currentCategory.id as keyof typeof categoryIcons];

  return (
    <section id="services" className="py-20 lg:py-28 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16 mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent text-center">
            Services We Offer
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-center">
            Expert solutions across three core areas
          </p>
        </motion.div>

        {/* Category Selector */}
        <div className="flex justify-center gap-2 sm:gap-4 mb-10 lg:mb-12 flex-wrap">
          {serviceCategories.map((category, index) => {
            const CategoryIcon = categoryIcons[category.id as keyof typeof categoryIcons];
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold transition-all text-sm sm:text-base ${
                  activeCategory === index
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:scale-105"
                }`}
              >
                <CategoryIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="hidden sm:inline">{category.title}</span>
                <span className="sm:hidden">{category.title.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Display */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className={`bg-gradient-to-br ${currentCategory.color} p-1 rounded-2xl lg:rounded-3xl shadow-2xl`}>
            <div className="bg-white dark:bg-gray-900 rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-6 lg:mb-8">
                <div className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br ${currentCategory.color}`}>
                  <Icon className="h-8 w-8 sm:h-12 sm:w-12 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-2">
                    {currentCategory.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                    {currentCategory.description}
                  </p>
                </div>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {currentCategory.services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3 p-3 sm:p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all group"
                  >
                    <div className={`p-1.5 sm:p-2 rounded-lg bg-gradient-to-br ${currentCategory.color} flex-shrink-0`}>
                      <Check className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </div>
                    <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-medium group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                      {service}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex justify-center gap-4 mt-6 lg:mt-8">
                <button
                  onClick={prevCategory}
                  className="p-2.5 sm:p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:shadow-lg transition-all hover:scale-110"
                  aria-label="Previous category"
                >
                  <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700 dark:text-gray-300" />
                </button>
                <button
                  onClick={nextCategory}
                  className="p-2.5 sm:p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:shadow-lg transition-all hover:scale-110"
                  aria-label="Next category"
                >
                  <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700 dark:text-gray-300" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
