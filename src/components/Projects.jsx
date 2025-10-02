import React from 'react';
import { ExternalLink, Github, Code, Database, Smartphone } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Neural Narrate - AI Powered Blog Generator',
      description: 'a full-stack web application that allows users to generate, manage, and publish blogs effortlessly using AI. With the power of Google Gemini API, MERN stack, and ImageKit, creating engaging content has never been easier.',
      image: '/neural.png',
      tags: ['React', 'Node JS', 'Express JS', 'Mongo DB', 'Gemini API'],
      github: 'https://github.com/Vikram61/Neural-Narrate',
      demo: 'https://neural-narrate-client.vercel.app/',
      icon: Code,
    },
    {
      title: 'Swiggy Clone',
      description: 'A full-stack Swiggy-inspired food delivery web application built using the MERN stack (MongoDB, Express.js, React, Node.js). Users can browse restaurants, view menus, add items to the cart, and place orders with real-time updates.',
      image: '/photo.png',
      tags: ['React', 'Firebase', 'Material-UI', 'WebSocket'],
      github: 'https://github.com/Vikram61/Swiggy-Clone',
      demo: 'https://github.com/Vikram61/Swiggy-Clone',
      icon: Code,
    },
    {
      title: 'Resume Analyzer and Job Matcher',
      description: 'Responsive weather application with location-based forecasts, historical data visualization, and weather alerts using modern web APIs.',
      image: '/resanalyze.png',
      tags: ['React JS', 'Express Js', 'Python', 'Tailwind CSS'],
      github: 'https://github.com/Vikram61/Resume-Analyzer-and-Job-Matcher',
      demo: 'https://resume-analyzer-and-job-matcher-liard.vercel.app/',
      icon: Smartphone,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for development
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <project.icon className="absolute top-4 right-4 w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;