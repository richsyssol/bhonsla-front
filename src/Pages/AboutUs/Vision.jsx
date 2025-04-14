import React from "react";
import { Card, Typography } from "antd";
import PageSection from "../../components/PageSection/PageSection";
import visionData from "../../constants/AboutUs/visionData";
const { Title, Paragraph } = Typography;

const Vision = () => {
  return (
    <div>
      <PageSection page="vision" />

      <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
        <Card className="max-w-4xl w-full shadow-lg rounded-2xl p-6 bg-white">
          <Typography>
            <Title level={2} className="text-center text-blue-900">
              Vision & Mission
            </Title>
            <Title level={4} className="text-center text-gray-700">
              {visionData.title}
            </Title>
            <Paragraph className="text-lg text-gray-800 mt-4">
              {visionData.aim}
            </Paragraph>
            <Paragraph className="mt-4 text-right text-blue-600 text-sm">
              <a
                href={visionData.source}
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
    </div>
  );
};

export default Vision;
