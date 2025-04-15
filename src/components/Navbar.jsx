// import { useState, useEffect, useRef } from "react";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { ChevronDown, Menu, X } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import { logo } from "../../public/assets/index";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const dropdownRef = useRef();

//   const [openDropdown, setOpenDropdown] = useState(null);
//   const [openSubDropdown, setOpenSubDropdown] = useState(null);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [clickedIndex, setClickedIndex] = useState(null);
//   const [clickTime, setClickTime] = useState(0);

//   useEffect(() => {
//     setOpenDropdown(null);
//     setOpenSubDropdown(null);
//   }, [location.pathname]);

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setOpenDropdown(null);
//         setOpenSubDropdown(null);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const toggleDropdown = (index) => {
//     setOpenDropdown(openDropdown === index ? null : index);
//     setOpenSubDropdown(null);
//   };

//   const toggleSubDropdown = (subIndex) => {
//     setOpenSubDropdown(openSubDropdown === subIndex ? null : subIndex);
//   };

//   const navItems = [
//     { label: "Home", path: "/" },
//     {
//       label: "About Us",
//       path: "/aboutus",
//       subItems: [
//         { label: "Vision", path: "/aboutus/vision" },
//         { label: "Mission", path: "/aboutus/mission" },
//         { label: "Management", path: "/aboutus/management" },
//         { label: "Staff", path: "/aboutus/staff" },
//         { label: "PTA", path: "/aboutus/pta" },
//         { label: "Commandant Desk", path: "/aboutus/commandantdesk" },
//         { label: "Principal Desk", path: "/aboutus/principaldesk" },
//       ],
//     },
//     {
//       label: "Admission",
//       subItems: [
//         {
//           label: "Admission Process",
//           subItems: [
//             { label: "Secondary", path: "/admission/secondary" },
//             { label: "Junior College", path: "/admission/juniorcollege" },
//           ],
//         },
//         { label: "Fee Information", path: "/admission/feesInformation" },
//         { label: "General Rules", path: "/admission/generalrules" },
//         { label: "Application Form", path: "/admission/applicationform" },
//       ],
//     },
//     // { label: "Calendar", path: "/calendar" },
//     { label: "Achievements", path: "/achievement" },
//     { label: "Guest Visits", path: "/guestvisit" },
//     { label: "Alumni", path: "/alumni" },
//     {
//       label: "Gallery",
//       path: null,
//       subItems: [
//         { label: "Photo Gallery", path: "/gallery/photo" },
//         { label: "Video Gallery", path: "/gallery/video" },
//       ],
//     },
//     {
//       label: "Courses",
//       path: null,
//       subItems: [
//         { label: "PDC", path: "/courses/pdc" },
//         { label: "Guidelines", path: "/courses/guidelines" },
//         { label: "SMTC", path: "/courses/smtc" },
//       ],
//     },
//     {
//       label: "Others",
//       path: null,
//       subItems: [
//         { label: "Calendar", path: "/others/calendar" },
//         {
//           label: "E-Magazine",
//           path: "/others/emagazine",
//           subItems: [
//             {
//               label: "Ramdandee 2023-2024",
//               path: "/others/emagazine/ramdandee",
//             },
//           ],
//         },
//       ],
//     },
//   ];

//   return (
//     <nav className="p-4 shadow-lg bg-white relative z-40" ref={dropdownRef}>
//       <div className="container mx-auto flex justify-between items-center">
//         <Link to="/">
//           <img src={logo} alt="Bhonsala Military School" width={320} />
//         </Link>

//         {/* Mobile Menu Toggle */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             className="relative z-50"
//           >
//             {mobileMenuOpen ? (
//               <X className="w-6 h-6" />
//             ) : (
//               <Menu className="w-6 h-6" />
//             )}
//           </button>
//         </div>

