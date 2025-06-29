import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Star } from 'lucide-react';
import linkUp from '../assets/linkUppng.png';
import proland from '../assets/proland.png';
import deel from '../assets/deel.png';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'LinkUp',
      description: "Effective collaboration on an online meeting booking platform project necessitates meticulous planning, seamless communication, and clearly defined roles and responsibilities.",
      image: linkUp,
      tech: ['ReactJS', 'JavaScript', 'TailwindCSS', 'Tanstack', 'Query', 'Firebase', 'MongoDB','Node.js', 'Express.js'],
      client: 'https://github.com/Arefin016/LinkUp-Client/tree/shihab',
      live: 'https://linkup-client-86adb.web.app/',
      featured: true,
      server:"https://github.com/Arefin016/LinkUp-Server/tree/shihab"
    },
    {
      title: 'Proland',
      description: "An e-commerce website designed for buying and selling products, offering a user-friendly platform for managing online transactions and product listings.",
      image: proland,
      tech: ['ReactJS', 'JavaScript', 'TailwindCSS', 'Tanstack', 'Query', 'Firebase', 'MongoDB','Node.js', 'Express.js'],
      client: 'https://github.com/shihab-shamim/assaiment-11-client-',
      live: 'https://assaiment-11.web.app/',
      featured: true,
      server:"https://github.com/shihab-shamim/assaiment-11-server-"
    },
     {
      title: 'DwellingDeel',
      description: "Dwellingdeel is a comprehensive web application focused on providing a seamless user experience for article management and subscription services.",
      image: deel,
      tech: ['ReactJS', 'JavaScript', 'TailwindCSS', 'Tanstack', 'Query', 'Firebase', 'MongoDB','Node.js', 'Express.js'],
      client: 'https://github.com/shihab-shamim/assaiment-12-client',
      live: 'https://assaiment-12.web.app/',
      featured: true,
      server:"https://github.com/shihab-shamim/assaiment-12-server"
    }
    // {
    //   title: 'Weather Analytics Dashboard',
    //   description: 'A responsive dashboard for weather analytics with interactive charts, forecasting, and location-based weather data visualization.',
    //   image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   tech: ['React', 'D3.js', 'Python', 'FastAPI'],
    //   github: 'https://github.com',
    //   live: 'https://example.com',
    //   featured: false
    // },
    // {
    //   title: 'Social Media API',
    //   description: 'RESTful API for a social media platform with user authentication, post management, and real-time messaging capabilities.',
    //   image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   tech: ['Node.js', 'Express.js', 'JWT', 'Redis'],
    //   github: 'https://github.com',
    //   live: 'https://example.com',
    //   featured: false
    // },
    // {
    //   title: 'Portfolio Website',
    //   description: 'A modern, responsive portfolio website built with React and Framer Motion, featuring smooth animations and dark mode support.',
    //   image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    //   github: 'https://github.com',
    //   live: 'https://example.com',
    //   featured: false
    // },
    // {
    //   title: 'Crypto Trading Bot',
    //   description: 'An automated cryptocurrency trading bot with machine learning algorithms for market analysis and automated trading strategies.',
    //   image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   tech: ['Python', 'TensorFlow', 'PostgreSQL', 'Docker'],
    //   github: 'https://github.com',
    //   live: 'https://example.com',
    //   featured: false
    // }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-slate-900 dark:text-slate-100">
            Featured Projects
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-600 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto px-4">
            A showcase of my recent work and side projects that demonstrate my skills and passion for development.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="max-w-7xl mx-auto mb-12 sm:mb-16">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative bg-slate-50 dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10">
                  <div className="flex items-center space-x-1 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    <Star size={10} fill="currentColor" />
                    <span className="hidden sm:inline">Featured</span>
                  </div>
                </div>
                
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-slate-900 dark:text-slate-100">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-3 sm:mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 sm:px-3 py-1 bg-teal-500/10 text-teal-600 dark:text-teal-400 rounded-full text-xs sm:text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <motion.a
                      href={project.client}
                      target='_blank'
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center space-x-2 px-4 py-2.5 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors duration-200 text-sm sm:text-base"
                    >
                      <Github size={16} />
                      <span>Client</span>
                    </motion.a>
                    <motion.a
                     href={project.server}
                      target='_blank'
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center space-x-2 px-4 py-2.5 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors duration-200 text-sm sm:text-base"
                    >
                      <Github size={16} />
                      <span>server</span>
                    </motion.a>
                    <motion.a
                      href={project.live}
                       target='_blank'
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center space-x-2 px-4 py-2.5 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-200 text-sm sm:text-base"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        {/* <div className="max-w-7xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-slate-900 dark:text-slate-100 text-center"
          >
            Other Notable Projects
          </motion.h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group bg-slate-50 dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-4 sm:p-5">
                  <h4 className="text-base sm:text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100">
                    {project.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-3 sm:mb-4 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-3 sm:mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-teal-500/10 text-teal-600 dark:text-teal-400 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-0.5 text-slate-500 text-xs">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex space-x-3">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.05 }}
                      className="text-slate-600 dark:text-slate-400 hover:text-teal-500"
                    >
                      <Github size={16} />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      whileHover={{ scale: 1.05 }}
                      className="text-slate-600 dark:text-slate-400 hover:text-teal-500"
                    >
                      <ExternalLink size={16} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;