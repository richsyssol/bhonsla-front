import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import { useNavigate } from "react-router-dom";
import { students } from "../../../public/assets/index";

const CustomModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleLearnMore = () => {
    setIsModalOpen(false);
    navigate("/applynow");
  };

  return (
    <div>
      <Modal
        title={null}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        centered
        className="p-0"
        width="90%"
        style={{
          maxWidth: "410px", // consistent size
        }}
        bodyStyle={{
          padding: 0,
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        {/* Image Section */}
        <div className="flex flex-col items-center text-center">
          <img
            src={students}
            alt="Students"
            className="w-full h-[160px] sm:h-[200px] object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="p-4">
          <p className="text-base sm:text-lg font-bold text-blue-600 mb-2 leading-snug text-center">
            Admissions Open for 2025–2026!
          </p>
          <p className="text-xs sm:text-sm text-gray-700 mb-4 leading-relaxed text-center">
            Join a legacy of excellence and discipline at Bhonsala Military
            School, Nasik — established in 1937 to inspire and empower young
            minds through military training and academic brilliance. We shape
            tomorrow’s leaders with honor, integrity, and a commitment to
            service.
          </p>
          <button
            onClick={handleLearnMore}
            className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white hover:from-green-400 hover:to-teal-400 rounded-lg w-full py-2 text-sm sm:text-base font-semibold"
          >
            Learn More
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default CustomModal;
