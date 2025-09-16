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
      institution: 'Sushree Institute of Technical Education',
      location: 'Balangir, Odisha',
      period: '2022-2025',
      status: 'completed',
      description: 'Completed diploma with strong foundation in programming fundamentals and software engineering principles.',
      highlights: ['Programming Fundamentals', 'Object-Oriented Programming', 'Computer Networks', 'System Analysis']
    }
  ];

  return (
    <section id="education" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title text-center animate-fade-in-up">Education</h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden lg:block"></div>
            
            <div className="space-y-8 lg:space-y-12">
              {educationData.map((edu, index) => (
                <div key={index} className={`relative animate-fade-in-up`} style={{animationDelay: `${index * 0.3}s`}}>
                  {/* Timeline Dot */}
                  <div className="absolute left-0 sm:left-4 lg:left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white shadow-lg hidden lg:block"></div>
                  
                  <div className="project-card lg:ml-16">
                    {/* Status Badge */}
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-sm font-semibold mb-4 ${
                      edu.status === 'current' 
                        ? 'bg-green-100 text-green-700 border border-green-200' 
                        : 'bg-blue-100 text-blue-700 border border-blue-200'
                    }`}>
                      <div className={`w-2 h-2 rounded-full mr-2 ${
                        edu.status === 'current' ? 'bg-green-500' : 'bg-blue-500'
                      }`}></div>
                      {edu.status === 'current' ? 'Currently Enrolled' : 'Completed'}
                    </div>
                    
                    <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
                      {/* Education Details */}
                      <div className="lg:col-span-2">
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                          {edu.degree}
                        </h3>
                        
                        <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                          <p className="gradient-text font-semibold text-sm sm:text-base">
                            {edu.institution}
                          </p>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-gray-600 text-sm sm:text-base">
                            <div className="flex items-center gap-2">
                              <span className="text-blue-500">📍</span>
                              {edu.location}
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-purple-500">📅</span>
                              {edu.period}
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-gray-700 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                          {edu.description}
                        </p>
                        
                        {/* Key Highlights */}
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">Key Subjects:</h4>
                          <div className="flex flex-wrap gap-2">
                            {edu.highlights.map((highlight, idx) => (
                              <span key={idx} className="skill-tag">
                                {highlight}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* Visual Element */}
                      <div className="flex items-center justify-center lg:justify-start">
                        <div className={`w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-2xl flex items-center justify-center text-white text-2xl sm:text-3xl font-bold shadow-xl transform hover:scale-110 transition-transform duration-300 ${
                          edu.status === 'current' 
                            ? 'bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600' 
                            : 'bg-gradient-to-br from-blue-400 via-purple-500 to-indigo-600'
                        }`}>
                          {edu.status === 'current' ? '🎓' : '✅'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Academic Focus */}
          <div className="mt-12 lg:mt-16">
            <div className="card bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 border-blue-200 text-center animate-fade-in-up" style={{animationDelay: '0.8s'}}>
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-6 shadow-lg">
                🎯
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                Academic Excellence & Focus
              </h3>
              <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto text-sm sm:text-base">
                Specializing in <span className="font-semibold gradient-text">software development</span>, 
                <span className="font-semibold gradient-text"> data structures & algorithms</span>, and 
                <span className="font-semibold gradient-text"> modern web technologies</span>. 
                Continuously expanding knowledge through practical projects, industry-relevant coursework, 
                and hands-on experience with cutting-edge development tools and methodologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;