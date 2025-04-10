import React from "react";
import { Card, Typography, List } from "antd";

const { Title, Paragraph, Text } = Typography;

const missionData = {
  overview:
    "To have a dedicated and experienced teaching and administrative staff, required information and up to the mark daily administration to achieve the set vision.",
  points: [
    "Making tomorrow's leaders through Academic Excellence, Character Building, Military Training, and Personality Development is our primary mission.",
    "Besides taking up careers in Armed Forces, we also encourage our cadets to opt for other competitive careers, in tune with their natural aptitude. The school conducts extra coaching classes for NDA entrance exam from a renowned agency. We intend to create Leaders of substance who can excel in all walks of life.",
    "Our discipline and training is designed especially to help those cadets who are keen on joining the Defense Services. However, the same training helps other cadets to build a uniquely balanced Mental-Physical ability whatever be their career choice. Our training equips them with the necessary Agility and Alertness, Physical and Mental competence needed to excel and leave their mark in the fiercely competitive world ahead.",
  ],
  motto:
    'A person having four vedas (knowledge) in front (to guide him), a bow and arrows (power) at his back (to back him) has a combination of "Brahmyam" and "Kshatram" and hence he is capable of defeating the enemies either by "Shap" (Power of Knowledge) or "Shar" (Knowledge of Power)',
  conclusion:
    'Thus, the aim of the school is to impart "Power of knowledge" and "Knowledge of Power" to the youth. And hence the school gives emphasis on both, academic and military training.',
  note: `Since our aim is to inculcate military virtues in the youth in general, it is not obligatory on part of the students of the school to join the services. However, those who are really willing to join the noble profession of "Arms" will certainly find our training useful towards their aim. Whereas the rest will find themselves mentally and physically fit to pursue any career in the present competitive world.`,
  source: "https://bms.bhonsala.in//Encyc/2019/11/29/OUR-MISSION.html",
};

const Mission = () => {
  return (
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
  );
};

export default Mission;
