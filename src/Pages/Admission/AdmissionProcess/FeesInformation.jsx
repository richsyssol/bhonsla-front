import React from "react";
import { Table, Card } from "antd";
import { motion } from "framer-motion";
import {
  fullFeeDiscountData,
  installmentFeeData,
  bankDetails,
  notes,
} from "../../../constants/Admission/feeStructure";

const columnsDiscount = [
  {
    title: "Class",
    dataIndex: "class",
    key: "class",
  },
  {
    title: "Per Annum Fees",
    dataIndex: "perAnnumFees",
    key: "perAnnumFees",
  },
  {
    title: "Long Tour",
    dataIndex: "longTour",
    key: "longTour",
  },
  {
    title: "Total Fees",
    dataIndex: "totalFees",
    key: "totalFees",
  },
  {
    title: "Discount",
    dataIndex: "discount",
    key: "discount",
  },
  {
    title: "Payable Amount",
    dataIndex: "payableAmount",
    key: "payableAmount",
  },
];

const columnsInstallments = [
  {
    title: "Class",
    dataIndex: "class",
    key: "class",
  },
  {
    title: "Total Fees",
    dataIndex: "totalFees",
    key: "totalFees",
  },
  {
    title: "Long Tour",
    dataIndex: "longTour",
    key: "longTour",
  },
  {
    title: "First Installment",
    dataIndex: "firstInstallment",
    key: "firstInstallment",
  },
  {
    title: "Second Installment",
    dataIndex: "secondInstallment",
    key: "secondInstallment",
  },
];

const FeeInformation = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto space-y-8"
      >
        <Card className="rounded-2xl shadow-lg p-6 bg-white">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Fees for Year 2025–26 (Full Fees paid on or before arrival date - 5%
            Discount Applicable)
          </h2>
          <Table
            dataSource={fullFeeDiscountData}
            columns={columnsDiscount}
            pagination={false}
            bordered
          />
        </Card>

        <Card className="rounded-2xl shadow-lg p-6 bg-white">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Full Fees Paid in 2 Installments (Discount not applicable)
          </h2>
          <Table
            dataSource={installmentFeeData}
            columns={columnsInstallments}
            pagination={false}
            bordered
          />
        </Card>

        <Card className="rounded-2xl shadow-lg p-6 bg-white">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Fees can be paid through NEFT / RTGS / Credit Card / Debit Card /
            UPI Only (No Cash will be accepted)
          </h3>
          <p className="text-gray-700 mb-2">
            Fee will be paid in given Installments only.
          </p>

          <h3 className="text-lg font-semibold text-blue-800 mt-4">
            BANK DETAILS FOR FEE PAYMENT
          </h3>
          <ul className="list-disc pl-6 text-gray-700">
            {bankDetails.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h3 className="text-lg font-semibold text-blue-800 mt-4">
            PAYMENT OF FEES & OTHER DUES
          </h3>
          <ul className="list-disc pl-6 text-gray-700">
            {notes.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>

          <p className="text-sm text-red-600 font-medium mt-4">
            *Subject to future Decision of Management
          </p>
        </Card>
      </motion.div>
    </div>
  );
};

export default FeeInformation;
