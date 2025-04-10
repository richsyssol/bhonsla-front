// import React from "react";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaYoutube,
//   FaTwitter,
//   FaLinkedinIn,
// } from "react-icons/fa";

// const ShareUI = () => {
//   return (
//     <div className="flex justify-end w-full pr-20">
//       <div className="flex items-center space-x-4 p-3.5 shadow-sm">
//         <a
//           href="https://www.facebook.com/YourPage" // Replace with your FB page URL
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-[#004165] hover:scale-110 transition-transform duration-200"
//         >
//           <FaFacebookF size={20} />
//         </a>
//         <a
//           href="https://www.instagram.com/YourProfile" // Replace with your IG URL
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-[#004165] hover:scale-110 transition-transform duration-200"
//         >
//           <FaInstagram size={20} />
//         </a>
//         <a
//           href="https://www.youtube.com/YourChannel" // Replace with your YouTube URL
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-[#004165] hover:scale-110 transition-transform duration-200"
//         >
//           <FaYoutube size={20} />
//         </a>
//         <a
//           href="https://twitter.com/YourHandle" // Optional
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-[#004165] hover:scale-110 transition-transform duration-200"
//         >
//           <FaTwitter size={20} />
//         </a>
//         <a
//           href="https://www.linkedin.com/company/YourCompany" // Optional
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-[#004165] hover:scale-110 transition-transform duration-200"
//         >
//           <FaLinkedinIn size={20} />
//         </a>
//       </div>
//     </div>
//   );
// };

// export default ShareUI;

// import React, { useState } from "react";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaYoutube,
//   FaTwitter,
//   FaLinkedinIn,
//   FaChevronLeft,
//   FaChevronRight,
// } from "react-icons/fa";
// import { motion, AnimatePresence } from "framer-motion";

// const ShareUI = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSlider = () => setIsOpen(!isOpen);

//   return (
//     <div className="fixed top-[25%] left-0 z-50">
//       <div className="flex items-center">
//         <AnimatePresence>
//           {isOpen && (
//             <motion.div
//               className="bg-white shadow-md rounded-r-lg py-2 px-3 flex gap-4"
//               initial={{ x: -150, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               exit={{ x: -150, opacity: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               <a
//                 href="https://www.facebook.com/bmsnsk"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-[#004165] hover:scale-110 transition-transform"
//               >
//                 <FaFacebookF size={20} />
//               </a>
//               <a
//                 href="https://www.instagram.com/BhonsalaNSK/#"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-[#004165] hover:scale-110 transition-transform"
//               >
//                 <FaInstagram size={20} />
//               </a>
//               <a
//                 href="https://youtube.com/@bhonsalansk?si=YksbGWK_1GFjkYm0"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-[#004165] hover:scale-110 transition-transform"
//               >
//                 <FaYoutube size={20} />
//               </a>
//               <a
//                 href="https://x.com/BhonsalaNSK"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-[#004165] hover:scale-110 transition-transform"
//               >
//                 <FaTwitter size={20} />
//               </a>
//               <a
//                 href="https://www.linkedin.com/company/bhonsala-military-college"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-[#004165] hover:scale-110 transition-transform"
//               >
//                 <FaLinkedinIn size={20} />
//               </a>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Arrow Toggle Button */}
//         <button
//           onClick={toggleSlider}
//           className="bg-yellow-500 text-white p-2 rounded-r-md shadow-md hover:bg-yellow-600 transition-colors"
//         >
//           {isOpen ? <FaChevronLeft size={18} /> : <FaChevronRight size={18} />}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ShareUI;

import React, { useState, useRef, useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedinIn,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const ShareUI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const toggleSlider = () => setIsOpen(!isOpen);

  // Close when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed top-[25%] right-0 z-50" ref={containerRef}>
      <div className="flex items-center flex-row-reverse">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="bg-white shadow-md rounded-l-lg py-2 px-3 flex gap-4"
              initial={{ x: 150, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 150, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <a
                href="https://www.facebook.com/bmsnsk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#004165] hover:scale-110 transition-transform"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://www.instagram.com/BhonsalaNSK/#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#004165] hover:scale-110 transition-transform"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://youtube.com/@bhonsalansk?si=YksbGWK_1GFjkYm0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#004165] hover:scale-110 transition-transform"
              >
                <FaYoutube size={20} />
              </a>
              <a
                href="https://x.com/BhonsalaNSK"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#004165] hover:scale-110 transition-transform"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/bhonsala-military-college"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#004165] hover:scale-110 transition-transform"
              >
                <FaLinkedinIn size={20} />
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Arrow Toggle Button */}
        <button
          onClick={toggleSlider}
          className="bg-yellow-500 text-white p-2 rounded-l-md shadow-md hover:bg-yellow-600 transition-colors"
        >
          {isOpen ? <FaChevronRight size={18} /> : <FaChevronLeft size={18} />}
        </button>
      </div>
    </div>
  );
};

export default ShareUI;
