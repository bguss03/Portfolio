import { useEffect } from 'react';
import AOS from 'aos';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Navbar/Hero';
import Tentang from './Components/Layout/Tentang';
import AnimatedContent from './assets/AnimatedContent/AnimatedContent';
import Tools from './Components/Layout/Toolss';
import Projek from './Components/Layout/Projek';
import { Routes, Route } from 'react-router-dom';
import ProjectAll from './Components/Pages/ProjectAll';
import Contact from './Components/Pages/Contact';

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
      <Routes>
        <Route
          path='/'
          element={
            <>
              <AnimatedContent
                distance={300}
                direction="vertical"
                reverse={false}
                duration={1}
                ease="power3.out"
                initialOpacity={1}
                animateOpacity
                scale={1}
                threshold={0.2}
                delay={0}
              >
                <Navbar />
                <Hero />
              </AnimatedContent>
              <Tentang />
              <Tools />
              <Projek />
            </>
          }
        />
        <Route path='/project' element={<ProjectAll />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;