//         {/* Mobile Dropdown */}
//         <AnimatePresence>
//           {mobileMenuOpen && (
//             <motion.div
//               ref={dropdownRef}
//               initial={{ opacity: 0, x: "100%" }}
//               animate={{ opacity: 1, x: "0%" }}
//               exit={{ opacity: 0, x: "100%" }}
//               transition={{ duration: 0.3 }}
//               className="md:hidden absolute top-0 right-0 w-2/3 bg-white shadow-lg rounded-lg z-10"
//             >
//               <ul className="space-y-4 p-6">
//                 {navItems.map((item, index) => (
//                   <li key={index} className="relative">
//                     {item.subItems ? (
//                       <button
//                         onClick={() => toggleDropdown(index)}
//                         className="flex items-center justify-between w-full"
//                       >
//                         {item.label}
//                         <ChevronDown className="w-4 h-4 ml-2" />
//                       </button>
//                     ) : (
//                       <Link
//                         to={item.path}
//                         className="block"
//                         onClick={() => setMobileMenuOpen(false)}
//                       >
//                         {item.label}
//                       </Link>
//                     )}
//                     {item.subItems && openDropdown === index && (
//                       <ul className="mt-2 ml-4 space-y-2">
//                         {item.subItems.map((subItem, subIndex) => (
//                           <li key={subIndex} className="relative">
//                             {subItem.subItems ? (
//                               <button
//                                 onClick={() => toggleSubDropdown(subIndex)}
//                                 className="block px-4 py-2"
//                               >
//                                 {subItem.label}
//                                 <ChevronDown className="w-4 h-4 ml-2" />
//                               </button>
//                             ) : (
//                               <Link
//                                 to={subItem.path}
//                                 className="block px-4 py-2"
//                                 onClick={() => setMobileMenuOpen(false)}
//                               >
//                                 {subItem.label}
//                               </Link>
//                             )}
//                             {subItem.subItems &&
//                               openSubDropdown === subIndex && (
//                                 <ul className="mt-2 ml-4 space-y-2">
//                                   {subItem.subItems.map(
//                                     (nestedItem, nestedIndex) => (
//                                       <li key={nestedIndex}>
//                                         <Link
//                                           to={nestedItem.path}
//                                           className="block px-4 py-2"
//                                           onClick={() =>
//                                             setMobileMenuOpen(false)
//                                           }
//                                         >
//                                           {nestedItem.label}
//                                         </Link>
//                                       </li>
//                                     )
//                                   )}
//                                 </ul>
//                               )}
//                           </li>
//                         ))}
//                       </ul>
//                     )}
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Desktop Navigation */}
//         <ul className="md:flex md:space-x-1 hidden px-6 py-2 text-base font-medium">
//           {navItems.map((item, index) => (
//             <li key={index} className="relative px-4 py-2">
//               {item.subItems ? (
//                 <button
//                   onClick={() => {
//                     const now = Date.now();
//                     const isSameIndex = clickedIndex === index;
//                     const timeSinceLastClick = now - clickTime;

//                     if (!isSameIndex || timeSinceLastClick > 1500) {
//                       const defaultPath =
//                         item.label === "Admission"
//                           ? "/admission"
//                           : ""
//                           ? ""
//                           : "";
//                       navigate(item.path || defaultPath);
//                       setClickedIndex(index);
//                       setClickTime(now);
//                     } else {
//                       toggleDropdown(index);
//                       setClickedIndex(null);
//                     }
//                   }}
//                   className="flex items-center"
//                 >
//                   {item.label}
//                   <ChevronDown className="w-4 h-4 ml-2" />
//                 </button>
//               ) : (
//                 <Link to={item.path} className="block">
//                   {item.label}
//                 </Link>
//               )}

