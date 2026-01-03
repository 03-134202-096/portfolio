"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface PortfolioItem {
  title: string;
  category: string;
  image: string;
  description: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    title: "Research Architecture Diagram",
    category: "Research Visualization",
    image: "/Information/required data/ArchitectureDiagram.webp",
    description: "Comprehensive system architecture for research implementation"
  },
  {
    title: "Neural Network Architecture",
    category: "Deep Learning",
    image: "/Information/required data/Architecture2.webp",
    description: "Advanced neural network architecture design"
  },
  {
    title: "Data Visualization Dashboard",
    category: "Data Science",
    image: "/Information/required data/DataVisualization.webp",
    description: "Interactive data visualization and analytics"
  },
  {
    title: "Confusion Matrix Analysis",
    category: "Model Evaluation",
    image: "/Information/required data/ConfusionMatrix.webp",
    description: "Model performance evaluation and confusion matrix"
  },
  {
    title: "Learning Curves",
    category: "Model Training",
    image: "/Information/required data/LearningCurves.webp",
    description: "Training and validation learning curves analysis"
  },
  {
    title: "Heatmap Analysis",
    category: "Data Analysis",
    image: "/Information/required data/heatmapdata.webp",
    description: "Correlation heatmap and data pattern analysis"
  },
  {
    title: "t-SNE Visualization",
    category: "Dimensionality Reduction",
    image: "/Information/required data/t-SNE visualization.webp",
    description: "High-dimensional data visualization using t-SNE"
  },
  {
    title: "Cancer Growth Visualization",
    category: "Medical Imaging",
    image: "/Information/required data/CancerGrowthVisualization.webp",
    description: "Tumor growth tracking and visualization"
  },
  {
    title: "Medical Image Segmentation",
    category: "Medical AI",
    image: "/Information/required data/Segmentation.webp",
    description: "Automated medical image segmentation"
  },
  {
    title: "Research Flow Diagram",
    category: "Methodology",
    image: "/Information/required data/PaperFlowDiagram.webp",
    description: "Research methodology and workflow diagram"
  },
  {
    title: "Publication Trends",
    category: "Research Analytics",
    image: "/Information/required data/publicationTrends.webp",
    description: "Analysis of publication trends and patterns"
  },
  {
    title: "Statistical Box Plot",
    category: "Statistics",
    image: "/Information/required data/boxplot.webp",
    description: "Statistical distribution analysis using box plots"
  }
];

export function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(null);

  return (
    <>
      <section id="portfolio" className="py-20 lg:py-28 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Portfolio & Work Samples
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Showcasing our research and technical deliverables
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedImage(item)}
                className="group relative bg-gray-100 dark:bg-gray-800 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer"
              >
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
                  <div className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 mb-1 sm:mb-2">
                    {item.category}
                  </div>
                  <h3 className="text-base sm:text-xl font-bold text-gray-800 dark:text-white mb-1 sm:mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for image preview */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="h-6 w-6 text-white" />
          </button>
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="relative max-w-5xl w-full max-h-[90vh] bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[50vh] sm:h-[70vh]">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
            </div>
            <div className="p-4 sm:p-6 bg-white dark:bg-gray-800">
              <div className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">
                {selectedImage.category}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                {selectedImage.description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
