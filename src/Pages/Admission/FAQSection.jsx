import React, { useState } from "react";
import { motion } from "framer-motion";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import faqItems from "../../constants/FAQ/faQuestions";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Split into left and right arrays
  const leftItems = faqItems.slice(0, Math.ceil(faqItems.length / 2));
  const rightItems = faqItems.slice(Math.ceil(faqItems.length / 2));

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto px-4 py-12"
    >
      <h1 className="text-4xl md:font-bold w-full">
        <span className="text-[#5B5B5B]">BEFORE YOU</span>{" "}
        <span className="text-[#84754E]">APPLY</span>
      </h1>
      <p className="my-4 text-lg">
        Your journey at one of California’s top boarding schools begins here.
        Army and Navy Academy propels students toward academic and personal
        excellence while instilling virtues that will help young men to succeed
        in college and beyond. The Office of Admission is here to help you make
        your school choice through personalized campus tours and consultations.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          {leftItems.map((item, index) => (
            <motion.div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
              whileHover={{
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              }}
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left"
                onClick={() => toggleItem(index)}
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.question}
                </h3>
                <div className="ml-4">
                  {activeIndex === index ? (
                    <MinusOutlined className="text-gray-500 text-lg" />
                  ) : (
                    <PlusOutlined className="text-gray-500 text-lg" />
                  )}
                </div>
              </button>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: activeIndex === index ? "auto" : 0,
                  opacity: activeIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 pt-2 text-gray-600">
                  {item.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <div className="space-y-4">
          {rightItems.map((item, index) => {
            const actualIndex = index + leftItems.length;
            return (
              <motion.div
                key={actualIndex}
                className="border border-gray-200 rounded-lg overflow-hidden"
                whileHover={{
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                }}
              >
                <button
                  className="w-full flex justify-between items-center p-6 text-left"
                  onClick={() => toggleItem(actualIndex)}
                >
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.question}
                  </h3>
                  <div className="ml-4">
                    {activeIndex === actualIndex ? (
                      <MinusOutlined className="text-gray-500 text-lg" />
                    ) : (
                      <PlusOutlined className="text-gray-500 text-lg" />
                    )}
                  </div>
                </button>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: activeIndex === actualIndex ? "auto" : 0,
                    opacity: activeIndex === actualIndex ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-2 text-gray-600">
                    {item.answer}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default FAQSection;
