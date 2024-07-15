import { motion } from "framer-motion"; // Importing motion for animations
import { styles } from "../styles"; // Importing styles
import heroImage from "../assets/hero.jpeg"; // Importing the hero image

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      {/* This section is the main container for the Hero component. It takes up the full width and height of the screen and is centered horizontally with mx-auto. */}
      
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/* This div is the container for the hero content, including the title, subtitle, and decorations. */}
        {/* absolute: Positioned absolutely within the section. */}
        {/* inset-0: Inset values of 0 from all sides, stretching the container. */}
        {/* top-[120px]: Positioned 120px from the top of its relative container. */}
        {/* max-w-7xl: Maximum width of 7xl (arbitrary large value). */}
        {/* mx-auto: Centered horizontally. */}
        {/* ${styles.paddingX}: Horizontal padding defined in the styles module. */}
        {/* flex flex-row: Flex container with horizontal layout. */}
        {/* items-start: Align items to the start of the flex container. */}
        {/* gap-5: 20px gap between flex items. */}
        
        <div className='flex flex-col justify-center items-center mt-5'>
          {/* This div is for the vertical line decoration with the circle at the top. */}
          {/* flex flex-col: Flex container with vertical layout. */}
          {/* justify-center: Center content vertically. */}
          {/* items-center: Center content horizontally. */}
          {/* mt-5: 20px top margin. */}
          <div className='w-5 h-5 rounded-full bg-[#1877F2]' />
          {/* Circle at the top of the vertical line. */}
          {/* w-5 h-5: 20px width and height. */}
          {/* rounded-full: Fully rounded corners to create a circle. */}
          {/* bg-[#1877F2]: Background color (Facebook blue). */}
          <div className='w-1 sm:h-80 h-40' style={{ background: 'linear-gradient(to bottom, #1877F2, #00A3E0)' }} />
          {/* Vertical line under the circle. */}
          {/* w-1: 4px width. */}
          {/* sm:h-80: 320px height on small screens and larger. */}
          {/* h-40: 160px height on extra-small screens. */}
          {/* background: Gradient background from Facebook blue to a lighter blue. */}
        </div>

        <div>
          {/* This div contains the hero title and subtitle. */}
          <h1 className={`${styles.heroHeadText}`} style={{ color: '#FFFFFF' }}>
            {/* Hero title. */}
            {/* ${styles.heroHeadText}: Custom hero head text style from the styles module. */}
            {/* color: '#FFFFFF': White text color. */}
            Hi, I'm <span style={{ color: '#1877F2' }}>Ted</span>
            {/* Span to style the name with a different color. */}
            {/* color: '#1877F2': Facebook blue color. */}
          </h1>
          <p className={`${styles.heroSubText} mt-2`} style={{ color: '#FFFFFF' }}>
            {/* Hero subtitle. */}
            {/* ${styles.heroSubText}: Custom hero sub text style from the styles module. */}
            {/* mt-2: 8px top margin. */}
            {/* color: '#FFFFFF': White text color. */}
            I am a Full-Stack Software Engineer with a deep passion for JavaScript, TypeScript, and React.
          </p>
        </div>
      </div>

      <div className='absolute inset-0 flex justify-center items-center' style={{ transform: 'translateY(100px)' }}>
        {/* This div is for the hero image. */}
        {/* absolute: Positioned absolutely within the section. */}
        {/* inset-0: Inset values of 0 from all sides, stretching the container. */}
        {/* flex justify-center items-center: Flex container centered both horizontally and vertically. */}
        {/* transform: 'translateY(100px)': Moves the container down by 100px. */}
        <img
          src={heroImage}
          alt="Ted Pham"
          className='w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] object-cover rounded-full'
          style={{ position: 'relative', top: '0', left: '0' }}
        />
        {/* Image element for the hero picture. */}
        {/* src={heroImage}: Path to the hero image. */}
        {/* alt="Ted Pham": Alt text for the image. */}
        {/* className='w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] object-cover rounded-full': Tailwind CSS classes for styling the image. */}
        {/* w-[300px] h-[300px]: 300px width and height. */}
        {/* sm:w-[350px] sm:h-[350px]: 350px width and height on small screens and larger. */}
        {/* object-cover: Ensures the image covers the entire container while maintaining aspect ratio. */}
        {/* rounded-full: Fully rounded corners to create a circle. */}
        {/* style={{ position: 'relative', top: '0', left: '0' }}: Inline styles for relative positioning. */}
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        {/* This div is for the scroll down indicator. */}
        {/* absolute: Positioned absolutely within the section. */}
        {/* xs:bottom-10: 40px bottom margin on extra-small screens. */}
        {/* bottom-32: 128px bottom margin on other screens. */}
        {/* w-full: Full width. */}
        {/* flex justify-center items-center: Flex container centered both horizontally and vertically. */}
        <a href='#about'>
          {/* Link to the #about section. */}
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            {/* Container for the scroll indicator. */}
            {/* w-[35px] h-[64px]: 35px width and 64px height. */}
            {/* rounded-3xl: Large rounded corners. */}
            {/* border-4 border-secondary: 4px border with secondary color. */}
            {/* flex justify-center items-start: Flex container centered horizontally and aligned to the start vertically. */}
            {/* p-2: 8px padding. */}
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
            {/* Animated scroll indicator using framer-motion. */}
            {/* animate: Animation settings. */}
            {/* y: [0, 24, 0]: Vertical movement from 0 to 24px and back to 0. */}
            {/* transition: Animation timing settings. */}
            {/* duration: 1.5: 1.5 seconds duration. */}
            {/* repeat: Infinity: Infinite loop. */}
            {/* repeatType: "loop": Looping animation. */}
            {/* className='w-3 h-3 rounded-full bg-secondary mb-1': Tailwind CSS classes for styling. */}
            {/* w-3 h-3: 12px width and height. */}
            {/* rounded-full: Fully rounded corners to create a circle. */}
            {/* bg-secondary: Secondary background color. */}
            {/* mb-1: 4px bottom margin. */}
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;