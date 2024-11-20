import React from 'react';
import profileImage from './pro.jpg'; // Assuming pro.jpg is in the same folder as this file

function AboutMe() {
  return (
    <div className="bg-black min-h-screen text-white">  
      <section id="about-me" className="min-h-screen flex flex-col items-center justify-center bg-gray-200 p-8">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">About Me</h2>

        <div className="w-full max-w-4xl p-8 bg-white rounded-2xl shadow-lg flex flex-col items-center">
          {/* Profile Image */}
          <div className="w-72 h-72 mb-6 shadow-xl">
            <img 
              src={profileImage} 
              alt="Profile"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Bio and Information */}
          <div className="text-center lg:text-left w-full">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Hello! I’m Abdullah Zarif, a passionate web developer with a focus on building modern, responsive, and accessible websites. 
              I enjoy learning new technologies and turning ideas into reality through code.
            </p>

            {/* Skills */}
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
              <span className="bg-blue-100 text-blue-700 py-2 px-4 rounded-full text-sm font-medium">JavaScript</span>
              <span className="bg-green-100 text-green-700 py-2 px-4 rounded-full text-sm font-medium">React.js</span>
              <span className="bg-yellow-100 text-yellow-700 py-2 px-4 rounded-full text-sm font-medium">Node.js</span>
              <span className="bg-red-100 text-red-700 py-2 px-4 rounded-full text-sm font-medium">CSS</span>
              <span className="bg-purple-100 text-purple-700 py-2 px-4 rounded-full text-sm font-medium">Tailwind CSS</span>
              <span className="bg-indigo-100 text-indigo-700 py-2 px-4 rounded-full text-sm font-medium">Git</span>
              <span className="bg-pink-100 text-pink-700 py-2 px-4 rounded-full text-sm font-medium">HTML</span>
              <span className="bg-gray-100 text-gray-700 py-2 px-4 rounded-full text-sm font-medium">MongoDB</span>
              {/* New Skills */}
              <span className="bg-blue-100 text-blue-700 py-2 px-4 rounded-full text-sm font-medium">Python (Advanced)</span>
              <span className="bg-purple-100 text-purple-700 py-2 px-4 rounded-full text-sm font-medium">Figma</span>
              <span className="bg-green-100 text-green-700 py-2 px-4 rounded-full text-sm font-medium">WordPress</span>
            </div>

            {/* Experience Timeline */}
            <h3 className="text-xl font-semibold text-gray-800 mb-3">My Journey</h3>
            <div className="relative mb-8">
              {/* Timeline Blocks */}
              <div className="mb-8 flex items-center justify-start">
                <div className="w-12 h-12 bg-blue-500 text-white flex items-center justify-center font-bold text-lg mr-6">
                  2020
                </div>
                <div className="flex-1 border-2 border-gray-300 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-800">Started learning HTML & CSS</h4>
                  <p className="text-gray-700 mt-2">I began learning the basics of web development with HTML and CSS to build simple static websites.</p>
                </div>
              </div>

              <div className="mb-8 flex items-center justify-start">
                <div className="w-12 h-12 bg-green-500 text-white flex items-center justify-center font-bold text-lg mr-6">
                  2021
                </div>
                <div className="flex-1 border-2 border-gray-300 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-800">Learned JavaScript</h4>
                  <p className="text-gray-700 mt-2">I delved into JavaScript to add interactivity and dynamic features to my websites.</p>
                </div>
              </div>

              <div className="mb-8 flex items-center justify-start">
                <div className="w-12 h-12 bg-yellow-500 text-white flex items-center justify-center font-bold text-lg mr-6">
                  2022
                </div>
                <div className="flex-1 border-2 border-gray-300 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-800">Started Learning React.js</h4>
                  <p className="text-gray-700 mt-2">I transitioned to React to build dynamic single-page applications (SPAs).</p>
                </div>
              </div>

              <div className="mb-8 flex items-center justify-start">
                <div className="w-12 h-12 bg-red-500 text-white flex items-center justify-center font-bold text-lg mr-6">
                  2023
                </div>
                <div className="flex-1 border-2 border-gray-300 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-800">Mastered Python (Advanced)</h4>
                  <p className="text-gray-700 mt-2">I learned Python to work on back-end development and machine learning projects.</p>
                </div>
              </div>

              <div className="mb-8 flex items-center justify-start">
                <div className="w-12 h-12 bg-purple-500 text-white flex items-center justify-center font-bold text-lg mr-6">
                  2024
                </div>
                <div className="flex-1 border-2 border-gray-300 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-800">Exploring UI/UX Design (Figma)</h4>
                  <p className="text-gray-700 mt-2">I’m currently exploring UI/UX design using Figma to improve the user interface of the applications I build.</p>
                </div>
              </div>
            </div>

            {/* Hobbies */}
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Hobbies</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Photography</li>
              <li>Traveling</li>
              <li>Gaming</li>
              <li>Reading Books</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutMe;
