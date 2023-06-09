import { AlwaysStencilFunc } from "three";
import {
    mobile,
    backend,
    creator,
    web,

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
    jobit,
    tripguide,
    acs,
    orbital,
    eatalreadynot

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
      title: "Aspiring Web Developer",
      icon: web,
    },
    {
      title: "Team Player",
      icon: mobile,
    },
    {
      title: "Results Driven",
      icon: backend,
    },
    {
      title: "Problem Solver",
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
        "Current CGPA: 4.6875",
        "Notable modules taken:",
        "CS2030 Programming Methodology II | Grade A-",
        "BT2102 Data Management and Visualisation | Grade A-",
        "CS1010J Programming Methodology I | Grade A-",
        "BT1101 Introduction to Business Analytics | Grade A-",
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
  
  const projects = [
    {
      name: "Orbital Apollo 11",
      description:
        "A telegram bot which helps users track the prices of their groceries as well as full integration with web platform.",
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
      ],
      image: orbital,
      source_code_link: "https://github.com/",
    },
    {
      name: "EatAlreadyNot",
      description:
        "Personal side project which houses food recommendations from users. Website features full CRUD, responsive images, interactive map"  ,
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
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: eatalreadynot,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };