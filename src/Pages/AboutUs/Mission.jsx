import React from "react";
import { Card, Typography, List } from "antd";
import PageSection from "../../components/PageSection/PageSection";
import mission from "../../constants/AboutUs/missionData";
const { Title, Paragraph, Text } = Typography;


const Mission = () => {
  return (
    <div>
      <PageSection page="mission" />
      <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
        <Card className="max-w-5xl w-full bg-white shadow-lg rounded-2xl p-6">
          <Typography>
            <Title level={2} className="text-center text-blue-900">
              Mission
            </Title>

            <Paragraph className="text-lg text-gray-800 mt-4">
              {missionData.overview}
            </Paragraph>

            <List
              className="mt-4"
              size="large"
              dataSource={missionData.points}
              renderItem={(item, index) => (
                <List.Item className="border-b border-gray-200">
                  <Text className="text-gray-700">
                    <strong>{index + 1}.</strong> {item}
                  </Text>
                </List.Item>
              )}
            />

            <Title level={4} className="mt-8 text-blue-800">
              School Motto
            </Title>
            <Paragraph className="italic text-gray-700">
              {missionData.motto}
            </Paragraph>

            <Paragraph className="mt-6 text-gray-800">
              {missionData.conclusion}
            </Paragraph>

            <Paragraph className="mt-4 text-gray-700">
              {missionData.note}
            </Paragraph>

            <Paragraph className="mt-6 text-right text-blue-600 text-sm">
              <a
                href={missionData.source}
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

export default Mission;
