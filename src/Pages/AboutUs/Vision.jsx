import React from "react";
import { Card, Typography } from "antd";

const { Title, Paragraph } = Typography;

const visionMissionData = {
  title: "Bhonsala Military School, Nashik",
  aim: `The aim of Bhonsala Military School, Nashik is to prepare the students to appear for the UPSC (NDA) Examination, SSB Interview and to build up physical and mental abilities in them, which are essential for them to become an officer in the Defence Services.`,
  source: "",
};

const Vision = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
      <Card className="max-w-4xl w-full shadow-lg rounded-2xl p-6 bg-white">
        <Typography>
          <Title level={2} className="text-center text-blue-900">
            Vision & Mission
          </Title>
          <Title level={4} className="text-center text-gray-700">
            {visionMissionData.title}
          </Title>
          <Paragraph className="text-lg text-gray-800 mt-4">
            {visionMissionData.aim}
          </Paragraph>
          <Paragraph className="mt-4 text-right text-blue-600 text-sm">
            <a
              href={visionMissionData.source}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Source
            </a>
          </Paragraph>
        </Typography>
      </Card>
    </div>
  );
};

export default Vision;
