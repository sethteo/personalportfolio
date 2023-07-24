import { AlwaysStencilFunc } from "three";
import {
    data,
    partnership,
    idea,
    statistics,

    swimming,
    gymming,
    cooking,
    experience,

    java,
    javascript,
    html,
    css,
    reactjs,
    nodejs,
    mongodb,
    git,
    python,
    mysql,

    nus,
    acs,
    orbital,
    eatalreadynot,
    btt,
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
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Aspiring Web Developer",
      icon: data,
    },
    {
      title: "Team Player",
      icon: partnership,
    },
    {
      title: "Attention To Detail",
      icon: statistics,
    },
    {
      title: "Problem Solving",
      icon: idea,
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
      name: "Java",
      icon: java,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "React JS",
      icon: reactjs,
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
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "git",
      icon: git,
    }
  ];
  
  const experiences = [
    {
      title: "A Levels",
      company_name: "Anglo Chinese Junior College",
      icon: acs,
      iconBg: "#383E56",
      date: "Jan 2018 - Oct 2019",
      points: [
        "Attained distinctions in",
        "H2 Mathematics",
        "H1 Economics",
        "H1 General Paper",
        "H1 Project Work",
      ],
    },
    {
      title: "Bachelor in Computing",
      company_name: "National University of Singapore",
      icon: nus,
      iconBg: "#383E56",
      date: "Aug 2022 -  Aug 2026",
      points: [
        "Current CGPA: 4.69",
        "Notable modules taken:",
        "CS2030 Programming Methodology II",
        "BT2102 Data Management and Visualisation",
        "CS1010J Programming Methodology I",
        "BT1101 Introduction to Business Analytics",
      ],
    },
  ];
  
  const testimonials = [
    // {
    //   testimonial:
    //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    //   name: "Sara Lee",
    //   designation: "CFO",
    //   company: "Acme Co",
    //   image: "https://randomuser.me/api/portraits/women/4.jpg",
    // },
  ];
  
  const hobbies = [
    {
      title: "Swimming",
      icon: swimming,
    },
    {
      title: "Gymming",
      icon: gymming,
    },
    {
      title: "Cooking",
      icon: cooking,
    },
    {
      title: "Adventures",
      icon: experience,
    },
  ]
  const projects = [
    {
      name: "AlertUs",
      description:
        "My NUS Orbital project, a telegram bot which helps users track the prices of their groceries. Features of the telegram bot include simple prompts, detailed step by step instructions, price against time plot of your items and daily price monitoring.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "react",
          color: "pink-text-gradient",
        },
        {
          name: "telegram",
          color: "orange-text-gradient"
        },
      ],
      image: orbital,
      source_code_link: "https://github.com/sethteo/Orbital23-AlertUs",
      video_link: 'https://youtu.be/HoaIgLHGnmI',
    },
    {
      name: "EatAlreadyNot",
      description:
        "Personal project inspired by my love for food as well as development. The website houses food recommendations where users can post locations or leave reviews on posted places. The website features includes full CRUD capabilities, an interactive map, user registration and user authentication/authorisation."  ,
      tags: [
        {
          name: "node.js",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
        {
          name: "expressjs",
          color: "orange-text-gradient"
        },
      ],
      image: eatalreadynot,
      source_code_link: "https://github.com/sethteo/eatalreadynot",
      video_link: 'https://www.youtube.com/watch?v=Po_uEgnDDRo',
    },
    {
      name: "BTT/FTT Quiz App",
      description:
        "Gamified quiz website developed to practice both my web development and my Basic Theory Test. The website houses over 300 questions ranging from BTT to FTT as well as a page which answers FAQ beginners might face whilst learning driving.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "bootstrap",
          color: "orange-text-gradient"
        },
      ],
      image: btt,
      source_code_link: "https://github.com/sethteo/btt_quiz",
      video_link: '',
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects, hobbies };