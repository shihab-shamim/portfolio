import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Server, Wrench } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Palette size={24} />,
      color: 'from-blue-500 to-purple-600',
      skills: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'TypeScript',
        'React',
        'Next.js',
        'React Router',
        'Tailwind CSS',
        'SCSS',
        'SASS',
        'Bootstrap',
        'Styled Components',
        'MUI',
        'Chakra UI',
        'Daisy UI',
        'Mamba UI',
        'Framer Motion',
        'GSAP',
        'AOS',
        'Context API',
        'Redux Toolkit',
        'React Query',
        'Axios',
        'Fetch API',
        'React Hook Form',
        'Formik',
        'Firebase Authentication',
        'Authentication & Authorization (Better Auth)',
      ],
    },
  {
  title: 'Backend Development',
  icon: <Server size={24} />,
  color: 'from-green-500 to-teal-600',
  skills: [
    'Node.js',
    'Express.js',
    'FastAPI',
    'REST APIs',
    'JWT',
    'Firebase Admin SDK',
    'Cookie Parser',
    'CORS',
    'MongoDB',
    'Mongoose',

    'PostgreSQL',
    'Prisma ORM',
    'CRUD Operations',
    'MVC Pattern',
    'Authentication & Authorization',
    'Error Handling'
  ]
},
    {
      title: 'Tools & Technologies',
      icon: <Wrench size={24} />,
      color: 'from-indigo-500 to-purple-600',
      skills: [
        'Git',
        'GitHub',
        'VS Code',
        'Postman',
        'Thunder Client',
        'Vercel',
        'Netlify',
        'Firebase',
        'MongoDB Atlas',
        'Figma',
        'Adobe XD',
        'Canva',
        'Jira',
        'Trello',
        'Slack',
        'Notion',
        'Chrome DevTools',
        'ESLint',
        'Prettier',
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center text-white mr-4 shadow-lg`}
                  >
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
                        delay: categoryIndex * 0.1 + skillIndex * 0.02,
                      }}
                      whileHover={{
                        scale: 1.05,
                        y: -2,
                        transition: { duration: 0.2 },
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
      </div>
    </section>
  );
};

export default Skills;
