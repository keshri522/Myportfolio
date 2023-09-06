import resumes from "../../assets/resumes.jpg";
import flashcard from "../../assets/flashcard.png";
import shopping from "../../assets/shopping.PNG";
import Image6 from "../../assets/project6.jpg";
import Image8 from "../../assets/project8.jpg";
import Capture from "../../assets/Capture.PNG";
import Youtube from "../../assets/subscriber.png";
import Movies from "../../assets/movies.PNG";
const data = [
  {
    id: 1,
    category: "frontend",
    image: resumes,
    title: "Resume Builder(frontend)",
    desc: "A resume builder application is a valuable tool designed to assist individuals in creating professional and visually appealing resumes or CVs. In today's competitive job market, having a well-crafted resume is crucial for making a positive first impression on potential employers. These applications streamline the resume creation process, providing users with templates, formatting options, and content suggestions that help highlight their skills, experiences, and qualifications effectively.",
    demo: "https://keshri522.github.io/ResumeBuilder/",
    github: "https://github.com/keshri522",
  },
  {
    id: 2,
    category: "frontend",
    image: flashcard,
    title: "FlashCard Generator (Frontend)",
    desc: "This is the flashcard Generator application which contains three pages.First page takes all the necessary data from the User.Second page also takes input and the third page show all the details in the last page.",
    demo: "https://keshri522.github.io/Flashcard/",
    github: "https://github.com/keshri522",
  },

  {
    id: 5,
    category: "frontend",
    image: Image6,
    title: "React Todo  (Frontend)",
    desc: "This is the Simple todo application create using React js. Which contains add todo delte todo pages.",
    demo: "https://keshri522.github.io/React-todo/",
    github: "https://github.com/keshri522",
  },
  {
    id: 6,
    category: "Full Stack ",
    image: shopping,
    title: "Shopping Website(Mern Stack)",
    desc: " E-commerce Platform: A Seamless Shopping Experience. Welcome to our innovative e-commerce website that offers a seamless shopping experience to all users. Our platform combines user-friendly design with advanced features to provide a convenient and efficient way to shop online. Here's a glimpse of what you can expect:",
    demo: "https://rahulecommercewebsite.netlify.app",
    github: "https://github.com/keshri522",
  },
  {
    id: 7,
    category: "backend",
    image: Image8,
    title: "Express Ejs Todo (Backend)",
    desc: "This is todo applicaton in which i used Express Template engine to buikld this todo.I have not deploy the frontend it has multiple routes like /new new item will create random routes.",
    demo: "https://github.com/keshri522/Express-Ejs-Todo",
    github: "https://github.com/keshri522",
  },

  {
    id: 8,
    category: "Full Stack ",
    image: Capture,
    title: "Chat Application(Mern Stack)",
    desc: "The chat application is a real-time messaging platform that allows users to communicate with each other instantly. It utilizes modern web technologies to provide a seamless and secure user experience.Socket.IO is employed for enabling real-time communication between clients and the server. It establishes a bidirectional connection that allows instant message updates without requiring constant requests to the server.By integrating React, Socket.IO, bcrypt, JSON Web Tokens, and Chakra UI, this chat application offers a responsive, real-time, and secure messaging experience for users.",
    demo: "https://keshri522.github.io/Chat-App-Mern/#/",
    github: "https://github.com/keshri522",
  },
  {
    id: 9,
    category: "backend",
    image: Youtube,
    title: "Youtube Subscriber(backend)",
    desc: "This is the youtube Subscriber project which contains three endpoint.First api will give all the subscriber which in the mongo db.This is Just Replica of Youtube Projects",
    demo: "https://github.com/keshri522/YoutubeSubscriber",
    github: "https://github.com/keshri522",
  },
  {
    id: 10,
    category: "Frontend",
    image: Movies,
    title: "Showing Movies Detais(backend)",
    desc: "This is simple frontend UI project in which have showed all the movies Details and add the functionlity of Searching.In this project I used Reract and debouncing in the Input Button and also used Redux toolkit for state management of Input button",
    demo: "https://showmoviesdetails.netlify.app/",
    github: "https://github.com/keshri522/Show-Movies",
  },
];

export default data;
