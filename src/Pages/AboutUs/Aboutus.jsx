import React from "react";
import { Card } from "antd";
import { founderData, schoolData } from "../../constants/AboutUs/aboutus";
import PageSection from "../../components/PageSection/PageSection";

const Aboutus = () => {
  return (
    <div>
      <PageSection page={Aboutus} />
      <div className="min-h-screen bg-gray-100 p-4 md:p-8">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Founder Section */}
          <Card
            bodyStyle={{ padding: 0 }}
            className="shadow-xl rounded-2xl overflow-hidden"
          >
            <div className="flex flex-col md:flex-row items-start">
              <img
                src={founderData.image}
                alt="Founder"
                className="w-full md:w-1/3 h-64 md:h-auto object-cover"
              />
              <div className="p-4 md:p-6 w-full md:w-2/3 space-y-4 text-gray-700">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
                  {founderData.title}
                </h2>
                {founderData.content.map((para, idx) => (
                  <p key={idx} className="text-sm md:text-base">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </Card>

          {/* School Section */}
          <Card
            bodyStyle={{ padding: 0 }}
            className="shadow-xl rounded-2xl overflow-hidden"
          >
            <div className="flex flex-col md:flex-row  items-start">
              <img
                src={schoolData.image}
                alt="School"
                className="w-full md:w-1/3 h-64 md:h-auto mt-5 object-cover"
              />
              <div className="p-4 md:p-6 w-full md:w-2/3 space-y-4 text-gray-700">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
                  {schoolData.title}
                </h2>
                {schoolData.content.map((para, idx) => (
                  <p key={idx} className="text-sm md:text-base">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
