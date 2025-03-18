"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { LuShoppingBag, LuMenu, LuX } from "react-icons/lu";
import { motion, AnimatePresence } from "motion/react";
import gsap from "gsap"; // Import GSAP

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const logoRef = useRef(null);
  const navLinksRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Handle scroll to make navbar sticky
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // GSAP animations for logo and nav links
    gsap.fromTo(logoRef.current, {
      opacity: 0,
      y: -50,
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "easeOut",
    });

    gsap.fromTo(navLinksRef.current.children, {
      opacity: 0,
      y: 20,
    }, {
      opacity: 1,
      y: 0,
      stagger: 0.2,
      ease: "easeOut",
    });

    // GSAP mobile menu opening/closing animation
    if (isOpen) {
      gsap.to(mobileMenuRef.current, {
        x: 0,
        duration: 0.3,
        ease: "power3.out",
      });
    } else {
      gsap.to(mobileMenuRef.current, {
        x: '100%',
        duration: 0.3,
        ease: "power3.out",
      });
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]); // Re-run effect when mobile menu opens/closes

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`navbar-container ${sticky ? 'sticky' : ''} relative z-50`}>
      <div className={`flex justify-between items-center p-4 ${sticky ? 'bg-black' : 'bg-black'} text-white`}>
        {/* Logo */}
        <div ref={logoRef} className="text-3xl font-bold">
          TechUtsav
        </div>

        {/* Desktop Navigation Links */}
        <motion.div ref={navLinksRef} className="hidden md:flex justify-between items-center space-x-4">
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
            ref={mobileMenuRef}
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
