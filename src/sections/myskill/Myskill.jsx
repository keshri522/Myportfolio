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
    <>
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
      {/* for the soft skill i have added this */}
      <div className="center">
        <h2>Soft Skills</h2>
      </div>
      <div className="soft_skill">
        <div className="soft first1">
          <img
            className="images"
            src="https://kunalmehra075.github.io/Images/techstack/Smolicons/softskills/remotework.svg"
            alt="remoteimages"
          />
          <h4>Remote work-collaboration</h4>
        </div>
        <div className="soft first2">
          <img
            className="images"
            src="https://kunalmehra075.github.io/Images/techstack/Smolicons/softskills/teamwork.svg"
            alt=""
          />
          <h4>Team Work</h4>
        </div>
        <div className="soft first3">
          <img
            className="images"
            src="https://kunalmehra075.github.io/Images/techstack/Smolicons/softskills/leadership-svgrepo-com.svg"
            alt=""
          />
          <h4>LeaderShip</h4>
        </div>
        <div className="soft first4">
          <img
            className="images"
            src="https://kunalmehra075.github.io/Images/techstack/Smolicons/softskills/problemsolving.svg"
            alt=""
          />
          <h4>Problem Solving</h4>
        </div>
        <div className="soft first5">
          <img
            className="images"
            src="https://kunalmehra075.github.io/Images/techstack/Smolicons/softskills/time-management.svg"
            alt=""
          />
          <h4>Time Management</h4>
        </div>
      </div>
    </>
  );
};

export default Myskill;
