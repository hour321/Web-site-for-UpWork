/**
 * Main Entry Point - Modern Web Experience
 * 
 * @description Application entry point and React root mounting
 * @author hour321 (gaudy.hour@gmail.com)
 * @version 1.0.0
 * @created 2025-01-07
 * @repository https://github.com/hour321/Web-site-for-UpWork
 */

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)