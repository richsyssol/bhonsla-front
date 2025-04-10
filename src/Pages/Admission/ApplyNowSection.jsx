import React from "react";
import AcademyBanner from "./AcadmyBanner";
import { students4 } from "../../../public/assets/index";
import FAQSection from "./FAQSection";

function ApplyNowSection() {
  const handleButton = () => {
    const formSection = document.getElementById("admission-form");

    if (formSection) {
      const yOffset = -300;
      const y =
        formSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-blue-400 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center px-4 md:px-16 gap-8">
        {/* Text Content */}
        <div className="text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            APPLY FOR ADMISSION
          </h1>
          <p className="text-base md:text-lg mb-6">
            Your journey at one of California’s top boarding schools begins
            here. Army and Navy Academy propels students toward academic and
            personal excellence while instilling virtues that will help young
            men to succeed in college and beyond. The Office of Admission is
            here to help you make your school choice through personalized campus
            tours and consultations.
          </p>
          <button
            className="px-6 py-2 bg-gray-200 text-black font-semibold rounded-full"
            onClick={handleButton}
          >
            BEGIN APPLICATION
          </button>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={students4}
            alt="photo"
            className="w-full max-w-md rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
}

export default ApplyNowSection;
