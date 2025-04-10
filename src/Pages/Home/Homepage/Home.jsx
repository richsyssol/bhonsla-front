import React from "react";
import FrontSection from "./FrontSection";
import Services from "./Services";
import Modal from "../../../components/Modal/CustomModal";
import FrontIntro from "./FrontIntro";
import ApplyNow from "./ApplyNow";
import UpcomingEvents from "./UpcomingEvents";
import OurFundamentals from "./OurFundamentals";
import InstagramFeed from "./InstagramFeed";
import UpdatesSection from "./UpdatesSection";
import FacilitiesSection from "./FacilitiesSection";

const Home = () => {
  return (
    <div>
      <FrontSection />
      <UpdatesSection />
      <ApplyNow />

      <FrontIntro />
      <UpcomingEvents />
      <OurFundamentals />
      <Modal />
      <Services />
      <FacilitiesSection />
      <InstagramFeed />
    </div>
  );
};

export default Home;
