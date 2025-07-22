import React from 'react'
// import Particles from 'react-tsparticles'
// import { loadFull } from 'tsparticles'

export const Hero = () => {
  const particlesInit = async (main) => {
    await loadFull(main)
  }

  return (
    <div className="relative w-full h-screen bg-slate-950 text-white overflow-hidden">
      {/* Particle Background */}
      {/* <Particles
        className="absolute inset-0 z-0"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: 'transparent' },
          particles: {
            number: { value: 50 },
            size: { value: 3 },
            move: { enable: true, speed: 1 },
            links: { enable: true, color: '#ffffff', distance: 150 },
            opacity: { value: 0.5 },
          },
        }}
      /> */}

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-6xl font-bold">Hi I am Ankur</h1>
        <p className="w-full md:w-1/2 pt-7">
          Full Stack Developer crafting scalable, elegant applications with a focus on performance and seamless user experiences.
        </p>
      </div>
    </div>
  )
}
