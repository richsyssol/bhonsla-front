import React from "react";
import { Card } from "antd";
import { students3 } from "../../../public/assets/index"; // Make sure this image path resolves correctly

const AcademyBanner = () => {
  return (
    <div className="bg-gray-100 p-4 sm:p-6 md:p-8 rounded-lg w-full">
      <Card className="shadow-md p-0 overflow-hidden border-none">
        <div className="flex flex-col md:flex-row">
          {/* Left Image */}
          <div className="w-full md:w-1/2">
            <img
              src={students3}
              alt="Cadets at Army and Navy Academy"
              className="w-full h-full object-cover"
              style={{ minHeight: "250px" }}
            />
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-gray-800">
              SUCCESS IN YOUNG MEN
            </h1>

            <p className="text-gray-700 leading-relaxed mb-4 text-base sm:text-lg md:text-xl">
              At Army and Navy Academy,{" "}
              <strong className="text-black font-semibold">
                academic excellence
              </strong>{" "}
              is only the tip of the iceberg. Our dynamic classes and
              evidence-based approach to teaching boys are just part of what
              makes us a nationally recognized school for boys.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4 text-base sm:text-lg md:text-xl">
              Outside of the classroom, our students thrive in a highly
              structured environment that promotes accountability, leadership,
              and self-discipline. From challenging and rewarding{" "}
              <strong className="text-black font-semibold">athletics</strong> to
              an exceptional range of{" "}
              <strong className="text-black font-semibold">clubs</strong> and
              extracurricular activities, every day at the Academy is an
              extraordinary adventure.
            </p>

            <p className="text-gray-700 leading-relaxed font-medium text-base sm:text-lg md:text-xl">
              Graduates of the Academy are young men of virtuous character
              well-poised to achieve in college and far beyond.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AcademyBanner;
