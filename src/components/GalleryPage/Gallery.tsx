"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { X, Maximize2 } from "lucide-react";
import Image from "next/image";

// Types and Data (Vahi hain jo aapne diye the)
type ImageItem = { id: number; image: string; type: string };
const filters = ["All", "Machine", "People"];

const machineImages: ImageItem[] = [
  { id: 1, image: "/assets/GalleryImage/machines1.webp", type: "machine" },
  { id: 2, image: "/assets/GalleryImage/machines2.webp", type: "machine" },
  { id: 3, image: "/assets/GalleryImage/machines3.webp", type: "machine" },
  { id: 4, image: "/assets/GalleryImage/machines5.webp", type: "machine" },
  { id: 5, image: "/assets/GalleryImage/machines6.webp", type: "machine" },
  { id: 6, image: "/assets/GalleryImage/machines7.webp", type: "machine" },
  { id: 7, image: "/assets/GalleryImage/machines8.webp", type: "machine" },
  { id: 8, image: "/assets/GalleryImage/machines9.webp", type: "machine" },
  { id: 9, image: "/assets/GalleryImage/machines10.webp", type: "machine" },
  { id: 10, image: "/assets/GalleryImage/machines11.webp", type: "machine" },
  { id: 11, image: "/assets/GalleryImage/machines12.webp", type: "machine" },
  { id: 12, image: "/assets/GalleryImage/machines13.webp", type: "machine" },
  { id: 13, image: "/assets/GalleryImage/machines14.webp", type: "machine" },
];

const peopleImages: ImageItem[] = [
  { id: 101, image: "/assets/GalleryImage/image1.webp", type: "vertical" },
  { id: 102, image: "/assets/GalleryImage/image2.webp", type: "vertical" },
  { id: 103, image: "/assets/GalleryImage/image3.webp", type: "vertical" },
  { id: 104, image: "/assets/GalleryImage/image4.webp", type: "vertical" },
  { id: 105, image: "/assets/GalleryImage/image5.webp", type: "vertical" },
  { id: 106, image: "/assets/GalleryImage/image6.webp", type: "vertical" },
  { id: 107, image: "/assets/GalleryImage/image7.webp", type: "vertical" },
  { id: 108, image: "/assets/GalleryImage/image8.webp", type: "vertical" },
  { id: 109, image: "/assets/GalleryImage/image9.webp", type: "vertical" },
  { id: 110, image: "/assets/GalleryImage/image10.webp", type: "vertical" },
  { id: 111, image: "/assets/GalleryImage/image11.webp", type: "vertical" },
  { id: 112, image: "/assets/GalleryImage/images1.webp", type: "horizontal" },
  { id: 113, image: "/assets/GalleryImage/images2.webp", type: "horizontal" },
  { id: 114, image: "/assets/GalleryImage/images3.webp", type: "horizontal" },
  { id: 115, image: "/assets/GalleryImage/images4.webp", type: "horizontal" },
  { id: 116, image: "/assets/GalleryImage/images5.webp", type: "horizontal" },
  { id: 117, image: "/assets/GalleryImage/images6.webp", type: "horizontal" },
  { id: 118, image: "/assets/GalleryImage/images7.webp", type: "horizontal" },
];

const allImages = [...machineImages, ...peopleImages];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);

  // Performance optimize: Filter images only when activeFilter changes
  const filteredImages = useMemo(() => {
    if (activeFilter === "Machine") return machineImages;
    if (activeFilter === "People") return peopleImages;
    return allImages;
  }, [activeFilter]);

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Gallery"
          subtitle="Explore our journey from farms to finished sustainable pulp products."
        />

        {/* --- FILTERS --- */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`relative px-8 py-2.5 rounded-full text-sm font-semibold transition-all duration-500
              ${
                activeFilter === filter
                  ? "text-white"
                  : "bg-white text-gray-500 hover:bg-gray-100 shadow-sm"
              }`}
            >
              {activeFilter === filter && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-green-700 rounded-full"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{filter}</span>
            </button>
          ))}
        </div>

        {/* --- GRID --- */}
        <motion.div 
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="relative group cursor-zoom-in overflow-hidden rounded-2xl bg-gray-200 shadow-sm hover:shadow-2xl transition-all duration-500"
                onClick={() => setSelectedImage(item)}
              >
                {/* Image Overlay on Hover */}
                <div className="absolute inset-0 bg-green-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                   <div className="bg-white/20 backdrop-blur-md p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                     <Maximize2 className="text-white" size={24} />
                   </div>
                </div>

                <Image
                  src={item.image}
                  alt="Gallery"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* --- LIGHTBOX MODAL --- */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center z-[100] p-4 md:p-10"
            >
              <button 
                className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X size={40} />
              </button>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()} // Prevents closing when clicking the image
                className="relative max-w-6xl w-full max-h-[90vh] flex items-center justify-center"
              >
                <Image
                  src={selectedImage.image}
                  alt="Full view"
                  width={1200}
                  height={800}
                  className="rounded-lg object-contain max-h-[85vh] shadow-2xl"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}