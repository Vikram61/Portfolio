import React, { useState, useEffect } from 'react';
import { ChevronDown, Code, Database, Globe } from 'lucide-react';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  const roles = ['Full Stack Developer', 'Software Engineer', 'Tech Enthusiast'];

  useEffect(() => {
    const tick = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setCurrentText(
        isDeleting
          ? fullText.substring(0, currentText.length - 1)
          : fullText.substring(0, currentText.length + 1)
      );

      if (isDeleting) {
        if (currentText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
        }
      } else {
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    };

    const timer = setTimeout(tick, isDeleting ? 100 : 150);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, loopNum, roles]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
      
      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Code className="absolute top-1/4 left-1/4 w-8 h-8 text-blue-200 animate-float" />
        <Database className="absolute top-1/3 right-1/4 w-6 h-6 text-purple-200 animate-float-delayed" />
        <Globe className="absolute bottom-1/3 left-1/3 w-10 h-10 text-green-200 animate-float" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Masana Vikram Vasisht
            </span>
          </h1>
          
          <div className="text-2xl md:text-3xl text-gray-600 mb-8 h-12">
            I'm a{' '}
            <span className="text-blue-600 font-semibold">
              {currentText}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
            I am a computer science student and an aspiring MERN stack developer. I like problem solving and DSA. 
             I am currently pursuing B Tech 4th year in CSE - Data Science stream.
                           I am a tech enthusiast and like to learn new technologies. I also have knowledge on data science
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#projects"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}

      </div>
    </section>
  );
};

export default Hero;