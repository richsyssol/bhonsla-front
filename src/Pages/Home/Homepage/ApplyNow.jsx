import React from "react";
import { Link } from "react-router-dom";

const ApplyNow = () => {
  return (
    <div className="w-full flex justify-center px-4 sm:px-6 md:px-12 lg:px-36 mt-6">
      <div className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Apply Now */}
        <div className="flex justify-center">
          <Link to="/applynow" className="w-full">
            <div className="flex flex-col items-center justify-center rounded-tl-[15px] sm:rounded-tl-[25px] py-6 sm:py-8 border-b-[6px] sm:border-b-[12px] border-b-blue-400 bg-white shadow-md w-full">
              <span className="text-3xl">✅</span>
              <p className="mt-2 text-black font-bold text-sm sm:text-base">
                APPLY NOW
              </p>
            </div>
          </Link>
        </div>

        {/* Request Info */}
        <div className="flex justify-center">
          <div className="flex flex-col items-center justify-center py-6 sm:py-8 border-b-[6px] sm:border-b-[12px] border-b-amber-500 bg-white shadow-md w-full">
            <span className="text-3xl">ℹ️</span>
            <p className="mt-2 text-black font-bold text-sm sm:text-base">
              REQUEST INFO
            </p>
          </div>
        </div>

        {/* Schedule a Visit */}
        <div className="flex justify-center">
          <div className="flex flex-col items-center justify-center rounded-tr-[15px] sm:rounded-tr-[25px] py-6 sm:py-8 border-b-[6px] sm:border-b-[12px] border-b-red-700 bg-white shadow-md w-full">
            <span className="text-3xl">📅</span>
            <p className="mt-2 text-black font-bold text-sm sm:text-base">
              SCHEDULE A VISIT
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyNow;