//               {/* Submenu */}
//               {item.subItems && openDropdown === index && (
//                 <ul className="absolute bg-white shadow-md rounded-md mt-2 w-48 z-50">
//                   {item.subItems.map((subItem, subIndex) => (
//                     <li key={subIndex} className="relative">
//                       {subItem.subItems ? (
//                         <>
//                           <button
//                             onClick={() => toggleSubDropdown(subIndex)}
//                             className="flex items-center w-full px-3.5 py-2"
//                           >
//                             {subItem.label}
//                             <ChevronDown className="w-4 h-4 ml-2" />
//                           </button>
//                           {openSubDropdown === subIndex && (
//                             <ul className="absolute bg-white shadow-md rounded-md ml-48 mt-0 w-48 z-50">
//                               {subItem.subItems.map(
//                                 (nestedItem, nestedIndex) => (
//                                   <li key={nestedIndex}>
//                                     <Link
//                                       to={nestedItem.path}
//                                       className="block px-4 py-2"
//                                     >
//                                       {nestedItem.label}
//                                     </Link>
//                                   </li>
//                                 )
//                               )}
//                             </ul>
//                           )}
//                         </>
//                       ) : (
//                         <Link to={subItem.path} className="block px-4 py-2">
//                           {subItem.label}
//                         </Link>
//                       )}
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// Navbar.jsx

// import { useState, useEffect, useRef } from "react";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { ChevronDown, Menu, X } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import { logo } from "../../public/assets/index";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const dropdownRef = useRef();

//   const [openDropdown, setOpenDropdown] = useState(null);
//   const [openSubDropdown, setOpenSubDropdown] = useState(null);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     setOpenDropdown(null);
//     setOpenSubDropdown(null);
//   }, [location.pathname]);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setOpenDropdown(null);
//         setOpenSubDropdown(null);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const toggleDropdown = (index) => {
//     setOpenDropdown(openDropdown === index ? null : index);
//     setOpenSubDropdown(null);
//   };

//   const toggleSubDropdown = (subIndex) => {
//     setOpenSubDropdown(openSubDropdown === subIndex ? null : subIndex);
//   };

//   const navItems = [
//     { label: "Home", path: "/" },
//     {
//       label: "About Us",
//       path: "/aboutus",
//       subItems: [
//         { label: "Vision", path: "/aboutus/vision" },
//         { label: "Mission", path: "/aboutus/mission" },
//         { label: "Management", path: "/aboutus/management" },
//         { label: "Staff", path: "/aboutus/staff" },
//         { label: "PTA", path: "/aboutus/pta" },
//         { label: "Commandant Desk", path: "/aboutus/commandantdesk" },
//         { label: "Principal Desk", path: "/aboutus/principaldesk" },
//       ],
//     },
//     {
//       label: "Admission",
//       path: null,
//       subItems: [
//         {
//           label: "Admission Process",
//           subItems: [
//             { label: "Secondary", path: "/admission/secondary" },
//             { label: "Junior College", path: "/admission/juniorcollege" },
//           ],
//         },
//         { label: "Fee Information", path: "/admission/feesInformation" },
//         { label: "General Rules", path: "/admission/generalrules" },
//         { label: "Application Form", path: "/admission/applicationform" },
//       ],
//     },
//     { label: "Achievements", path: "/achievement" },
//     { label: "Guest Visits", path: "/guestvisit" },
//     { label: "Alumni", path: "/alumni" },
//     {
//       label: "Gallery",
//       path: null,
//       subItems: [
//         { label: "Photo Gallery", path: "/gallery/photo" },
//         { label: "Video Gallery", path: "/gallery/video" },
//       ],
//     },
//     {
//       label: "Courses",
//       path: null,
//       subItems: [
//         { label: "PDC", path: "/courses/pdc" },
//         { label: "Guidelines", path: "/courses/guidelines" },
//         { label: "SMTC", path: "/courses/smtc" },
//       ],
//     },
//     {
//       label: "Others",
//       path: null,
//       subItems: [
//         { label: "Calendar", path: "/others/calendar" },
//         {
//           label: "E-Magazine",
//           path: null,
//           subItems: [
//             {
//               label: "Ramdandee 2023-2024",
//               path: "/others/emagazine/ramdandee",
//             },
//           ],
//         },
//       ],
//     },
//   ];

