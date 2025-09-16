// Technical Skills Component

const TechnicalSkills = () => {
  const skillsData = {
    languages: [
      { name: 'JavaScript', level: 85, icon: '⚡', color: 'from-yellow-400 to-orange-500', description: 'Modern ES6+, DOM manipulation, Async/Await' },
      { name: 'Python', level: 80, icon: '🐍', color: 'from-blue-400 to-green-500', description: 'Object-oriented programming, Data structures' },
      { name: 'HTML5', level: 90, icon: '🏗️', color: 'from-orange-400 to-red-500', description: 'Semantic markup, Accessibility, SEO' },
      { name: 'CSS3', level: 85, icon: '🎨', color: 'from-pink-400 to-purple-500', description: 'Flexbox, Grid, Animations, Responsive design' }
    ],
    frameworks: [
      { name: 'React', level: 82, icon: '⚛️', color: 'from-cyan-400 to-blue-500', description: 'Hooks, Context API, Component lifecycle' },
      { name: 'Tailwind CSS', level: 88, icon: '🌊', color: 'from-teal-400 to-blue-500', description: 'Utility-first, Custom components, Responsive' },
      { name: 'Bootstrap', level: 75, icon: '🅱️', color: 'from-purple-400 to-pink-500', description: 'Grid system, Components, Customization' },
      { name: 'Material UI', level: 70, icon: '📱', color: 'from-indigo-400 to-purple-500', description: 'Component library, Theming, Design system' }
    ],
    tools: [
      { name: 'Git', level: 78, icon: '📂', color: 'from-gray-600 to-gray-800', description: 'Version control, Branching, Collaboration' },
      { name: 'GitHub', level: 85, icon: '�', color: 'from-gray-700 to-black', description: 'Repository management, Actions, Pages' },
      { name: 'VS Code', level: 90, icon: '💻', color: 'from-blue-500 to-blue-700', description: 'Extensions, Debugging, Integrated terminal' },
      { name: 'Vite', level: 75, icon: '⚡', color: 'from-yellow-500 to-orange-600', description: 'Fast build tool, Hot reload, Optimization' }
    ],
    concepts: [
      'Responsive Web Design',
      'Version Control',
      'Problem Solving',
      'Algorithm Design',
      'Data Structures',
      'Software Engineering',
      'UI/UX Principles',
      'Performance Optimization'
    ]
  };

  const SkillBar = ({ skill, index }) => (
    <div className="mb-6 animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 bg-gradient-to-r ${skill.color} rounded-lg flex items-center justify-center text-white text-sm shadow-md`}>
            {skill.icon}
          </div>
          <div>
            <span className="font-semibold text-gray-900 text-sm sm:text-base">{skill.name}</span>
            <p className="text-xs text-gray-600 hidden sm:block">{skill.description}</p>
          </div>
        </div>
        <span className="text-sm font-semibold gradient-text">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3 overflow-hidden">
        <div
          className={`bg-gradient-to-r ${skill.color} h-full rounded-full transition-all duration-1000 ease-out transform origin-left`}
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="technical-skills" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto container-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center animate-fade-in-up">Technical Skills</h2>
          <p className="text-center text-gray-600 mb-8 sm:mb-12 lg:mb-16 max-w-2xl mx-auto text-sm sm:text-base animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Here's an overview of my technical expertise across different technologies and tools I use to build modern web applications.
          </p>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {/* Programming Languages */}
            <div className="card animate-fade-in-up mobile-stagger-1 opacity-0 translate-y-8 card-bounce-enter" style={{animationDelay: '0.3s'}} data-aos="fade-up" data-aos-delay="300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-xl shadow-lg">
                  💻
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                  Programming Languages
                </h3>
              </div>
              {skillsData.languages.map((skill, index) => (
                <SkillBar key={index} skill={skill} index={index} />
              ))}
            </div>
            
            {/* Frameworks & Libraries */}
            <div className="card animate-fade-in-up mobile-stagger-2 opacity-0 translate-y-8 card-bounce-enter" style={{animationDelay: '0.5s'}} data-aos="fade-up" data-aos-delay="500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center text-white text-xl shadow-lg">
                  ⚛️
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                  Frameworks & Libraries
                </h3>
              </div>
              {skillsData.frameworks.map((skill, index) => (
                <SkillBar key={index} skill={skill} index={index} />
              ))}
            </div>
            
            {/* Tools & Technologies */}
            <div className="card animate-fade-in-up mobile-stagger-3 opacity-0 translate-y-8 card-bounce-enter lg:col-span-2 xl:col-span-1" style={{animationDelay: '0.7s'}} data-aos="fade-up" data-aos-delay="700">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center text-white text-xl shadow-lg">
                  🛠️
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                  Tools & Technologies
                </h3>
              </div>
              {skillsData.tools.map((skill, index) => (
                <SkillBar key={index} skill={skill} index={index} />
              ))}
            </div>
          </div>
          
          {/* Core Concepts */}
          <div className="mt-12 lg:mt-16">
            <div className="card animate-fade-in-up mobile-stagger-1 opacity-0 translate-y-8 card-bounce-enter" style={{animationDelay: '0.9s'}} data-aos="fade-up" data-aos-delay="900">
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-xl shadow-lg">
                  🧠
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-center">
                  Core Concepts & Expertise
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                {skillsData.concepts.map((concept, index) => (
                  <div
                    key={index}
                    className="skill-tag text-center animate-scale-in"
                    style={{animationDelay: `${1.1 + index * 0.1}s`}}
                  >
                    {concept}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Skill Summary */}
          <div className="mt-12 lg:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: '🌐',
                title: 'Full-Stack Web Development',
                description: 'Specialized in creating responsive, performant, and user-friendly web applications',
                color: 'from-blue-500 to-cyan-500',
                bgColor: 'from-blue-50 to-cyan-50'
              },
              {
                icon: '⚡',
                title: 'Modern Frameworks & Tools',
                description: 'Proficient with React, Tailwind CSS, and modern development workflows',
                color: 'from-purple-500 to-pink-500',
                bgColor: 'from-purple-50 to-pink-50'
              },
              {
                icon: '🎯',
                title: 'Problem Solving & Algorithms',
                description: 'Strong analytical skills with focus on efficient solutions and clean code',
                color: 'from-green-500 to-teal-500',
                bgColor: 'from-green-50 to-teal-50'
              }
            ].map((item, index) => (
              <div key={index} className={`project-card text-center bg-gradient-to-br ${item.bgColor} border-opacity-50 animate-fade-in-up`} style={{animationDelay: `${1.5 + index * 0.2}s`}}>
                <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center text-white text-2xl mb-6 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h4 className="font-bold text-lg sm:text-xl text-gray-900 mb-3">{item.title}</h4>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;