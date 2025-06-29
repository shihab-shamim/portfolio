import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Building, GraduationCap } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Led development of microservices architecture serving 1M+ users. Mentored junior developers and implemented CI/CD pipelines that reduced deployment time by 70%.',
      skills: ['React', 'Node.js', 'AWS', 'Docker', 'Kubernetes']
    },
    {
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      location: 'New York, NY',
      period: '2020 - 2022',
      description: 'Built the entire MVP from scratch using React and Express.js. Scaled the platform to handle 100K+ concurrent users and integrated third-party payment systems.',
      skills: ['React', 'Express.js', 'PostgreSQL', 'Redis', 'Stripe']
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency',
      location: 'Los Angeles, CA',
      period: '2019 - 2020',
      description: 'Developed responsive web applications for various clients. Improved page load speeds by 40% through optimization techniques and modern web practices.',
      skills: ['Vue.js', 'JavaScript', 'SCSS', 'Webpack', 'PWA']
    }
  ];

  const education = [
    {
      degree: 'Master of Science in Computer Science',
      school: 'Stanford University',
      location: 'Stanford, CA',
      period: '2017 - 2019',
      description: 'Specialized in Machine Learning and Distributed Systems. Graduated Magna Cum Laude.'
    },
    {
      degree: 'Bachelor of Science in Software Engineering',
      school: 'UC Berkeley',
      location: 'Berkeley, CA',
      period: '2013 - 2017',
      description: 'Focus on Web Technologies and Database Systems. Dean\'s List for 6 semesters.'
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

        {/* Achievements */}
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
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;