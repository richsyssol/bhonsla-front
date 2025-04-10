import React from "react";
import { motion } from "framer-motion";
import alumniData from "../../../constants/Alumni/alumniData";
import { Card } from "antd";

const Alumni = () => {
  return (
    <motion.div
      className="max-w-6xl mx-auto px-4 py-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-blue-700">
        🎓 Our Proud Alumni
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {alumniData.map((alumni, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card
              hoverable
              cover={
                <img
                  alt={alumni.name}
                  src={alumni.image}
                  className="h-64 object-cover"
                />
              }
              className="rounded-xl shadow-lg"
            >
              <h2 className="text-xl font-semibold text-blue-600">
                {alumni.name}
              </h2>
              <p className="text-sm text-gray-500">{alumni.batch}</p>
              <p className="mt-2 text-gray-700">{alumni.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Alumni;
