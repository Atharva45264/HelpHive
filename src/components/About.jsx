// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useInView } from "react-intersection-observer";
import "swiper/css";
import "swiper/css/pagination";

const About = () => {
  const timelineEvents = [
    {
      year: "Now",
      title: "Community Launch",
      description:
        "We began as a small AI-powered student tech community focusing on one university, helping peers collaborate on projects, events, and resources."
    },
    {
      year: "Few Months",
      title: "Area Wide Expansion",
      description:
        "Our network expands to connect multiple colleges within the city, promoting inter-college hackathons and workshops."
    },
    {
      year: "A Year Later",
      title: "City Wide Reach",
      description:
        "With AI-driven matching and resource sharing, we aim to connect students nationwide with opportunities and mentors."
    },
    {
      year: "Few Years Later",
      title: "State Recognition",
      description:
        "We envision partnerships with international universities and startups, fostering innovation across borders."
    }
  ];

  const galleryImages = [
    "/src/assets/community1.jpeg",
    "/src/assets/community2.jpeg",
    "/src/assets/community3.jpeg",
    "/src/assets/community1.jpeg",
    "/src/assets/community2.jpeg"
  ];

  return (
    <section
      id="about"
      className="text-white py-16 px-6 bg-cover bg-center"
      style={{ backgroundImage: `url('/src/assets/solid.jpg')` }}
    >
      <div className="max-w-6xl mx-auto bg-black bg-opacity-40 p-8 rounded-2xl">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-6"
        >
          About Our Community
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg text-center max-w-3xl mx-auto leading-relaxed"
        >
          We are a passionate AI-driven student community built for collaboration, innovation, and growth.
          Our mission starts by empowering students from one university in our city with resources, mentorship, and
          opportunities to work on impactful projects. Over time, we aim to expand to more universities, cities,
          and eventually connect with global tech communities. Together, we learn, build, and inspire.
        </motion.p>

        {/* Animated Timeline */}
<div className="relative my-16">
  {/* Flowing vertical line */}
  <motion.div
    className="absolute left-5 top-0 w-1 bg-gradient-to-b from-purple-400 via-pink-400 to-purple-400"
    initial={{ height: 0 }} 
    animate={{ height: "100%" }}
    transition={{ duration: 2, ease: "easeInOut" }}
  />

  <div className="pl-12 relative">
    {timelineEvents.map((event, index) => {
      const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
      return (
        <motion.div
          ref={ref}
          key={index}
          className="mb-12 relative"
          initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Dot with pop + glow */}
          <motion.div
            className="absolute -left-[26px] w-6 h-6 rounded-full bg-purple-500 border-4 border-white shadow-lg shadow-purple-400"
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{
              type: "spring",
              stiffness: 250,
              delay: index * 0.2,
            }}
          />

          <h3 className="text-2xl font-bold">{event.year}</h3>
          <h4 className="text-lg font-semibold text-purple-200">{event.title}</h4>
          <p className="text-sm">{event.description}</p>
        </motion.div>
      );
    })}
  </div>
</div>


        {/* What We Are About & What We’re Going to Do */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-purple-800 bg-opacity-70 p-6 rounded-xl shadow-lg mb-10"
        >
          <h3 className="text-2xl font-bold mb-4">What We Are About</h3>
          <p className="mb-6">
            HelpHive is more than just a platform — it’s a movement. We aim to connect students who have the passion
            to create, learn, and solve problems. Whether it’s academic help, project collaboration, or organizing
            tech events, we bring students together under one digital roof.
          </p>
          <h3 className="text-2xl font-bold mb-4">What We’re Going to Do</h3>
          <p>
            In the coming months, we plan to introduce AI-powered features such as smart matchmaking between
            collaborators, personalized project recommendations, and a sentiment analysis system to ensure a
            positive and supportive community environment. As we grow, our goal is to expand city-wide and eventually
            across the country, connecting students with opportunities, mentors, and global networks.
          </p>
        </motion.div>

        {/* Image Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 2500 }}
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          className="rounded-2xl shadow-lg"
        >
          {galleryImages.map((src, index) => (
            <SwiperSlide key={index}>
              <motion.img
                src={src}
                alt={`Community ${index + 1}`}
                className="rounded-2xl w-full h-[400px] object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default About;
