import React, { useRef, useState } from "react"; // Import React and hooks for creating components and managing state
import { motion } from "framer-motion"; // Import motion from framer-motion for animations
import emailjs from "@emailjs/browser"; // Import emailjs for sending emails

import { styles } from "../styles"; // Import custom styles
import { EarthCanvas } from "./canvas"; // Import EarthCanvas component
import { SectionWrapper } from "../hoc"; // Import HOC for wrapping sections
import { slideIn } from "../utils/motion"; // Import animation variants

// Functional component for Contact section
const Contact = () => {
  const formRef = useRef(); // Create a ref for the form
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  }); // State for managing form data

  const [loading, setLoading] = useState(false); // State for managing loading status

  // Handle input change
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setLoading(true); // Set loading state to true

    // Send email using emailjs
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false); // Set loading state to false
          alert("Thank you. I will get back to you as soon as possible."); // Show success message

          setForm({
            name: "",
            email: "",
            message: "",
          }); // Reset form data
        },
        (error) => {
          setLoading(false); // Set loading state to false
          console.error(error);

          alert("Ahh, something went wrong. Please try again."); // Show error message
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
      // Container for the contact section with flex layout and responsive styling
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        // Applying slide-in animation from the left with tween effect
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
        // Styling for the form container with background color, padding, and rounded corners
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        {/* Subtext for the section with custom styling */}
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        {/* Heading for the section with custom styling */}

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
          // Form with margin top, flex layout, and gap between elements
        >
          <label className='flex flex-col'>
            {/* Label for the name input with flex layout */}
            <span className='text-white font-medium mb-4'>Your Name</span>
            {/* Text for the label */}
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              // Styling for the name input field
            />
          </label>
          <label className='flex flex-col'>
            {/* Label for the email input with flex layout */}
            <span className='text-white font-medium mb-4'>Your email</span>
            {/* Text for the label */}
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              // Styling for the email input field
            />
          </label>
          <label className='flex flex-col'>
            {/* Label for the message textarea with flex layout */}
            <span className='text-white font-medium mb-4'>Your Message</span>
            {/* Text for the label */}
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              // Styling for the message textarea
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
            // Styling for the submit button
          >
            {loading ? "Sending..." : "Send"}
            {/* Button text changes based on loading state */}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        // Applying slide-in animation from the right with tween effect
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
        // Styling for the EarthCanvas container with responsive height
      >
        <EarthCanvas />
        {/* EarthCanvas component */}
      </motion.div>
    </div>
  );
};

// Exporting the Contact component wrapped with SectionWrapper HOC
export default SectionWrapper(Contact, "contact");