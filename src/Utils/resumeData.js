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
import MRI from "../Assets/images/MRI.jpg";

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
    "Hi there! I'm Shawn Byrne, a passionate Biomedical Engineer specializing in technology and data-driven solutions. With a diverse skillset encompassing Python, Django, React, JavaScript, HTML, and SQL, I possess a comprehensive understanding of both the front-end and back-end aspects of web development. My expertise extends to everything in between, and I'm always eager to explore the latest tools and methodologies that power the modern healthcare landscape.\n\n Throughout my career, I've been driven by the immense potential of technology to revolutionize patient care. My work revolves around designing and implementing innovative solutions to complex challenges that clinicians and medical practitioners face daily. I thrive in collaborative environments where I can leverage my excellent communication skills to bridge the gap between medical expertise and technical prowess, creating holistic and impactful solutions. Every project I undertake is guided by a sense of purpose and responsibility towards improving healthcare outcomes. \n \n If you're looking for a skilled clinical engineer to enhance your healthcare projects or want to discuss the latest advancements in technology and healthcare, I'm always open to new opportunities and collaborations. Let's connect and make a positive impact together! Thank you for visiting my portfolio, and I look forward to hearing from you soon.",

  experiences: [
    {
      title: "North Texas VHA - Clinical Engineer",
      date: "2021-Present",
      description:
        "While studying for my master's degree, I worked full-time at the North Texas VHA. Many of my projects in my portfolio are related to this work experience.",
    },
    {
      title:
        "University of Maryland - Innovation Methodologies, Lab Technician",
      date: "2020-2021",
      description:
        "Experienced in conducting various laboratory experiments and assisting researchers in the pursuit of academic excellence. Proficient in handling advanced laboratory equipment, maintaining lab cleanliness, and adhering to strict safety protocols. ",
    },
    {
      title: "Personal Projects",
      date: "2016-Present",
      description:
        "Many of these projects are listed in my portfolio, including Biomechanical, SolidWorks, and Game development projects. Check them out if you're curious!",
    },
  ],
  education: [
    {
      title: "M.S. Biomedical Engineering",
      date: "2021-2023",
      description: "University of Connecticut - Storrs",
    },
    {
      title: "B.S. Biomedical Engineering",
      date: "2016-2021",
      description: "University of Maryland - College Park",
    },
    {
      title: "Professional Management Training",
      date: "2021-2022",
      description:
        "A LinkedIn training course for developing Project Management skills",
    },
  ],

  services: [
    {
      title: "Python",
      description:
        "I have been coding with Python for 3 years. Check out my projects in the Portfolio tab!",
      icon: <WebOutlined />,
    },
    {
      title: "ReactJS",
      description:
        "I have been coding with React for 1 year. Check out my projects in the Portfolio tab!",
      icon: <WebOutlined />,
    },
    {
      title: "SQL",
      description:
        "I have been coding with SQL, MySQL, and SQLite for 3 years. Alot of my work experience is relative to SQL.",
      icon: <WebOutlined />,
    },
    {
      title: "Web Development",
      description: "I have 1 year of Web Development experience",
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
      description: ["MySQL", "Apache", "Netlify", "Heroku"],
    },
  ],

  biomed_skills: [
    {
      title: "PROJECT MANAGEMENT",
      description: [
        "Communication",
        "Collaboration",
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
      title: "My Resume Website",
      caption:
        "I decided to make a website to track my work experience due to it being easier than updating a resume every once in a while.",
      description:
        "The project included many usages of ReactJS, Netlify, and basic Front-End/Back-End development skills.",
      links: [
        { link: "https://www.shawnbyrne.org", icon: <GoogleIcon /> },
        {
          link: "https://www.shawnbyrne.org/Portfolio",
          icon: <ComputerTwoToneIcon />,
        },
      ],
    },
    {
      tag: "Python",
      image: PythonImage,
      title: "DaRE: Telehealth Physical Therapist",
      caption: "Utilized Python movement capture for remote Physical Therapy",
      description:
        "Motion-Correcting Physical Therapy Device \n\n In this project, I leveraged the power of Python movement detection libraries, OpenPose and Cubemos, to design and implement a revolutionary miniature device for physical therapy applications. The primary objective was to create a portable and efficient tool that captured patients' movements during physical therapy sessions, providing real-time feedback and precise corrections.\n\nUsing OpenPose and Cubemos libraries, as well as the LiDAR 515 Camera, I developed an advanced system capable of accurately tracking and analyzing human body keypoints and skeletal structures from live video streams. The device seamlessly integrated with standard cameras, making it easily accessible and non-intrusive for patients undergoing physical therapy.\n\nThe key functionalities of the device included:\n\nReal-time Movement Detection: The device instantaneously detected and identified patients' joint angles, posture, and movement patterns in real-time, creating a comprehensive analysis of their motions during therapy exercises.\n\nCustomizable Corrective Feedback: Through sophisticated algorithms, the device assessed the correctness of patients' movements and provided personalized and actionable feedback. This allowed patients to make immediate adjustments and ensure they performed exercises with optimal form, minimizing the risk of injury and maximizing the therapeutic benefits.\n\nData Logging and Progress Tracking: The system efficiently stored patients' movement data over time, allowing for progress tracking and long-term assessment of their physical therapy journey. The collected data also facilitated therapists in adjusting treatment plans based on measurable improvements.",
      links: [
        {
          link: "https://github.com/ShawnByrne-7/CAPPERS-Final-Project",
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
      title: "Django Project - Still in Progress",
      caption: "Building a Web Application with Django",
      description:
        "In this project, I am developing a dynamic and user-friendly web application powered by Django, dedicated to revolutionizing the tracking and managing of recipes. My end-goal is to create a one-stop solution for culinary enthusiasts, home cooks, and professional chefs alike, enabling them to organize, explore, and share their favorite recipes seamlessly.",
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
      image: MRI,
      title: "Fort Worth - MRI Addition and Replacement",
      caption: "Managed multiple large-scale MRI system implementations",
      description:
        "The Fort Worth VHA Clinic embarked on a transformative project to implement a state-of-the-art Magnetic Resonance Imaging (MRI) facility, bolstering its medical services and enhancing patient care. This ambitious endeavor involved meticulous planning, coordination, and project management to ensure seamless integration of the MRI system into the clinic's existing infrastructure. The techniques I applied during this process included a Needs Assessment and Planning phase, interviewing vendors, staff-training and education, and regulatory copmliance checks.",
      links: [
        {
          link: "https://www.linkedin.com/in/shawn-byrne-a311a1171/",
          icon: <LinkedInIcon />,
        },
        {
          link: "https://www.siemens-healthineers.com/en-us/magnetic-resonance-imaging/technologies-and-innovations/mri-patient-experience",
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
