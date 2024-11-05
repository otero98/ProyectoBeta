import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { SideBarApp } from './SideBarApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SideBarApp />
  </StrictMode>,
)
