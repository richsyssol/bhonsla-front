import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { BsPhone } from "react-icons/bs";

const MobileSocialIcons = () => {
  return (
    <motion.div
      className="flex justify-between items-center bg-yellow-500 top-2 left-0 right-0 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Mobile Number */}
      <div className="flex items-center text-white">
        {/* <BsPhone className="text-2xl mr-2" />
        <a href="tel:+1234567890" className="text-lg font-semibold">
          +1 234 567 890
        </a> */}
      </div>

      {/* Social Media Icons */}
      <div className="flex space-x-5 mr-14">
        <a
          href="https://www.facebook.com/bmsnsk"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-xl hover:text-yellow-300"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://x.com/BhonsalaNSK"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-xl hover:text-yellow-300"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com/BhonsalaNSK/#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-xl hover:text-yellow-300"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/company/bhonsala-military-college"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-xl hover:text-yellow-300"
        >
          <FaLinkedinIn />
        </a>
      </div>
    </motion.div>
  );
};

export default MobileSocialIcons;
