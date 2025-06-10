// AI Service for handling real AI conversations
// Supports multiple AI providers: OpenAI, Anthropic, Hugging Face, etc.

interface AIConfig {
  provider: 'openai' | 'huggingface' | 'cohere' | 'gemini' | 'local';
  apiKey?: string;
  model?: string;
}

interface ConversationMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

class AIService {
  private config: AIConfig;
  private conversationHistory: ConversationMessage[] = [];

  constructor(config: AIConfig) {
    this.config = config;
    // Initialize with system message for better conversations
    this.conversationHistory = [
      {
        role: 'system',
        content: 'You are a helpful, friendly AI assistant built into a modern web application. You love discussing technology, programming, and helping users with various topics. Keep responses conversational and engaging.'
      }
    ];
  }

  async getResponse(userMessage: string): Promise<string> {
    // Add user message to conversation history
    this.conversationHistory.push({
      role: 'user',
      content: userMessage
    });

    try {
      let response: string;

      switch (this.config.provider) {
        case 'openai':
          response = await this.getOpenAIResponse();
          break;
        case 'huggingface':
          response = await this.getHuggingFaceResponse();
          break;
        case 'cohere':
          response = await this.getCohereResponse();
          break;
        case 'gemini':
          response = await this.getGeminiResponse();
          break;
        default:
          response = this.getLocalResponse(userMessage);
      }

      // Add AI response to conversation history
      this.conversationHistory.push({
        role: 'assistant',
        content: response
      });

      return response;
    } catch (error) {
      console.error('AI Service Error:', error);
      // Fallback to local response if API fails
      return this.getLocalResponse(userMessage);
    }
  }

