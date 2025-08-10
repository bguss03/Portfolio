import { useEffect } from 'react';
import AOS from 'aos';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Navbar/Hero';
import Tentang from './Components/Layout/Tentang';
// import AnimatedContent from './assets/AnimatedContent/AnimatedContent';
import Tools from './Components/Layout/Toolss';
import Projek from './Components/Layout/Projek';
import { Routes, Route } from 'react-router-dom';
import ProjectAll from './Components/Pages/ProjectAll';
import Contact from './Components/Pages/Contact';
import ScrollToTop from './Components/ScrollToTop';
import Sertifikat from './Components/Layout/Sertifikat';
import NotFound from './Components/Pages/NotFound';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 300,
      easing: 'ease-in-out',
      once: false,
    });
  }, []);
  return (
    <>
    <ScrollToTop />
      <Routes>
        <Route
          path='/'
          element={
            <>
                <Navbar />
                <Hero />
              <Tentang />
              <Tools />
              <Projek />
              <Sertifikat />
            </>
          }
        />
        <Route path='/project' element={<ProjectAll />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;