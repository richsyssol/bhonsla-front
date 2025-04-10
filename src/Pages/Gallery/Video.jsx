import React from "react";
import { Card } from "antd";
import { motion } from "framer-motion";
import videoGallery from "../../constants/Gallery/videoGallery/"; // ✅ default import

const { Meta } = Card;

const Video = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-8">
      <h1 className="text-3xl font-bold text-center mb-10">Video Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {videoGallery.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl shadow-lg"
          >
            <Card
              hoverable
              cover={
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src={item.videoUrl}
                    title={item.name}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-64 rounded-t-2xl"
                  />
                </div>
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

export default Video;
