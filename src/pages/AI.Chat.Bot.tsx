import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { GlassCard } from '../components/GlassCard';
import { ScrollReveal } from '../components/ScrollReveal';
import { FloatingElements } from '../components/FloatingElements';
import { AIService } from '../services/aiService';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export function AIChatBotPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your AI assistant. How can I help you today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [aiProvider, setAiProvider] = useState<'openai' | 'huggingface' | 'cohere' | 'gemini' | 'local'>('local');
  const [apiKey, setApiKey] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [showSettings, setShowSettings] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Initialize AI Service
  const [aiService] = useState<AIService>(() => 
    new AIService({ provider: 'local' })
  );

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Update AI Service when settings change
  useEffect(() => {
    aiService.updateConfig({
      provider: aiProvider,
      apiKey: apiKey || undefined,
      model: selectedModel || getDefaultModel(aiProvider)
    });
  }, [aiProvider, apiKey, selectedModel, aiService]);

  // Get default model for each provider
  const getDefaultModel = (provider: string) => {
    switch (provider) {
      case 'openai': return 'gpt-3.5-turbo';
      case 'huggingface': return 'microsoft/DialoGPT-large';
      case 'cohere': return 'command-light';
      case 'gemini': return 'gemini-pro';
      default: return '';
    }
  };

  // Get available models for each provider
  const getAvailableModels = (provider: string) => {
    switch (provider) {
      case 'openai':
        return [
          { value: 'gpt-3.5-turbo', label: 'GPT-3.5 Turbo (Fast & Affordable)', description: 'Best for most conversations' },
          { value: 'gpt-4', label: 'GPT-4 (Premium)', description: 'Highest quality responses' },
          { value: 'gpt-4-turbo', label: 'GPT-4 Turbo (Latest)', description: 'Latest and most capable' }
        ];
      case 'huggingface':
        return [
          { value: 'microsoft/DialoGPT-large', label: 'DialoGPT Large (Recommended)', description: 'Best for conversations' },
          { value: 'microsoft/DialoGPT-medium', label: 'DialoGPT Medium', description: 'Faster responses' },
          { value: 'facebook/blenderbot-400M-distill', label: 'BlenderBot', description: 'Open-domain chatbot' },
          { value: 'microsoft/GODEL-v1_1-large-seq2seq', label: 'GODEL', description: 'Goal-oriented dialog' }
        ];
      case 'cohere':
        return [
          { value: 'command-light', label: 'Command Light (Free)', description: 'Fast and free tier' },
          { value: 'command', label: 'Command (Premium)', description: 'More capable responses' },
          { value: 'command-nightly', label: 'Command Nightly (Latest)', description: 'Cutting-edge features' }
        ];
      case 'gemini':
        return [
          { value: 'gemini-pro', label: 'Gemini Pro (Recommended)', description: 'Best overall performance' },
          { value: 'gemini-pro-vision', label: 'Gemini Pro Vision', description: 'Can analyze images' }
        ];
      default:
        return [];
    }
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputMessage,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Get AI response using the AI service
    setTimeout(async () => {
      try {
        const responseText = await aiService.getResponse(inputMessage);
        const aiResponse: Message = {
          id: Date.now() + 1,
          text: responseText,
          isUser: false,
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, aiResponse]);
      } catch (error) {
        console.error('Error getting AI response:', error);
        const errorResponse: Message = {
          id: Date.now() + 1,
          text: "Sorry, I'm having trouble responding right now. Please try again!",
          isUser: false,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, errorResponse]);
      } finally {
        setIsTyping(false);
      }
    }, 1000 + Math.random() * 2000); // Random delay between 1-3 seconds
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

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
      <section className="relative py-20 px-4 pt-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <motion.div
              className="text-6xl mb-6"
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              🤖
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI Chat Bot
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Have a conversation with our intelligent AI assistant
            </p>
          </motion.div>
        </div>
      </section>

      {/* Chat Interface */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal direction="up" delay={0.2}>
            <GlassCard className="h-[600px] flex flex-col">
              {/* Chat Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/10">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    🤖
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">AI Assistant</h3>
                    <p className="text-sm text-gray-400">
                      {aiProvider === 'local' ? 'Local Mode' : 
                       <>
                         {aiProvider === 'openai' ? 'OpenAI' : 
                          aiProvider === 'huggingface' ? 'Hugging Face' :
                          aiProvider === 'cohere' ? 'Cohere' : 'Gemini'} • 
                         <span className="text-black">
                           {getAvailableModels(aiProvider).find(m => m.value === (selectedModel || getDefaultModel(aiProvider)))?.label.split(' ')[0] || 'Model'}
                         </span>
                       </>
                      }
                    </p>
                  </div>
                </div>
                
                {/* Settings Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowSettings(!showSettings)}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                >
                  ⚙️
                </motion.button>
              </div>

              {/* AI Settings Panel */}
              {showSettings && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="p-4 border-b border-white/10 bg-white/5"
                >
                  <h4 className="font-bold mb-3">AI Settings</h4>
                  
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium mb-1">AI Provider</label>
                                              <select
                          value={aiProvider}
                          onChange={(e) => setAiProvider(e.target.value as any)}
                          className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white"
                        >
                          <option value="local" className="bg-gray-800 text-white">🏠 Local AI (No setup required)</option>
                          <option value="huggingface" className="bg-gray-800 text-white">🤗 Hugging Face (Completely FREE)</option>
                          <option value="cohere" className="bg-gray-800 text-white">🔥 Cohere (Free tier)</option>
                          <option value="gemini" className="bg-gray-800 text-white">🚀 Google Gemini (FREE)</option>
                          <option value="openai" className="bg-gray-800 text-white">💰 OpenAI GPT (Paid)</option>
                        </select>
                    </div>
                    
                    {(aiProvider === 'openai' || aiProvider === 'huggingface' || aiProvider === 'cohere' || aiProvider === 'gemini') && (
                      <div>
                        <label className="block text-sm font-medium mb-1">API Key</label>
                        <input
                          type="password"
                          value={apiKey}
                          onChange={(e) => setApiKey(e.target.value)}
                          placeholder={`Enter your ${
                            aiProvider === 'openai' ? 'OpenAI' :
                            aiProvider === 'huggingface' ? 'Hugging Face' :
                            aiProvider === 'cohere' ? 'Cohere' :
                            'Google AI Studio'
                          } API key`}
                          className="w-full bg-gray-900/50 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-gray-300"
                        />
                        <p className="text-xs text-gray-400 mt-1">
                          {aiProvider === 'openai' && 'Get your API key from OpenAI dashboard (paid service)'}
                          {aiProvider === 'huggingface' && '🆓 Get your FREE API key from huggingface.co/settings/tokens'}
                          {aiProvider === 'cohere' && '🆓 Get your FREE API key from dashboard.cohere.ai'}
                          {aiProvider === 'gemini' && '🆓 Get your FREE API key from makersuite.google.com'}
                        </p>
                      </div>
                    )}

                    {/* Model Selection */}
                    {aiProvider !== 'local' && (
                      <div>
                        <label className="block text-sm font-medium mb-1">AI Model</label>
                        <select
                          value={selectedModel || getDefaultModel(aiProvider)}
                          onChange={(e) => setSelectedModel(e.target.value)}
                          className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white"
                        >
                          {getAvailableModels(aiProvider).map((model) => (
                            <option key={model.value} value={model.value} className="bg-gray-800 text-white">
                              {model.label}
                            </option>
                          ))}
                        </select>
                        <p className="text-xs text-gray-400 mt-1">
                          {getAvailableModels(aiProvider).find(m => m.value === (selectedModel || getDefaultModel(aiProvider)))?.description}
                        </p>
                      </div>
                    )}
                    
                    <div className="flex space-x-2">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => aiService.clearHistory()}
                        className="px-3 py-1 bg-red-600/20 border border-red-500/30 rounded-lg text-red-300 text-sm"
                      >
                        Clear History
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setShowSettings(false)}
                        className="px-3 py-1 bg-green-600/20 border border-green-500/30 rounded-lg text-green-300 text-sm"
                      >
                        Done
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                        message.isUser
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                          : 'bg-white/10 backdrop-blur-sm text-gray-100'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </motion.div>
                ))}
                
                {/* Typing Indicator */}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                  >
                    <div className="bg-white/10 backdrop-blur-sm text-gray-100 px-4 py-3 rounded-2xl">
                      <div className="flex space-x-1">
                        <motion.div
                          className="w-2 h-2 bg-gray-400 rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-gray-400 rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-gray-400 rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-4 border-t border-white/10">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    disabled={isTyping}
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleSendMessage}
                    disabled={isTyping || !inputMessage.trim()}
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Send
                  </motion.button>
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>
      </section>

      {/* Chat Features */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="up" delay={0.2}>
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI Chat Features
            </h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal direction="left" delay={0.4}>
              <GlassCard className="text-center">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-xl font-bold text-blue-300 mb-2">Natural Conversation</h3>
                <p className="text-gray-300">Engage in natural, flowing conversations with our AI assistant</p>
              </GlassCard>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.6}>
              <GlassCard className="text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-blue-300 mb-2">Real-time Responses</h3>
                <p className="text-gray-300">Get instant, intelligent responses to your questions and messages</p>
              </GlassCard>
            </ScrollReveal>
            
            <ScrollReveal direction="right" delay={0.8}>
              <GlassCard className="text-center">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-xl font-bold text-blue-300 mb-2">Smart Understanding</h3>
                <p className="text-gray-300">AI that understands context and provides relevant, helpful responses</p>
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
} 