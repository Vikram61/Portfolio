import React from 'react';
import { Target, BookOpen, Calendar, Lightbulb, Code, Users } from 'lucide-react';

const Experience = () => {
  const journey = [
    {
      title: 'Academic Excellence',
      period: '2022 - Present',
      description: 'Pursuing Computer Science - Data Science Specialization degree with focus on software development, algorithms, and modern web technologies and also machine learning concepts. Maintaining strong academic performance while building practical skills.',
      highlights: [
        'Consistent Dean\'s List recognition',
        'Active participation in coding competitions',
        'Leadership in computer science study groups',
      ],
      icon: BookOpen,
    },
    {
      title: 'Self-Directed Learning',
      period: '2023 - Present',
      description: 'Continuously expanding technical skills through online courses, tutorials, and hands-on projects. Building a strong foundation in full-stack development.',
      highlights: [
        'Completed 10+ online programming courses',
        'Built 15+ personal projects from scratch',
        'Contributing to open-source repositories',
      ],
      icon: Code,
    }
  ];

  const goals = [
    {
      title: 'Immediate Goals',
      items: [
        'Secure software development internship',
        'Contribute to meaningful open-source projects',
        'Build production-ready applications',
        'Expand knowledge in cloud technologies',
      ],
    },
    {
      title: 'Career Aspirations',
      items: [
        'Full-stack software engineer role',
        'Work on innovative tech solutions',
        'Lead development teams',
        'Contribute to impactful products',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              My Journey & Goals
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              While I'm early in my professional journey, I'm passionate about learning and ready to contribute
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {journey.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar size={14} className="mr-1" />
                      {item.period}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {item.description}
                </p>
                
                <div className="space-y-2">
                  {item.highlights.map((highlight, highlightIndex) => (
                    <div key={highlightIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Goals Section */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center justify-center mb-8">
              <Target className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-3xl font-bold text-gray-900">Career Goals & Aspirations</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {goals.map((goalCategory, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Lightbulb className="w-5 h-5 text-blue-600 mr-2" />
                    {goalCategory.title}
                  </h4>
                  <div className="space-y-3">
                    {goalCategory.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <div className="bg-blue-600 text-white px-6 py-3 rounded-lg inline-flex items-center space-x-2">
                <span className="font-semibold">Ready to start my professional journey!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;