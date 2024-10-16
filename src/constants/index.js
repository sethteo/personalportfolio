import {
    data,
    partnership,
    idea,
    statistics,
    learning,

    swimming,
    gymming,
    cooking,
    experience,

    nus,
    acs,
    dso,
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
      title: "Software Engineer",
      icon: data,
    },
    {
      title: "Team Player",
      icon: partnership,
    },
    {
      title: "Quick Thinker",
      icon: learning,
    },
    {
      title: "Problem Solver",
      icon: idea,
    },
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
      title: "Bachelor in Computing, Computer Science",
      company_name: "National University of Singapore",
      icon: nus,
      iconBg: "#383E56",
      date: "Aug 2022 -  Aug 2026",
      points: [
        "GPA: First Class Honours",
        "Teaching Assistant for CS1010J Programming Methodology I AY23/24, AY24/25",
        "Teaching Assistant for CS2040 Data Structures & Algorithms AY23/24, AY24/25",
      ],
    },

    {
      title: "Software Engineer Intern",
      company_name: "DSO National Laboratories",
      icon: dso,
      iconBg: "#383E56",
      date: "May 2024 -  Aug 2024",
      points: [
        "Developed and deployed a conversational AI chatbot utilising Azure services to be eventually utilised by over 500 internal employees.",
        "Implemented Retrival Augemented Generation (RAG) to enable the bot to extract information directly from internal company documents, facilitating real-time data retrieval.",
        "Integrated logging into a private database to support error resolution and maintain conversation history.",
        "Engineered a scalable deployment pipeline to allow for seemless future deployments and updates.",
        "Documented the development process and codebase to facilitate future development and enhancements",
      ],
    },
  ];
  
  const testimonials = [
    // {
    //   testimonial:
    //     "",
    //   name: "",
    //   designation: "",
    //   company: "",
    //   image: "",
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
        "Developed and deployed a telegram bot which helps users track the prices of their groceries. Features of the telegram bot include simple prompts, detailed step by step instructions, price against time plot of your items and daily price monitoring.",
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

    // {
    //   name: "BTT/FTT Quiz App",
    //   description:
    //     "Gamified quiz website developed to practice both my web development and my Basic Theory Test. The website houses over 300 questions ranging from BTT to FTT as well as a page which answers FAQ beginners might face whilst learning driving.",
    //   tags: [
    //     {
    //       name: "javascript",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "html",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "pink-text-gradient",
    //     },
    //     {
    //       name: "bootstrap",
    //       color: "orange-text-gradient"
    //     },
    //   ],
    //   image: btt,
    //   source_code_link: "https://github.com/sethteo/btt_quiz",
    //   video_link: '',
    // },
  ];
  
  export { services, experiences, testimonials, projects, hobbies };