import {
  mobile,
  backend,
  creator,
  web,
  javascript,
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
  eg,
  cts,
  stocksmart,
  threejs,
  quora,
  fitness
} from "../assets";
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Development and UX Design",
    icon: web,
  },
  {
    title: "Backend Development",
    icon: mobile,
  },
  {
    title: "Cloud Automation",
    icon: backend,
  },
  {
    title: "Teaching Assistant",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Development Engineer",
    company_name: "Expedia Group",
    icon: eg,
    iconBg: "#E6DEDD",
    date: "May 2023 - July 2024",
    points: [
      "Developed a full-stack data analytics web platform featuring an interactive React frontend with custom-built data visualization dashboards and Tableau integration, supported by a Node.js backend  for RESTful API management",
      "Built dynamic and interactive dashboards to visualize key business KPIs (e.g. monthly and weekly recurring data) using Material-UI React Table and Highcharts, automating reporting processes and saving 10+ hours of manual work per week while improving data-driven decision-making by 30%, collaborated with cross-functional teams",
      "Designed, implemented, and maintained new features and backend APIs, optimizing performance to ensure response times stayed under 100ms for real-time insights, resolved software bugs with effective debugging and testing practices",
      "Automated CI/CD pipelines using GitHub Actions, and managed version control and deployment workflows using GitHub, Jenkins, Docker, and Kubernetes, streamlining continuous integration and delivery processes",
    ],
  },
  {
    title: "Programmer Analyst",
    company_name: "Cognizant",
    icon: cts,
    iconBg: "#E6DEDD",
    date: "Sep 2021 - Mar 2023",
    points: [
      "Contributed to building and maintaining the frontend of a large-scale web application for one of the leading Swedish insurance companies, aimed at streamlining internal team management workflows using React",
      "Utilized Redux and React Hooks for efficient state management and integrated API endpoints using GraphQL and improved performance by optimizing a critical API call, resulting in a 15% reduction in round-trip time",
      "Participated in code reviews and providing constructive feedback to other developers",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Prajakta proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://media.licdn.com/dms/image/v2/C4D03AQHoT_aJeMRQFQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1636637127739?e=2147483647&v=beta&t=G1z2Jyc6vNaxfk5WL9M8GcYcFkJ2MDXc4BEkcgmePNo",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Prajakta does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Prajakta optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Quora Clone",
    description:
      "A social Q&A platform that replicates Quora’s key features, allows users to ask questions, share answers, upvote content, and engage in discussions, providing an interactive and user-friendly experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: quora,
    source_code_link: "https://github.com/",
  },
  {
    name: "YouFit",
    description:
      "A React-based fitness app featuring a vast collection of 1000+ exercises in one place. With search, pagination, and YouTube video integration, it uses RapidAPI for real-time data fetching to enhance the workout experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "materialui",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: fitness,
    source_code_link: "https://github.com/",
  },
  {
    name: "StockSmart",
    description:
      "A data-driven forecasting of fresh food demand in retail stores uses historical data to predict demand and optimize inventory. With real-time insights and advanced visualizations, retailers make informed stocking decisions and reduce waste.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "machinelearning",
        color: "pink-text-gradient",
      },
    ],
    image: stocksmart,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };