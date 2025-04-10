// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import {
//   BookOpen,
//   GraduationCap,
//   Monitor,
//   BedDouble,
//   Film,
//   Utensils,
//   HeartPulse,
//   PhoneCall,
// } from "lucide-react";

// const facilities = [
//   { id: 1, name: "Library", icon: BookOpen, link: "/facilities/library" },
//   {
//     id: 2,
//     name: "Scholarship",
//     icon: GraduationCap,
//     link: "/facilities/scholarship",
//   },
//   { id: 3, name: "Computer", icon: Monitor, link: "/facilities/computer" },
//   { id: 4, name: "Hostel", icon: BedDouble, link: "/facilities/hostel" },
//   { id: 5, name: "Cinema", icon: Film, link: "/facilities/cinema" },
//   { id: 6, name: "Mess", icon: Utensils, link: "/facilities/mess" },
//   {
//     id: 7,
//     name: "Health Centre",
//     icon: HeartPulse,
//     link: "/facilities/health-centre",
//   },
//   { id: 8, name: "Telephone", icon: PhoneCall, link: "/facilities/telephone" },
// ];

// const FacilitiesSection = () => {
//   return (
//     <div className="py-12 bg-white px-4 md:px-10">
//       <h2 className="text-3xl font-bold text-center mb-10">Facilities</h2>
//       <motion.div
//         className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         transition={{ staggerChildren: 0.15 }}
//         variants={{
//           visible: { transition: { staggerChildren: 0.2 } },
//           hidden: {},
//         }}
//       >
//         {facilities.map(({ id, name, icon: Icon, link }) => (
//           <motion.div
//             key={id}
//             className="bg-blue-50 hover:bg-blue-100 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
//             variants={{
//               hidden: { opacity: 0, y: 20 },
//               visible: { opacity: 1, y: 0 },
//             }}
//             whileHover={{ scale: 1.05 }}
//           >
//             <Link to={link} className="flex flex-col items-center space-y-3">
//               <Icon className="text-blue-600" size={36} />
//               <p className="text-lg font-semibold text-gray-800">{name}</p>
//             </Link>
//           </motion.div>
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// export default FacilitiesSection;

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  BookOpen,
  GraduationCap,
  Monitor,
  BedDouble,
  Film,
  Utensils,
  HeartPulse,
  PhoneCall,
} from "lucide-react";

const facilities = [
  {
    id: 1,
    name: "Library",
    icon: BookOpen,
    link: "/facilities/library",
    color: "text-purple-600",
  },
  {
    id: 2,
    name: "Scholarship",
    icon: GraduationCap,
    link: "/facilities/scholarship",
    color: "text-yellow-500",
  },
  {
    id: 3,
    name: "Computer",
    icon: Monitor,
    link: "/facilities/computer",
    color: "text-green-500",
  },
  {
    id: 4,
    name: "Hostel",
    icon: BedDouble,
    link: "/facilities/hostel",
    color: "text-red-500",
  },
  {
    id: 5,
    name: "Cinema",
    icon: Film,
    link: "/facilities/cinema",
    color: "text-pink-500",
  },
  {
    id: 6,
    name: "Mess",
    icon: Utensils,
    link: "/facilities/mess",
    color: "text-orange-500",
  },
  {
    id: 7,
    name: "Health Centre",
    icon: HeartPulse,
    link: "/facilities/health-centre",
    color: "text-rose-500",
  },
  {
    id: 8,
    name: "Telephone",
    icon: PhoneCall,
    link: "/facilities/telephone",
    color: "text-cyan-600",
  },
];

const FacilitiesSection = () => {
  return (
    <div className="py-12 bg-white px-4 md:px-10">
      <h2 className="text-4xl font-extrabold text-center mb-10 text-yellow-700">
        Facilities
      </h2>
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.15 }}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
          hidden: {},
        }}
      >
        {facilities.map(({ id, name, icon: Icon, link, color }) => (
          <motion.div
            key={id}
            className="bg-blue-50 hover:bg-blue-100 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
          >
            <Link to={link} className="flex flex-col items-center space-y-3">
              <Icon className={`${color}`} size={36} />
              <p className="text-lg font-semibold text-gray-800">{name}</p>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default FacilitiesSection;
