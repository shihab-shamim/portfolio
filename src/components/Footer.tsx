import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Twitter, Mail, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-6 sm:mb-8"
          >
            <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
              SHIHAB SHAMIM
            </h3>
            <p className="mt-2 text-slate-400 text-sm sm:text-base px-4">
              Full Stack Developer passionate about creating exceptional digital experiences
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-4 sm:space-x-6 mb-6 sm:mb-8"
          >
            {[
              { icon: <Github size={20} />, href: 'https://github.com/shihab-shamim', label: 'GitHub' },
              { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/shihabshamim/', label: 'LinkedIn' },
              { icon: <Facebook size={20} />, href: 'https://www.facebook.com/Shihab.shamim.2024', label: 'Facebook' },
              { icon: <Mail size={20} />, href: 'mailto:shihabshamim767@gmail.com', label: 'Email' }
            ].map((social) => (
              <motion.a
              target='_blank'
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="text-slate-400 hover:text-teal-400 transition-colors duration-300"
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-6 sm:mb-8 text-sm px-4"
          >
            {[
              { name: 'About', href: '#about' },
              { name: 'Skills', href: '#skills' },
              { name: 'Projects', href: '#projects' },
              { name: 'Experience', href: '#experience' },
              { name: 'Contact', href: '#contact' }
            ].map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  const element = document.querySelector(link.href);
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-slate-400 hover:text-teal-400 transition-colors duration-300"
              >
                {link.name}
              </button>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="border-t border-slate-800 pt-6 sm:pt-8"
          >
            <p className="text-slate-400 flex items-center justify-center text-sm sm:text-base px-4">
              © {currentYear} Shihab Shamim. Made with <Heart size={14} className="mx-1 text-red-500" /> and lots of coffee
            </p>
            <p className="text-slate-500 text-xs sm:text-sm mt-2">
              Built with React, TypeScript, and Tailwind CSS
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;