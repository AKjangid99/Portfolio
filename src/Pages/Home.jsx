import React from 'react'
import { NavBar } from '../Component/NavBar'
import { Hero } from '../Component/Hero'
import Card from '../Component/Card'

// Skill Badge Component
const SkillBadge = ({ label, className }) => (
  <span className={`px-3 py-1 m-2 rounded-full text-sm font-semibold text-white shadow-md ${className}`}>
    {label}
  </span>
)

const Home = () => {
  return (
    <>
      <div>
        <header style={{ position: 'sticky', top: 0, zIndex: 100 }}>
          <NavBar />
        </header>

        <Hero />

        {/* Summary Section */}
        <div className="flex items-center justify-center bg-[#020618] px-6">
          <div className="relative max-w-3xl p-20 m-50 rounded-2xl neon-card text-center">
            <h1 className="text-5xl font-bold text-white mb-6">Summary</h1>
            <p className="text-gray-300 leading-relaxed">
              Full Stack Developer with expertise in building scalable, high-performance web applications
              across both front-end and back-end. Skilled in modern technologies such as{" "}
              <SkillBadge label="React.js" className="bg-cyan-400 text-black" />
              <SkillBadge label="Node.js" className="bg-green-500" />
              <SkillBadge label="MongoDB" className="bg-green-600" />
              <SkillBadge label="PostgreSQL" className="bg-blue-600" />, with strong proficiency in designing RESTful APIs
              and managing complex databases. Passionate about writing clean, maintainable code, optimizing
              performance, and delivering seamless user experiences. Known for strong problem-solving abilities
              and effective collaboration across cross-functional teams to deliver reliable, full-stack solutions on time.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-[#020618] flex flex-col items-center justify-center pt-0 pb-50 space-y-10">
          <h1 className="text-5xl font-bold text-white mb-10">Skills</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-15 w-full max-w-6xl">
            {/* Frontend */}
            <div className="neon-card p-10 rounded-2xl text-center">
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">Frontend</h2>
              <div className="flex flex-wrap justify-center">
                <SkillBadge label="HTML" className="bg-orange-500" />
                <SkillBadge label="CSS" className="bg-blue-500" />
                <SkillBadge label="JavaScript" className="bg-yellow-400 text-black" />
                <SkillBadge label="React.js" className="bg-cyan-400 text-black" />
                <SkillBadge label="Vite" className="bg-purple-500" />
                <SkillBadge label="Tailwind CSS" className="bg-sky-400 text-black" />
              </div>
            </div>

            {/* Backend */}
            <div className="neon-card p-20 rounded-2xl text-center">
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">Backend</h2>
              <div className="flex flex-wrap justify-center">
                <SkillBadge label="Express.js" className="bg-gray-900 border border-white" />
                <SkillBadge label="Golang" className="bg-cyan-500 text-black" />
                <SkillBadge label="Node.js" className="bg-green-500" />
                <SkillBadge label="TypeScript" className="bg-blue-600" />
                <SkillBadge label="PostgreSQL" className="bg-indigo-600" />
                <SkillBadge label="MongoDB" className="bg-green-700" />
              </div>
            </div>

            {/* Other / Tools */}
            <div className="neon-card p-10 rounded-2xl text-center">
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">Other</h2>
              <div className="flex flex-wrap justify-center">
                <SkillBadge label="C++" className="bg-blue-800" />
                <SkillBadge label="C#" className="bg-purple-600" />
                <SkillBadge label="Unity" className="bg-black border border-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="bg-[#020618] flex flex-col items-center justify-center px-6 pt-0 pb-50 space-y-10">
          <h1 className="text-5xl font-bold text-white mb-10">Projects</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">

            {/* Example Project */}
            <div className="neon-card p-6 rounded-2xl text-center">
              <img src="https://via.placeholder.com/300x200" alt="Portfolio Website" className="rounded-md mb-4 w-full" />
              <h2 className="text-2xl font-bold text-cyan-400 mb-2">Portfolio Website</h2>
              <p className="text-gray-300 mb-4">
                A responsive personal portfolio showcasing projects and skills using modern frontend technologies.
              </p>
              <div className="flex flex-wrap justify-center mb-4">
                <SkillBadge label="React" className="bg-cyan-400 text-black" />
                <SkillBadge label="TailwindCSS" className="bg-sky-400 text-black" />
                <SkillBadge label="Vite" className="bg-purple-500" />
              </div>
              <div className="flex justify-center space-x-4">
                <a href="https://your-live-link.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Live</a>
                <a href="https://github.com/yourusername/weather-app" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">GitHub</a>
              </div>
            </div>

            {/* Repeat same for other projects... */}
          </div>
        </div>

        {/* Experience Section */}
        <div className="bg-[#020618] flex flex-col items-center justify-center px-6 pb-16 space-y-10">
          <h1 className="section-title section-green text-5xl font-bold text-white mb-20">
            Experience
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-15 w-full max-w-6xl">
            {/* Trilasoft */}
            <div className="neon-card p-6 rounded-2xl">
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">
                Trilasoft | Software Engineer Intern
              </h2>

              {/* Project 1 */}
              <div className="p-4 mb-4 rounded-xl border-2 border-red-500 bg-black/30 shadow-[0_0_10px_#ef4444]">
                <h3 className="text-xl text-white font-semibold mb-1">
                  RedSky Mobility
                </h3>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge label="Angular" className="bg-red-500" />
                  <SkillBadge label="Ionic" className="bg-indigo-500" />
                  <SkillBadge label="TypeScript" className="bg-blue-600" />
                </div>
                <p className="text-gray-300 text-sm mt-2">
                  Enhanced the RedSky Mobility platform with new UI components.
                  Implemented Ionic for cross-platform mobile compatibility.
                </p>
              </div>

              {/* Project 2 */}
              <div className="p-4 rounded-xl border-2 border-cyan-400 bg-black/30 shadow-[0_0_10px_#22d3ee]">
                <h3 className="text-xl text-white font-semibold mb-1">Shift Krado</h3>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge label="React" className="bg-cyan-400 text-black" />
                  <SkillBadge label="TypeScript" className="bg-blue-600" />
                </div>
                <p className="text-gray-300 text-sm mt-2">
                  Updated and optimized UI components, improving user engagement and
                  ensuring consistency across platforms.
                </p>
              </div>
            </div>

            {/* Infotact */}
            <div className="neon-card p-6 rounded-2xl">
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">
                Infotact Solution | Full Stack Intern
              </h2>

              {/* Project 1 */}
              <div className="p-4 rounded-xl border-2 border-green-500 bg-black/30 shadow-[0_0_10px_#22c55e]">
                <h3 className="text-xl text-white font-semibold mb-1">Job Portal</h3>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge label="React.js" className="bg-cyan-400 text-black" />
                  <SkillBadge label="Redux" className="bg-purple-600" />
                  <SkillBadge label="Node.js" className="bg-green-500" />
                  <SkillBadge
                    label="Express"
                    className="bg-gray-900 border border-white"
                  />
                  <SkillBadge label="MongoDB" className="bg-green-700" />
                </div>
                <p className="text-gray-300 text-sm mt-2">
                  Developed and maintained full-stack applications using MERN stack.
                  Built interactive UI components with React.js & Redux.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Home
