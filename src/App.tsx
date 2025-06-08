/**
 * Modern Web Experience - Future of Digital Design
 * 
 * @description A cutting-edge website showcasing modern web design principles
 *              with advanced animations, glassmorphism effects, and responsive layout
 * @author hour321 (gaudy.hour@gmail.com)
 * @version 1.0.0
 * @created 2025-01-07
 * @repository https://github.com/hour321/Web-site-for-UpWork
 * 
 * @technologies React, TypeScript, Tailwind CSS, Framer Motion, Vite
 * @features
 *   - Advanced animations and transitions
 *   - Glassmorphism design elements
 *   - Responsive design
 *   - Modern gradient backgrounds
 *   - Interactive components
 */

import { motion } from 'framer-motion';
import { ScrollReveal } from './components/ScrollReveal';
import { GlassCard } from './components/GlassCard';
import { AnimatedText } from './components/AnimatedText';
import { FloatingElements } from './components/FloatingElements';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white overflow-x-hidden">
      <FloatingElements />
      
      {/* Navigation Header */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-md border-b border-white/10"
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
              ModernWeb
            </motion.div>
            
            <div className="hidden md:flex space-x-8">
              <motion.a
                href="#home"
                whileHover={{ scale: 1.1 }}
                className="text-white/80 hover:text-white transition-colors duration-200"
              >
                Home
              </motion.a>
              <motion.a
                href="#features"
                whileHover={{ scale: 1.1 }}
                className="text-white/80 hover:text-white transition-colors duration-200"
              >
                Features
              </motion.a>
              <motion.a
                href="#technology"
                whileHover={{ scale: 1.1 }}
                className="text-white/80 hover:text-white transition-colors duration-200"
              >
                Technology
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.1 }}
                className="text-white/80 hover:text-white transition-colors duration-200"
              >
                Contact
              </motion.a>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="md:hidden p-2 rounded-md text-white/80 hover:text-white"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center px-4 pt-16">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20" />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center z-10"
        >
          <AnimatedText
            text="Welcome to the Future"
            className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent"
            delay={0.5}
          />
          <AnimatedText
            text="Experience the next level of web design"
            className="text-xl md:text-2xl text-gray-300 mb-8"
            delay={1}
          />
          <motion.button
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-bold text-lg shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
          >
            Explore Now
          </motion.button>
        </motion.div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 2, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </section>

      {/* Features Section - Left Animation */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="left" delay={0.2}>
            <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Revolutionary Features
            </h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <ScrollReveal direction="left" delay={0.4}>
              <GlassCard className="h-full">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold mb-4 text-purple-300">Lightning Fast</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Experience blazing fast performance with cutting-edge optimization techniques
                  that make every interaction smooth and responsive.
                </p>
              </GlassCard>
            </ScrollReveal>
            
            <ScrollReveal direction="right" delay={0.6}>
              <div className="relative">
                <motion.div
                  className="w-full h-64 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-2xl"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl backdrop-blur-sm" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Technology Section - Right Animation */}
      <section id="technology" className="py-20 px-4 bg-gradient-to-r from-purple-900/50 to-pink-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left" delay={0.2}>
              <div className="relative">
                <motion.div
                  className="w-full h-80 bg-gradient-to-br from-cyan-500/30 to-purple-500/30 rounded-3xl"
                  animate={{ 
                    boxShadow: [
                      '0 0 20px rgba(139, 92, 246, 0.3)',
                      '0 0 40px rgba(139, 92, 246, 0.6)',
                      '0 0 20px rgba(139, 92, 246, 0.3)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <div className="absolute inset-4 border-2 border-white/20 rounded-2xl" />
                <div className="absolute inset-8 border border-white/10 rounded-xl" />
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="right" delay={0.4}>
              <div>
                <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                  Next-Gen Technology
                </h2>
                <GlassCard>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-lg">Advanced AI Integration</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
                      <span className="text-lg">Real-time Data Processing</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" />
                      <span className="text-lg">Quantum-level Security</span>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Statistics Section - Multiple Directions */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Impressive Numbers
            </h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal direction="left" delay={0.4}>
              <GlassCard className="text-center">
                <motion.div
                  className="text-6xl font-black mb-4 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  99.9%
                </motion.div>
                <h3 className="text-xl font-bold text-purple-300 mb-2">Uptime</h3>
                <p className="text-gray-300">Reliable performance you can count on</p>
              </GlassCard>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.6}>
              <GlassCard className="text-center">
                <motion.div
                  className="text-6xl font-black mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  10M+
                </motion.div>
                <h3 className="text-xl font-bold text-purple-300 mb-2">Users</h3>
                <p className="text-gray-300">Trusted by millions worldwide</p>
              </GlassCard>
            </ScrollReveal>
            
            <ScrollReveal direction="right" delay={0.8}>
              <GlassCard className="text-center">
                <motion.div
                  className="text-6xl font-black mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  24/7
                </motion.div>
                <h3 className="text-xl font-bold text-purple-300 mb-2">Support</h3>
                <p className="text-gray-300">Always here when you need us</p>
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-r from-purple-900/80 to-pink-900/80">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Ready to Transform?
            </h2>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.4}>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Join the revolution and experience the future of digital innovation today.
              Your journey to excellence starts here.
            </p>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-bold text-lg shadow-xl"
              >
                Get Started Free
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 border-2 border-white/30 rounded-full text-white font-bold text-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                Learn More
              </motion.button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-black/50">
        <div className="max-w-6xl mx-auto text-center">
          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-gray-400 text-lg">
              © 2025 Future Tech. Designed with ❤️ for the next generation.
            </p>
          </ScrollReveal>
        </div>
      </footer>
    </div>
  );
}

export default App;