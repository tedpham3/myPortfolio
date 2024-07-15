import React from "react"; // Import React for creating components
import { Tilt } from "react-tilt"; // Import Tilt for tilt effect on hover
import { motion } from "framer-motion"; // Import motion from framer-motion for animations

import { styles } from "../styles"; // Import custom styles
import { services } from "../constants"; // Import service data
import { SectionWrapper } from "../hoc"; // Import HOC for wrapping sections
import { fadeIn, textVariant } from "../utils/motion"; // Import animation variants

// Functional component for ServiceCard
const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    {/* Container with tilt effect on hover */}
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      // Applying fade-in animation from right with spring effect, delay based on index
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      // Styling for the card container with gradient border, padding, rounded corners, and shadow
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        // Options for the tilt effect: max tilt angle, scale, and speed
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        // Styling for the card content: background color, rounded corners, padding, minimum height, and flex properties
      >
        <img
          src={icon}
          alt={title}
          className='w-16 h-16 object-contain'
          // Displaying the service icon with specific width, height, and object containment
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
          {/* Displaying the service title with text styling */}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

// Functional component for About section
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* Animated text container */}
        <p className={styles.sectionSubText}>Introduction</p>
        {/* Subtext for the section with custom styling */}
        <h2 className={styles.sectionHeadText}>Overview</h2>
        {/* Heading for the section with custom styling */}
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        // Applying fade-in animation with delay and duration
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        // Styling for the paragraph text with margin top, secondary text color, font size, max width, and line height
      >
        I am a Full-Stack Software Engineer with a deep passion for JavaScript, TypeScript, and React. Over the years, I have honed my skills in developing scalable applications and have become proficient in a range of modern frameworks and technologies. My vision is to create innovative solutions for complex problems, contributing to the success of forward-thinking organizations.
        {/* Description about the individual's expertise and vision */}
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        // Applying fade-in animation with delay and duration
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        // Styling for the paragraph text with margin top, secondary text color, font size, max width, and line height
      >
        I thrive on challenges and continuously seek opportunities to learn and grow. Let's work together to bring your ideas to life!
        {/* Additional description emphasizing continuous learning and collaboration */}
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {/* Container for service cards with margin top, flex layout, and gap between items */}
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
          // Mapping through services and rendering ServiceCard components for each
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
// Wrapping the About component with SectionWrapper for additional functionalities