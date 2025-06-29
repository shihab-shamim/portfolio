import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const MouseCursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  
  // Use motion values for better performance
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  
  // Use springs for smooth animation with optimized settings
  const springConfig = { damping: 25, stiffness: 700, mass: 0.5 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);
  
  // Trailing cursor with different spring settings
  const trailingSpringConfig = { damping: 20, stiffness: 300, mass: 0.8 };
  const trailingX = useSpring(cursorX, trailingSpringConfig);
  const trailingY = useSpring(cursorY, trailingSpringConfig);
  
  // Outer ring with slower spring
  const outerSpringConfig = { damping: 15, stiffness: 200, mass: 1 };
  const outerX = useSpring(cursorX, outerSpringConfig);
  const outerY = useSpring(cursorY, outerSpringConfig);

  // Floating particles
  const particle1X = useSpring(cursorX, { damping: 10, stiffness: 100, mass: 1.5 });
  const particle1Y = useSpring(cursorY, { damping: 10, stiffness: 100, mass: 1.5 });
  const particle2X = useSpring(cursorX, { damping: 12, stiffness: 120, mass: 1.3 });
  const particle2Y = useSpring(cursorY, { damping: 12, stiffness: 120, mass: 1.3 });

  // Use RAF for smooth updates
  const rafRef = useRef<number>();

  const updateMousePosition = useCallback((e: MouseEvent) => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    
    rafRef.current = requestAnimationFrame(() => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    });
  }, [cursorX, cursorY]);

  const handleMouseEnter = useCallback(() => setIsHovering(true), []);
  const handleMouseLeave = useCallback(() => setIsHovering(false), []);
  const handleMouseDown = useCallback(() => setIsClicking(true), []);
  const handleMouseUp = useCallback(() => setIsClicking(false), []);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Don't render cursor on mobile devices
    if (isMobile) {
      return () => window.removeEventListener('resize', checkMobile);
    }

    // Add mouse event listeners
    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll(
      'button, a, [role="button"], input, textarea, select, .cursor-pointer, [tabindex]:not([tabindex="-1"])'
    );

    interactiveElements.forEach((element) => {
      element.addEventListener('mouseenter', handleMouseEnter, { passive: true });
      element.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    });

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      
      interactiveElements.forEach((element) => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [updateMousePosition, handleMouseEnter, handleMouseLeave, handleMouseDown, handleMouseUp, isMobile]);

  // Don't render on mobile devices
  if (isMobile) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {/* Main Cursor - Core dot */}
      <motion.div
        className="absolute w-3 h-3 mix-blend-difference will-change-transform"
        style={{
          x: x,
          y: y,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicking ? 0.8 : isHovering ? 1.2 : 1,
        }}
        transition={{
          scale: { type: "spring", stiffness: 500, damping: 25 }
        }}
      >
        <div className="w-full h-full bg-white rounded-full shadow-lg" />
      </motion.div>

      {/* Inner Glow Ring */}
      <motion.div
        className="absolute w-6 h-6 will-change-transform"
        style={{
          x: trailingX,
          y: trailingY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicking ? 0.6 : isHovering ? 2 : 1,
          opacity: isHovering ? 0.8 : 0.4,
        }}
        transition={{
          scale: { type: "spring", stiffness: 300, damping: 20 },
          opacity: { duration: 0.3 }
        }}
      >
        <div className="w-full h-full bg-gradient-to-r from-teal-400/60 to-blue-500/60 rounded-full blur-sm" />
      </motion.div>

      {/* Outer Ring with Pulse */}
      <motion.div
        className="absolute w-10 h-10 border-2 rounded-full will-change-transform"
        style={{
          x: outerX,
          y: outerY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicking ? 0.8 : isHovering ? 1.8 : 1,
          rotate: isHovering ? 180 : 0,
          borderColor: isHovering 
            ? 'rgba(20, 184, 166, 0.6)' 
            : 'rgba(59, 130, 246, 0.3)',
        }}
        transition={{
          scale: { type: "spring", stiffness: 200, damping: 15 },
          rotate: { type: "spring", stiffness: 150, damping: 12 },
          borderColor: { duration: 0.3 }
        }}
      />

      {/* Floating Particle 1 */}
      <motion.div
        className="absolute w-2 h-2 will-change-transform"
        style={{
          x: particle1X,
          y: particle1Y,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          x: [0, 20, -15, 10, 0],
          y: [0, -15, 20, -10, 0],
          scale: isHovering ? [1, 1.5, 0.8, 1.2, 1] : [0.8, 1, 0.6, 0.9, 0.8],
          opacity: isHovering ? [0.6, 1, 0.4, 0.8, 0.6] : [0.3, 0.6, 0.2, 0.4, 0.3],
        }}
        transition={{
          x: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
          scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <div className="w-full h-full bg-gradient-to-r from-pink-400 to-purple-500 rounded-full shadow-sm" />
      </motion.div>

      {/* Floating Particle 2 */}
      <motion.div
        className="absolute w-1.5 h-1.5 will-change-transform"
        style={{
          x: particle2X,
          y: particle2Y,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          x: [0, -25, 18, -12, 0],
          y: [0, 18, -22, 15, 0],
          scale: isHovering ? [1, 1.8, 0.6, 1.4, 1] : [0.6, 1.2, 0.4, 0.8, 0.6],
          opacity: isHovering ? [0.7, 1, 0.3, 0.9, 0.7] : [0.4, 0.7, 0.2, 0.5, 0.4],
        }}
        transition={{
          x: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 },
          y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 },
          scale: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 },
          opacity: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 },
        }}
      >
        <div className="w-full h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-sm" />
      </motion.div>

      {/* Hover Glow Effect */}
      {isHovering && (
        <motion.div
          className="absolute w-20 h-20 will-change-transform"
          style={{
            x: outerX,
            y: outerY,
            translateX: '-50%',
            translateY: '-50%',
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 360]
          }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ 
            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 8, repeat: Infinity, ease: "linear" }
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-teal-300/20 via-blue-400/20 to-purple-400/20 rounded-full blur-xl" />
        </motion.div>
      )}

      {/* Click Ripple Effect */}
      {isClicking && (
        <motion.div
          className="absolute w-16 h-16 border-2 border-teal-400/50 rounded-full will-change-transform"
          style={{
            x: x,
            y: y,
            translateX: '-50%',
            translateY: '-50%',
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      )}

      {/* Trailing Sparkles */}
      <motion.div
        className="absolute w-1 h-1 will-change-transform"
        style={{
          x: trailingX,
          y: trailingY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: [0, 1, 0],
          opacity: [0, 1, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.2
        }}
      >
        <div className="w-full h-full bg-white rounded-full shadow-sm" />
      </motion.div>

      <motion.div
        className="absolute w-1 h-1 will-change-transform"
        style={{
          x: outerX,
          y: outerY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: [0, 1.2, 0],
          opacity: [0, 0.8, 0],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8
        }}
      >
        <div className="w-full h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-sm" />
      </motion.div>
    </div>
  );
};

export default MouseCursor;