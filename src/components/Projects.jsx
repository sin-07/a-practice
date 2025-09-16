const Projects = () => {
  const projectsData = [
    {
      title: 'Responsive Portfolio Website',
      technology: 'ReactJS',
      description: 'Developed a personal portfolio website using ReactJS with a focus on creating a fully responsive and user-friendly design. Integrated GitHub for project management and collaboration.',
      features: [
        'Fully responsive design',
        'Modern UI/UX with Tailwind CSS',
        'GitHub integration',
        'Performance optimized',
        'Cross-browser compatibility',
        'SEO friendly'
      ],
      technologies: ['ReactJS', 'Tailwind CSS', 'JavaScript', 'HTML5', 'Vite', 'GitHub'],
      icon: '🌐',
      color: 'from-blue-500 to-purple-600',
      bgGradient: 'from-blue-50 to-purple-50',
      status: 'Live',
      complexity: 'Advanced'
    },
    {
      title: 'Interactive Quiz Application',
      technology: 'Python',
      description: 'Developed a Python quiz application to test general knowledge with user interaction, score tracking, and comprehensive error handling features.',
      features: [
        'Interactive GUI interface',
        'Dynamic score tracking',
        'Comprehensive error handling',
        'Multiple question categories',
        'Results analytics & reporting',
        'Data persistence'
      ],
      technologies: ['Python', 'Tkinter', 'JSON', 'Data Structures', 'File I/O', 'OOP'],
      icon: '🧠',
      color: 'from-green-500 to-teal-600',
      bgGradient: 'from-green-50 to-teal-50',
      status: 'Completed',
      complexity: 'Intermediate'
    }
  ];

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center animate-fade-in-up">Projects & Achievements</h2>
          <p className="text-center text-gray-600 mb-8 sm:mb-12 lg:mb-16 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Here are some of the key projects I've worked on, showcasing my technical skills, problem-solving abilities, 
            and commitment to creating high-quality, user-focused applications.
          </p>
          
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-10">
            {projectsData.map((project, index) => (
              <div 
                key={index} 
                className={`project-card card group bg-gradient-to-br ${project.bgGradient} border-opacity-50 animate-fade-in-up mobile-stagger-${index + 1} opacity-0 translate-y-8 card-bounce-enter`} 
                style={{animationDelay: `${0.4 + index * 0.3}s`}}
                data-aos="fade-up" 
                data-aos-delay={`${200 + index * 200}`}
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center text-white text-xl sm:text-2xl shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    {project.icon}
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className={`bg-gradient-to-r ${project.color} text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold shadow-md`}>
                      {project.technology}
                    </span>
                    <div className="flex gap-2">
                      <span className="bg-white/80 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                        {project.status}
                      </span>
                      <span className="bg-white/80 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                        {project.complexity}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {project.title}
                </h3>
                
                {/* Project Description */}
                <p className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-base">
                  {project.description}
                </p>
                
                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2 text-sm sm:text-base">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xs">✨</span>
                    </div>
                    Key Features
                  </h4>
                  <ul className="space-y-2.5">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm sm:text-base text-gray-700 flex items-start gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Technologies Used */}
                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2 text-sm sm:text-base">
                    <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xs">🛠️</span>
                    </div>
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="skill-tag group-hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Project Actions */}
                <div className="mt-8 pt-6 border-t border-white/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-semibold text-gray-700">
                        {project.status}
                      </span>
                    </div>
                    <button className="btn-secondary text-xs sm:text-sm">
                      View Project →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Achievement Summary */}
          <div className="mt-12 lg:mt-20">
            <div className="card bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 border-indigo-200 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-6 shadow-lg animate-float">
                  🏆
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                  Project Impact & Achievements
                </h3>
                <p className="text-gray-700 mb-8 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                  Each project represents a learning milestone, combining technical expertise with creative problem-solving 
                  to deliver meaningful and impactful solutions.
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                  {[
                    { number: '2+', label: 'Major Projects', color: 'text-blue-600', icon: '🚀' },
                    { number: '10+', label: 'Technologies Used', color: 'text-purple-600', icon: '💻' },
                    { number: '100%', label: 'Completion Rate', color: 'text-green-600', icon: '✅' },
                    { number: '24/7', label: 'Learning Mindset', color: 'text-orange-600', icon: '🧠' }
                  ].map((item, index) => (
                    <div key={index} className="text-center animate-scale-in" style={{animationDelay: `${1.0 + index * 0.1}s`}}>
                      <div className="text-2xl mb-2">{item.icon}</div>
                      <div className={`text-2xl sm:text-3xl font-bold ${item.color} mb-1`}>{item.number}</div>
                      <div className="text-xs sm:text-sm text-gray-600 font-medium">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;