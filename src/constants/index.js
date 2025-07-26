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
  uiuc,
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
    title: "AI Engineering",
    icon: creator,
  },
  {
    title: "Cloud Automation",
    icon: backend,
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
    title: "AI Engineer Intern",
    company_name: "University of Illinois",
    icon: uiuc,
    iconBg: "#E6DEDD",
    date: "June 2025 - Present",
    points: [
"Engineered a scalable data lake platform on a HPC cluster by building data ingestion pipelines for veterinary education data, eliminating 90% of manual data refresh tasks and achieving 99% data freshness.",      
"Implemented metadata extraction and summarization pipelines to generate semantically rich, structured metadata (keywords & summaries), tripling query speed and improving search accuracy by 40%.",
"Built a Retrieval-Augmented Generation (RAG) system with fine-tuned models on veterinary domain data for reranking, achieving 25% increase in retrieval relevance and significantly improving precision for domain-specific queries.",
"Developed RESTful APIs (FastAPI) and a Next.js interface for real-time AI-powered Q&A chatbot, while automating the ETL and retraining pipeline with Airflow DAGs to ensure reliability and seamless updates."
    ],
  },
  {
    title: "Software Development Engineer",
    company_name: "Expedia Group",
    icon: eg,
    iconBg: "#E6DEDD",
    date: "May 2023 - July 2024",
    points: [
    "Developed a full-stack data analytics web platform with React-based interactive dashboards and Tableau integration, backed by Node.js REST APIs, enabling real-time visualization of 50+ business KPIs and accelerating decision-making cycles.",
    "Built automated and dynamic dashboards using Material-UI React Table and Highcharts, eliminating 10+ hours of manual reporting per week and improving data-driven insights by 30%.",
    "Designed, developed, and optimized new product features and backend APIs, ensuring sub-100ms response times for real-time analytics and improved platform stability by reducing critical bug recurrence by 20% with proactive debugging.",
    "Automated CI/CD workflows for build, test, and deployment using GitHub Actions, Jenkins, Docker, and Kubernetes, cutting release cycles from every 2 weeks to daily deployments and improving deployment success rates by 40%."
    ],
  },
  {
    title: "Programmer Analyst",
    company_name: "Cognizant",
    icon: cts,
    iconBg: "#E6DEDD",
    date: "Sep 2021 - Mar 2023",
    points: [
      "Developed and maintained modular React UI components for internal web applications, enhancing reusability and improving page load performance by 20%, while streamlining user workflows.",
      "Implemented Redux and React Hooks for optimized state management and integrated GraphQL APIs, reducing API round-trip time by 15% and enhancing overall application performance and responsiveness.",
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
    source_code_link: "https://github.com/cs411-alawini/fa24-cs411-team092-SelectStar",
  },
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
    source_code_link: "https://github.com/pj499/Quora-Clone",
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
    source_code_link: "https://github.com/pj499/my-fitness-application-using-react/tree/master",
  },
  
];

export { services, technologies, experiences, testimonials, projects };