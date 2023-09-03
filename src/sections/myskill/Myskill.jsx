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

const Myskill = () => {
  return (
    <section id="contact" data-aos="zoom-in">
      <h2>My KeySkills</h2>
      <p>These are my skills that I have learned on my journey</p>
      <div className="container contact__container">
        {data.map((title) => (
          <div className="flip-container" key={title.id}>
            <img src={title.Image} alt={title.title} />
            <div className="back">{title.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Myskill;
