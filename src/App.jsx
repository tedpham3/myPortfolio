import { BrowserRouter } from 'react-router-dom'; // Importing BrowserRouter from react-router-dom to handle routing in the app

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from './components'; // Importing various components used in the app from the components directory

const App = () => {
  return (
    <BrowserRouter> 
      {/* BrowserRouter is used to wrap the entire application, enabling the use of routing throughout */}
      <div className='relative z-0 bg-primary'>
        {/* Main container with relative positioning, a z-index of 0, and a primary background color */}
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          {/* Container with a background pattern for the hero section, covering the background without repeating and centered */}
          <Navbar /> 
          {/* Navbar component for the navigation bar */}
          <Hero /> 
          {/* Hero component for the main introductory section of the page */}
        </div>
        <About /> 
        {/* About component for the "About" section */}
        <Experience /> 
        {/* Experience component for the "Experience" section */}
        <Tech /> 
        {/* Tech component for the "Tech" section */}
        <Works /> 
        {/* Works component for the "Works" section */}
        <Feedbacks /> 
        {/* Feedbacks component for the "Feedbacks" section */}
        <div className='relative z-0'>
          {/* Container for the Contact section and StarsCanvas with relative positioning and a z-index of 0 */}
          <Contact /> 
          {/* Contact component for the "Contact" section */}
          <StarsCanvas /> 
          {/* StarsCanvas component for the animated background canvas with stars */}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App; 
// Exports the App component as the default export of the module