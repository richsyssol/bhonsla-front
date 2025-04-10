import React from "react";
import { Carousel } from "antd";
import { motion } from "framer-motion";
import achievementData from "../../../constants/Achievement/achievementData";

const Achievements = () => {
  return (
    <motion.div
      className="max-w-5xl mx-auto px-4 py-10"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-blue-700">
        🏆 Our Achievements
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <Carousel autoplay className="rounded-xl overflow-hidden shadow-lg">
            {achievementData.map((item, index) => (
              <div key={index}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>
            ))}
          </Carousel>
        </div>

        <div className="space-y-6">
          {achievementData.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 p-4 rounded-lg shadow-md"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-semibold text-blue-600">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Achievements;
