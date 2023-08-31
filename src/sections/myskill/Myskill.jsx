import React from "react";
import "./myskill.css";
import data from "./data";

const Myskill = () => {
  return (
    <section id="contact" data-aos="fade-up">
      <h2>My KeySkills</h2>
      <p>These are myskill that i have learned in journey</p>
      <div className="container contact__container">
        {data.map((title) => (
          <img key={title.id} src={title.Image}></img>
        ))}
      </div>
    </section>
  );
};

export default Myskill;
