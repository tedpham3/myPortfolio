const styles = {
  // Sets the horizontal padding for larger screens to 16 pixels and for smaller screens to 6 pixels
  paddingX: "sm:px-16 px-6",
  // Sets the vertical padding for larger screens to 16 pixels and for smaller screens to 6 pixels
  paddingY: "sm:py-16 py-6",
  // Sets the padding for larger screens to 16 pixels horizontally and 16 pixels vertically, and for smaller screens to 6 pixels horizontally and 10 pixels vertically
  padding: "sm:px-16 px-6 sm:py-16 py-10",
  
  // Styles for the hero head text, including font size, color, and margin top
  heroHeadText:
    "font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
  // Styles for the hero subtext, including font size, color, and font weight
  heroSubText:
    "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",
  
  // Styles for the section head text, including font size, color, and text alignment
  sectionHeadText:
    "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
  // Styles for the section subtext, including font size, color, and text transformation
  sectionSubText:
    "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
};

export { styles };