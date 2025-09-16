import ScrollAnimatedSection from './ScrollAnimatedSection';

const ProfileSummary = () => {
  const featureItems = [
    { title: 'Problem Solving', description: 'Strong analytical thinking with a passion for tackling complex challenges through innovative solutions.', icon: '🧩' },
    { title: 'Team Collaboration', description: 'Excellent communication skills with experience in collaborative development environments.', icon: '👥' },
    { title: 'Continuous Learning', description: 'Committed to staying updated with the latest technologies and industry best practices.', icon: '📚' },
    { title: 'Quality Focus', description: 'Dedicated to writing clean, maintainable code and delivering high-quality software solutions.', icon: '⚡' }
  ];

  return (
    <section id="profile-summary" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50 gpu-accelerated">
      <div className="container mx-auto container-padding">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimatedSection animation="fade-up" delay={0}>
            <h2 className="section-title text-center animate-fade-in-up">Profile Summary</h2>
            <p className="text-center text-gray-600 mb-8 sm:mb-12 lg:mb-16 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Passionate Computer Science Engineering student with expertise in modern web development technologies and a strong foundation in software engineering principles.
            </p>
          </ScrollAnimatedSection>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
              <div className="card animate-fade-in-up mobile-stagger-1" data-aos="fade-up" data-aos-delay="100">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 stagger-child">
                    <span className="text-white text-sm sm:text-base">🎯</span>
                  </div>
                  <div className="stagger-child">
                    <h3 className="font-semibold text-gray-900 mb-2 text-lg sm:text-xl">Solution-Driven Developer</h3>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                      A <span className="font-semibold gradient-text">proactive and solution-driven</span> Computer Science Engineering student with a passion for applying theoretical knowledge to real-world challenges.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="card animate-fade-in-up mobile-stagger-2" data-aos="fade-up" data-aos-delay="300">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 stagger-child">
                    <span className="text-white text-sm sm:text-base">🚀</span>
                  </div>
                  <div className="stagger-child">
                    <h3 className="font-semibold text-gray-900 mb-2 text-lg sm:text-xl">Innovation-Focused</h3>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                      Highly motivated to excel as a <span className="font-semibold gradient-text">programmer and innovative developer</span>, with a focus on continuous learning and professional growth.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="card animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm sm:text-base">⚡</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-lg sm:text-xl">Fast-Paced Excellence</h3>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                      Capable of working in <span className="font-semibold gradient-text">fast-paced environments</span> while maintaining high-quality standards. Eager to contribute as a problem solver and team player with leadership potential.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Visual Elements */}
            <div className="flex flex-col items-center space-y-6 lg:space-y-8 order-1 lg:order-2">
              <div className="relative animate-float">
                <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-4xl sm:text-5xl lg:text-6xl font-bold shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
                  <span className="relative z-10">AM</span>
                </div>
                <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-lg sm:text-2xl animate-bounce shadow-lg">
                  ⭐
                </div>
                <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-sm sm:text-lg animate-pulse shadow-lg">
                  💻
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-xs sm:max-w-sm">
                <div className="card text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold gradient-text">3+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Years Learning</div>
                </div>
                <div className="card text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold gradient-text">8+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Technologies</div>
                </div>
                <div className="card text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold gradient-text">5+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Projects</div>
                </div>
                <div className="card text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold gradient-text">100%</div>
                  <div className="text-xs sm:text-sm text-gray-600">Dedication</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Key Highlights */}
          <div className="mt-12 lg:mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                icon: '🎯',
                title: 'Goal-Oriented',
                description: 'Focused on achieving excellence in software development with clear objectives',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: '🚀',
                title: 'Innovation-Driven',
                description: 'Passionate about creating cutting-edge solutions that make a difference',
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: '👥',
                title: 'Team Player',
                description: 'Strong collaboration and leadership qualities with excellent communication',
                color: 'from-green-500 to-blue-500'
              }
            ].map((item, index) => (
              <div key={index} className="project-card text-center group animate-fade-in-up" style={{animationDelay: `${0.6 + index * 0.2}s`}}>
                <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center text-2xl sm:text-3xl mb-4 sm:mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-2 sm:mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSummary;