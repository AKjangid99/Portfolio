import React, { useState } from "react";
import { DiGithubBadge } from "react-icons/di";
import { AiOutlineClose } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";

export const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = ["Home", "Experience", "Skill"];
  return (
    <>
      {/* Main Navbar */}
      <div className="flex justify-between items-center px-6 py-4 bg-slate-950">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">CodeAJ</div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <span key={item} className="text-white text-lg font-semibold cursor-pointer hover:text-purple-300 transition">
              {item}
            </span>
          ))}
        </div>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <DiGithubBadge size={28} color="white" />
          <FaLinkedin size={26} color="white" />
          <FaXTwitter size={24} color="white" />
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="text-white"
          >
           {isMobileMenuOpen ? (
  <AiOutlineClose size={28} />
) : (
  <GiHamburgerMenu size={28} />
)}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col bg-slate-950 px-6 py-4 space-y-4 text-white">
          {navItems.map((item) => (
            <span
              key={item}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-semibold cursor-pointer"
            >
              {item}
            </span>
          ))}
          <div className="flex space-x-4 pt-2">
            <DiGithubBadge size={28} color="white" />
            <FaLinkedin size={26} color="white" />
            <FaXTwitter size={24} color="white" />
          </div>
        </div>
      )}
    </>
  );
};
