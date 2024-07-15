import React from "react"; // Import React for creating components
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"; // Import components from react-vertical-timeline-component
import { motion } from "framer-motion"; // Import motion from framer-motion for animations

import "react-vertical-timeline-component/style.min.css"; // Import styles for the vertical timeline

import { styles } from "../styles"; // Import custom styles
import { experiences } from "../constants"; // Import experiences data
import { SectionWrapper } from "../hoc"; // Import HOC for wrapping sections
import { textVariant } from "../utils/motion"; // Import animation variants

// Functional component for ExperienceCard
const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }} // Styling for the content area of the timeline element
      contentArrowStyle={{ borderRight: "7px solid  #232631" }} // Styling for the arrow of the timeline element
      date={experience.date} // Date displayed in the timeline element
      iconStyle={{ background: experience.iconBg }} // Background color for the icon
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          {/* Container for the icon */}
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
            // Displaying the company icon with specific width, height, and object containment
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        {/* Displaying the job title */}
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
          {/* Displaying the company name */}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {/* List of points describing the experience */}
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
            {/* Displaying each point */}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

// Functional component for Experience section
const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* Animated text container */}
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
          {/* Subtext for the section with custom styling and centered text */}
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
          {/* Heading for the section with custom styling and centered text */}
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        {/* Container for the vertical timeline with margin top and flex layout */}
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              // Mapping through experiences and rendering ExperienceCard components for each
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
// Wrapping the Experience component with SectionWrapper for additional functionalities