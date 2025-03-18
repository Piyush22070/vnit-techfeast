import React from 'react';
// import { motion } from "framer-motion" 
// import { speakers } from '../data';

export  default function Speakers(){
  
  return (
    <main 
      className="container mx-auto py-12 px-6 bg-black"
      style={{
        backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgba(6, 182, 212, 0.2) 0.5px, transparent 0)`,
        backgroundSize: "9px 9px",
        backgroundRepeat: "repeat",
      }}
    >
     

      {/* Section Title with Animation */}
      {/* <motion.div
        className="text-white pb-8 text-center"
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1.2, ease: "easeOut" }} 
        whileHover={{
            scale: 1.1, 
            transition: { duration: 0.3, ease: "easeInOut" }, 
        }}
        style={{
            fontSize: "3rem",
            fontWeight: "900", 
            letterSpacing: "2px", 
            textTransform: "uppercase", 
            fontFamily: "'Poppins', sans-serif", 
            background: "transparent", 
            color: "transparent", 
            backgroundImage: "linear-gradient(90deg, rgba(255, 0, 150, 1), rgba(0, 255, 255, 1))", 
            WebkitBackgroundClip: "text", 
            MozBackgroundClip: "text", 
            textShadow: "2px 2px 8px rgba(0, 0, 0, 0.5)", 
        }}
        >
  Speakers
    </motion.div> */}

      {/* Grid of Speaker Cards */}
      {/* <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
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
            className="text-center rounded-2xl bg-amber-50 hover:shadow w-[400px] h-[480px]"
            whileHover={{
              rotateX: 25, 
              rotateY: 10, 
              boxShadow: "0px 20px 50px rgba(8,112,184,0.7)", 
              y: -5, 
            }}
            style={{
              translateZ: 100, 
            }}
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
            <img
              src={speaker.imageUrl}
              alt={speaker.alt}
              className="w-full h-auto p-3 rounded-2xl"
              width="300"
              height="300"
            />
            <h3 className="mt-4 text-xl font-bold">{speaker.name}</h3>
            <p className="text-gray-600">{speaker.title}</p>
          </motion.div>
        ))}
      </motion.div> */}
    </main>
  );
};

