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
  bootstrap,
  tailwind,
  nodejs,
  mongodb,
  git,
  express,
  vue,
  shukan,
  freelancing,
  morpich,
  webvision,
  agencyweb,
  todo,
  loginui,
  net,
} from "../assets";

export const navLinks = [
  {
    id: "",
    title: "Home",
  },
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
    title: "Frontend Development",
    icon: web,
  },
  {
    title: "Backend Development",
    icon: mobile,
  },
  {
    title: "Fullstack Development",
    icon: backend,
  },
  {
    title: "Digital Marketing",
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
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "vue",
    icon: vue,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: ".NET",
    icon: net,
  },
  {
    name: "express",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Digital Marketing",
    company_name: "Shukan Sales",
    icon: shukan,
    iconBg: "#E6DEDD",
    date: "May 2022 - Jun 2022",
    points: [
      "Worked on Google AdSense and Meta Ads to generate revenue for clients.",
      "Managed and optimized digital marketing campaigns to improve results.",
      "Developed and implemented digital marketing strategies to achieve business goals.",
      "Collaborated with other departments to ensure a cohesive digital marketing approach.",
    ],
  },
  {
    title: "Wordpress Developer",
    company_name: "Freelancing",
    icon: freelancing,
    iconBg: "#E6DEDD",
    date: "Jul 2022 - Oct 2022",
    points: [
      "Freelance WordPress developer with multiple clients. I have worked on a variety of WordPress projects for clients.",
      "Expertise in WordPress theme development and customization. I have a deep understanding of WordPress themes and how to customize them to meet the specific needs of my clients.",
      "Experience with WordPress plugins and extensions. I am familiar with a wide range of WordPress plugins and extensions, and I can use them to add new features and functionality to my clients' websites.",
      "Excellent communication and problem-solving skills. I am able to communicate effectively with my clients and understand their needs. I am also able to identify and solve problems quickly and efficiently.",
    ],
  },
  {
    title: "Fullstack Developer",
    company_name: "Webvision Infotech",
    icon: webvision,
    iconBg: "#E6DEDD",
    date: "Nov 2022 - May 2023",
    points: [
      "Worked on a variety of projects using React, ASP.NET (MVC, Web Forms, Core), and WordPress.",
      "Completed over 10 projects for clients, including small businesses, nonprofits, and large enterprises.",
      "Successfully delivered projects on time and perfaction.",
      "Developed strong communication and teamwork skills.",
    ],
  },
  {
    title: "Fullstack Developer",
    company_name: "Morpich Design",
    icon: morpich,
    iconBg: "#E6DEDD",
    date: "Jun 2023",
    points: [
      "Developed and maintained multiple web applications using Vue.js and Nuxt.js.",
      "Worked with a team of developers to deliver high-quality products on deadline.",
      "Successfully implemented a number of complex features, including user authentication, and other.",
      "Contributed to the company's culture of innovation and continuous learning.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Chirag proved me wrong.",
    name: "Sandip Koladiya",
    designation: "CEO",
    company: "Webvision Infotech",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Chirag does.",
    name: "Sumit Mania",
    designation: "CEO",
    company: "Shukan Sales",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Chirag optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Rashmi Yadav",
    designation: "CEO",
    company: "Nutboltz",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

const projects = [
  {
    name: "Agency Website",
    description:
      "A modern and responsive agency website built with React JS. A powerful and customizable agency website that can be used to showcase your work and attract new clients.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: agencyweb,
    source_code_link: "https://github.com/chiragpgauswami/agency-website",
  },
  {
    name: "TODO List",
    description:
      "A simple to-do list website that can be built in React JS, Vue.js or pure JS with Localstorage. A great way to learn the basics of these popular JavaScript frameworks.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vue",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
    ],
    image: todo,
    source_code_link: "https://github.com/chiragpgauswami/todo-list",
  },
  {
    name: "Login UI",
    description:
      "A simple and straightforward login UI website built with HTML, CSS, and JS. A user-friendly and responsive login UI website that can be used on any device.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
    ],
    image: loginui,
    source_code_link: "https://github.com/chiragpgauswami/login-ui",
  },
];

export { services, technologies, experiences, testimonials, projects };
