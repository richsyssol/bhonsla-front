import React from "react";
import { Card, Button } from "antd";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import pdCourses from "../../constants/Courses/pdCourses";

const { Meta } = Card;

const PdCourses = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-8">
      <h1 className="text-3xl font-bold text-center mb-10">
        Personality Development Courses
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {pdCourses.map((course, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
          >
            <Card
              title={course.title}
              bordered
              className="rounded-2xl shadow-md"
            >
              <p>
                <strong>Course Duration:</strong> {course.duration}
              </p>
              <p>
                <strong>Age Group:</strong> {course.ageGroup}
              </p>
              <p>
                <strong>Qualification:</strong> {course.qualification}
              </p>
              <p>
                <strong>Selection:</strong> {course.selection}
              </p>
              <p>
                <strong>Syllabus:</strong>
              </p>
              <ul className="list-disc ml-6 mb-2">
                {course.syllabus.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <p>
                <strong>Admission:</strong> {course.admission}
              </p>
              <p>
                <strong>Fee:</strong> {course.fee}
              </p>
              <div className="mt-4 text-center">
                <Button
                  type="primary"
                  onClick={() => navigate(course.registrationLink)}
                >
                  Apply Here
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PdCourses;
