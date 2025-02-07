import { BrowserRouter } from 'react-router-dom';
import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from './components';

const App = () => {

  return (
   <BrowserRouter>

     <div className="relative z-0 bg-primary ">
       <div className="bg-cover bg-no-repeat bg-center gradient-color-stops bg-gradient-to-b from-black/10 from-35% via-indigo-900/20 via-70% to-transparent "
       // className="bg-hero-pattern"
       >
         <Navbar />
         <Hero/>
       </div>
       <About />
       <Experience />
       <Tech />
       <Works />
       {/*<Feedbacks />*/}
       <div className="relative z-0">
         <Contact />
         <StarsCanvas />
       </div>
       <StarsCanvas/>
     </div>

   </BrowserRouter>
  );
};

export default App;
