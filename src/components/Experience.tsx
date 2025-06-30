import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Building, GraduationCap } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
  {
  title: 'Jr. Software Developer',
  company: 'bplugins.com',
  location: 'Uttara, Sector 12',
  period: '2024 - Present',
  description: 'Full-stack developer with MERN expertise and hands-on experience in custom WordPress plugin developmen',
skills: [
  // Frontend
  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS',
  'Bootstrap', 'SCSS', 'Vite',

  // Backend & Full Stack
  'Node.js', 'Express.js', 'MongoDB', 'REST API', 'Firebase',

  // WordPress & Plugin Development
  'PHP','WordPress Plugin Development',  'Shortcodes', 'WP REST API',

  // Dev Tools & Practices
  'Git', 'GitHub', 'Postman', 'Agile/Scrum', 'CI/CD', 'Microservices'
]

}

   
  ];

  const education = [
   {
  degree: 'Bachelor of Arts (Honours) in Islamic History',
  school: 'National University, Bangladesh',
  location: 'Gazipur, Bangladesh',
  period: '2023 - Ongoing',
  description: 'Currently pursuing a BA (Honours) degree with a strong academic focus and commitment to continuous learning alongside professional development in web technologies.'
}

  ];

  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-24 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-slate-900 dark:text-slate-100">
            Experience & Education
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-600 mx-auto mb-6 sm:mb-8"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Experience */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center mb-6 sm:mb-8"
              >
                <Building className="text-teal-500 mr-3" size={24} />
                <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-slate-100">
                  Work Experience
                </h3>
              </motion.div>

              <div className="space-y-6 sm:space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-6 sm:pl-8 pb-6 sm:pb-8 border-l-2 border-teal-500/30 last:border-l-0 last:pb-0"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-teal-500 rounded-full"></div>
                    
                    <div className="bg-white dark:bg-slate-900 rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                      <h4 className="text-lg sm:text-xl font-semibold mb-1 text-slate-900 dark:text-slate-100">
                        {exp.title}
                      </h4>
                      <div className="text-teal-600 dark:text-teal-400 font-medium mb-2 text-sm sm:text-base">
                        {exp.company}
                      </div>
                      
                      <div className="flex flex-col gap-1 sm:gap-2 mb-3 sm:mb-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                        <div className="flex items-center">
                          <MapPin size={12} className="mr-1 flex-shrink-0" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar size={12} className="mr-1 flex-shrink-0" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                      
                      <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-3 sm:mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 sm:px-3 py-1 bg-teal-500/10 text-teal-600 dark:text-teal-400 rounded-full text-xs sm:text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center mb-6 sm:mb-8"
              >
                <GraduationCap className="text-teal-500 mr-3" size={24} />
                <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-slate-100">
                  Education
                </h3>
              </motion.div>

              <div className="space-y-6 sm:space-y-8">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-6 sm:pl-8 pb-6 sm:pb-8 border-l-2 border-teal-500/30 last:border-l-0 last:pb-0"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-teal-500 rounded-full"></div>
                    
                    <div className="bg-white dark:bg-slate-900 rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                      <h4 className="text-lg sm:text-xl font-semibold mb-1 text-slate-900 dark:text-slate-100">
                        {edu.degree}
                      </h4>
                      <div className="text-teal-600 dark:text-teal-400 font-medium mb-2 text-sm sm:text-base">
                        {edu.school}
                      </div>
                      
                      <div className="flex flex-col gap-1 sm:gap-2 mb-3 sm:mb-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                        <div className="flex items-center">
                          <MapPin size={12} className="mr-1 flex-shrink-0" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar size={12} className="mr-1 flex-shrink-0" />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                      
                      <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Achievements 
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 text-center"
        >
          <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-slate-900 dark:text-slate-100">
            Key Achievements
          </h3>
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {[
              { number: '50+', label: 'Projects Completed' },
              { number: '1M+', label: 'Users Impacted' },
              { number: '5+', label: 'Years Experience' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05 }}
                className="p-4 sm:p-6 bg-white dark:bg-slate-900 rounded-xl shadow-sm"
              >
                <div className="text-2xl sm:text-3xl font-bold text-teal-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Experience;