import React, { useState } from "react";
import { Link } from "react-router-dom";
//import { demovideo } from "../../../assets";
//import { DemoVideo } from "../../../../public/assets";

function FrontSection() {
  const [isModalOpens, setIsModalOpens] = useState(false);

  return (
    <div className="relative w-full h-[65vh] overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="s" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Foreground Content */}
      <div className="relative z-20 flex items-center h-full px-4 md:px-10">
        <div className="max-w-lg text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Power of Knowledge, Knowledge of Power
          </h1>
          <p className="my-4 text-sm sm:text-base md:text-lg">
            Bhonsala Military School, Nasik, was founded by Dr. Balkrishna
            Shivramji Moonje in 1937 to promote military training for Indian
            youth. It started with 90 students at Surgana Palace. H.H. Shriman
            Jivajirao Scindia inaugurated the main building, and Sir Roger
            Lumley laid its foundation stone. The school is now a leading
            residential institution and a center for military education. In
            1995, it joined the Indian Public Schools Conference.
          </p>
          <button
            onClick={() => setIsModalOpens(true)}
            className="mt-4 px-6 py-2 bg-gray-200 text-black font-semibold rounded-full"
          >
            WATCH VIDEO
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpens && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
          <div className="relative w-full max-w-2xl h-[40vh] sm:h-[50vh] md:h-[60vh] bg-white rounded-lg overflow-hidden shadow-lg">
            {/* Close Button */}
            <button
              className="absolute top-2 right-3 text-black text-2xl font-bold z-10"
              onClick={() => setIsModalOpens(false)}
            >
              &times;
            </button>
            {/* Local Video */}
            <video className="w-full h-full object-contain" controls autoPlay>
              <source src="" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
}

export default FrontSection;
