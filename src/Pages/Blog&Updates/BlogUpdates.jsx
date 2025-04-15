// src/Pages/Blog&Updates/Blog.jsx

import React from "react";
import { BlogReadmore } from "../../constants/Blog&updates/BlogReadmore"; // Updated to point to your constants file
import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BlogUpdates = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 md:p-12 bg-gradient-to-br from-orange-50 to-white min-h-screen">
      <motion.h1
        className="text-4xl font-bold mb-10 text-center text-orange-900"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        📚 Latest Updates & Blog
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {BlogReadmore.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden"
          >
            <img
              src={post.image}
              alt={post.title}
              className="h-60 w-full object-cover"
            />

            <div className="p-5 flex flex-col flex-grow">
              <h2 className="text-xl font-bold text-orange-800 mb-2">
                {post.title}
              </h2>

              <p className="text-sm text-gray-600 mb-3 flex items-center gap-2">
                <CalendarDays className="w-4 h-4" />
                {post.date}
              </p>

              <p className="text-gray-700 text-sm flex-grow">
                {post.description.length > 120
                  ? post.description.slice(0, 120) + "..."
                  : post.description}
              </p>

              <button
                onClick={() => navigate(`/blogdetails/${post.id}`)}
                className="mt-4 self-start text-orange-700 hover:text-orange-900 font-medium text-sm transition"
              >
                Read More →
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BlogUpdates;
