'use client'
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const speakers = [
  {
    name: "Kristin Watson",
    title: "EXECUTIVE DIRECTOR",
    imageUrl:
      "https://storage.googleapis.com/a1aa/image/wfNVH0c8hXe4IVwB4fiJ1MguDJ0qFkuAc2Wd3dDW_Ms.jpg",
    alt: "Portrait of Kristin Watson, Executive Director",
  },
  {
    name: "Courtney Henry",
    title: "GLOBAL DEVOPS LEAD",
    imageUrl:
      "https://storage.googleapis.com/a1aa/image/rY8QvZOOsv7obPnPGl6Lotle9_sEDiyJUBNUeVo1PVs.jpg",
    alt: "Portrait of Courtney Henry, Global DevOps Lead",
  },
  {
    name: "Marvin McKinney",
    title: "DEVELOPER COMMUNITIES",
    imageUrl:
      "https://storage.googleapis.com/a1aa/image/Y70MhOEoEWdE-YdDsbebljX5TOEKckgPS7e-GL3iGzM.jpg",
    alt: "Portrait of Marvin McKinney, Developer Communities",
  },
  {
    name: "Dianne Russell",
    title: "CYBERSECURITY EXPERT",
    imageUrl:
      "https://images.unsplash.com/photo-1601655781320-205e34c94eb1?q=80&w=1200&auto=format&fit=crop",
    alt: "Portrait of Dianne Russell, Cybersecurity Expert",
  },
  {
    name: "Jacob Jones",
    title: "SOFTWARE ARCHITECT",
    imageUrl:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1200&auto=format&fit=crop",
    alt: "Portrait of Jacob Jones, Software Architect",
  },
  {
    name: "Esther Howard",
    title: "AI RESEARCHER",
    imageUrl:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?q=80&w=1200&auto=format&fit=crop",
    alt: "Portrait of Esther Howard, AI Researcher",
  },
  {
    name: "Ralph Edwards",
    title: "PRODUCT MANAGER",
    imageUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop",
    alt: "Portrait of Ralph Edwards, Product Manager",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Speakers = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-12 px-6">
      {/* Section Title */}
      <motion.h2
        className="text-center text-4xl font-bold uppercase tracking-wide mb-10 text-cyan-400"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        Speakers
      </motion.h2>

      {/* Speaker Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
      >
        {speakers.map((speaker, index) => (
          <motion.div
            key={index}
            className="relative bg-gray-800 text-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            variants={fadeInUp}
          >
            {/* Speaker Image */}
            <Image
              src={speaker.imageUrl}
              alt={speaker.alt}
              className="w-full h-64 object-cover"
              width={20}
              height={20}
            />
            

            {/* Speaker Info */}
            <div className="p-5 text-center">
              <h3 className="text-xl font-semibold">{speaker.name}</h3>
              <p className="text-cyan-400 text-sm uppercase tracking-wide">
                {speaker.title}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
};

export default Speakers;
