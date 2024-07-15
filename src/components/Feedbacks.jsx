import React from "react"; // Import React for creating components
import { motion } from "framer-motion"; // Import motion from framer-motion for animations

import { styles } from "../styles"; // Import custom styles
import { SectionWrapper } from "../hoc"; // Import HOC for wrapping sections
import { fadeIn, textVariant } from "../utils/motion"; // Import animation variants
import { testimonials } from "../constants"; // Import testimonials data

// Functional component for FeedbackCard
const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    // Applying fade-in animation with spring effect, delay based on index
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
    // Styling for the card container with background color, padding, rounded corners, and responsive width
  >
    <p className='text-white font-black text-[48px]'>"</p>
    {/* Quotation mark at the beginning of the testimonial */}

    <div className='mt-1'>
      {/* Container for the testimonial text and user details */}
      <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>
      {/* Displaying the testimonial text with styling */}

      <div className='mt-7 flex justify-between items-center gap-1'>
        {/* Container for the user details with margin top, flex layout, and gap between items */}
        <div className='flex-1 flex flex-col'>
          {/* Container for the user's name and designation */}
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
            {/* Displaying the user's name with styling */}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation} of {company}
            {/* Displaying the user's designation and company with styling */}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-10 h-10 rounded-full object-cover'
          // Displaying the user's image with specific width, height, rounded corners, and object containment
        />
      </div>
    </div>
  </motion.div>
);

// Functional component for Feedbacks section
const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      {/* Container for the feedbacks section with margin top, background color, and rounded corners */}
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
        // Container for the header with background color, rounded corners, padding, and minimum height
      >
        <motion.div variants={textVariant()}>
          {/* Animated text container */}
          <p className={styles.sectionSubText}>What others say</p>
          {/* Subtext for the section with custom styling */}
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
          {/* Heading for the section with custom styling */}
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {/* Container for the feedback cards with margin top, padding bottom, flex layout, wrapping, and gap between items */}
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
          // Mapping through testimonials and rendering FeedbackCard components for each
        ))}
      </div>
    </div>
  );
};

// Exporting the Feedbacks component wrapped with SectionWrapper HOC
export default SectionWrapper(Feedbacks, "");