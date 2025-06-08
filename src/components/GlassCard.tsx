/**
 * GlassCard Component
 * 
 * @description A glassmorphism-styled card component with backdrop blur and hover effects
 * @author hour321 (gaudy.hour@gmail.com)
 * @version 1.0.0
 * @created 2025-01-07
 * 
 * @features
 *   - Glassmorphism design with backdrop blur
 *   - Hover animations and scaling
 *   - Customizable styling and behavior
 *   - Gradient overlay effects
 */

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export const GlassCard = ({ children, className = '', hover = true }: GlassCardProps) => {
  return (
    <motion.div
      className={`
        relative backdrop-blur-md bg-white/10 border border-white/20 
        rounded-2xl p-6 shadow-xl
        ${hover ? 'hover:bg-white/20 hover:border-white/30 hover:shadow-2xl' : ''}
        ${className}
      `}
      whileHover={hover ? { scale: 1.02, y: -5 } : undefined}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent" />
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};