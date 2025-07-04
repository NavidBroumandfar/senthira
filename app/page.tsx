import Hero from '../components/Hero';
import About from '../components/About';
import MissionVision from '../components/MissionVision';
import Products from '../components/Products';
import Technologies from '../components/Technologies';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <MissionVision />
      <Products />
      <Technologies />
      <About />
      <Contact />
    </>
  );
} 