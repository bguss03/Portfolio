import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './Components/Navbar/Navbar'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar  /> 
    {/* <App /> */}
  </StrictMode>,
)
