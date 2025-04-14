import React from "react";
import Herodata from "../../constants/PageSection/pagesection";
import { gallery7 } from "../../../public/assets/index";

const PageSection = ({ page }) => {
  const data = Herodata[page] || Herodata.aboutUs;

  return (
    <div
      className="relative h-[300px] flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${gallery7})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 text-center px-6 lg:px-20">
        <h1 className="text-5xl lg:text-7xl font-extrabold drop-shadow-lg">
          {data.title}
        </h1>
        <p className="text-lg lg:text-xl mt-4 max-w-2xl mx-auto font-light drop-shadow-lg">
          {data.subtitle}
        </p>
      </div>
    </div>
  );
};

export default PageSection;
