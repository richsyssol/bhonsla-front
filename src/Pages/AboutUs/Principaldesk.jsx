// src/pages/PrincipalDesk.jsx

import React from "react";
import { motion } from "framer-motion";
import { principalData } from "../../constants/AboutUs/principalData";
import PageSection from "../../components/PageSection/PageSection";

const Principaldesk = () => {
  return (
    <div>
      <PageSection page="principalDesk" />
      <div className="min-h-screen bg-gray-100 py-12 px-4">
        <motion.div
          className="max-w-6xl mx-auto bg-white p-6 md:p-12 rounded-2xl shadow-xl flex flex-col md:flex-row items-center md:items-start gap-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Left Image */}
          {/* <motion.img
          src={principalData.image}
          alt="Principal"
          className="w-full md:w-1/3 h-auto rounded-lg object-cover shadow-md"
          whileHover={{ scale: 1.02 }}
        /> */}

          {/* Right Info */}
          <div className="space-y-4 text-gray-700">
            <h2 className="text-3xl font-bold text-blue-900">
              {principalData.title}
            </h2>
            {principalData.paragraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
            <p className="font-semibold mt-4">{principalData.author}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Principaldesk;
