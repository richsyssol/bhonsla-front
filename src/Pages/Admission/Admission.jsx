import React from "react";
import ApplyNowSection from "./ApplyNowSection";
import BeforeYouApplySectionandFAQ from "./BeforeYouApplySection&FAQ";
import FAQSection from "./FAQSection";
import AcademyBanner from "./AcadmyBanner";

import StudentApplicationForm from "./StudentApplicationForm";

const Admission = () => {
  return (
    <div>
      <ApplyNowSection />
      <AcademyBanner />
      <FAQSection />
      <StudentApplicationForm />
    </div>
  );
};

export default Admission;
