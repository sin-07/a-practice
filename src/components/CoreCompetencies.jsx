const CoreCompetencies = () => {
  const competencies = [
    {
      title: 'Fast-Paced Learning',
      description: 'Ability to adapt quickly to new technologies and environments.',
      icon: '⚡',
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'from-yellow-50 to-orange-50',
      borderColor: 'border-yellow-200',
      examples: ['Quick technology adoption', 'Rapid skill acquisition', 'Adaptive mindset']
    },
    {
      title: 'Continuous Improvement Mindset',
      description: 'Committed to constant learning and upskilling.',
      icon: '📈',
      color: 'from-green-400 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50',
      borderColor: 'border-green-200',
      examples: ['Self-directed learning', 'Skill enhancement', 'Growth-oriented approach']
    },
    {
      title: 'Effective Time Management',
      description: 'Proven ability to manage tasks efficiently and meet deadlines.',
      icon: '⏰',
      color: 'from-blue-400 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
      borderColor: 'border-blue-200',
      examples: ['Priority setting', 'Deadline management', 'Efficient workflows']
    },
    {
      title: 'Team Collaboration',
      description: 'Strong team player with leadership qualities, capable of working in diverse and collaborative environments.',
      icon: '👥',
      color: 'from-purple-400 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50',
      borderColor: 'border-purple-200',
      examples: ['Cross-functional teamwork', 'Leadership potential', 'Collaborative spirit']
    }
  ];

  return (
    <section id="core-competencies" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center animate-fade-in-up">Core Competencies</h2>
          <p className="text-center text-gray-600 mb-8 sm:mb-12 lg:mb-16 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Essential soft skills and personal attributes that drive my professional growth and effectiveness in collaborative environments.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {competencies.map((competency, index) => (
              <div key={index} className={`card bg-gradient-to-br ${competency.bgColor} ${competency.borderColor} hover:shadow-2xl transition-all duration-300 group`}>
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${competency.color} flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {competency.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {competency.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {competency.description}
                    </p>
                  </div>
                </div>
                
                {/* Examples */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800 flex items-center gap-2">
                    <span className="text-blue-500">💫</span>
                    Key Aspects
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {competency.examples.map((example, exampleIndex) => (
                      <span
                        key={exampleIndex}
                        className="bg-white/70 text-gray-700 px-3 py-1.5 rounded-full text-sm font-medium border border-gray-200 hover:bg-white hover:shadow-md transition-all duration-300"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Competency Summary */}
          <div className="mt-16">
            <div className="card bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 border-indigo-200">
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center justify-center gap-2">
                  <span className="text-2xl">🌟</span>
                  Professional Strengths
                </h3>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-indigo-600 mb-1">Adaptable</div>
                    <div className="text-sm text-gray-600">Quick learner</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600 mb-1">Growth-Oriented</div>
                    <div className="text-sm text-gray-600">Continuous improvement</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">Organized</div>
                    <div className="text-sm text-gray-600">Efficient planning</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pink-600 mb-1">Collaborative</div>
                    <div className="text-sm text-gray-600">Team player</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="mt-12 text-center">
            <div className="card bg-gradient-to-r from-blue-600 to-purple-600 text-white border-none">
              <h3 className="text-xl font-bold mb-4">Ready to Contribute</h3>
              <p className="mb-6 opacity-90">
                These core competencies, combined with my technical skills, position me to make meaningful contributions 
                to any development team or project.
              </p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg">
                Let's Connect
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreCompetencies;