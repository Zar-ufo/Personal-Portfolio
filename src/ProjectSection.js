import React, { useState } from "react";
import { projects } from "./data.js";

const ProjectSection = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fullscreenProject, setFullscreenProject] = useState(null);

  const toggleFullscreen = (project) => {
    setIsFullscreen(!isFullscreen);
    setFullscreenProject(project || null);
  };

  return (
    <section className="bg-gray-100 py-16 px-6">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
      What i can do-
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <div
              className="h-48 bg-cover bg-center"
              style={{
                backgroundImage: `url(${project.image})`,
              }}
            ></div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-600 text-sm font-medium px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <button
                onClick={() => toggleFullscreen(project)}
                className="text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-800 transition-colors"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && fullscreenProject && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-3xl p-6 relative">
            <button
              onClick={() => toggleFullscreen(null)}
              className="absolute top-3 right-3 text-red-600 text-xl"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-4">
              {fullscreenProject.title}
            </h3>
            <p className="text-gray-600 mb-4">{fullscreenProject.description}</p>
            <div className="flex flex-wrap gap-2">
              {fullscreenProject.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="bg-green-100 text-green-600 text-sm font-medium px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectSection;
