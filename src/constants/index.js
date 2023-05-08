import {
    backend,
    web,
    creator,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    elzian,
    food,
    fishDoc,
    antic,
    threejs,
    sql,
    java,
    spring,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Fullstack Developer",
      icon: creator,
    },
    {
      title: "Mobile Developer",
      icon: backend,
    },
    // {
    //   title: "Content Creator",
    //   icon: creator,
    // },
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
      name: "React JS",
      icon: reactjs,
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
      name: "SQL",
      icon: sql,
    },
    {
      name: "JAVA",
      icon: java,
    },
    {
      name: "Spring Boot",
      icon: spring,
    },
  
  ];
  
  const experiences = [
   
    {
      title: "Full stack Developer",
      company_name: "Elzian Agro",
      icon: elzian,
      iconBg: "#E6DEDD",
      date: "Aug 2022 - Apr 2023",
      points: [
        "Developing and maintaining web applications using MERN Stack and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
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
    // {
    //   testimonial:
    //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
    //   name: "Chris Brown",
    //   designation: "COO",
    //   company: "DEF Corp",
    //   image: "https://randomuser.me/api/portraits/men/5.jpg",
    // },
    // {
    //   testimonial:
    //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    //   name: "Lisa Wang",
    //   designation: "CTO",
    //   company: "456 Enterprises",
    //   image: "https://randomuser.me/api/portraits/women/6.jpg",
    // },
  ];
  
  const projects = [
    {
      name: "Food Ordering System",
      description:
        "Bakery Food Ordering System using C#.this software has a very easy-to-use user interface. Users must create an account before ordering food.",
      tags: [
        {
          name: "C#",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        // {
        //   name: "tailwind",
        //   color: "pink-text-gradient",
        // },
      ],
      image: food,
      source_code_link: "https://github.com/chamal-dissanayake/Food-Ordering-System-Windows-Application",
    },
    {
      name: "Fish Doc App",
      description:
        "This mobile application helps to detect the external appearance of fish diseases and recommend treatment. This project is developed using Flutter and Tflite.",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "Tflite",
          color: "green-text-gradient",
        },
        {
          name: "ui/ux",
          color: "pink-text-gradient",
        },
      ],
      image: fishDoc,
      source_code_link: "https://github.com/chamal-dissanayake/fish_diagnostic_app",
    },
    {
      name: "E-commerce web site",
      description:
        "An e - Commerce website that can be used for any eCommerce needs, it has been implemented as an Antique shop for a demonstration purpose.",
      tags: [
        {
          name: "PHP",
          color: "blue-text-gradient",
        },
        {
          name: "JS",
          color: "green-text-gradient",
        },
        {
          name: "Mysql",
          color: "pink-text-gradient",
        },
      ],
      image: antic,
      source_code_link: "https://github.com/chamal-dissanayake/E-Commerce-Web-Site-",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };