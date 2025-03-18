"use client"
import React from "react";
import { motion } from "framer-motion";

const Event = () => {
  const events = [
    {
      img: "https://cdn.prod.website-files.com/637b71cdd60031caacd2e7ae/638f01c78ce65ffbb5765ea7_event-main-08-p-2000.jpg",
      title: "Annual API Cybersecurity Conference for Tech",
      desc: "API is committed to following CDC, local government agencies, and the Woodlands Waterway Marriott...",
    },
    {
      img: "https://cdn.prod.website-files.com/637b71cdd60031caacd2e7ae/6380be266760ce8ab1c04c81_event-main-05-p-2000.jpg",
      title: "International Security Conference & Expo",
      desc: "The International Security Conference & Exposition is the Northeast's largest security trade show, featuring one-on-one conversations...",
    },
    {
      img: "https://cdn.prod.website-files.com/637b71cdd60031caacd2e7ae/6380be302d13f9f7fc51ff57_event-main-06-p-2000.jpg",
      title: "Tech Innovations Summit 2023",
      desc: "Join the best minds in the industry for a day of networking, innovation, and groundbreaking technology showcases.",
    },
    {
      img: "https://cdn.prod.website-files.com/637b71cdd60031caacd2e7ae/6380be4e7c075418e0314f34_event-main-01-p-2000.jpg",
      title: "AI & Machine Learning Global Conference",
      desc: "Explore the latest advancements in AI, machine learning, and data science with top experts in the field.",
    },
  ];

  return (
    <div className="event-container bg-gray-900 text-white py-12 px-6">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-lg text-blue-400 font-semibold">TECH EVENT</h2>
        <h1 className="text-4xl font-bold mt-2">EVENTS</h1>
        <p className="text-gray-300 max-w-2xl mx-auto mt-4">
          The Tech Events featured in this list take place throughout the year
          and cover a wide range of different industries.
        </p>
      </motion.div>

      {/* Events Section */}
      <div className="grid md:grid-cols-2 gap-8 mt-12">
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <div className="overflow-hidden rounded-lg">
              <motion.img
                src={event.img}
                alt={event.title}
                className="w-full h-64 object-cover rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="mt-4">
              <h1 className="text-xl font-semibold">{event.title}</h1>
              <div className="flex space-x-4 text-gray-400 text-sm mt-2">
                <span>Time</span>
                <span>Mode</span>
                <span>Date</span>
              </div>
              <p className="text-gray-300 mt-2">{event.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Event;
