// import { Table, Typography } from "antd";
// import { motion } from "framer-motion";

// const { Title } = Typography;

// const tableVariant = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
// };

// const Staff = ({ title, columns, data }) => {
//   return (
//     <motion.div
//       variants={tableVariant}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true }}
//       className="mb-10"
//     >
//       <Title level={3} className="text-blue-700 mb-4">
//         {title}
//       </Title>
//       <Table
//         columns={columns}
//         dataSource={data}
//         pagination={false}
//         bordered
//         rowKey="srNo"
//         className="bg-white shadow-lg rounded-2xl overflow-hidden"
//       />
//     </motion.div>
//   );
// };

// export default Staff;

import StaffSection from "../../components/StaffSection/StaffSection";
import {
  academicCoordinator,
  teachingStaff,
  militaryTrainingStaff,
  administrativeStaff,
} from "../../constants/Staffdata";

const Staff = () => {
  const teachingColumns = [
    { title: "Sr No", dataIndex: "srNo" },
    { title: "Name", dataIndex: "name" },
    { title: "Designation", dataIndex: "designation" },
    { title: "Qualification", dataIndex: "qualification" },
    { title: "Teaching Subject", dataIndex: "subject" },
  ];

  const simpleColumns = [
    { title: "Sr No", dataIndex: "srNo" },
    { title: "Name", dataIndex: "name" },
    { title: "Designation", dataIndex: "designation" },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-10">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Staff Page</h1>
      </div>

      <div className="bg-blue-100 rounded-xl p-4 text-lg font-semibold text-center shadow">
        📘 Academic Coordinator:{" "}
        <span className="text-blue-900">{academicCoordinator.name}</span>
      </div>

      <StaffSection
        title="Teaching Staff"
        columns={teachingColumns}
        data={teachingStaff}
      />

      <StaffSection
        title="Military Training Staff"
        columns={simpleColumns}
        data={militaryTrainingStaff}
      />

      <StaffSection
        title="Administrative Staff"
        columns={simpleColumns}
        data={administrativeStaff}
      />
    </div>
  );
};

export default Staff;
