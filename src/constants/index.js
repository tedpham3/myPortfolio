import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  boeing_logo,
  chronosmd_logo,
  os_projects_logo,
  shopify,
  carrent,
  jobit,
  tripguide,
  chronosImage,
  threejs,
  axoscan,
  feedback1,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'Fullstack Software Enginner',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Frontend Developer',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full-Stack Software Engineer",
    company_name: "Open Source - Chronos",
    icon: chronosmd_logo,  // Keeping the original icon for consistency
    iconBg: "#383E56",
    date: "August 2023 - Present",
    points: [
      "Leveraged React and React Hooks to improve UI responsiveness and user interaction, reducing load times by 50%.",
      "Separated UI components into modular, reusable units with React Context API, enhancing maintainability and scalability.",
      "Streamlined application state across components using Redux, reducing state-related bugs by 40%, enhancing debugging efficiency by 50%, and integrating complex asynchronous actions for a more robust architecture.",
      "Containerized services using Docker, facilitating consistent development environments and streamlined deployment processes. Integrated Prometheus for monitoring and Kubernetes for orchestration, reducing integration issues across development teams by 40%.",
      "Created advanced data visualization for microservice metrics using D3 and Plotly, improving the observability of system performance, enhancing real-time data analytics, and aiding in quicker decision-making processes, reducing analysis time by 30%.",
      "Engineered and deployed a secure, scalable marketing website using AWS S3 and CloudFront, enhancing content delivery, reducing latency, and optimizing SSL/TLS for security. Implemented SEO best practices to ensure compliance.",
      "Applied strict typing with TypeScript across microservices, ensuring robust, error-free code and facilitating easier maintenance, future scalability, and streamlined development processes, reducing runtime errors by 35%.",
      "Enhanced frontend development by adopting Tailwind CSS, expediting the styling process with utility-first classes, boosting productivity, and ensuring a consistent, aesthetically pleasing user interface, accelerating development speed by 20%."
    ],
  },
  {
    title: "Mechanical Engineer",
    company_name: "Boeing-Sponsored Senior Engineer Project - Mechanical Fixture Surface Treatment",
    icon: boeing_logo,  // Keeping the original icon for consistency
    iconBg: "#E6DEDD",
    date: "September 2022 - June 2023",
    points: [
      "Designed and developed a 3-axis gantry system with SolidWorks, focusing on components such as the carriage and suction cup; achieved high precision in movement and functionality, reducing design time by 30%, and improving overall performance.",
      "Automated the 3-axis system using Python, converting complex designs into G-code for precise geometries on the Boeing 787 fuselage. Developed custom scripts to ensure exact execution and increase overall efficiency."
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Open Source - AxoScan - Receipt Scanner Application",
    icon: os_projects_logo,  // Keeping the original icon for consistency
    iconBg: "#383E56",
    date: "",
    points: [
      "Improved client-side rendering and user navigation in a single-page application by integrating React Router. Specialized in configuring navigation guards and detailed routing strategies that improved application responsiveness and user experience, contributing significantly to performance optimization and reducing page load times by 30%.",
      "Refined the backend architecture using Node.js and Express, focusing on scalable API development. Enhanced security and efficiency by integrating middleware for error handling and request logging, which improved system resilience and operational traceability."
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Open Source - Donation Tracker",
    icon: os_projects_logo,  // Keeping the original icon for consistency
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Utilized Next.js for server-side rendering and API routes, enhancing UI responsiveness and SEO performance, coupled with advanced SQL queries for robust donation data management and trend analysis, increasing donation processing speed by 25%.",
      "Adopted Tailwind CSS's utility-first classes for rapid UI development, ensuring a visually appealing and responsive design that adapts seamlessly across devices by utilizing its pre-defined styling utilities, which increased user engagement and accessibility."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Ted and I worked together on updating an NPM package for a large open source project and he was an asset to the team from the very beginning. When we ran into challenging issues Ted always rose to the occasion by working tirelessly to bring a better understanding of problematic issues to the stand ups each morning. In his free time, Ted developed bash scripts that were incorporated into our daily workflow resulting in a massive increase in productivity for the whole team and our eternal appreciation. I can personally say that Ted does not stop when the going gets tough and he will grind until a solution is found. Ted is always looking for new things to learn and how he can better contribute to his team and current problem. Lastly, apart from Ted's unique approach to problem-solving, he is a joy to work with. His humor when the pressure was high and the chips were down always raised the morale of the team. Thank you, Ted!",
    name: 'Michael Tagg',
    designation: 'Software Engineer | MBA',
    company: '',
    date: 'June 28, 2024',
    relationship: 'Michael worked with Thinh on the same team',
    image: feedback1,
  },
];

const projects = [
  {
    name: 'Chronos',
    description:
      'Chronos is a secure, scalable marketing website developed using React, Docker, and AWS S3. It features advanced data visualization for microservice metrics implemented using D3 and Plotly. The site leverages React for a responsive and dynamic user interface, Docker for containerized services, and AWS S3 for efficient content delivery.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'docker',
        color: 'green-text-gradient',
      },
      {
        name: 'aws',
        color: 'orange-text-gradient',
      },
      {
        name: 'd3',
        color: 'purple-text-gradient',
      },
      {
        name: 'plotly',
        color: 'pink-text-gradient',
      },
    ],
    image: chronosImage, // Use the new image
    source_code_link: 'https://chronoslany.com/', // Update with actual link
  },
  {
    name: 'AxoScan',
    description:
      'AxoScan is a receipt scanner application built with React Router for client-side rendering and navigation, and Node.js and Express for the backend. The application provides a seamless user experience with real-time updates and robust API interactions, ensuring secure and efficient receipt management and scanning.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'green-text-gradient',
      },
      {
        name: 'express',
        color: 'yellow-text-gradient',
      },
      {
        name: 'react-router',
        color: 'red-text-gradient',
      },
    ],
    image: axoscan, // Use the GIF instead of the static image
    source_code_link: 'https://github.com/DN00dles/AxoScan', // Update with actual link
  },
];

export { services, technologies, experiences, testimonials, projects };
