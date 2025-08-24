import React, { useEffect } from 'react'
import logo from '../assets/logo.png' // Import logo from assets
import './NeonBackground.css';// Import CSS for Hero component


export const Hero = () => {
  useEffect(() => {
    const chars = ["0", "1", "{", "}", "<", ">", "/", "*", ";"];
    const neonColors = ["#00f7ff", "#ff00ff", "#00ff9d", "#ffea00"];
    const container = document.getElementById("bits-container");

    for (let i = 0; i < 40; i++) {
      const span = document.createElement("span");
      span.className = "bit";
      span.textContent = chars[Math.floor(Math.random() * chars.length)];
      span.style.left = Math.random() * 100 + "vw";
      span.style.animationDuration = 3 + Math.random() * 8 + "s";
      span.style.animationDelay = Math.random() * 5 + "s";

      // random neon color
      const color = neonColors[Math.floor(Math.random() * neonColors.length)];
      span.style.color = color;
      span.style.textShadow = `0 0 5px ${color}, 0 0 10px ${color}, 0 0 20px ${color}`;

      container.appendChild(span);
    }
  }, []);


  return (
    <div className="relative w-full h-screen bg-slate-950 text-white overflow-hidden">
      {/* Bits animation container */}
      <div
        id="bits-container"
        className="absolute inset-0 pointer-events-none"

      />
      {/* Hero Content */}
      <div className=" background relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <img src={logo} alt="Logo" style={{ width: '200px', height: '200px', top: 0, left: 0 }} /> {/* Use imported logo */}
        <h1 className="text-6xl font-bold">Hi I am Ankur</h1>
        <p className="w-full md:w-1/2 pt-7 whitespace-nowrap">
          Full Stack Developer crafting scalable, elegant applications with a focus on performance and seamless user experiences.
        </p>
      </div>
    </div>
  )
}