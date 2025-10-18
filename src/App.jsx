import { BrowserRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import LazySection from './components/LazySection.jsx';

const Navbar = lazy(() => import('./components/Navbar.jsx'));
const Hero = lazy(() => import('./components/Hero.jsx'));
const About = lazy(() => import('./components/About.jsx'));
const Experience = lazy(() => import('./components/Experience.jsx'));
const Tech = lazy(() => import('./components/Tech.jsx'));
const Works = lazy(() => import('./components/Works.jsx'));
const Contact = lazy(() => import('./components/Contact.jsx'));
const StarsCanvas = lazy(() => import('./components/canvas/Stars.jsx'));

const App = () => {

  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <div className="relative z-0 bg-primary ">
          <div className="bg-cover bg-no-repeat bg-center gradient-color-stops bg-gradient-to-b from-black/10 from-35% via-indigo-900/20 via-70% to-transparent ">
            <Navbar />
            <Hero />
          </div>

          <LazySection minHeight="40vh">
            <About />
          </LazySection>
          <LazySection minHeight="40vh">
            <Experience />
          </LazySection>
          <LazySection minHeight="40vh">
            <Tech />
          </LazySection>
          <LazySection minHeight="40vh">
            <Works />
          </LazySection>

          <div className="relative z-0">
            <LazySection minHeight="50vh">
              <Contact />
            </LazySection>
            <Suspense fallback={null}>
              <StarsCanvas />
            </Suspense>
          </div>
        </div>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
