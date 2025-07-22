import React from 'react'

const Card = ({ image, title, tech, description, liveLink, githubLink }) => {
  return (
        <div className="bg-white rounded-2xl shadow-lg w-full max-w-xs sm:max-w-sm m-3 sm:m-4 flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-40 sm:h-48 object-cover"
      />

      {/* Content */}
      <div className="p-4 sm:p-5 flex flex-col justify-between flex-1">
        {/* Title */}
        <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">{title}</h2>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
          {tech.map((item, index) => (
            <span
              key={index}
              className="bg-purple-100 text-purple-700 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-gray-600 text-xs sm:text-sm mb-4">{description}</p>

        {/* Buttons */}
        <div className="mt-auto flex flex-col sm:flex-row gap-2 sm:gap-4">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 text-white text-sm font-medium px-4 py-2 rounded-lg text-center hover:bg-purple-700 transition"
          >
            Live Demo
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-purple-600 text-purple-600 text-sm font-medium px-4 py-2 rounded-lg text-center hover:bg-purple-50 transition"
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};


export default Card
