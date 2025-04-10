import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import Slider from "react-slick";
import { students } from "../../../../public/assets/index";

// Custom Next Arrow
const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-black bg-gray-200 rounded-full p-2 shadow hover:bg-gray-300"
    onClick={onClick}
  >
    ▶
  </div>
);

// Custom Prev Arrow
const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-black bg-gray-200 rounded-full p-2 shadow hover:bg-gray-300"
    onClick={onClick}
  >
    ◀
  </div>
);

const InstagramFeed = () => {
  const [instagramPosts, setInstagramPosts] = useState([
    {
      id: "1",
      media_type: "VIDEO",
      media_url: "https://www.youtube.com/embed/lyLXT4OujfQ",
      thumbnail_url: students,
      permalink: "https://youtube.com/shorts/lyLXT4OujfQ?si=k_JwI2MfgE2Qvzlu",
    },
    {
      id: "2",
      media_type: "VIDEO",
      media_url: "https://www.youtube.com/embed/lyLXT4OujfQ",
      thumbnail_url: students,
      permalink: "https://www.instagram.com/reel/Cy67890/",
    },
  ]);

  const [linkedinPosts, setLinkedinPosts] = useState([
    {
      id: "l1",
      title: "Company Achieves ISO Certification",
      description: "We are now ISO 9001 certified!",
      link: "https://www.linkedin.com/company/example",
    },
    {
      id: "l2",
      title: "Welcoming New Team Members",
      description: "Excited to introduce our new hires this quarter.",
      link: "https://www.linkedin.com/company/example",
    },
  ]);

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        const response = await axios.get(
          `https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url,permalink&access_token=YOUR_ACCESS_TOKEN`
        );
        setInstagramPosts(response.data.data);
      } catch (error) {
        console.error("Error fetching Instagram posts:", error);
      }
    };

    // fetchInstagramPosts(); // Uncomment to fetch live data
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    swipe: false,
    draggable: false,
    pauseOnHover: false,
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-4xl font-extrabold mb-6 text-center text-yellow-700">
        Social Media Feed
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Instagram Section */}
        <div className="bg-white p-4 rounded-lg shadow-2xl h-[400px] overflow-hidden relative">
          <h3 className="text-3xl font-semibold mb-4 text-center">Instagram</h3>
          <div className="h-[320px] relative">
            <Slider {...sliderSettings}>
              {instagramPosts.map((post) => (
                <motion.div key={post.id} className="px-2">
                  {post.media_type === "IMAGE" ||
                  post.media_type === "CAROUSEL_ALBUM" ? (
                    <img
                      src={post.media_url}
                      alt="Instagram"
                      className="w-full h-60 object-cover rounded-md"
                    />
                  ) : post.media_type === "VIDEO" ? (
                    post.media_url.includes("youtube.com") ? (
                      <iframe
                        src={post.media_url}
                        className="w-full h-60"
                        allow="autoplay; encrypted-media"
                        title="Video"
                        frameBorder="0"
                      ></iframe>
                    ) : (
                      <a
                        href={post.permalink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={post.thumbnail_url}
                          alt="Reel"
                          className="w-full h-60 object-cover rounded-md"
                        />
                        <p className="text-center text-blue-500 mt-2">
                          Watch Reel
                        </p>
                      </a>
                    )
                  ) : null}
                </motion.div>
              ))}
            </Slider>
          </div>
        </div>

        {/* LinkedIn Section */}
        <div className="bg-white p-4 rounded-lg shadow-2xl h-[400px] overflow-hidden relative">
          <h3 className="text-3xl font-semibold mb-4 text-center">LinkedIn</h3>
          <div className="h-[320px] relative">
            <Slider {...sliderSettings}>
              {linkedinPosts.map((post) => (
                <motion.div key={post.id} className="p-4">
                  <h4 className="text-lg font-bold">{post.title}</h4>
                  <p className="text-gray-700 mt-2">{post.description}</p>
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline mt-3 inline-block"
                  >
                    View Post
                  </a>
                </motion.div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstagramFeed;
