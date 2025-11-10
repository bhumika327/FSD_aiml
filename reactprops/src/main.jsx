import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ImageManipulation from './component/ImageManipulation.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ImageManipulation />
  </StrictMode>,
)
