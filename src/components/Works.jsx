import React from "react"; // Import React for creating components
import { Tilt } from "react-tilt"; // Import Tilt for tilt effect on hover
import { motion } from "framer-motion"; // Import motion from framer-motion for animations

import { styles } from "../styles"; // Import custom styles
import { github } from "../assets"; // Import GitHub icon
import { SectionWrapper } from "../hoc"; // Import HOC for wrapping sections
import { projects } from "../constants"; // Import project data
import { fadeIn, textVariant } from "../utils/motion"; // Import animation variants

// Functional component for ProjectCard
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      {/* Applying fade-in animation from the bottom with spring effect */}
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        // Options for the tilt effect
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
        // Styling for the card container with background color, padding, rounded corners, and responsive width
      >
        <div className='relative w-full h-[230px]'>
          {/* Container for the project image with fixed height */}
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
            // Displaying the project image with specific width, height, object containment, and rounded corners
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            {/* Container for the GitHub icon with absolute positioning */}
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              // Styling for the GitHub icon container with gradient background, fixed size, rounded corners, and cursor pointer
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
                // Displaying the GitHub icon with specific width, height, and object containment
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          {/* Container for the project name and description with margin top */}
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          {/* Displaying the project name with text styling */}
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
          {/* Displaying the project description with text styling */}
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {/* Container for the tags with flex layout, wrapping, and gap between items */}
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
              // Displaying each tag with dynamic color class
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

// Functional component for Works section
const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* Animated text container */}
        <p className={`${styles.sectionSubText} `}>My work</p>
        {/* Subtext for the section with custom styling */}
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
        {/* Heading for the section with custom styling */}
      </motion.div>

      <div className='w-full flex'>
        {/* Container for the introductory text with full width and flex layout */}
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          // Applying fade-in animation with delay and duration
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
          // Styling for the paragraph text with margin top, secondary text color, font size, max width, and line height
        >
          The following projects highlight my skills and experience through practical examples of my work. Each project is briefly described, with links to code repositories and live demos. These projects showcase my ability to solve complex problems, work with diverse technologies, and manage projects efficiently.
          {/* Introductory text about the projects */}
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {/* Container for the project cards with margin top, flex layout, wrapping, and gap between items */}
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
          // Mapping through projects and rendering ProjectCard components for each
        ))}
      </div>
    </>
  );
};

// Exporting the Works component wrapped with SectionWrapper HOC
export default SectionWrapper(Works, "");