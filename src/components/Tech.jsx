import React from "react"; // Import React for creating components

import { BallCanvas } from "./canvas"; // Import BallCanvas component from canvas
import { SectionWrapper } from "../hoc"; // Import HOC for wrapping sections
import { technologies } from "../constants"; // Import technologies data

// Functional component for Tech section
const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {/* Container for the technologies with flex layout, wrapping, centered alignment, and gap between items */}
      {technologies.map((technology) => (
        // Mapping through technologies and rendering BallCanvas for each technology
        <div className='w-28 h-28' key={technology.name}>
          {/* Container for each technology with fixed width and height */}
          <BallCanvas icon={technology.icon} />
          {/* BallCanvas component displaying the technology icon */}
        </div>
      ))}
    </div>
  );
};

// Exporting the Tech component wrapped with SectionWrapper HOC
export default SectionWrapper(Tech, "");