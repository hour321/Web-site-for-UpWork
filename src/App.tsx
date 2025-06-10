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

import { Routes, Route } from 'react-router-dom';
import { MainHomePage } from './pages/Home.Page';
import { SkillsTechnologiesPage } from './pages/Skills.Technologies';
import { AIChatBotPage } from './pages/AI.Chat.Bot';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainHomePage />} />
      <Route path="/skills-technologies" element={<SkillsTechnologiesPage />} />
      <Route path="/ai-chat-bot" element={<AIChatBotPage />} />
    </Routes>
  );
}

export default App;