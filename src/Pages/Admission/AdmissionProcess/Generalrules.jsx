import { Card } from "antd";
import { motion } from "framer-motion";
import { generalrules } from "../../../constants/Admission/generalrules";

const Generalrules = () => {
  return (
    <div className="max-w-5xl mx-auto p-4 space-y-6">
      {generalrules.map((section, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Card
            title={
              <h2 className="text-xl font-bold text-blue-700">
                {section.title}
              </h2>
            }
            className="shadow-lg rounded-2xl"
          >
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {section.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default Generalrules;
