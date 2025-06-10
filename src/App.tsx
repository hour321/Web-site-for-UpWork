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
import { HomePage } from './components/HomePage';
import { LightningFastPage } from './pages/LightningFastPage';
import { NextGenTechPage } from './pages/NextGenTechPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/lightning-fast" element={<LightningFastPage />} />
      <Route path="/next-gen-tech" element={<NextGenTechPage />} />
    </Routes>
  );
}

export default App;