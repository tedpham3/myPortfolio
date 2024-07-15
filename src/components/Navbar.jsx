import React, { useEffect, useState } from "react"; // Importing necessary modules from React
import { Link } from "react-router-dom"; // Importing Link component from react-router-dom

import { styles } from "../styles"; // Importing styles object from "../styles" file
import { navLinks } from "../constants"; // Importing navLinks array from "../constants" file
import { logo, menu, close } from "../assets"; // Importing logo, menu, and close images from "../assets" folder

const Navbar = () => { // Defining a functional component called Navbar
  const [active, setActive] = useState(""); // Declaring a state variable called active and a function to update it
  const [toggle, setToggle] = useState(false); // Declaring a state variable called toggle and a function to update it
  const [scrolled, setScrolled] = useState(false); // Declaring a state variable called scrolled and a function to update it

  useEffect(() => { // Using the useEffect hook to perform side effects
    const handleScroll = () => { // Defining a function called handleScroll
      const scrollTop = window.scrollY; // Getting the current scroll position
      if (scrollTop > 100) { // Checking if the scroll position is greater than 100
        setScrolled(true); // Updating the scrolled state variable to true
      } else {
        setScrolled(false); // Updating the scrolled state variable to false
      }
    };

    window.addEventListener("scroll", handleScroll); // Adding an event listener for the scroll event

    return () => window.removeEventListener("scroll", handleScroll); // Removing the event listener when the component unmounts
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      {/* Navigation bar with dynamic background based on scroll state */}
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        {/* Container for logo and navigation links */}
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive(""); // Reset active state
            window.scrollTo(0, 0); // Scroll to top on logo click
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          {/* Logo image */}
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Ted Pham &nbsp;
            <span className='sm:block hidden'> | Fullstack Software Engineer</span>
            {/* Logo text with conditional rendering */}
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {/* Desktop navigation links */}
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
              {/* Navigation link */}
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          {/* Mobile menu icon */}
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            {/* Mobile navigation menu */}
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle); // Close the menu
                    setActive(nav.title); // Set the active link
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                  {/* Mobile navigation link */}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; // Exporting the Navbar component as the default export