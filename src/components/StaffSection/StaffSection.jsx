import { Table, Typography } from "antd";
import { motion } from "framer-motion";

const { Title } = Typography;

const tableVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const StaffSection = ({ title, columns, data }) => {
  return (
    <motion.div
      variants={tableVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mb-10"
    >
      <Title level={3} className="text-blue-700 mb-4">
        {title}
      </Title>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        bordered
        rowKey="srNo"
        className="bg-white shadow-lg rounded-2xl overflow-hidden"
      />
    </motion.div>
  );
};

export default StaffSection;
