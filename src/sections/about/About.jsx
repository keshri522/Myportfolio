import AboutImage from "../../assets/aboutpic.jpg";
import Cerficates from "../../assets/certificate.png";
import Cerficatepdf from "../../assets/pdf.pdf";
import CV from "../../assets/MyResume.pdf";
import { HiDownload } from "react-icons/hi";
import data from "./data"; // this is the data importing
import Card from "../../components/Card";
import "./about.css"; // this is style for this components only
import AOS from "aos"; // this is the package which gives us some loading style
import "aos/dist/aos.css"; // this is the css package which gives us more style
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    // we have use the style in this because once our page loads or mount then our useeffect will run
    AOS.init({ duration: 2000 });
  });
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={Cerficates} alt="About Image" />
          </div>
          <div className="ok">
            <button
              onClick={() => {
                window.open(
                  "https://certificates.almabetter.com/en/verify/52274678109268",
                  "_blank"
                );
              }}
              download
              className="btn primary"
            >
              View Certificate
            </button>
            <button
              onClick={() => {
                window.open(
                  "https://grow.almabetter.com/my-certificates",
                  "_blank"
                );
              }}
              download
              className="btn primary"
            >
              Show Certificates
            </button>
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {data.map((item) => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <p>
            Building projects my clients love have always been my passion. Being
            in the web development industry for over 3 years and serving more
            than 70 happy clients worldwide, I'm always motivated to do more!
          </p>
          <p>
            Hi, my name is Hajia Bintu from Accra, Ghana. I'm a full-stack web
            developer with a Bachelors degree in Computer Science. My top
            priority is to get your business online the right way, giving you
            industry-standard design and all the functionality you need to
            operate smoothly online. Get in touch today with the details of your
            project let's get started! Check out my resume below!
          </p>
          <a href={CV} download className="btn primary">
            Download CV <HiDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

// <section id="about" data-aos="fade-in">
//   <div className="container about__container">
//     <div className="about__left">
//       <div className="about__portrait">
//         <img src={Cerficates} alt="About Image" />
//         <div className="ok">
//           <button
//             onClick={() => {
//               window.open(
//                 "https://certificates.almabetter.com/en/verify/52274678109268",
//                 "_blank"
//               );
//             }}
//             download
//             className="btns primary"
//           >
//             View Certificate
//           </button>
//           <button
//             onClick={() => {
//               window.open(
//                 "https://grow.almabetter.com/my-certificates",
//                 "_blank"
//               );
//             }}
//             download
//             className="btns primary"
//           >
//             Show Certificates
//           </button>
//         </div>
//       </div>
//     </div>
//     <div className="about__right">
//       <h2>About Me</h2>
//       <div className="about__cards">
//         {data.map((item) => (
//           <Card key={item.id} className="about__card">
//             <span className="about__card-icon">{item.icon}</span>
//             <h5>{item.title}</h5>
//             <small>{item.desc}</small>
//           </Card>
//         ))}
//       </div>
//       <p>
//         Enthusiastic and results-driven MERN Stack Developer with a strong
//         foundation in web development and a passion for creating efficient,
//         scalable, and visually appealing applications. Proficient in
//         building dynamic and responsive web solutions using MongoDB,
//         Express.js, React, and Node.js. Eager to leverage my technical
//         skills and creativity to contribute to innovative projects and
//         collaborate with cross-functional teams.
//       </p>
//       <p>
//         Hi, my name is Rahul keshri from India. I'm a full-stack web
//         developer with a Bachelors degree in Science.Built and deployed
//         responsive and user-friendly websites for small businesses using the
//         MERN stack, resulting in increased online visibility and customer
//         engagement. Implemented data storage and retrieval functionalities
//         using MongoDB, ensuring smooth data management and scalability.
//         Collaborated closely with clients to gather requirements, provide
//         project updates, and deliver solutions tailored to their specific
//         needs.
//       </p>
//       <a href={CV} download className="btn primary">
//         Download CV <HiDownload />
//       </a>
//     </div>
//   </div>
// </section>