//   return (
//     <nav className="p-4 shadow-lg bg-white relative z-40" ref={dropdownRef}>
//       <div className="container mx-auto flex justify-between items-center">
//         <Link to="/">
//           <img src={logo} alt="Bhonsala Military School" width={320} />
//         </Link>

//         {/* Mobile Menu Toggle */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             className="relative z-50"
//           >
//             {mobileMenuOpen ? (
//               <X className="w-6 h-6" />
//             ) : (
//               <Menu className="w-6 h-6" />
//             )}
//           </button>
//         </div>

//         {/* Mobile Dropdown */}
//         <AnimatePresence>
//           {mobileMenuOpen && (
//             <motion.div
//               ref={dropdownRef}
//               initial={{ opacity: 0, x: "100%" }}
//               animate={{ opacity: 1, x: "0%" }}
//               exit={{ opacity: 0, x: "100%" }}
//               transition={{ duration: 0.3 }}
//               className="md:hidden absolute top-0 right-0 w-2/3 bg-white shadow-lg rounded-lg z-10"
//             >
//               <ul className="space-y-4 p-6">
//                 {navItems.map((item, index) => (
//                   <li key={index} className="relative">
//                     {item.subItems ? (
//                       <button
//                         onClick={() => toggleDropdown(index)}
//                         className="flex items-center justify-between w-full"
//                       >
//                         {item.label}
//                         <ChevronDown className="w-4 h-4 ml-2" />
//                       </button>
//                     ) : (
//                       <Link
//                         to={item.path}
//                         className="block"
//                         onClick={() => setMobileMenuOpen(false)}
//                       >
//                         {item.label}
//                       </Link>
//                     )}
//                     {item.subItems && openDropdown === index && (
//                       <ul className="mt-2 ml-4 space-y-2">
//                         {item.subItems.map((subItem, subIndex) => (
//                           <li key={subIndex} className="relative">
//                             {subItem.subItems ? (
//                               <button
//                                 onClick={() => toggleSubDropdown(subIndex)}
//                                 className="block px-4 py-2"
//                               >
//                                 {subItem.label}
//                                 <ChevronDown className="w-4 h-4 ml-2" />
//                               </button>
//                             ) : (
//                               <Link
//                                 to={subItem.path}
//                                 className="block px-4 py-2"
//                                 onClick={() => setMobileMenuOpen(false)}
//                               >
//                                 {subItem.label}
//                               </Link>
//                             )}
//                             {subItem.subItems &&
//                               openSubDropdown === subIndex && (
//                                 <ul className="mt-2 ml-4 space-y-2">
//                                   {subItem.subItems.map(
//                                     (nestedItem, nestedIndex) => (
//                                       <li key={nestedIndex}>
//                                         <Link
//                                           to={nestedItem.path}
//                                           className="block px-4 py-2"
//                                           onClick={() =>
//                                             setMobileMenuOpen(false)
//                                           }
//                                         >
//                                           {nestedItem.label}
//                                         </Link>
//                                       </li>
//                                     )
//                                   )}
//                                 </ul>
//                               )}
//                           </li>
//                         ))}
//                       </ul>
//                     )}
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Desktop Navigation */}
//         <ul className="md:flex md:space-x-1 hidden px-6 py-2 text-base font-medium">
//           {navItems.map((item, index) => (
//             <li key={index} className="relative px-4 py-2">
//               {item.subItems ? (
//                 <button
//                   onClick={() => {
//                     if (item.path) {
//                       navigate(item.path);
//                     } else {
//                       toggleDropdown(index);
//                     }
//                   }}
//                   className="flex items-center"
//                 >
//                   {item.label}
//                   <ChevronDown className="w-4 h-4 ml-2" />
//                 </button>
//               ) : (
//                 <Link to={item.path} className="block">
//                   {item.label}
//                 </Link>
//               )}

