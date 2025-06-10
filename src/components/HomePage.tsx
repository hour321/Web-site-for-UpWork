import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ScrollReveal } from './ScrollReveal';
import { GlassCard } from './GlassCard';
import { AnimatedText } from './AnimatedText';
import { FloatingElements } from './FloatingElements';

export function HomePage() {
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
              <Link to="/lightning-fast">
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  className="cursor-pointer"
                >
                  <GlassCard className="h-full transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                    <div className="text-4xl mb-4">💻</div>
                    <h3 className="text-2xl font-bold mb-4 text-purple-300">Skills & Technologies</h3>
                    <p className="text-gray-300 text-lg leading-relaxed mb-4">
                      Discover the cutting-edge technologies and modern development skills
                      used to create this exceptional web experience.
                    </p>
                    <div className="text-cyan-400 text-sm font-semibold">
                      Click to explore skills →
                    </div>
                  </GlassCard>
                </motion.div>
              </Link>
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
              <Link to="/next-gen-tech">
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative cursor-pointer group"
                >
                  <motion.div
                    className="w-full h-80 bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 overflow-hidden border border-cyan-500/30"
                    animate={{ 
                      boxShadow: [
                        '0 0 20px rgba(34, 211, 238, 0.3)',
                        '0 0 40px rgba(34, 211, 238, 0.6)',
                        '0 0 20px rgba(34, 211, 238, 0.3)'
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {/* AI Robot Image Display */}
                    <div className="relative w-full h-full flex items-center justify-center">
                      {/* Futuristic Robot Visualization */}
                      <div className="relative">
                        {/* Robot Head */}
                        <motion.div
                          className="w-32 h-40 bg-gradient-to-b from-gray-600 to-gray-800 rounded-t-3xl relative border border-cyan-400/50"
                          animate={{ 
                            boxShadow: [
                              '0 0 20px rgba(34, 211, 238, 0.4)',
                              '0 0 30px rgba(34, 211, 238, 0.7)',
                              '0 0 20px rgba(34, 211, 238, 0.4)'
                            ]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          {/* Glowing Eyes */}
                          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
                            <motion.div
                              className="w-4 h-4 bg-cyan-400 rounded-full"
                              animate={{ 
                                opacity: [0.7, 1, 0.7],
                                scale: [1, 1.2, 1]
                              }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            />
                            <motion.div
                              className="w-4 h-4 bg-cyan-400 rounded-full"
                              animate={{ 
                                opacity: [0.7, 1, 0.7],
                                scale: [1, 1.2, 1]
                              }}
                              transition={{ duration: 1.5, repeat: Infinity, delay: 0.1 }}
                            />
                          </div>
                          
                          {/* Face Panel */}
                          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-gray-700 rounded border border-cyan-400/30">
                            {/* Moving Scanner Line */}
                            <motion.div
                              className="w-full h-px bg-cyan-400"
                              animate={{ y: [0, 28, 0] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                          </div>
                        </motion.div>
                        
                        {/* Robot Body */}
                        <div className="w-28 h-32 bg-gradient-to-b from-gray-700 to-gray-900 mx-auto rounded-b-2xl border-x border-b border-cyan-400/50 relative">
                          {/* Chest Panel */}
                          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gray-800 rounded border border-cyan-400/30">
                            <motion.div
                              className="w-full h-full bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded"
                              animate={{ opacity: [0.3, 0.8, 0.3] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                          </div>
                        </div>
                      </div>
                      
                      {/* Circuit Background */}
                      <div className="absolute inset-0 opacity-20">
                        {[...Array(12)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-px bg-cyan-400"
                            style={{
                              left: `${10 + (i * 7)}%`,
                              top: `${20}%`,
                              height: `${30 + (i % 3) * 20}px`,
                            }}
                            animate={{ opacity: [0.2, 0.8, 0.2] }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              delay: i * 0.3,
                            }}
                          />
                        ))}
                      </div>
                      
                      {/* Floating Data Particles */}
                      <div className="absolute inset-0">
                        {[...Array(8)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                            style={{
                              left: `${20 + Math.random() * 60}%`,
                              top: `${20 + Math.random() * 60}%`,
                            }}
                            animate={{
                              x: [0, 20, 0],
                              y: [0, -20, 0],
                              opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                              duration: 4 + Math.random() * 2,
                              repeat: Infinity,
                              delay: Math.random() * 2,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-cyan-400/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Click indicator */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-cyan-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
                    🤖 Chat with AI →
                  </div>
                  
                  {/* Corner Accents */}
                  <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-cyan-400/50 rounded-tl" />
                  <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-cyan-400/50 rounded-tr" />
                  <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-cyan-400/50 rounded-bl" />
                  <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-cyan-400/50 rounded-br" />
                </motion.div>
              </Link>
            </ScrollReveal>
            
            <ScrollReveal direction="right" delay={0.4}>
              <div>
                                <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                  AI Chat Bot
                </h2>

                <GlassCard>
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-cyan-300 mb-2">🤖 AIとチャットしよう！</h3>
                      <p className="text-gray-300 text-lg">クリックして今すぐAIと会話を始めましょう</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-lg">💬 自然な会話が可能</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
                      <span className="text-lg">⚡ リアルタイム応答</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" />
                      <span className="text-lg">🧠 複数のAIモデル選択</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
                      <span className="text-lg">🆓 完全無料で利用可能</span>
                    </div>
                    <div className="text-center mt-6">
                      <Link to="/next-gen-tech">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white font-bold text-lg shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
                        >
                          🚀 AIチャットを開始
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Interactive Hover Effects Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Interactive Hover Effects
            </h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* 3D Rotating Card */}
            <ScrollReveal direction="left" delay={0.4}>
              <motion.div
                className="relative h-64 group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                style={{ perspective: 1000 }}
              >
                <motion.div
                  className="absolute inset-0 w-full h-full"
                  style={{ transformStyle: "preserve-3d" }}
                  whileHover={{ rotateY: 180 }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Front Face */}
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center backface-hidden">
                    <div className="text-center">
                      <motion.div
                        className="text-6xl mb-4"
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      >
                        🚀
                      </motion.div>
                      <h3 className="text-2xl font-bold text-white">3D Flip</h3>
                      <p className="text-purple-100">Hover to flip!</p>
                    </div>
                  </div>
                  
                  {/* Back Face */}
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl flex items-center justify-center transform rotate-y-180 backface-hidden">
                    <div className="text-center">
                      <motion.div
                        className="text-4xl mb-4"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        ✨ Amazing! ✨
                      </motion.div>
                      <h3 className="text-xl font-bold text-white">You Found Me!</h3>
                      <p className="text-cyan-100">Cool 3D effect</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </ScrollReveal>
            
            {/* Particle Explosion Card */}
            <ScrollReveal direction="up" delay={0.6}>
              <motion.div
                className="relative h-64 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl overflow-hidden group cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center z-10">
                    <motion.div
                      className="text-6xl mb-4"
                      whileHover={{ 
                        scale: [1, 1.5, 1],
                        rotate: [0, 360, 0]
                      }}
                      transition={{ duration: 0.8 }}
                    >
                      💥
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white">Particle Burst</h3>
                    <p className="text-green-100">Hover for explosion!</p>
                  </div>
                </div>
                
                {/* Particle Effects */}
                <div className="absolute inset-0">
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                      style={{
                        left: "50%",
                        top: "50%",
                      }}
                      whileHover={{
                        x: [0, (Math.random() - 0.5) * 200],
                        y: [0, (Math.random() - 0.5) * 200],
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 1,
                        delay: i * 0.05,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
            
            {/* Morphing Shape Card */}
            <ScrollReveal direction="right" delay={0.8}>
              <motion.div
                className="relative h-64 bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl overflow-hidden group cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center z-10">
                    <motion.div
                      className="text-6xl mb-4"
                      whileHover={{ 
                        scale: [1, 0.8, 1.2, 1],
                        rotate: [0, 90, 180, 270, 360]
                      }}
                      transition={{ duration: 1.2 }}
                    >
                      🔶
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white">Shape Morph</h3>
                    <p className="text-orange-100">Hover to transform!</p>
                  </div>
                </div>
                
                {/* Morphing Background Elements */}
                <motion.div
                  className="absolute top-4 left-4 w-8 h-8 bg-yellow-400 rounded-full"
                  whileHover={{
                    scale: [1, 2, 0.5, 1],
                    borderRadius: ["50%", "25%", "50%", "0%", "50%"],
                    rotate: [0, 180, 360],
                  }}
                  transition={{ duration: 2 }}
                />
                <motion.div
                  className="absolute bottom-4 right-4 w-6 h-6 bg-pink-400"
                  whileHover={{
                    scale: [1, 1.5, 0.8, 1],
                    borderRadius: ["0%", "50%", "25%", "50%"],
                    rotate: [0, -180, -360],
                  }}
                  transition={{ duration: 2, delay: 0.2 }}
                />
                <motion.div
                  className="absolute top-1/2 left-4 w-4 h-4 bg-cyan-400 rounded-full"
                  whileHover={{
                    x: [0, 100, 0],
                    y: [0, -50, 50, 0],
                    scale: [1, 0.5, 2, 1],
                  }}
                  transition={{ duration: 1.5 }}
                />
              </motion.div>
            </ScrollReveal>
          </div>
          
          {/* Additional Effects Row */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* Liquid Wave Effect */}
            <ScrollReveal direction="left" delay={1.0}>
              <motion.div
                className="relative h-48 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl overflow-hidden group cursor-pointer"
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="text-center">
                    <motion.div
                      className="text-5xl mb-3"
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      🌊
                    </motion.div>
                    <h3 className="text-xl font-bold text-white">Liquid Wave</h3>
                    <p className="text-indigo-100">Flowing animations</p>
                  </div>
                </div>
                
                {/* Wave Animation */}
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-70"
                  style={{
                    clipPath: "polygon(0 50%, 100% 30%, 100% 100%, 0% 100%)"
                  }}
                  whileHover={{
                    clipPath: [
                      "polygon(0 50%, 100% 30%, 100% 100%, 0% 100%)",
                      "polygon(0 30%, 100% 50%, 100% 100%, 0% 100%)",
                      "polygon(0 50%, 100% 20%, 100% 100%, 0% 100%)",
                      "polygon(0 50%, 100% 30%, 100% 100%, 0% 100%)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            </ScrollReveal>
            
            {/* Glitch Effect Card */}
            <ScrollReveal direction="right" delay={1.2}>
              <motion.div
                className="relative h-48 bg-gradient-to-br from-pink-600 to-rose-600 rounded-2xl overflow-hidden group cursor-pointer"
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <motion.div
                    className="text-center"
                    whileHover={{
                      x: [0, -2, 2, -1, 1, 0],
                      y: [0, 1, -1, 2, -2, 0],
                    }}
                    transition={{ duration: 0.3, repeat: 3 }}
                  >
                    <motion.div
                      className="text-5xl mb-3"
                      whileHover={{
                        textShadow: [
                          "0 0 0 transparent",
                          "2px 0 0 #ff0000, -2px 0 0 #00ff00",
                          "0 0 0 transparent"
                        ]
                      }}
                      transition={{ duration: 0.5, repeat: 2 }}
                    >
                      ⚡
                    </motion.div>
                    <h3 className="text-xl font-bold text-white">Glitch Effect</h3>
                    <p className="text-pink-100">Digital chaos</p>
                  </motion.div>
                </div>
                
                {/* Glitch Lines */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-full h-1 bg-white opacity-80"
                    style={{ top: `${20 + i * 15}%` }}
                    whileHover={{
                      x: [0, 20, -20, 10, -10, 0],
                      opacity: [0, 1, 0, 1, 0],
                    }}
                    transition={{
                      duration: 0.2,
                      delay: i * 0.05,
                      repeat: 3,
                    }}
                  />
                ))}
              </motion.div>
            </ScrollReveal>
          </div>

          {/* New Advanced Effects Row */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {/* Glassmorphism Hover */}
            <ScrollReveal direction="up" delay={0.2}>
              <motion.div
                className="relative h-64 cursor-pointer group"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                  }}
                  whileHover={{
                    background: "rgba(255, 255, 255, 0.2)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 0.4)",
                    boxShadow: [
                      "0 8px 32px rgba(31, 38, 135, 0.37)",
                      "0 20px 60px rgba(31, 38, 135, 0.6)",
                      "0 8px 32px rgba(31, 38, 135, 0.37)"
                    ]
                  }}
                  transition={{ duration: 0.4 }}
                />
                
                <div className="relative h-full flex items-center justify-center p-6">
                  <div className="text-center z-10">
                    <motion.div
                      className="text-6xl mb-4"
                      whileHover={{ 
                        scale: [1, 1.2, 1],
                        rotateY: [0, 180, 360]
                      }}
                      transition={{ duration: 1 }}
                    >
                      🧊
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-2">Glassmorphism</h3>
                    <p className="text-gray-200">Frosted glass effect</p>
                  </div>
                </div>

                {/* Background particles */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-white/30 rounded-full"
                    style={{
                      left: `${20 + i * 12}%`,
                      top: `${30 + (i % 2) * 40}%`,
                    }}
                    whileHover={{
                      scale: [1, 2, 1],
                      opacity: [0.3, 0.8, 0.3],
                      y: [0, -20, 0],
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.1,
                      repeat: Infinity,
                    }}
                  />
                ))}
              </motion.div>
            </ScrollReveal>

            {/* Magnetic Hover */}
            <ScrollReveal direction="up" delay={0.4}>
              <motion.div
                className="relative h-64 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl overflow-hidden cursor-pointer group"
                whileHover={{
                  scale: 1.05,
                  rotateX: 5,
                  rotateY: 5,
                }}
                transition={{ duration: 0.3 }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = (e.clientX - rect.left - rect.width / 2) / 10;
                  const y = (e.clientY - rect.top - rect.height / 2) / 10;
                  e.currentTarget.style.transform = `perspective(1000px) rotateX(${-y}deg) rotateY(${x}deg) scale(1.05)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center z-10">
                    <motion.div
                      className="text-6xl mb-4"
                      whileHover={{ 
                        scale: [1, 1.3, 1],
                        rotate: [0, 15, -15, 0]
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      🧲
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-2">Magnetic</h3>
                    <p className="text-blue-100">Mouse attraction</p>
                  </div>
                </div>

                {/* Magnetic field lines */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    style={{ top: `${10 + i * 10}%` }}
                    whileHover={{
                      scaleX: [1, 1.2, 0.8, 1],
                      opacity: [0.2, 0.6, 0.2],
                    }}
                    transition={{
                      duration: 1,
                      delay: i * 0.05,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                ))}

                {/* Magnetic particles */}
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-yellow-400 rounded-full"
                    style={{
                      left: `${10 + (i % 4) * 25}%`,
                      top: `${20 + Math.floor(i / 4) * 20}%`,
                    }}
                    whileHover={{
                      x: [0, (i % 2 ? 20 : -20), 0],
                      y: [0, (i % 3 ? -15 : 15), 0],
                      scale: [1, 2, 1],
                    }}
                    transition={{
                      duration: 0.8,
                      delay: i * 0.03,
                    }}
                  />
                ))}
              </motion.div>
            </ScrollReveal>

            {/* 3D Depth Hover */}
            <ScrollReveal direction="up" delay={0.6}>
              <motion.div
                className="relative h-64 cursor-pointer group"
                style={{ perspective: "1000px" }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Multiple depth layers */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`absolute inset-0 rounded-2xl ${
                      i === 0 ? 'bg-gradient-to-br from-purple-600 to-indigo-600' :
                      i === 1 ? 'bg-gradient-to-br from-purple-500/80 to-indigo-500/80' :
                      i === 2 ? 'bg-gradient-to-br from-purple-400/60 to-indigo-400/60' :
                      i === 3 ? 'bg-gradient-to-br from-purple-300/40 to-indigo-300/40' :
                      'bg-gradient-to-br from-purple-200/20 to-indigo-200/20'
                    }`}
                    style={{
                      transform: `translateZ(${i * -10}px)`,
                      zIndex: 5 - i,
                    }}
                    whileHover={{
                      transform: `translateZ(${i * -20}px) rotateX(${i * 2}deg)`,
                      scale: 1 + (i * 0.02),
                    }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                  />
                ))}

                <div className="relative h-full flex items-center justify-center z-10">
                  <div className="text-center">
                    <motion.div
                      className="text-6xl mb-4"
                      whileHover={{ 
                        scale: [1, 1.4, 1],
                        rotateZ: [0, 360, 0],
                        z: [0, 50, 0]
                      }}
                      transition={{ duration: 1.2 }}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      🌀
                    </motion.div>
                    <motion.h3 
                      className="text-2xl font-bold text-white mb-2"
                      whileHover={{ z: 20 }}
                      transition={{ duration: 0.3 }}
                    >
                      3D Depth
                    </motion.h3>
                    <motion.p 
                      className="text-purple-100"
                      whileHover={{ z: 10 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      Multi-layer depth
                    </motion.p>
                  </div>
                </div>

                {/* Floating depth indicators */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 bg-white/40 rounded-full"
                    style={{
                      left: `${15 + i * 15}%`,
                      top: `${25 + (i % 2) * 30}%`,
                      transform: `translateZ(${i * 5}px)`,
                    }}
                    whileHover={{
                      scale: [1, 1.5, 1],
                      z: [0, 30, 0],
                      rotateY: [0, 180, 360],
                    }}
                    transition={{
                      duration: 1.5,
                      delay: i * 0.1,
                    }}
                  />
                ))}
              </motion.div>
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