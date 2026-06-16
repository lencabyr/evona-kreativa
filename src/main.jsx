import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles.css'
import './slides/title-slide.css'
import './slides/banner-slide.css'
import './slides/summary-slide.css'
import './slides/issues-slide.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
