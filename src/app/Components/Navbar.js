"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { LuShoppingBag } from "react-icons/lu";
import { motion } from "framer-motion"
const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  // Function to handle scroll
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setSticky(true); 
    } else {
      setSticky(false); 
    }
  };

  useEffect(() => {
   
    window.addEventListener('scroll', handleScroll);

    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return (
    <div className={`navbar-container ${sticky ? 'sticky' : ''}`}>
      <div className={`flex justify-between items-center p-4 ${sticky ? 'bg-black' : 'bg-black'} text-white`}>
        {/* Logo */}
        <div className="text-3xl font-bold">
          TechUtsav
        </div>

        {/* Router Links */}
        <motion.div
       
         className=" flex  justify-between items-center space-x-4 ">
          <Link href="/" className="hover:underline inset-1 cursor-pointer">Home</Link>
          <Link href="/about" className="hover:underline cursor-pointer">About</Link>
          <Link href="/events" className="hover:underline cursor-pointer">Events</Link>
          <Link href="/speakers" className="hover:underline cursor-pointer">Speakers</Link>
          <Link href="/chat-bot" className="hover:underline cursor-pointer">Chat-Bot</Link>
          <Link href="/events-registred" className="hover:underline cursor-pointer"><LuShoppingBag className='3-xl' /></Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
