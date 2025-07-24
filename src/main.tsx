import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Navbar/Hero'
import 'remixicon/fonts/remixicon.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar  /> 
    <Hero />
    {/* <App /> */}
  </StrictMode>,
)
