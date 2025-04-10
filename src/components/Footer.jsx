import React from "react";
import { Row, Col, Divider } from "antd";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Home,
  Info,
  FileText,
  Calendar,
  Trophy,
  Users,
  User,
  Image,
  Book,
  BookOpen,
  ClipboardList,
  GraduationCap,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="overflow-hidden">
          <Row gutter={[24, 24]} justify="space-between">
            {/* Quick Links */}
            <Col xs={24} sm={12} md={6} lg={4}>
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <Info className="mr-2" /> Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="/faculty" className="hover:text-blue-300 transition">
                    Faculty Directory
                  </a>
                </li>
                <li>
                  <a href="/giving" className="hover:text-blue-300 transition">
                    Giving to School
                  </a>
                </li>
                <li>
                  <a href="/alumni" className="hover:text-blue-300 transition">
                    Alumni Association
                  </a>
                </li>
                <li>
                  <a href="/catalog" className="hover:text-blue-300 transition">
                    Course Catalog
                  </a>
                </li>
                <li>
                  <a href="/news" className="hover:text-blue-300 transition">
                    Newsroom
                  </a>
                </li>
                <li>
                  <a href="/careers" className="hover:text-blue-300 transition">
                    Career Services
                  </a>
                </li>
                <li>
                  <a
                    href="/accreditation"
                    className="hover:text-blue-300 transition"
                  >
                    Accreditation
                  </a>
                </li>
                <li>
                  <a href="/library" className="hover:text-blue-300 transition">
                    Library
                  </a>
                </li>
              </ul>
            </Col>

            {/* Navigation (General) */}
            <Col xs={24} sm={12} md={6} lg={4}>
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <ClipboardList className="mr-2" /> Navigation
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    className="hover:text-blue-300 transition flex items-center"
                  >
                    <Home className="mr-2" /> Home
                  </a>
                </li>
                <li>
                  <a
                    href="/aboutus"
                    className="hover:text-blue-300 transition flex items-center"
                  >
                    <Info className="mr-2" /> About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/calendar"
                    className="hover:text-blue-300 transition flex items-center"
                  >
                    <Calendar className="mr-2" /> Calendar
                  </a>
                </li>
                <li>
                  <a
                    href="/guestvisit"
                    className="hover:text-blue-300 transition flex items-center"
                  >
                    <Users className="mr-2" /> Guest Visits
                  </a>
                </li>
                <li>
                  <a
                    href="/alumni"
                    className="hover:text-blue-300 transition flex items-center"
                  >
                    <User className="mr-2" /> Alumni
                  </a>
                </li>
                <li>
                  <a
                    href="/gallery"
                    className="hover:text-blue-300 transition flex items-center"
                  >
                    <Image className="mr-2" /> Gallery
                  </a>
                </li>
              </ul>
            </Col>

            {/* Navigation (Academic & Activities) */}
            <Col xs={24} sm={12} md={6} lg={4}>
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <GraduationCap className="mr-2" /> Academic
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/admission"
                    className="hover:text-blue-300 transition flex items-center"
                  >
                    <FileText className="mr-2" /> Admission
                  </a>
                </li>
                <li>
                  <a
                    href="/achievements"
                    className="hover:text-blue-300 transition flex items-center"
                  >
                    <Trophy className="mr-2" /> Achievements
                  </a>
                </li>
                <li>
                  <a
                    href="/courses"
                    className="hover:text-blue-300 transition flex items-center"
                  >
                    <BookOpen className="mr-2" /> Courses
                  </a>
                </li>
                <li>
                  <a
                    href="/emagazine"
                    className="hover:text-blue-300 transition flex items-center"
                  >
                    <Book className="mr-2" /> E-Magazine
                  </a>
                </li>
              </ul>
            </Col>

            {/* Social Media Links */}
            <Col xs={24} sm={12} md={6} lg={4}>
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <Users className="mr-2" /> Follow Us
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/bmsnsk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400"
                >
                  <Facebook />
                </a>
                <a
                  href="https://x.com/BhonsalaNSK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400"
                >
                  <Twitter />
                </a>
                <a
                  href="https://www.instagram.com/BhonsalaNSK/#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-pink-400"
                >
                  <Instagram />
                </a>
                <a
                  href="https://www.linkedin.com/company/bhonsala-military-college"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-500"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://youtube.com/@bhonsalansk?si=YksbGWK_1GFjkYm0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-red-500"
                >
                  <Youtube />
                </a>
              </div>
            </Col>

            {/* Google Map Section */}
            <Col xs={24} sm={12} md={6} lg={4}>
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <MapPin className="mr-2" /> Our Location
              </h3>
              <div className="bg-gray-700 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1852.5675432825853!2d73.75230979999999!3d20.0055978!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb86929750d9%3A0xd40546b52158899a!2sBhonsala%20Adventure%20Foundation%20Office!5e1!3m2!1sen!2sin!4v1744103663776!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="School Location Map"
                ></iframe>
              </div>
            </Col>
          </Row>
        </div>

        <Divider className="bg-gray-600 my-6" />

        {/* Bottom Section */}
        <div className="flex flex-col items-center text-center md:flex-row md:justify-between md:items-center gap-4 mt-4">
          <div className="text-sm">
            © {new Date().getFullYear()} Bhonsala Military School. All rights
            reserved.
          </div>

          <div className="text-sm">
            <a
              href="https://www.richsol.com/"
              className="hover:text-blue-300 transition"
            >
              Developed By Rich System Solutions Pvt Ltd
            </a>
          </div>

          <div className="flex flex-wrap justify-center text-sm text-center gap-x-2 gap-y-1">
            {[
              { name: "Directory", href: "/directory" },
              { name: "Accessibility", href: "/accessibility" },
              { name: "Civil Rights", href: "/civil-rights" },
              { name: "Title IX", href: "/title-ix" },
              { name: "Military", href: "/military" },
              { name: "Terms of Use", href: "/terms" },
            ].map((link, index, arr) => (
              <span key={link.name} className="flex items-center">
                <a
                  href={link.href}
                  className="hover:text-blue-300 transition whitespace-nowrap"
                >
                  {link.name}
                </a>
                {index !== arr.length - 1 && <span className="mx-1">|</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
