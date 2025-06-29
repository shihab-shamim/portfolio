import React from 'react';
import { motion } from 'framer-motion';
import { Code, Coffee, Heart, Zap } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Code size={20} />,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code with best practices'
    },
    {
      icon: <Zap size={20} />,
      title: 'Performance',
      description: 'Optimizing applications for speed and efficiency'
    },
    {
      icon: <Heart size={20} />,
      title: 'User Experience',
      description: 'Creating intuitive and delightful user interfaces'
    },
    {
      icon: <Coffee size={20} />,
      title: 'Problem Solving',
      description: 'Tackling complex challenges with creative solutions'
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-slate-900 dark:text-slate-100">
            About Me
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-600 mx-auto mb-6 sm:mb-8"></div>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* Content */}
           <motion.div
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  viewport={{ once: true }}
  className="order-2 lg:order-1"
>
  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 text-slate-900 dark:text-slate-100">
    Passionate Full Stack Developer
  </h3>
  <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-4 sm:mb-6 leading-relaxed">
    I'm a dedicated Full Stack Developer with 2 years of hands-on experience building dynamic and responsive web applications. 
    My expertise lies in creating scalable, maintainable, and user-friendly solutions using the latest tools and technologies in the industry.
  </p>
  <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-6 sm:mb-8 leading-relaxed">
    I’m passionate about clean code, performance optimization, and delivering seamless user experiences. 
    I constantly strive to improve by learning new technologies, contributing to open-source, and engaging with the developer community.
  </p>

  {/* Tech Stack */}
  <div className="mb-6 sm:mb-8">
    <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-slate-900 dark:text-slate-100">
      Technologies I Love
    </h4>
    <div className="flex flex-wrap gap-2 sm:gap-3">
      {[
  'React',
  'JavaScript',
  'Node.js',
  'Express.js',
  'MongoDB',
  'Tailwind CSS',
  'Bootstrap',
  'Firebase',
  'JWT',
  'Stripe',
  'Git & GitHub',
  'Figma'
]
.map((tech) => (
        <motion.span
          key={tech}
          whileHover={{ scale: 1.05 }}
          className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-teal-500/10 to-blue-600/10 border border-teal-500/20 rounded-full text-sm sm:text-base text-teal-600 dark:text-teal-400 font-medium"
        >
          {tech}
        </motion.span>
      ))}
    </div>
  </div>
</motion.div>


            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 order-1 lg:order-2"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-teal-500 mb-3 sm:mb-4">
                    {feature.icon}
                  </div>
                  <h5 className="font-semibold mb-2 text-slate-900 dark:text-slate-100 text-sm sm:text-base">
                    {feature.title}
                  </h5>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;