import project1 from "../assets/projects/computershop.gif";
import project2 from "../assets/projects/stuM.png";
import project3 from "../assets/projects/gym.png";
import project4 from "../assets/projects/billApp.png";

export const HERO_CONTENT = `I am a passionate full-stack developer with a knack for crafting robust and scalable web applications.  I have honed my skills in front-end development using React and back-end technologies like Java and Spring Boot. I specialize in building efficient and secure applications powered by MySQL databases, utilizing GitHub for version control and IntelliJ IDEA as my primary development environment. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including java, SpringBoot, HTML, CSS, react, and MySQL.I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Oct 2020 - April 2021",
    role: "Web Developer",
    company: "DilinaBiz (Pvt)Ltd.",
    description: `I have hands-on experience in website development and updates, regularly testing IT
systems and technologies, and providing support for software administration tasks, ensuring
smooth operations and optimal system functionality.`,
    technologies: ["WordPress", "GTmetrix", "Wordfence", "Yoast SEO"],
  }
  // ,
  // {
  //   year: "2022 - 2023",
  //   role: "Frontend Developer",
  //   company: "Adobe",
  //   description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
  //   technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  // },
  // {
  //   year: "2021 - 2022",
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //   technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  // },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website for PC Shop",
    image: project1,
    description:
      "I hava developed a comprehensive system for a computer shop using Java, Spring Boot, and React. This system enables purchasing of items, managing inventory, and generating PDF bills for customer transactions. Additionally, Spring Security is integrated to provide authentication and authorization, ensuring secure access and management of sensitive data within the system.",
    technologies: ["Java", "SpringBoot", "React", "MySQL"],
  },
  {
    title: "Student Managment System",
    image: project2,
    description:
      "I have developed a student management system using Java and Spring, employing a layered architecture for efficient data flow. This architecture separates the system into different layers (such as presentation, service, and data access), ensuring clear responsibility and easy maintainability of the codebase. This structured approach enables better scalability and testing while keeping the logic for handling student data organized and isolated in each layer.",
    technologies: ["Java", "SpringBoot", "Boostrap", "Thymeleaf"],
  },
  {
    title: "Web Site for GYM",
    image: project3,
    description:
      "I have designed a blog site for a gym using HTML and CSS. This site likely includes structured content related to gym activities, fitness tips, and possibly class schedules, all styled with CSS for an engaging and visually appealing user experience.",
    technologies: ["HTML", "CSS", "Boostrap"],
  },
  {
    title: "Bill Calculator App",
    image: project4,
    description:
      "I have developed an electricity bill calculation system using Java in Android Studio. The system is designed to calculate the required voltage for different electric devices and generate accurate bills based on their usage. This application provides an efficient way for users to estimate their electricity costs by considering various devices and their individual energy consumption.",
    technologies: ["java", "android Studio"],
  },
];

export const CONTACT = {
  address: "Gampaha, Western, Sri Lanka",
  phoneNo: "+94 71 51 56 233",
  email: "sasikadilum40@gmail.com",
};
