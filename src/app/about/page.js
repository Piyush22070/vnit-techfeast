'use client'
import React from "react";
import { motion } from "framer-motion";

const aboutItems = [
  {
    icon: "💡",
    title: "Innovation",
    desc: "We bring the latest trends in technology to inspire the next generation of innovators.",
  },
  {
    icon: "🌍",
    title: "Global Reach",
    desc: "Our events connect people from around the world, fostering collaboration and learning.",
  },
  {
    icon: "📢",
    title: "Networking",
    desc: "Meet industry leaders, developers, and entrepreneurs at our exclusive tech events.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-gray-900">
      {/* Header Section */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-lg text-blue-400 font-semibold tracking-wider">ABOUT US</h2>
        <h1 className="text-4xl font-bold text-white mt-2">WHO WE ARE</h1>
      </motion.div>

      {/* Content Section */}
      <motion.div
        className="max-w-3xl text-center text-gray-300"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
        }}
      >
        <p className="text-lg">
          We are a passionate team dedicated to bringing cutting-edge technology
          events, conferences, and networking opportunities to tech enthusiasts
          worldwide. Our goal is to create a platform where innovation and ideas thrive.
        </p>
      </motion.div>

      {/* About Boxes */}
      <motion.div
        className="grid md:grid-cols-3 gap-8 mt-12"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
        }}
      >
        {aboutItems.map((item, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-xl shadow-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            variants={fadeInUp}
          >
            <div className="text-5xl">{item.icon}</div>
            <h3 className="text-xl font-semibold mt-4 text-white">{item.title}</h3>
            <p className="text-gray-400 mt-2">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default About;
