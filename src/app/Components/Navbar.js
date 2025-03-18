"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { LuShoppingBag, LuMenu, LuX } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`navbar-container ${sticky ? 'sticky' : ''} relative z-50`}>
      <div className={`flex justify-between items-center p-4 ${sticky ? 'bg-black' : 'bg-black'} text-white`}>
        {/* Logo */}
        <div className="text-3xl font-bold">
          TechUtsav
        </div>

        {/* Desktop Navigation */}
        <motion.div className="hidden md:flex justify-between items-center space-x-4">
          <Link href="/" className="hover:underline cursor-pointer">Home</Link>
          <Link href="/about" className="hover:underline cursor-pointer">About</Link>
          <Link href="/events" className="hover:underline cursor-pointer">Events</Link>
          <Link href="/speakers" className="hover:underline cursor-pointer">Speakers</Link>
          <Link href="/chat-bot" className="hover:underline cursor-pointer">Chat-Bot</Link>
          <Link href="/events-registred" className="hover:underline cursor-pointer">
            <LuShoppingBag className="text-xl" />
          </Link>
        </motion.div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white text-2xl" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <LuX /> : <LuMenu />}
        </button>
      </div>

      {/* Mobile Side Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-64 bg-black text-white p-6 z-50 md:hidden"
          >
            <div className="flex justify-end mb-8">
              <button 
                onClick={toggleMenu} 
                className="text-2xl"
                aria-label="Close menu"
              >
                <LuX />
              </button>
            </div>
            <div className="flex flex-col space-y-4">
              <Link href="/" className="hover:underline text-lg" onClick={toggleMenu}>Home</Link>
              <Link href="/about" className="hover:underline text-lg" onClick={toggleMenu}>About</Link>
              <Link href="/events" className="hover:underline text-lg" onClick={toggleMenu}>Events</Link>
              <Link href="/speakers" className="hover:underline text-lg" onClick={toggleMenu}>Speakers</Link>
              <Link href="/chat-bot" className="hover:underline text-lg" onClick={toggleMenu}>Chat-Bot</Link>
              <Link href="/events-registred" className="hover:underline text-lg flex items-center" onClick={toggleMenu}>
                <LuShoppingBag className="mr-2" /> Registered Events
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay when mobile menu is open */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black z-40 md:hidden"
          onClick={toggleMenu}
        />
      )}
    </div>
  );
};

export default Navbar;