import React from "react";
import { Card } from "antd";
import { founderData, schoolData } from "../../constants/aboutus";

const Aboutus = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Founder Section */}
        <Card
          bodyStyle={{ padding: 0 }}
          className="shadow-xl rounded-2xl overflow-hidden"
        >
          <div className="flex flex-row items-start">
            <img
              src={founderData.image}
              alt="Founder"
              className="w-1/3 h-full object-cover"
            />
            <div className="p-6 w-2/3 space-y-4 text-gray-700">
              <h2 className="text-3xl font-bold text-blue-900">
                {founderData.title}
              </h2>
              {founderData.content.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>
        </Card>

        {/* School Section */}
        <Card
          bodyStyle={{ padding: 0 }}
          className="shadow-xl rounded-2xl overflow-hidden"
        >
          <div className="flex flex-row items-center">
            <img
              src={schoolData.image}
              alt="School"
              className="w-1/3 h-full object-cover"
            />
            <div className="p-6 w-2/3 space-y-4 text-gray-700">
              <h2 className="text-3xl font-bold text-blue-900">
                {schoolData.title}
              </h2>
              {schoolData.content.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Aboutus;
