import React from "react";
import { Card } from "antd";
import { motion } from "framer-motion";
import galleryImages from "../../constants/Gallery/galleryImages"; // ✅ default import

const { Meta } = Card;

const Photo = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-8">
      <h1 className="text-3xl font-bold text-center mb-10">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryImages.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="shadow-lg rounded-2xl"
          >
            <Card
              hoverable
              cover={
                <img
                  alt={item.name}
                  src={item.imageUrl}
                  className="h-64 w-full object-cover rounded-t-2xl"
                />
              }
              className="rounded-2xl"
            >
              <Meta title={item.name} />
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Photo;
