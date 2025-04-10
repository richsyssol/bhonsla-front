import React from "react";
import { Card, Button } from "antd";
import { DownloadOutlined, FilePdfOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import magazineData from "../../constants/Emagazine/magazineData";

const Ramdandee = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-10">
      <motion.h1
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        E-Magazine
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {magazineData.map((mag, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.3 }}
          >
            <Card
              title={mag.title}
              bordered={false}
              className="rounded-xl shadow-lg"
              actions={[
                <Button
                  type="primary"
                  icon={<DownloadOutlined />}
                  href={mag.pdfUrl}
                  target="_blank"
                  download
                >
                  Download PDF
                </Button>,
              ]}
            >
              <p className="text-gray-600 mb-2">
                <FilePdfOutlined className="mr-2 text-red-500" />
                {mag.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Ramdandee;
