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
    title: "AI Software Engineer (Summer Intern)",
    company_name: "University of Illinois",
    icon: uiuc,
    iconBg: "#E6DEDD",
    date: "Jun 2025 - Aug 2025",
    points: [
"Developed a real-time AI-powered Q&A chatbot with a Next.js frontend and FastAPI backend, with automated ETL and retraining pipelines with Airflow, ensuring seamless updates and system reliability.",      
"Engineered a scalable data lake platform on HPC cluster by integrating data source SDKs with Slurm jobs and Bash scripts to automate cloud data ingestion, eliminating 90% of manual effort and ensuring 99% data freshness.",
"Designed metadata enrichment pipelines with Parquet (columnar storage) and SQLite (indexing), applying KeyBERT + BART models for keyword extraction and summarization, improving search accuracy by 40% and reducing query latency.",
"Trained a domain-specific Retrieval-Augmented Generation (RAG) pipeline with an embedding model + Qdrant for retrieval and LLaMA 3.1 8B Instruct for generation, boosting retrieval accuracy by 25% and delivering precise answers."
    ],
  },
  {
    title: "Software Development Engineer",
    company_name: "Expedia Group",
    icon: eg,
    iconBg: "#E6DEDD",
    date: "May 2023 - Jul 2024",
    points: [
    "Delivered a full-stack data analytics platform combining multiple business performance insights into a single system, enabling real-time visualization of 50+ KPIs for 200+ stakeholders and accelerating data-driven decision-making.",
    "Built interactive dashboards with React (Material-UI, Highcharts, Redux) and Node.js REST APIs, transforming manual reports into automated views, increasing reporting accuracy by 30% and saving 10+ hours weekly.",
    "Launched custom dashboard views (saved/sharable configurations) using MongoDB and Express, adopted by 400+ users, while optimizing backend APIs for high-volume analytics with sub-100ms latency, improving usability and collaboration.",
    "Automated CI/CD pipelines with GitHub Actions, Jenkins, Docker, and Kubernetes to build, test, and deploy, cutting release cycles from bi-weekly to daily and improving deployment success rates by 40%."
    ],
  },
  {
    title: "Programmer Analyst",
    company_name: "Cognizant",
    icon: cts,
    iconBg: "#E6DEDD",
    date: "Sep 2021 - Mar 2023",
    points: [
      "Architected and maintained modular React components for enterprise applications, improving reusability and reducing page load times by 20%, while streamlining workflows for users.",
      "Enhanced state management with Redux and React Hooks and integrated GraphQL APIs, reducing round-trip times by 15% and improving performance at scale.",
      "Collaborated with cross-functional teams using Agile methodologies, contributing to sprint planning, code reviews, and pair programming, resulting in a 25% increase in team productivity and faster delivery of features.",
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