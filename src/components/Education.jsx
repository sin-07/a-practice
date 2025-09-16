import React from 'react';

const Education = () => {
  const educationData = [
    {
      degree: 'Computer Science Engineering',
      institution: 'ITER | Siksha \'O\' Anusandhan University',
      location: 'Odisha',
      period: 'continuing',
      status: 'current',
      description: 'Currently pursuing undergraduate degree in Computer Science Engineering with focus on software development and emerging technologies.',
      highlights: ['Data Structures & Algorithms', 'Software Engineering', 'Web Development', 'Database Management']
    },
    {
      degree: 'Diploma in Computer Science Engineering',
      institution: 'Government Polytechnic, Rayagada',
      location: 'Odisha',
      period: '2019 - 2022',
      status: 'completed',
      description: 'Completed diploma with strong foundation in programming fundamentals and computer systems.',
      highlights: ['Programming Fundamentals', 'Computer Systems', 'Technical Leadership', 'Project Management']
    }
  ];

  return (
    <section id="education" className="section-padding bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto container-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center animate-fade-in-up">Education</h2>
          <p className="text-center text-gray-600 mb-8 sm:mb-12 lg:mb-16 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            My educational journey in Computer Science Engineering, building a strong foundation in technology and software development.
          </p>
          
          <div className="space-y-8 lg:space-y-12">
            {educationData.map((education, index) => (
              <div 
                key={index} 
                className={`relative animate-fade-in-up mobile-stagger-${index + 1}`} 
                style={{animationDelay: `${0.4 + index * 0.3}s`}}
                data-aos="fade-up" 
                data-aos-delay={`${300 + index * 300}`}
              >
                {/* Timeline line */}
                <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600 transform -translate-x-1/2"></div>
                
                {/* Timeline dot */}
                <div className="hidden lg:block absolute left-1/2 top-8 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transform -translate-x-1/2 z-10 shadow-lg"></div>
                
                <div className={`lg:grid lg:grid-cols-2 lg:gap-16 items-start ${index % 2 === 0 ? '' : 'lg:grid-flow-col-dense'}`}>
                  {/* Content */}
                  <div className={`${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8 lg:col-start-2'}`}>
                    <div className="card bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200/30 hover:shadow-xl transition-all duration-500 group stagger-child">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                              🎓
                            </div>
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              education.status === 'current' 
                                ? 'bg-green-100 text-green-700' 
                                : 'bg-blue-100 text-blue-700'
                            }`}>
                              {education.status === 'current' ? 'Current' : 'Completed'}
                            </span>
                          </div>
                          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                            {education.degree}
                          </h3>
                          <p className="text-blue-600 font-semibold mb-1 text-sm sm:text-base">{education.institution}</p>
                          <p className="text-gray-600 text-sm">{education.location} • {education.period}</p>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <p className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-base">
                        {education.description}
                      </p>
                      
                      {/* Highlights */}
                      <div>
                        <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2 text-sm sm:text-base">
                          <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                            <span className="text-white text-xs">✨</span>
                          </div>
                          Key Highlights
                        </h4>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {education.highlights.map((highlight, highlightIndex) => (
                            <div key={highlightIndex} className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex-shrink-0"></div>
                              <span className="text-sm text-gray-700">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Visual element */}
                  <div className={`hidden lg:block ${index % 2 === 0 ? 'lg:pl-8' : 'lg:pr-8 lg:col-start-1'}`}>
                    <div className="project-card bg-gradient-to-br from-gray-50 to-blue-50 border-gray-200 text-center animate-float group" style={{animationDelay: `${1 + index * 0.5}s`}}>
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        📚
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">Academic Excellence</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Dedicated to continuous learning and academic growth in the field of Computer Science Engineering.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Academic Focus Section */}
          <div className="mt-12 lg:mt-20">
            <div className="card bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 border-indigo-200 animate-fade-in-up" style={{animationDelay: '1.2s'}}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-6 shadow-lg animate-float">
                  🚀
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                  Academic Focus & Future Goals
                </h3>
                <p className="text-gray-700 mb-8 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                  My educational journey is focused on mastering 
                  <span className="font-semibold gradient-text"> software engineering principles</span>, 
                  <span className="font-semibold gradient-text"> data structures & algorithms</span>, and 
                  <span className="font-semibold gradient-text"> modern web technologies</span>. 
                  Continuously expanding knowledge through practical projects, industry-relevant coursework, 
                  and hands-on experience with cutting-edge development tools and methodologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;