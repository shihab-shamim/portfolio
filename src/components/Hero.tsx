import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, Github, Linkedin, Twitter, Facebook, FacebookIcon } from 'lucide-react';
import image from '../assets/shihab.jpeg'

const Hero: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-teal-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-purple-400/20 to-teal-500/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center lg:justify-start order-2 lg:order-1"
            >
              <div className="relative">
                {/* Main Image Container */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-80 h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-2xl"
                >
                  {/* Gradient Border */}
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 p-1 rounded-3xl">
                    <div className="w-full h-full bg-slate-100 dark:bg-slate-800 rounded-3xl flex items-center justify-center">
                      {/* Profile Image Placeholder */}
                      {/* <div className="w-full h-full bg-gradient-to-br from-teal-500 to-blue-600 rounded-3xl flex items-center justify-center">
                        <span className="text-8xl font-bold text-white">JD</span>
                      </div> */}
                      <img className='w-full h-full' src={image} alt="" />
                    </div>
                  </div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-lg flex items-center justify-center"
                >
                  <span className="text-2xl">⚡</span>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-pink-400 to-red-500 rounded-xl shadow-lg flex items-center justify-center"
                >
                  <span className="text-xl">🚀</span>
                </motion.div>

                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute top-1/2 -right-8 w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-full shadow-lg flex items-center justify-center"
                >
                  <span className="text-lg">💻</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center lg:text-left order-1 lg:order-2"
            >
              {/* Greeting */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mb-4"
              >
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-teal-500/10 to-blue-600/10 border border-teal-500/20 rounded-full text-teal-600 dark:text-teal-400 font-medium">
                  👋 Hello, I'm
                </span>
              </motion.div>

              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-slate-900 via-blue-800 to-teal-600 dark:from-slate-100 dark:via-blue-300 dark:to-teal-400 bg-clip-text text-transparent"
              >
               Shihab Shamim
              </motion.h1>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="text-2xl md:text-3xl lg:text-4xl text-slate-600 dark:text-slate-400 mb-6 font-light"
              >
                MERN Stack Developer
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-xl lg:max-w-none"
              >
                Building impactful digital solutions with modern web technologies. Passionate about clean architecture, scalable code, and turning ideas into real-world applications.
              </motion.p>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="flex flex-wrap justify-center lg:justify-start gap-8 mb-10"
              >
                {[
                  { number: '2+', label: 'Years Experience' }
                
                ].map((stat, index) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-teal-600 dark:text-teal-400">
                      {stat.number}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons - Improved Desktop Layout */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('#contact')}
                  className="group px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 min-w-[160px]"
                >
                  <Mail size={20} className="group-hover:scale-110 transition-transform duration-200" />
                  <span>Hire Me</span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('#projects')}
                  className="group px-8 py-4 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-full font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-teal-500 dark:hover:border-teal-400 transition-all duration-300 flex items-center justify-center space-x-2 min-w-[160px]"
                >
                  <a>View Projects</a>
                </motion.button>

                <motion.a
                  href="https://drive.google.com/file/d/1-i7fo6D408uOubF0XmsRtXYflKAbx8MT/view?usp=sharing"
                  target='_blank'
                  // download
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full font-semibold hover:bg-slate-300 dark:hover:bg-slate-600 transition-all duration-300 flex items-center justify-center space-x-2 min-w-[160px]"
                >
                  <Download size={20} className="group-hover:scale-110 transition-transform duration-200" />
                  <span>Resume</span>
                </motion.a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.8 }}
                className="flex justify-center lg:justify-start space-x-4"
              >
                {[
                  { icon: <Github size={20} />, href: 'https://github.com/shihab-shamim', label: 'GitHub' },
                  { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/shihabshamim', label: 'LinkedIn' },
                  { icon: <FacebookIcon size={20} />, href: 'https://www.facebook.com/Shihab.shamim.2024', label: 'Twitter' }
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target='_blank'
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-teal-500 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 2 }}
            className="flex flex-col items-center mt-16"
          >
            <motion.button
              onClick={() => scrollToSection('#about')}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-slate-400 hover:text-teal-500 transition-colors duration-300"
            >
              <ArrowDown size={24} />
            </motion.button>
            <span className="text-sm text-slate-400 mt-2">Scroll to explore</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;