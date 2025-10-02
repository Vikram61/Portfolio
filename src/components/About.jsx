import React from 'react';
import { Award, BookOpen, Coffee, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, label: 'Projects Completed', value: '15+' },
    { icon: BookOpen, label: 'Courses Taken', value: '10+' },
    { icon: Coffee, label: 'Lines of Code', value: '50K+' },
    { icon: Heart, label: 'GitHub Commits', value: '100+' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div  className='h-160' >
              <div className="w-90 h-90 mx-auto lg:mx-0 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1 overflow-hidden">
                 <img src="/broad.jpg" alt="profile" className='w-full h-full object-cover' />
                
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Passionate Computer Science Student
              </h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                I'm a Computer Science student at Vignan's Institue of Information Technology. I have passion for creating 
                innovative software solutions. My journey in tech started with curiosity about 
                how things work, and has evolved into a deep love for problem-solving through code.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects. I believe in 
                continuous learning and staying updated with the latest industry trends.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                    <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;