
// src/app/components/Header.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900 shadow-md py-2"
          : "bg-orange-600 py-6"
      }`}
    >
      <nav className="container mx-auto px-4 flex justify-between items-center">
        {/* <button
          onClick={() => scrollToSection("home")}
          className="text-2xl font-bold text-blue-700 cursor-pointer"
        >
          LuxuryHomes
        </button> */}


<button
          onClick={() => scrollToSection("home")}
          className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-white to-orange-400 bg-clip-text text-transparent cursor-pointer"
        >
          JosdocProperties
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <button 
            onClick={() => scrollToSection("home")} 
            className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection("properties")} 
            className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
          >
            Properties
          </button>
          <button 
            onClick={() => scrollToSection("services")} 
            className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection("testimonials")} 
            className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
          >
            Testimonials
          </button>
          <button 
            onClick={() => scrollToSection("contact")} 
            className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
          >
            Contact
          </button>
        </div>

        <button 
          onClick={() => scrollToSection("contact")} 
          className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
        >
          Get Started
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="w-6 h-0.5 bg-gray-700"></span>
          <span className="w-6 h-0.5 bg-gray-700"></span>
          <span className="w-6 h-0.5 bg-gray-700"></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0">
          <div className="flex flex-col space-y-4 p-4">
            <button 
              onClick={() => scrollToSection("home")} 
              className="text-gray-700 hover:text-blue-600 text-left cursor-pointer"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("properties")} 
              className="text-gray-700 hover:text-blue-600 text-left cursor-pointer"
            >
              Properties
            </button>
            <button 
              onClick={() => scrollToSection("services")} 
              className="text-gray-700 hover:text-blue-600 text-left cursor-pointer"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection("testimonials")} 
              className="text-gray-700 hover:text-blue-600 text-left cursor-pointer"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection("contact")} 
              className="text-gray-700 hover:text-blue-600 text-left cursor-pointer"
            >
              Contact
            </button>
            <button 
              onClick={() => scrollToSection("contact")} 
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 cursor-pointer"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
}