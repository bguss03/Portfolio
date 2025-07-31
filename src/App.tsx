import { useEffect } from 'react';
import AOS from 'aos';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Navbar/Hero'; 
import Tentang from './Components/Layout/Tentang'; 
import AnimatedContent from './assets/AnimatedContent/AnimatedContent';
import Tools from './Components/Layout/Toolss';

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
      {/* <Projek /> */}
    </>
  );
}

export default App;