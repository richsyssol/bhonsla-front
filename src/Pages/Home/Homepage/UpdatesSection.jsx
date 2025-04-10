// import { motion } from "framer-motion";

// import updates from "../../../constants/NewsUpdated/Updates";

// const UpdatesSection = () => {
//   return (
//     <div className="bg-[#FFF4E4] py-10 px-4 md:px-10 border- border- border-gray-300">
//       <h2 className="text-4xl font-bold text-center mb-6 text-yellow-700">
//         News & Updates
//       </h2>

//       <motion.div
//         className="overflow-hidden"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <marquee behavior="scroll" direction="left" scrollamount="5">
//           <div className="flex gap-6">
//             {updates.map((update) => (
//               <div
//                 key={update.id}
//                 className="min-w-[450px] p-4 rounded-lg shadow hover:shadow-md transition duration-300 mx-2"
//               >
//                 <a
//                   href={update.path}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-lg font-semibold text-blue-600 hover:underline flex items-center gap-2"
//                 >
//                   📢 {update.title}
//                   {update.isNew && (
//                     <span className="text-red-600 text-xs font-bold animate-pulse bg-yellow-600 px-2 py-0.5 rounded-full">
//                       🌟 NEW
//                     </span>
//                   )}
//                 </a>
//                 <p className="text-sm text-gray-500 mt-1">{update.date}</p>
//               </div>
//             ))}
//           </div>
//         </marquee>
//       </motion.div>
//     </div>
//   );
// };

// export default UpdatesSection;

import { motion } from "framer-motion";
import updates from "../../../constants/NewsUpdated/Updates";

const UpdatesSection = () => {
  return (
    <div className="bg-[#FFF4E4] py-10 px-4 md:px-10 border border-gray-300">
      <h2 className="text-4xl font-bold text-center mb-1 text-yellow-700">
        News & Updates
      </h2>

      <motion.div
        className="overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <marquee behavior="scroll" direction="left" scrollamount="5">
          <div className="flex gap-6">
            {updates.map((update) => (
              <div
                key={update.id}
                className="min-w-[450px] p-4 rounded-lg shadow hover:shadow-md transition duration-300 mx-2"
              >
                {update.isExternal ? (
                  <a
                    href={update.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-blue-600 hover:underline flex items-center gap-2"
                    {...(update.download && { download: "" })} // ✅ Enables download
                  >
                    📢 {update.title}
                    {update.isNew && (
                      <span className="text-red-600 text-xs font-bold animate-pulse bg-yellow-600 px-2 py-0.5 rounded-full">
                        🌟 NEW
                      </span>
                    )}
                  </a>
                ) : (
                  <a
                    href={update.path}
                    className="text-lg font-semibold text-blue-600 hover:underline flex items-center gap-2"
                  >
                    📢 {update.title}
                    {update.isNew && (
                      <span className="text-red-600 text-xs font-bold animate-pulse bg-yellow-600 px-2 py-0.5 rounded-full">
                        🌟 NEW
                      </span>
                    )}
                  </a>
                )}
                <p className="text-sm text-gray-500 mt-1">{update.date}</p>
              </div>
            ))}
          </div>
        </marquee>
      </motion.div>
    </div>
  );
};

export default UpdatesSection;
