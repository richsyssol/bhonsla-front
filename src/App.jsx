import {
  BrowserRouter as Router,
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Link,
} from "react-router-dom";
import Home from "./Pages/Home/Homepage/Home";

import Vision from "./Pages/AboutUs/Vision";
import Mission from "./Pages/AboutUs/Mission";
import Management from "./Pages/AboutUs/Management";
import Staff from "./Pages/AboutUs/Staff";
import Pta from "./Pages/AboutUs/Pta";
import Commandantdesk from "./Pages/AboutUs/Commandantdesk";
import Principaldesk from "./Pages/AboutUs/Principaldesk";
import Admission from "./Pages/Admission/Admission";
import Calendar from "./Pages/Home/Navigation/Calendar";
import Achievement from "./Pages/Home/Navigation/Achievement";
import GuestVisit from "./Pages/Home/Navigation/GuestVisits";
import Alumni from "./Pages/Home/Navigation/Alumni";

import Courses from "./Pages/Home/Navigation/Courses";
import EMagazine from "./Pages/Home/Navigation/E-Magazine";
import Layout from "./layout/Layout";
// import ApplyNowSection from "./Pages/Admission/ApplyNowSection";
import "./App.css";

import Aboutus from "./Pages/AboutUs/Aboutus";
import Secondary from "./Pages/Admission/AdmissionProcess/Secondary";

import Juniorcollege from "./Pages/Admission/AdmissionProcess/Juniorcollege";
import FeesInformation from "./Pages/Admission/AdmissionProcess/FeesInformation";
import Generalrules from "./Pages/Admission/AdmissionProcess/Generalrules";
import ApplicationFrom from "./Pages/Admission/AdmissionProcess/ApplicationFrom";
import Photo from "./Pages/Gallery/Photo";
import Video from "./Pages/Gallery/Video";

import SmtCourses from "./Pages/Courses/SmtCourses";
import Guidelines from "./Pages/Courses/Guidelines";
import PdCourses from "./Pages/Courses/PdCourses";

import Gallery from "./Pages/Home/Navigation/Gallery";
import StudentApplicationForm from "./Pages/Admission/StudentApplicationForm";

import BlogUpdates from "./Pages/Blog&Updates/BlogUpdates";
import BlogDetails from "./Pages/Blog&Updates/BlogDetails";
import Ramdandee from "./Pages/E-Magazine/Ramdandee";
import Activities from "./Pages/Activities/Activities";
import ApplyNow from "./Pages/Home/Homepage/ApplyNow";
import ApplyNowSection from "./Pages/Admission/ApplyNowSection";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/aboutus/vision" element={<Vision />} />
        <Route path="/aboutus/mission" element={<Mission />} />
        <Route path="/aboutus/management" element={<Management />} />
        <Route path="/aboutus/staff" element={<Staff />} />
        <Route path="/aboutus/pta" element={<Pta />} />
        <Route path="/aboutus/commandantdesk" element={<Commandantdesk />} />
        <Route path="/aboutus/principaldesk" element={<Principaldesk />} />
        <Route path="/applynowsection" element={<ApplyNowSection />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/admission/secondary" element={<Secondary />} />
        <Route path="/admission/Juniorcollege" element={<Juniorcollege />} />
        <Route
          path="/admission/feesinformation"
          element={<FeesInformation />}
        />
        <Route path="/admission/generalrules" element={<Generalrules />} />
        <Route
          path="/admission/applicationform"
          element={<ApplicationFrom />}
        />

        <Route path="/calendar" element={<Calendar />} />
        <Route path="/achievement" element={<Achievement />} />
        <Route path="/guestvisit" element={<GuestVisit />} />
        <Route path="/alumni" element={<Alumni />} />

        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/photo" element={<Photo />} />
        <Route path="/gallery/video" element={<Video />} />

        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/pdc" element={<PdCourses />} />
        <Route path="/courses/guidelines" element={<Guidelines />} />
        <Route path="/courses/smtc" element={<SmtCourses />} />

        {/* <Route path="/emagazine" element={<EMagazine />} />
        <Route path="/emagazine/ramdandee" element={<Ramdandee />} />
        <Route path="/applynow" element={<Admission />} /> */}
        <Route path="/activities" element={<Activities />} />
        <Route path="/activities/calendar" element={<Calendar />} />
        <Route path="/activities/ramdandee" element={<Ramdandee />} />

        <Route path="/blog" element={<BlogUpdates />} />
        <Route path="/blogdetails/:id" element={<BlogDetails />} />

        <Route
          path="/studentapplicationform"
          element={<StudentApplicationForm />}
        />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
