"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Briefcase } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

interface PortfolioItem {
  title: string;
  category: string;
  image: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    title: "Research Architecture",
    category: "System Design",
    image: "/images/ArchitectureDiagram.webp",
  },
  {
    title: "Neural Network",
    category: "Deep Learning",
    image: "/images/Architecture2.webp",
  },
  {
    title: "Data Visualization",
    category: "Analytics",
    image: "/images/DataVisualization.webp",
  },
  {
    title: "Confusion Matrix",
    category: "Model Evaluation",
    image: "/images/ConfusionMatrix.webp",
  },
  {
    title: "Learning Curves",
    category: "Training Analysis",
    image: "/images/LearningCurves.webp",
  },
  {
    title: "Heatmap Analysis",
    category: "Data Patterns",
    image: "/images/heatmapdata.webp",
  },
  {
    title: "t-SNE Visualization",
    category: "Dimensionality Reduction",
    image: "/images/t-SNE visualization.webp",
  },
  {
    title: "Cancer Visualization",
    category: "Medical Imaging",
    image: "/images/CancerGrowthVisualization.webp",
  },
  {
    title: "Image Segmentation",
    category: "Medical AI",
    image: "/images/Segmentation.webp",
  },
  {
    title: "Research Flow",
    category: "Methodology",
    image: "/images/PaperFlowDiagram.webp",
  },
  {
    title: "Publication Trends",
    category: "Research Analytics",
    image: "/images/publicationTrends.webp",
  },
  {
    title: "Statistical Analysis",
    category: "Statistics",
    image: "/images/boxplot.webp",
  },
];

export function PortfolioCarousel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Briefcase className="h-8 w-8 sm:h-10 sm:w-10 text-purple-600 dark:text-purple-400" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              Work Samples
            </h2>
          </div>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Showcasing our research and technical deliverables
          </p>
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-8 sm:px-12">
          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4 sm:gap-6">
              {portfolioItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                >
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group h-full">
                    <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-4 sm:p-6">
                      <div className="text-xs sm:text-sm font-semibold text-purple-600 dark:text-purple-400 mb-1 sm:mb-2">
                        {item.category}
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-gray-800 dark:text-white">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 z-10"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700 dark:text-gray-300" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 z-10"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700 dark:text-gray-300" />
          </button>
        </div>
      </div>
    </section>
  );
}
