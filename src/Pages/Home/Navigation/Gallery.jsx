import React from "react";
import { Card } from "antd";
import { motion } from "framer-motion";
import { gallery1 } from "../../../../public/assets/index";

const images = [
  [gallery1],
  [gallery1],
  [gallery1],
  [gallery1],
  [gallery1],
  [gallery1],
];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-blue-900">Our Gallery</h1>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            A glimpse into the vibrant activities, proud moments, and
            achievements captured throughout our journey.
          </p>
        </motion.div>

        {/* Image Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {images.map((src, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="rounded-lg overflow-hidden shadow-lg"
            >
              <Card
                hoverable
                cover={
                  <img
                    alt={`Gallery ${index + 1}`}
                    src={src}
                    className="h-64 w-full object-cover"
                  />
                }
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;
