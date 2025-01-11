import skillsData from '../../data/skills.json';

export default function Skills() {
  const { skills } = skillsData;

  return (
    <div className="container mx-auto max-w-4xl px-4">
      
      <div className="space-y-12">
        {skills.map((skillGroup, index) => (
          <div key={index}>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xl dark:text-gray-300">{skillGroup.icon}</span>
              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">
                {skillGroup.category}
              </h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {skillGroup.items.map((skill, skillIndex) => (
                <div 
                  key={skillIndex}
                  className={`
                    px-4 py-2 rounded-lg text-sm
                    bg-gradient-to-br from-teal-500/10 to-teal-500/5
                    border border-gray-100 dark:border-gray-700
                    hover:shadow-sm hover:scale-102
                    transition-all duration-300
                    cursor-default whitespace-nowrap
                    dark:bg-gray-800/80 backdrop-blur-sm
                  `}
                >
                  <span className="text-gray-800 dark:text-gray-200 font-medium">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 