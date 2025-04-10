import React from "react";
import { motion } from "framer-motion";
import { Card } from "antd";
import { juniorcollege } from "../../../constants/Admission/juniorcollege";

const Juniorcollege = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto space-y-6"
      >
        {juniorcollege.map((section, idx) => (
          <Card key={idx} className="rounded-2xl shadow-lg p-6 bg-white">
            <h2 className="text-2xl font-bold text-blue-900 mb-2">
              {section.heading}
            </h2>

            {Array.isArray(section.content) ? (
              section.content.every((item) => typeof item === "string") ? (
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  {section.content.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              ) : (
                <div className="space-y-4">
                  {section.content.map((subSection, subIdx) => (
                    <div key={subIdx}>
                      <h3 className="text-xl font-semibold text-blue-700">
                        {subSection.subHeading}
                      </h3>
                      <p className="text-gray-700">{subSection.details}</p>
                    </div>
                  ))}
                </div>
              )
            ) : (
              <p className="text-gray-700 whitespace-pre-line">
                {section.content}
              </p>
            )}

            {section.image && (
              <div className="mt-4 flex justify-center">
                <img
                  src={section.image}
                  alt="Visual Representation"
                  className="w-100 max-w-3xl rounded-xl shadow-md"
                />
              </div>
            )}
          </Card>
        ))}
      </motion.div>
    </div>
  );
};

export default Juniorcollege;
