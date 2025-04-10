import React from "react";
import { Card } from "antd";
import { motion } from "framer-motion";
import guidelinesData from "../../constants/Courses/guidelinesData";

const Guidelines = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-8">
      <motion.h1
        className="text-4xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Course Guidelines
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {guidelinesData.map((section, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
          >
            <Card
              title={section.title}
              bordered
              className="rounded-2xl shadow-md bg-white"
            >
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {section.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Guidelines;
