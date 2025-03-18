'use client'
import { useState, useEffect, Suspense } from "react";
import { motion } from "motion/react" 
import Spline from '@splinetool/react-spline'; 

const Home = () => {
  const [splineLoading, setSplineLoading] = useState(true);
  const [showSpline, setShowSpline] = useState(false);

  const path = '/images/scene.splinecode';

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpline(true);
      setSplineLoading(false);
    }, 2000); // Increased time for debugging

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="bg-gray-950 h-screen w-full relative overflow-auto"> {/* Allowing scroll with overflow-auto */}
      <div className="relative w-full h-full">
        <Suspense fallback={<div className="flex justify-center items-center w-full h-full">Loading...</div>}>
          {showSpline && <Spline scene={path} />}
        </Suspense>
      </div>

      {/* This is the section for fixed text that will be overlaid */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
        <motion.h1
          className="font-Gilroy sm:text-[12vw] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 shadow-lg drop-shadow-2xl py-4 px-8 rounded-xl"
          initial={{ opacity: 0, y: -100 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.2, ease: 'easeOut' }} 
        >
          Welcome
        </motion.h1>

        <motion.h2
          className="text-4xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 shadow-lg drop-shadow-lg"
          initial={{ opacity: 0, y: 100 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }} 
        >
          TechUtsav
        </motion.h2>
      </div>
    </main>
  );
};

export default Home;
