import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; 
import './index.css';
import 'remixicon/fonts/remixicon.css';
import 'aos/dist/aos.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Layout/Navbar';
import Footer from './Components/Layout/Footer';
import { ThemeProvider } from '@material-tailwind/react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
    <BrowserRouter>
    <Navbar />
      <App />
      <Footer />
    </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);