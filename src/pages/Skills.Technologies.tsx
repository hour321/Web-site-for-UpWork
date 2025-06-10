import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GlassCard } from '../components/GlassCard';
import { ScrollReveal } from '../components/ScrollReveal';
import { FloatingElements } from '../components/FloatingElements';

export function SkillsTechnologiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white overflow-x-hidden">
      <FloatingElements />
      
      {/* Header with back button */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-md border-b border-white/10"
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
              >
                ModernWeb
              </motion.div>
            </Link>
            
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-bold text-sm shadow-lg"
              >
                ← Back to Home
              </motion.button>
            </Link>
          </div>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-4 pt-16">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20" />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center z-10 max-w-4xl"
        >
          <motion.div
            className="text-8xl mb-8"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            💻
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Discover the cutting-edge technologies and skills used to build this modern web experience
          </p>
        </motion.div>
      </section>

      {/* Core Technologies */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Core Technologies
            </h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal direction="left" delay={0.4}>
              <GlassCard className="text-center">
                <motion.div
                  className="text-6xl mb-4"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ⚛️
                </motion.div>
                <h3 className="text-xl font-bold text-cyan-300 mb-2">React 18</h3>
                <p className="text-gray-300">Modern component-based architecture with hooks and concurrent features</p>
              </GlassCard>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.6}>
              <GlassCard className="text-center">
                <motion.div
                  className="text-6xl mb-4"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  📘
                </motion.div>
                <h3 className="text-xl font-bold text-cyan-300 mb-2">TypeScript</h3>
                <p className="text-gray-300">Type-safe development with enhanced IDE support and error prevention</p>
              </GlassCard>
            </ScrollReveal>
            
            <ScrollReveal direction="right" delay={0.8}>
              <GlassCard className="text-center">
                <motion.div
                  className="text-6xl mb-4"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  ⚡
                </motion.div>
                <h3 className="text-xl font-bold text-cyan-300 mb-2">Vite</h3>
                <p className="text-gray-300">Lightning-fast build tool with hot module replacement and optimization</p>
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Design & Animation Skills */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-900/30 to-blue-900/30">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Design & Animation
            </h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left" delay={0.4}>
              <div>
                <GlassCard>
                  <h3 className="text-2xl font-bold mb-6 text-cyan-300">Modern UI/UX Skills</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
                      <span className="text-lg">Tailwind CSS - Utility-first styling</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
                      <span className="text-lg">Framer Motion - Advanced animations</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" />
                      <span className="text-lg">Glassmorphism - Modern glass effects</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-lg">Responsive Design - Mobile-first approach</span>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="right" delay={0.6}>
              <div className="relative">
                <motion.div
                  className="w-full h-80 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-3xl"
                  animate={{ 
                    boxShadow: [
                      '0 0 20px rgba(34, 211, 238, 0.3)',
                      '0 0 40px rgba(34, 211, 238, 0.6)',
                      '0 0 20px rgba(34, 211, 238, 0.3)'
                    ],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <div className="absolute inset-4 border-2 border-cyan-400/30 rounded-2xl" />
                <div className="absolute inset-8 border border-blue-400/20 rounded-xl" />
                
                {/* Floating design elements */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${30 + (i % 2) * 30}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  >
                    {i % 3 === 0 ? '🎨' : i % 3 === 1 ? '✨' : '🚀'}
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* AI Integration Skills */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-900/30 to-teal-900/30">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              🤖 AI Integration Expertise
            </h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left" delay={0.4}>
              <div>
                <GlassCard>
                  <h3 className="text-2xl font-bold mb-6 text-emerald-300">AI Technologies & APIs</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
                      <span className="text-lg">🤗 Hugging Face - Free AI Models</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
                      <span className="text-lg">🧠 OpenAI GPT - Advanced Conversations</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" />
                      <span className="text-lg">🔮 Google Gemini - Multimodal AI</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse" />
                      <span className="text-lg">⚡ Cohere - Language Understanding</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
                      <span className="text-lg">🎯 Context-Aware Responses</span>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="right" delay={0.6}>
              <div className="relative">
                <motion.div
                  className="w-full h-80 bg-gradient-to-br from-emerald-500/30 to-teal-500/30 rounded-3xl flex items-center justify-center"
                  animate={{ 
                    boxShadow: [
                      '0 0 20px rgba(16, 185, 129, 0.3)',
                      '0 0 40px rgba(16, 185, 129, 0.6)',
                      '0 0 20px rgba(16, 185, 129, 0.3)'
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <motion.div
                    className="text-8xl"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 360, 0]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    🤖
                  </motion.div>
                </motion.div>
                
                {/* AI service indicators */}
                {['🤗', '🧠', '🔮', '⚡'].map((emoji, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-3xl"
                    style={{
                      left: `${25 + i * 15}%`,
                      top: `${20 + (i % 2) * 50}%`,
                    }}
                    animate={{
                      y: [0, -30, 0],
                      opacity: [0.5, 1, 0.5],
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  >
                    {emoji}
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Interactive Hover Effects */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
              🎨 Interactive Hover Effects
            </h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <ScrollReveal direction="left" delay={0.4}>
              <GlassCard className="text-center h-full">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-lg font-bold text-pink-300 mb-2">3D Flip Card</h3>
                <p className="text-gray-300 text-sm">3D rotation with backface visibility</p>
              </GlassCard>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.5}>
              <GlassCard className="text-center h-full">
                <div className="text-4xl mb-4">💥</div>
                <h3 className="text-lg font-bold text-pink-300 mb-2">Particle Explosion</h3>
                <p className="text-gray-300 text-sm">Dynamic particle burst animations</p>
              </GlassCard>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.6}>
              <GlassCard className="text-center h-full">
                <div className="text-4xl mb-4">🔶</div>
                <h3 className="text-lg font-bold text-pink-300 mb-2">Shape Morphing</h3>
                <p className="text-gray-300 text-sm">Complex multi-element transformations</p>
              </GlassCard>
            </ScrollReveal>
            
            <ScrollReveal direction="right" delay={0.7}>
              <GlassCard className="text-center h-full">
                <div className="text-4xl mb-4">🌊</div>
                <h3 className="text-lg font-bold text-pink-300 mb-2">Liquid Wave</h3>
                <p className="text-gray-300 text-sm">Flowing wave with clip-path morphing</p>
              </GlassCard>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ScrollReveal direction="left" delay={0.8}>
              <GlassCard className="text-center h-full">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-lg font-bold text-rose-300 mb-2">Glitch Effect</h3>
                <p className="text-gray-300 text-sm">Digital chaos with RGB separation</p>
              </GlassCard>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.9}>
              <GlassCard className="text-center h-full">
                <div className="text-4xl mb-4">🧊</div>
                <h3 className="text-lg font-bold text-rose-300 mb-2">Glassmorphism</h3>
                <p className="text-gray-300 text-sm">Frosted glass with backdrop blur</p>
              </GlassCard>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={1.0}>
              <GlassCard className="text-center h-full">
                <div className="text-4xl mb-4">🧲</div>
                <h3 className="text-lg font-bold text-rose-300 mb-2">Magnetic Hover</h3>
                <p className="text-gray-300 text-sm">Mouse-tracking 3D attraction</p>
              </GlassCard>
            </ScrollReveal>
            
            <ScrollReveal direction="right" delay={1.1}>
              <GlassCard className="text-center h-full">
                <div className="text-4xl mb-4">🌀</div>
                <h3 className="text-lg font-bold text-rose-300 mb-2">3D Depth</h3>
                <p className="text-gray-300 text-sm">Multi-layered depth illusion</p>
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Development Skills */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Development Expertise
            </h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ScrollReveal direction="left" delay={0.4}>
              <GlassCard className="text-center h-full">
                <div className="text-4xl mb-4">🔄</div>
                <h3 className="text-lg font-bold text-green-300 mb-2">React Router</h3>
                <p className="text-gray-300 text-sm">Single Page Application navigation</p>
              </GlassCard>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.5}>
              <GlassCard className="text-center h-full">
                <div className="text-4xl mb-4">🎭</div>
                <h3 className="text-lg font-bold text-green-300 mb-2">Component Design</h3>
                <p className="text-gray-300 text-sm">Reusable and maintainable components</p>
              </GlassCard>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.6}>
              <GlassCard className="text-center h-full">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-lg font-bold text-green-300 mb-2">Mobile First</h3>
                <p className="text-gray-300 text-sm">Responsive design for all devices</p>
              </GlassCard>
            </ScrollReveal>
            
            <ScrollReveal direction="right" delay={0.7}>
              <GlassCard className="text-center h-full">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-lg font-bold text-green-300 mb-2">Performance</h3>
                <p className="text-gray-300 text-sm">Optimized for speed and efficiency</p>
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Code Quality & Tools */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900/30 to-pink-900/30">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Code Quality & Tools
            </h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <ScrollReveal direction="left" delay={0.4}>
              <GlassCard>
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-bold mb-4 text-purple-300">ESLint</h3>
                <p className="text-gray-300">Code quality enforcement and error prevention</p>
              </GlassCard>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.6}>
              <GlassCard>
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-4 text-purple-300">Modern ES6+</h3>
                <p className="text-gray-300">Latest JavaScript features and best practices</p>
              </GlassCard>
            </ScrollReveal>
            
            <ScrollReveal direction="right" delay={0.8}>
              <GlassCard>
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold mb-4 text-purple-300">Git Workflow</h3>
                <p className="text-gray-300">Version control and collaborative development</p>
              </GlassCard>
            </ScrollReveal>
          </div>

          {/* Deployment & Production */}
          <ScrollReveal direction="up" delay={1.0}>
            <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              🌐 Deployment & Production
            </h3>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ScrollReveal direction="left" delay={1.2}>
              <GlassCard className="text-center h-full">
                <div className="text-4xl mb-4">▲</div>
                <h3 className="text-lg font-bold text-indigo-300 mb-2">Vercel</h3>
                <p className="text-gray-300 text-sm">Auto-deployment with GitHub integration</p>
              </GlassCard>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={1.3}>
              <GlassCard className="text-center h-full">
                <div className="text-4xl mb-4">🔄</div>
                <h3 className="text-lg font-bold text-indigo-300 mb-2">CI/CD</h3>
                <p className="text-gray-300 text-sm">Continuous integration and deployment</p>
              </GlassCard>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={1.4}>
              <GlassCard className="text-center h-full">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-lg font-bold text-indigo-300 mb-2">Global CDN</h3>
                <p className="text-gray-300 text-sm">Worldwide content delivery network</p>
              </GlassCard>
            </ScrollReveal>
            
            <ScrollReveal direction="right" delay={1.5}>
              <GlassCard className="text-center h-full">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-lg font-bold text-indigo-300 mb-2">HTTPS</h3>
                <p className="text-gray-300 text-sm">Automatic SSL certificates</p>
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Impressed by the Skills?
            </h2>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.4}>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              This page demonstrates modern web development skills combining design, animation, 
              and technical expertise to create exceptional user experiences.
            </p>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/ai-chat-bot">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(16, 185, 129, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full text-white font-bold text-lg shadow-xl"
                >
                  🤖 Try AI Chat Bot
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(34, 211, 238, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full text-white font-bold text-lg shadow-xl"
              >
                Let's Build Together
              </motion.button>
              <Link to="/">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 border-2 border-cyan-400/30 rounded-full text-white font-bold text-lg backdrop-blur-sm hover:bg-cyan-400/10 transition-all duration-300"
                >
                  Back to Home
                </motion.button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
} 