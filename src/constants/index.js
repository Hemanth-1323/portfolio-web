import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/pic13.jpeg";
import quiz from "../assets/quiz.png";


export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Dec 2023 - Jan 2024",
    role: "Software Engineer Intern",
    company: "TEAL (Titan Engineering & Automation Limited)",
    description: `Managed front-end development projects, directing the 
design and execution of various tasks.Employed React.js, HTML, CSS, and JavaScript to 
optimize user interfaces and elevate overall web 
experiences.`,
    technologies: ["HTML", "CSS", "Javascript", "React.js"],
  },
  {
    year: "Sep 2023 - Oct 2023",
    role: "Web Development Intern",
    company: "CodSoft",
    description: `Worked on front end development,designed and executed 
various projects and tasks. Utilized HTML, CSS, and JavaScript to enhance 
user interfaces and overall web experiences.
`,
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export const PROJECTS = [
    {
    title: "React Quiz",
    image: quiz,
    link: "https://react-quiz-ukmq.vercel.app/",
    description:
      "Designed and developed a dynamic React quiz app, leveraging a JSON server fake API for real-time data interactions. Implemented responsive UI components ensuring a seamless user experience.",
    technologies: ["React.js", "CSS", "HTML"],
  },
  {
    title: "Theme Park Website",
    image: project1,
    link: "https://hemanth-1323.github.io/html-themepark/",
    description:
      " Designed and developed a Theme Park Website using HTML, CSS and JavaScript. CSS employed to control the visual representation of the webpage. JavaScript employed to add interactivity.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "GPT 3 Open AI - React",
    image: project2,
    link: "https://hemanth-1323.github.io/GPT3-Open-Ai-react/",
    description:
      "Crafted a responsive web application using React.js, HTML, and CSS. Meticulously designed and implemented an intuitive user interface for optimal user experience.Demonstrated proficiency in leveraging these technologies to deliver a visually appealing and functional project.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "React", "TailwindCSS", "Framer Motion"],
  },
];

export const CONTACT = {
  address: "Titan Township, Mathigiri, Hosur, 635110",
  phoneNo: "+91 9629524095",
  email: "hemanthdhamodharan1323@gmail.com",
};
