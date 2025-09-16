const Hackathon = () => {
  const hackathonHighlights = [
    {
      title: 'Problem-Solving Skills',
      description: 'Enhanced analytical thinking and creative problem-solving abilities',
      icon: '🧩'
    },
    {
      title: 'Innovation Under Pressure',
      description: 'Developed innovative solutions within strict time constraints',
      icon: '⚡'
    },
    {
      title: 'Team Collaboration',
      description: 'Worked effectively in diverse teams to achieve common goals',
      icon: '👥'
    },
    {
      title: 'Rapid Prototyping',
      description: 'Built functional prototypes quickly and efficiently',
      icon: '🚀'
    }
  ];

  return (
    <section id="hackathon" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto container-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center animate-fade-in-up">Hackathon Experience</h2>
          <p className="text-center text-gray-600 mb-8 sm:mb-12 lg:mb-16 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Active participation in coding competitions and hackathons, developing critical thinking, teamwork, and rapid prototyping skills under pressure.
          </p>
          
          {/* Main Content Card */}
          <div className="card bg-gradient-to-br from-orange-50 to-red-50 border-orange-200/30 mb-8 sm:mb-12 lg:mb-16 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <div className="text-center mb-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center text-white text-2xl sm:text-3xl mx-auto mb-6 shadow-xl animate-float">
                🏆
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                Competitive Programming & Hackathons
              </h3>
              <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto text-sm sm:text-base">
                Active participation in various coding and hackathon events to sharpen problem-solving skills and foster innovation under time constraints. These experiences have been instrumental in developing my technical abilities and collaborative mindset.
              </p>
            </div>
          </div>
          
          {/* Skills Developed */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
            {hackathonHighlights.map((highlight, index) => (
              <div key={index} className="card group hover:bg-gradient-to-br hover:from-orange-50 hover:to-yellow-50 hover:border-orange-200 hover:shadow-lg transition-all duration-300 animate-fade-in-up" style={{animationDelay: `${0.6 + index * 0.1}s`}}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center text-white text-lg sm:text-xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    {highlight.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base group-hover:text-orange-600 transition-colors duration-300">
                      {highlight.title}
                    </h4>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Impact & Learnings */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="card text-center bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200/50 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-in-up" style={{animationDelay: '1.0s'}}>
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">⏱️</div>
              <h4 className="font-bold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">Time Management</h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Learned to deliver quality solutions within tight deadlines
              </p>
            </div>
            
            <div className="card text-center bg-gradient-to-br from-green-50 to-green-100 border-green-200/50 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-in-up" style={{animationDelay: '1.1s'}}>
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">💡</div>
              <h4 className="font-bold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">Creative Thinking</h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Developed ability to think outside the box for innovative solutions
              </p>
            </div>
            
            <div className="card text-center bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200/50 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-in-up sm:col-span-2 lg:col-span-1" style={{animationDelay: '1.2s'}}>
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">🎯</div>
              <h4 className="font-bold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">Focus & Dedication</h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Enhanced concentration and dedication to achieve objectives
              </p>
            </div>
          </div>
          
          {/* Future Goals */}
          <div className="mt-8 sm:mt-12 lg:mt-16">
            <div className="card bg-gradient-to-r from-purple-50 via-blue-50 to-cyan-50 border-purple-200/30 animate-fade-in-up" style={{animationDelay: '1.3s'}}>
              <div className="text-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center text-white text-xl sm:text-2xl mx-auto mb-4 sm:mb-6 shadow-lg animate-pulse">
                  🌟
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Looking Forward
                </h3>
                <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto text-sm sm:text-base">
                  Continuing to participate in coding competitions and hackathons to further enhance my skills, 
                  build meaningful connections in the tech community, and contribute to innovative projects that make a difference.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hackathon;