// import React from "react";
// import "./myskill.css";
// import data from "./data";

// const Myskill = () => {
//   return (
//     <section id="contact" data-aos="fade-up">
//       <h2>My KeySkills</h2>
//       <p>These are myskill that i have learned in journey</p>
//       <div className="container contact__container">
//         {data.map((title) => (
//           <img key={title.id} src={title.Image}></img>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Myskill;

import React from "react";
import "./myskill.css";
import data from "./data";
import Typewriter from "typewriter-effect";
const Myskill = () => {
  const Typewrittereffect = () => {
    // Return the Typewriter component here
    return (
      <Typewriter
        options={{
          strings: [
            "React",
            "Bootstrap",
            "Css",
            "Html",
            "JavaScript",
            "Node js",
            "Express js",
            "MongoDb",
            "Sql",
            "Ejs Template",
            "DSA",
            "JWT",
            "Bcrypt",
            "Axios",
            "Postman",
            "Github",
          ],
          autoStart: true,
          loop: true,
        }}
      />
    );
  };
  return (
    <section id="skill" data-aos="zoom-in">
      <h2>My KeySkills</h2>
      <p style={{ color: "green", fontWeight: "bold" }}>
        {" "}
        {Typewrittereffect()}
      </p>
      <div className="container contact__container">
        {data.map((title) => (
          <div className="flip-container shadow" key={title.id}>
            <img
              style={{
                boxShadow: "2px 2px 12px 5px black",
                borderRadius: "8px",
              }}
              src={title.Image}
              alt={title.title}
            />
            <div className="back">{title.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Myskill;
