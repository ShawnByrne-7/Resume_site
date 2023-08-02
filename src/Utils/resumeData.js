import React from "react";
import FacebookIcon from "@mui/icons-material/FacebookSharp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AssignmentOutlined from "@mui/icons-material/AssignmentOutlined";
import WebOutlined from "@mui/icons-material/WebOutlined";
import ComputerTwoToneIcon from "@mui/icons-material/ComputerTwoTone";
import GoogleIcon from "@mui/icons-material/Google";
import ReactImage from "../Assets/images/react.svg";
import PythonImage from "../Assets/images/Python.jpg";
import DisplayImage from "../Assets/images/displayimage.jpg";

const resumeData = {
  name: "Shawn Byrne",
  title: "Biomedical Engineer",
  birthday: "14th May 1998",
  email: "shawnbyrne77@gmail.com",
  phone: "240-434-2198",

  socials: {
    facebook: {
      link: "https://www.facebook.com",
      text: "Facebook Page",
      icon: <FacebookIcon />,
    },
    linkedIn: {
      link: "https://www.linkedin.com/in/shawn-byrne-a311a1171/",
      text: "LinkedIn Profile",
      icon: <LinkedInIcon />,
    },
    GitHub: {
      link: "https://github.com/ShawnByrne-7?tab=repositories",
      text: "GitHub Repositories",
      icon: <GitHubIcon />,
    },
  },
  about:
    "Hi there! I'm Shawn Byrne, a passionate Clinical Engineer specializing in technology and data-driven solutions. With a diverse skillset encompassing Python, Django, React, JavaScript, HTML, and SQL, I possess a comprehensive understanding of both the front-end and back-end aspects of web development. My expertise extends to everything in between, and I'm always eager to explore the latest tools and methodologies that power the modern healthcare landscape.\n\n Throughout my career, I've been driven by the immense potential of technology to revolutionize patient care. My work revolves around designing and implementing innovative solutions to complex challenges that clinicians and medical practitioners face daily. I thrive in collaborative environments where I can leverage my excellent communication skills to bridge the gap between medical expertise and technical prowess, creating holistic and impactful solutions. Every project I undertake is guided by a sense of purpose and responsibility towards improving healthcare outcomes. \n \n If you're looking for a skilled clinical engineer to enhance your healthcare projects or want to discuss the latest advancements in technology and healthcare, I'm always open to new opportunities and collaborations. Let's connect and make a positive impact together! Thank you for visiting my portfolio, and I look forward to hearing from you soon.",

  experiences: [
    {
      title: "Work1",
      date: "2018-Present",
      description: "dhdhfhd",
    },
    {
      title: "Work2",
      date: "2020-2022",
      description: "dhdhfhd",
    },
    {
      title: "Work3",
      date: "Aug 2016-Sept 2018",
      description: "dhdhfhd",
    },
  ],
  education: [
    {
      title: "Education1",
      date: "2016-2021",
      description: "dhdhfhd",
    },
    {
      title: "Education2",
      date: "2021-2023",
      description: "dhdhfhd",
    },
    {
      title: "Maybe3",
      date: "Aug 2016-Sept 2018",
      description: "dhdhfhd",
    },
  ],

  services: [
    {
      title: "Python",
      description: "I have been coding with Python for 3 years",
      icon: <WebOutlined />,
    },
    {
      title: "ReactJS",
      description: "I have been coding with React for 1 year",
      icon: <WebOutlined />,
    },
    {
      title: "SQL",
      description: "I have been coding with SQL, MySQL, and SQLite for 3 years",
      icon: <WebOutlined />,
    },
    {
      title: "Web Development",
      description: "I have 2 years of Web Development experience",
      icon: <AssignmentOutlined />,
    },
  ],

  coding_skills: [
    {
      title: "FRONT-END",
      description: ["ReactJS", "JavaScript", "Material UI", "Bootstrap"],
    },
    {
      title: "BACK-END",
      description: ["NodeJS", "Python", "Java"],
    },
    {
      title: "DATABASES",
      description: ["MySQL", "Apache", "Heroku"],
    },
  ],

  biomed_skills: [
    {
      title: "PROJECT MANAGEMENT",
      description: [
        "Communication/Collaboration",
        "Project Scheduling/Planning",
        "Risk Management",
      ],
    },
    {
      title: "MEDICAL IMAGING",
      description: ["DICOM", "MatLab", "OpenCV", "Cubemos"],
    },
    {
      title: "SOFTWARE AND PROGRAMMING",
      description: [
        "Intermediate in Programming Languages",
        "IDE Usage/Knowledge",
        "VCS (GitHub)",
      ],
    },
    {
      title: "BIOMECHANICS",
      description: ["OpenSim", "ANSYS", "Vicon", "Cubemos"],
    },
  ],

  projects: [
    {
      tag: "React",
      image: ReactImage,
      title: "Project 1",
      caption: "A short description",
      description: "This is my project description. Please fill it in",
      links: [
        { link: "https://www.gooogle.com", icon: <GoogleIcon /> },
        { link: "https://www.gooogle.com", icon: <ComputerTwoToneIcon /> },
      ],
    },
    {
      tag: "Python",
      image: PythonImage,
      title: "Project 1",
      caption: "A short description",
      description: "This is my project description. Please fill it in",
      links: [
        {
          link: "https://github.com/ShawnByrne-7?tab=repositories",
          icon: <GitHubIcon />,
        },
        {
          link: "https://github.com/ShawnByrne-7?tab=repositories",
          icon: <ComputerTwoToneIcon />,
        },
      ],
    },
    {
      tag: "Python",
      image: PythonImage,
      title: "Project 1",
      caption: "A short description",
      description: "This is my project description. Please fill it in",
      links: [
        {
          link: "https://github.com/ShawnByrne-7?tab=repositories",
          icon: <GitHubIcon />,
        },
        {
          link: "https://github.com/ShawnByrne-7?tab=repositories",
          icon: <ComputerTwoToneIcon />,
        },
      ],
    },
    {
      tag: "React",
      image: ReactImage,
      title: "Project 1",
      caption: "A short description",
      description: "This is my project description. Please fill it in",
      links: [
        {
          link: "https://github.com/ShawnByrne-7?tab=repositories",
          icon: <GitHubIcon />,
        },
        {
          link: "https://github.com/ShawnByrne-7?tab=repositories",
          icon: <ComputerTwoToneIcon />,
        },
      ],
    },
    {
      tag: "Project Management",
      image: DisplayImage,
      title: "Project 1",
      caption: "A short description",
      description: "This is my project description. Please fill it in",
      links: [
        { link: "https://www.gooogle.com", icon: <GoogleIcon /> },
        { link: "https://www.gooogle.com", icon: <ComputerTwoToneIcon /> },
      ],
    },
  ],
};

export default resumeData;