//               {item.subItems && openDropdown === index && (
//                 <ul className="absolute bg-white shadow-md rounded-md mt-2 w-48 z-50">
//                   {item.subItems.map((subItem, subIndex) => (
//                     <li key={subIndex} className="relative">
//                       {subItem.subItems ? (
//                         <>
//                           <button
//                             onClick={() => toggleSubDropdown(subIndex)}
//                             className="flex items-center w-full px-3.5 py-2"
//                           >
//                             {subItem.label}
//                             <ChevronDown className="w-4 h-4 ml-2" />
//                           </button>
//                           {openSubDropdown === subIndex && (
//                             <ul className="absolute bg-white shadow-md rounded-md ml-48 mt-0 w-48 z-50">
//                               {subItem.subItems.map(
//                                 (nestedItem, nestedIndex) => (
//                                   <li key={nestedIndex}>
//                                     <Link
//                                       to={nestedItem.path}
//                                       className="block px-4 py-2"
//                                     >
//                                       {nestedItem.label}
//                                     </Link>
//                                   </li>
//                                 )
//                               )}
//                             </ul>
//                           )}
//                         </>
//                       ) : (
//                         <Link to={subItem.path} className="block px-4 py-2">
//                           {subItem.label}
//                         </Link>
//                       )}
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { logo } from "../../public/assets/index";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef();

  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setOpenDropdown(null);
    setOpenSubDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
        setOpenSubDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (index, item) => {
    const currentPath = location.pathname;

    if (item.path && openDropdown !== index && currentPath !== item.path) {
      navigate(item.path);
      setOpenDropdown(null);
    } else {
      setOpenDropdown(openDropdown === index ? null : index);
    }

    setOpenSubDropdown(null);
  };

  const toggleSubDropdown = (subIndex) => {
    setOpenSubDropdown(openSubDropdown === subIndex ? null : subIndex);
  };

  const navItems = [
    { label: "Home", path: "/" },
    {
      label: "About Us",
      path: "/aboutus",
      subItems: [
        { label: "Vision", path: "/aboutus/vision" },
        { label: "Mission", path: "/aboutus/mission" },
        { label: "Management", path: "/aboutus/management" },
        { label: "Staff", path: "/aboutus/staff" },
        { label: "PTA", path: "/aboutus/pta" },
        { label: "Commandant Desk", path: "/aboutus/commandantdesk" },
        { label: "Principal Desk", path: "/aboutus/principaldesk" },
      ],
    },
    {
      label: "Admission",
      path: "/admission",
      subItems: [
        {
          label: "Admission Process",
          subItems: [
            { label: "Secondary", path: "/admission/secondary" },
            { label: "Junior College", path: "/admission/juniorcollege" },
          ],
        },
        { label: "Fee Information", path: "/admission/feesInformation" },
        { label: "General Rules", path: "/admission/generalrules" },
        { label: "Application Form", path: "/admission/applicationform" },
      ],
    },
    { label: "Achievements", path: "/achievement" },
    { label: "Guest Visits", path: "/guestvisit" },
    { label: "Alumni", path: "/alumni" },
    {
      label: "Gallery",
      subItems: [
        { label: "Photo Gallery", path: "/gallery/photo" },
        { label: "Video Gallery", path: "/gallery/video" },
      ],
    },
    {
      label: "Courses",
      subItems: [
        { label: "PDC", path: "/courses/pdc" },
        { label: "Guidelines", path: "/courses/guidelines" },
        { label: "SMTC", path: "/courses/smtc" },
      ],
    },
    {
      label: "Activities",
      subItems: [
        { label: "Calendar", path: "/activities/calendar" },
        {
          label: "E-Magazine",
          path: "/activities/emagazine",
          subItems: [
            {
              label: "Ramdandee 2023-2024",
              path: "/activities/ramdandee",
            },
          ],
        },
      ],
    },
    { label: "Blog & Updates", path: "/blog" },
  ];

  return (
    <nav className="p-4 shadow-lg bg-white relative z-40" ref={dropdownRef}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="Bhonsala Military School" width={320} />
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="relative z-50"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              ref={dropdownRef}
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: "0%" }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3 }}
              className="md:hidden absolute top-0 right-0 w-2/3 bg-white shadow-lg rounded-lg z-10"
            >
              <ul className="space-y-4 p-6">
                {navItems.map((item, index) => (
                  <li key={index} className="relative">
                    {item.subItems ? (
                      <button
                        onClick={() => toggleDropdown(index, item)}
                        className="flex items-center justify-between w-full"
                      >
                        {item.label}
                        <ChevronDown className="w-4 h-4 ml-2" />
                      </button>
                    ) : (
                      <Link
                        to={item.path}
                        className="block"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                    {item.subItems && openDropdown === index && (
                      <ul className="mt-2 ml-4 space-y-2">
                        {item.subItems.map((subItem, subIndex) => (
                          <li key={subIndex} className="relative">
                            {subItem.subItems ? (
                              <button
                                onClick={() => toggleSubDropdown(subIndex)}
                                className="block px-4 py-2"
                              >
                                {subItem.label}
                                <ChevronDown className="w-4 h-4 ml-2" />
                              </button>
                            ) : (
                              <Link
                                to={subItem.path}
                                className="block px-4 py-2"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {subItem.label}
                              </Link>
                            )}
                            {subItem.subItems &&
                              openSubDropdown === subIndex && (
                                <ul className="mt-2 ml-4 space-y-2">
                                  {subItem.subItems.map(
                                    (nestedItem, nestedIndex) => (
                                      <li key={nestedIndex}>
                                        <Link
                                          to={nestedItem.path}
                                          className="block px-4 py-2"
                                          onClick={() =>
                                            setMobileMenuOpen(false)
                                          }
                                        >
                                          {nestedItem.label}
                                        </Link>
                                      </li>
                                    )
                                  )}
                                </ul>
                              )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop Navigation */}
        <ul className="md:flex md:space-x-1 hidden px-6 py-2 text-base font-medium whitespace-nowrap ">
          {navItems.map((item, index) => (
            <li key={index} className="relative px-4 py-2">
              {item.subItems ? (
                <button
                  onClick={() => toggleDropdown(index, item)}
                  className="flex items-center"
                >
                  {item.label}
                  <ChevronDown className="w-4 h-4 ml-2" />
                </button>
              ) : (
                <Link to={item.path} className="block">
                  {item.label}
                </Link>
              )}

              {item.subItems && openDropdown === index && (
                <ul className="absolute bg-white shadow-md rounded-md mt-2 w-48 z-50">
                  {item.subItems.map((subItem, subIndex) => (
                    <li key={subIndex} className="relative">
                      {subItem.subItems ? (
                        <>
                          <button
                            onClick={() => toggleSubDropdown(subIndex)}
                            className="flex items-center w-full px-3.5 py-2"
                          >
                            {subItem.label}
                            <ChevronDown className="w-4 h-4 ml-2" />
                          </button>
                          {openSubDropdown === subIndex && (
                            <ul className="absolute bg-white shadow-md rounded-md ml-48 mt-0 w-48 z-50">
                              {subItem.subItems.map(
                                (nestedItem, nestedIndex) => (
                                  <li key={nestedIndex}>
                                    <Link
                                      to={nestedItem.path}
                                      className="block px-4 py-2"
                                    >
                                      {nestedItem.label}
                                    </Link>
                                  </li>
                                )
                              )}
                            </ul>
                          )}
                        </>
                      ) : (
                        <Link to={subItem.path} className="block px-4 py-2">
                          {subItem.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