  private async getOpenAIResponse(): Promise<string> {
    if (!this.config.apiKey) {
      throw new Error('OpenAI API key not provided');
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.config.apiKey}`
      },
      body: JSON.stringify({
        model: this.config.model || 'gpt-3.5-turbo',
        messages: this.conversationHistory,
        max_tokens: 150,
        temperature: 0.7
      })
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0]?.message?.content || 'Sorry, I had trouble generating a response.';
  }

  private async getHuggingFaceResponse(): Promise<string> {
    // Using Hugging Face Inference API (completely free!)
    const modelName = this.config.model || 'microsoft/DialoGPT-large';
    const response = await fetch(
      `https://api-inference.huggingface.co/models/${modelName}`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.config.apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          inputs: this.conversationHistory.slice(-3).map(msg => 
            `${msg.role}: ${msg.content}`
          ).join('\n') + '\nassistant:',
          parameters: {
            max_new_tokens: 100,
            temperature: 0.7,
            return_full_text: false
          }
        })
      }
    );

    if (!response.ok) {
      throw new Error(`Hugging Face API error: ${response.status}`);
    }

    const data = await response.json();
    return data[0]?.generated_text?.trim() || 'I need a moment to think about that.';
  }

  private async getCohereResponse(): Promise<string> {
    // Using Cohere API (has free tier)
    if (!this.config.apiKey) {
      throw new Error('Cohere API key not provided');
    }

    const chatHistory = this.conversationHistory.slice(-5).map(msg => ({
      role: msg.role === 'assistant' ? 'CHATBOT' : 'USER',
      message: msg.content
    }));

    const response = await fetch('https://api.cohere.ai/v1/chat', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.config.apiKey}`,
        'Content-Type': 'application/json'
      },
              body: JSON.stringify({
          model: this.config.model || 'command-light', // Use selected model
          message: this.conversationHistory[this.conversationHistory.length - 1].content,
          chat_history: chatHistory.slice(0, -1),
          temperature: 0.7,
          max_tokens: 150
        })
    });

    if (!response.ok) {
      throw new Error(`Cohere API error: ${response.status}`);
    }

    const data = await response.json();
    return data.text || 'I had trouble generating a response.';
  }

  private async getGeminiResponse(): Promise<string> {
    // Using Google AI Studio (Gemini - free tier)
    if (!this.config.apiKey) {
      throw new Error('Google AI Studio API key not provided');
    }

    const chatHistory = this.conversationHistory.slice(-6);
    const contents = chatHistory.map(msg => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }]
    }));

    const modelName = this.config.model || 'gemini-pro';
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${this.config.apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          contents: contents,
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 150
          }
        })
      }
    );

    if (!response.ok) {
      throw new Error(`Gemini API error: ${response.status}`);
    }

    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || 'I had trouble generating a response.';
  }

  private getLocalResponse(userMessage: string): string {
    const lowerMessage = userMessage.toLowerCase();
    const recentHistory = this.conversationHistory.slice(-3);
    
    // Context-aware responses based on conversation history
    const hasDiscussedTech = recentHistory.some(msg => 
      msg.content.toLowerCase().includes('technology') || 
      msg.content.toLowerCase().includes('programming') ||
      msg.content.toLowerCase().includes('code')
    );

    // Enhanced greetings with context
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      if (recentHistory.length > 3) {
        return "Hello again! It's great to continue our conversation. What else would you like to discuss?";
      }
      const greetings = [
        "Hello! I'm excited to chat with you today. What's on your mind?",
        "Hi there! I'm here and ready to help. What would you like to talk about?",
        "Hey! Great to see you. How can I assist you today?",
        "Hello! I'm your AI assistant. What can I help you explore today?"
      ];
      return greetings[Math.floor(Math.random() * greetings.length)];
    }

    // Personal questions
    if (lowerMessage.includes('how are you') || lowerMessage.includes('how do you feel')) {
      return "I'm doing great, thank you for asking! I'm always excited to learn and chat. How are you doing today?";
    }

    if (lowerMessage.includes('what are you') || lowerMessage.includes('who are you')) {
      return "I'm an AI assistant built into this modern web application! I'm designed to have conversations about technology, programming, and various other topics. I'm particularly knowledgeable about web development since I'm built with React and TypeScript. What would you like to know about me?";
    }

    // Practical requests
    if (lowerMessage.includes('weather')) {
      return "I don't have access to real-time weather data, but I'd suggest checking your local weather app or website. Is there anything else I can help you with?";
    }

    if (lowerMessage.includes('time') || lowerMessage.includes('clock')) {
      return `The current time is ${new Date().toLocaleTimeString()}. Is there anything specific you need help with today?`;
    }

    // Technology and programming
    if (lowerMessage.includes('technology') || lowerMessage.includes('tech') || lowerMessage.includes('programming') || lowerMessage.includes('code')) {
      const techResponses = [
        "Technology is fascinating! I love discussing everything from web development to AI. This chat interface is actually built with React and TypeScript. What aspect of technology interests you most?",
        "Programming and tech are amazing fields! I can help with various programming concepts, languages, or discuss the latest tech trends. What would you like to explore?",
        "I'm passionate about technology! Whether it's frontend development, AI, or emerging tech trends, I'm here to chat. What specific area would you like to dive into?",
        "Tech is such an exciting field! From this very React application to cutting-edge AI, there's so much to explore. What technology topic catches your interest?"
      ];
      return techResponses[Math.floor(Math.random() * techResponses.length)];
    }

    if (lowerMessage.includes('react') || lowerMessage.includes('javascript') || lowerMessage.includes('typescript')) {
      return "React and JavaScript are fantastic! This very chat interface is built with React, TypeScript, and Framer Motion for animations. Are you working on any React projects, or would you like to know more about modern web development?";
    }

    if (lowerMessage.includes('ai') || lowerMessage.includes('artificial intelligence') || lowerMessage.includes('machine learning')) {
      return "AI is incredibly exciting! I'm a local AI assistant, and this application also supports connecting to advanced AI services like OpenAI and Hugging Face. What aspects of AI interest you? Are you curious about how I work, or do you want to discuss AI in general?";
    }

    // Learning and development
    if (lowerMessage.includes('learn') || lowerMessage.includes('study') || lowerMessage.includes('course')) {
      if (hasDiscussedTech) {
        return "That's great that you're interested in learning! For web development, I'd recommend starting with HTML, CSS, and JavaScript, then moving to React. There are many free resources like freeCodeCamp and MDN Web Docs. What specific area would you like to focus on?";
      }
      return "Learning is wonderful! What subject or skill are you interested in learning about? I can share insights about technology, programming, or help you think through learning strategies.";
    }

    // Questions and help
    if (lowerMessage.includes('help') || lowerMessage.includes('what can you do')) {
      return "I'm here to help with a variety of topics! I can discuss technology, programming, answer questions, or just have a friendly conversation. I'm particularly knowledgeable about web development since I'm built with modern web technologies. What would you like to explore?";
    }

    if (lowerMessage.includes('how') && lowerMessage.includes('work')) {
      return "Great question! I work by analyzing your messages and providing responses based on patterns and my knowledge. I'm a local AI, so I run in your browser without sending data anywhere. If you switch to OpenAI or Hugging Face in settings, you'd get more advanced AI capabilities. What would you like to know about how I function?";
    }

    // Gratitude and farewells
    if (lowerMessage.includes('thank')) {
      const thankResponses = [
        "You're very welcome! I'm always happy to help. Is there anything else you'd like to discuss or explore together?",
        "My pleasure! I enjoy our conversations. What else can I help you with?",
        "You're so welcome! I'm here whenever you need assistance or just want to chat."
      ];
      return thankResponses[Math.floor(Math.random() * thankResponses.length)];
    }

    if (lowerMessage.includes('bye') || lowerMessage.includes('goodbye') || lowerMessage.includes('see you')) {
      return "Goodbye! It's been wonderful chatting with you. Feel free to come back anytime you want to talk or need help with something!";
    }

    // Follow-up questions based on context
    if (hasDiscussedTech && (lowerMessage.includes('yes') || lowerMessage.includes('sure') || lowerMessage.includes('tell me more'))) {
      return "Awesome! I'd love to dive deeper into that topic. What specific aspect would you like to explore? Are you looking for practical examples, concepts, or maybe some hands-on guidance?";
    }

    // Creative and personal topics
    if (lowerMessage.includes('story') || lowerMessage.includes('creative') || lowerMessage.includes('write')) {
      return "I love creative topics! While I'm more focused on technical subjects, I can certainly discuss creative writing, storytelling in user experience design, or even help brainstorm ideas. What kind of creative project are you thinking about?";
    }

    if (lowerMessage.includes('hobby') || lowerMessage.includes('interests') || lowerMessage.includes('fun')) {
      return "That's interesting! I find technology and programming fascinating - they're like puzzles that create useful things. What hobbies or interests do you have? I'd love to hear about what you enjoy doing!";
    }

    // Context-aware general responses
    const contextualResponses = hasDiscussedTech ? [
      "That's a great point about technology! What's your experience with that particular area?",
      "Interesting perspective! How do you think that relates to modern web development?",
      "I find that fascinating! Are you working on any tech projects related to that?",
      "That's quite insightful! What made you think about that aspect of technology?"
    ] : [
      "That's really interesting! I'd love to hear more about your thoughts on that. Can you tell me more?",
      "I find that fascinating! What made you think about that particular topic?",
      "That's a great point! I'm curious about your perspective - what's your experience with that?",
      "Thanks for sharing that with me! What aspects of that topic interest you most?",
      "I appreciate you bringing that up! How did you first become interested in that?",
      "That's quite thought-provoking! What would you like to explore about that further?"
    ];
    
    return contextualResponses[Math.floor(Math.random() * contextualResponses.length)];
  }

  // Update AI configuration
  updateConfig(config: Partial<AIConfig>): void {
    this.config = { ...this.config, ...config };
    
    // Auto-load API keys from environment variables if not provided
    if (!this.config.apiKey) {
      switch (this.config.provider) {
        case 'huggingface':
          this.config.apiKey = import.meta.env.VITE_HUGGINGFACE_API_KEY;
          break;
        case 'cohere':
          this.config.apiKey = import.meta.env.VITE_COHERE_API_KEY;
          break;
        case 'gemini':
          this.config.apiKey = import.meta.env.VITE_GEMINI_API_KEY;
          break;
        case 'openai':
          this.config.apiKey = import.meta.env.VITE_OPENAI_API_KEY;
          break;
      }
    }
  }

  // Clear conversation history
  clearHistory(): void {
    this.conversationHistory = [this.conversationHistory[0]]; // Keep system message
  }

  // Get conversation context for debugging
  getHistory(): ConversationMessage[] {
    return this.conversationHistory;
  }
}

export { AIService, type AIConfig, type ConversationMessage }; 