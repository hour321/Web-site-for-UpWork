/**
 * AnimatedText Component
 * 
 * @description A React component that animates text with staggered word animations
 * @author hour321 (gaudy.hour@gmail.com)
 * @version 1.0.0
 * @created 2025-01-07
 * 
 * @features
 *   - Word-by-word staggered animation
 *   - Customizable delay timing
 *   - Smooth easing transitions
 *   - TypeScript interface support
 */

import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export const AnimatedText = ({ text, className = '', delay = 0 }: AnimatedTextProps) => {
  const words = text.split(' ');

  return (
    <div className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: delay + index * 0.1,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};