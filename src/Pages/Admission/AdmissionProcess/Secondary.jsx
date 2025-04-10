import React from "react";
import { Card } from "antd";
import { motion } from "framer-motion";
import { admissionJr } from "../../../constants/Admission/admissionJr";

const Secondary = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-12">
      <div className="max-w-5xl mx-auto space-y-8">
        <motion.h1
          className="text-4xl font-bold text-center text-blue-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {admissionJr.title}
        </motion.h1>

        <motion.p
          className="text-lg text-gray-700 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {admissionJr.description}
        </motion.p>

        <Card className="shadow-md rounded-xl">
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">
            Admission Overview
          </h2>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            {admissionJr.admissionPoints.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </Card>

        <Card className="shadow-md rounded-xl">
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">
            For 6th std to 9th std Admission:
          </h2>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            {admissionJr.eligibility.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </Card>

        <Card className="shadow-md rounded-xl">
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">
            Bank Details
          </h2>
          <ul className="list-none pl-6 space-y-1 text-gray-700">
            <li>
              <strong>Name:</strong> {admissionJr.bankDetails.name}
            </li>
            <li>
              <strong>Bank:</strong> {admissionJr.bankDetails.bank}
            </li>
            <li>
              <strong>Branch:</strong> {admissionJr.bankDetails.branch}
            </li>
            <li>
              <strong>Account No.:</strong> {admissionJr.bankDetails.accountNo}
            </li>
            <li>
              <strong>IFSC Code:</strong> {admissionJr.bankDetails.ifsc}
            </li>
          </ul>
        </Card>

        <Card className="shadow-md rounded-xl">
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">
            Payment Note
          </h2>
          <p className="text-gray-700">{admissionJr.paymentNote}</p>
        </Card>

        <Card className="shadow-md rounded-xl">
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">
            Submission Note
          </h2>
          <p className="text-gray-700">{admissionJr.submissionNote}</p>
        </Card>

        <Card className="shadow-md rounded-xl">
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">
            Required Documents
          </h2>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            {admissionJr.requiredDocuments.map((doc, idx) => (
              <li key={idx}>{doc}</li>
            ))}
          </ul>
        </Card>

        <Card className="shadow-md rounded-xl">
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">
            Exam & Interview
          </h2>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            {admissionJr.examInterviewNote.map((note, idx) => (
              <li key={idx}>{note}</li>
            ))}
          </ul>
        </Card>

        {/* <div className="text-center pt-4">
          <a
            href={admissionJr.website}
            className="text-blue-600 underline font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            View more details on the official website
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Secondary;
