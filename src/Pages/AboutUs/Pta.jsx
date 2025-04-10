// src/pages/ParentTeacherList.jsx

import React from "react";
import { motion } from "framer-motion";
import { pta } from "../../constants/Pta";

const Pta = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <motion.div
        className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">
          Parent Teacher Representatives 2025–26
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left border border-gray-300">
            <thead className="bg-blue-100">
              <tr>
                <th className="py-3 px-4 border">Sr. No.</th>
                <th className="py-3 px-4 border">Class</th>
                <th className="py-3 px-4 border">Name of Parent</th>
              </tr>
            </thead>
            <tbody>
              {pta.map((item) => (
                <motion.tr
                  key={item.id}
                  whileHover={{ scale: 1.02 }}
                  className="transition-all duration-300"
                >
                  <td className="py-2 px-4 border">{item.id}</td>
                  <td className="py-2 px-4 border">{item.class}</td>
                  <td className="py-2 px-4 border">{item.parent}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default Pta;
