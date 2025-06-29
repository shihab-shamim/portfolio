import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Wrench, Palette, Server, Globe, Smartphone } from 'lucide-react';

const Skills: React.FC = () => {
const skillCategories = [
  {
    title: 'Frontend Development',
    icon: <Palette size={24} />,
    color: 'from-blue-500 to-purple-600',
    skills: [
      // Core
      'HTML5', 'CSS3', 'JavaScript', 'TypeScript',

      // Frameworks/Libraries
      'React', 

      // Styling
      'Tailwind CSS', 'SCSS', 'SASS', 'Bootstrap', 'Styled Components', 'MUI', 'Chakra UI', 'Daisy UI', 'Mamba UI',

      // Animation
      'Framer Motion', 'GSAP', 'AOS',

      // State Management
       'Context API',

      // Data Fetching
      'React Query',  'Axios',

      // Forms
      'React Hook Form', 'Formik', 


    ]
  },
  {
    title: 'Backend Development',
    icon: <Server size={24} />,
    color: 'from-green-500 to-teal-600',
    skills: [
      'Node.js', 'Express.js',  'FastAPI',
        'REST APIs', 
      'JWT', 'MVC Pattern',
     'Error Handling','MongoDB'
    ]
  },
 

  {
    title: 'Tools & Technologies',
    icon: <Wrench size={24} />,
    color: 'from-indigo-500 to-purple-600',
    skills: [
      'Git', 'GitHub',
      'VS Code',  'Postman', 'Thunder Client',
      'Figma', 'Adobe XD', 'Canva',
      'Jira', 'Trello', 'Slack', 'Notion',
       'Chrome DevTools',
      'ESLint',
    ]
  }
];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-slate-100">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use to build exceptional digital experiences.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700"
              >
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center text-white mr-4 shadow-lg`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Grid */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: categoryIndex * 0.1 + skillIndex * 0.02 
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        y: -2,
                        transition: { duration: 0.2 }
                      }}
                      viewport={{ once: true }}
                      className="px-3 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium hover:bg-gradient-to-r hover:from-teal-500 hover:to-blue-600 hover:text-white transition-all duration-200 cursor-default border border-slate-200 dark:border-slate-600 hover:border-transparent"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Featured Technologies */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-semibold mb-8 text-slate-900 dark:text-slate-100">
            Currently Learning & Exploring
          </h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              'AI/Machine Learning',
              'Blockchain Development',
              'WebAssembly',
              'Rust',
              'Go',
              'Three.js',
              'Web3',
              'Serverless Architecture'
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -3 }}
                viewport={{ once: true }}
                className="px-6 py-3 bg-gradient-to-r from-teal-500/10 to-blue-600/10 border-2 border-teal-500/20 rounded-full text-teal-600 dark:text-teal-400 font-medium hover:from-teal-500 hover:to-blue-600 hover:text-white hover:border-transparent transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div> */}

        {/* Certifications */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold mb-8 text-slate-900 dark:text-slate-100">
            Certifications & Achievements
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { title: 'AWS Certified Developer', org: 'Amazon Web Services', year: '2023' },
              { title: 'Google Cloud Professional', org: 'Google Cloud', year: '2023' },
              { title: 'MongoDB Certified', org: 'MongoDB University', year: '2022' },
              { title: 'React Expert Certification', org: 'Meta', year: '2022' }
            ].map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                viewport={{ once: true }}
                className="p-6 bg-white dark:bg-slate-900 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-700"
              >
                <div className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  {cert.title}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                  {cert.org}
                </div>
                <div className="text-xs text-teal-600 dark:text-teal-400 font-medium">
                  {cert.year}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Skills;