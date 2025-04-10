import React from "react";
import { Table, Typography, Card } from "antd";
import { motion } from "framer-motion";
import { managementTables } from "../../constants/managementTables";

const { Title } = Typography;

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
    },
  }),
};

const Management = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col gap-6 items-center">
      <Title level={2} className="text-blue-900">
        Management
      </Title>

      {managementTables.map((table, index) => (
        <motion.div
          className="w-full max-w-4xl"
          key={index}
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={index}
        >
          <Card title={table.title} className="rounded-2xl shadow-md">
            <Table
              columns={table.columns.map((col, i) => ({
                title: col,
                dataIndex: i === 0 ? "position" : "name",
                key: col.toLowerCase().replace(" ", "_"),
              }))}
              dataSource={table.data}
              pagination={false}
              bordered
            />
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default Management;
