// // src/Pages/Blog&Updates/BlogDetails.jsx

// import React from "react";
// import { useParams } from "react-router-dom";
// import { Blogs } from "../../constants/Blog&updates/Blogs";
// import { CalendarDays } from "lucide-react";
// import { motion } from "framer-motion";

// const BlogDetails = () => {
//   const { id } = useParams();
//   const post = Blogs.find((p) => p.id.toString() === id);

//   if (!post) {
//     return <div className="p-6">Blog not found.</div>;
//   }

//   return (
//     <div className="p-6 md:p-12 bg-gradient-to-br from-orange-50 to-white min-h-screen">
//       <motion.div
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-6"
//       >
//         <img
//           src={post.image}
//           alt={post.title}
//           className="w-full h-80 object-cover rounded-xl mb-6"
//         />
//         <h1 className="text-3xl font-bold text-orange-900 mb-4">
//           {post.title}
//         </h1>
//         <p className="text-sm text-gray-600 mb-4 flex items-center gap-2">
//           <CalendarDays className="w-4 h-4" />
//           {post.date}
//         </p>
//         <p className="text-gray-700 leading-relaxed">{post.description}</p>
//       </motion.div>
//     </div>
//   );
// };

// export default BlogDetails;

// src/Pages/Blog&Updates/BlogDetails.jsx

// src/Pages/Blog&Updates/BlogDetails.jsx

import React from "react";
import { useParams } from "react-router-dom";
import { Blogs } from "../../constants/Blog&updates/Blogs";
import { CalendarDays } from "lucide-react";
import { motion } from "framer-motion";

const BlogDetails = () => {
  const { id } = useParams();
  const post = Blogs.find((p) => p.id.toString() === id);

  if (!post) {
    return <div className="p-6 text-red-600">Blog not found.</div>;
  }

  const container = {
    hidden: { opacity: 0, scale: 0.95, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.2 },
    }),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white p-6 md:p-12">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row transform transition-transform duration-500"
      >
        {/* Image Side */}
        <div className="md:w-1/2 overflow-hidden group relative">
          <motion.img
            src={post.image}
            alt={post.title}
            className="h-96 md:h-full w-full object-cover transform group-hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:opacity-0 transition-opacity duration-500" />
        </div>

        {/* Content Side */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <motion.h1
            custom={0}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-4xl font-extrabold text-orange-900 mb-4"
          >
            {post.title}
          </motion.h1>

          <motion.p
            custom={1}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-sm text-gray-500 flex items-center gap-2 mb-6"
          >
            <CalendarDays className="w-4 h-4" />
            {post.date}
          </motion.p>

          <motion.p
            custom={2}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-gray-700 leading-relaxed text-md"
          >
            {post.description}
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default BlogDetails;
