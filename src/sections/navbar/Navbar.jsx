// import Logo from "../../assets/logo.jpg";
// import { useState } from "react";
// import FeedbackModal from "../../Modal/modals";
// import data from "./data";
// import { IoIosColorPalette } from "react-icons/io";
// import "./navbar.css";
// import Mypic from "../../assets/aboutpic.jpg";
// import { faMessage } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// const Navbar = () => {
//   const [showModal, setShowModal] = useState(false);

//   const handleShowModal = () => {
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };
//   // this is the navbar which contain all the navbars items in the data which improts
//   return (
//     <nav>
//       <div className="container nav__container">
//         <label style={{ cursor: "pointer", color: "white" }}>
//           <input
//             type="button"
//             style={{ display: "none" }}
//             onClick={handleShowModal}
//           />
//           <FontAwesomeIcon icon={faMessage}></FontAwesomeIcon>
//         </label>

//         <FeedbackModal showModal={showModal} handleClose={handleCloseModal} />
//         <ul className="nav__menu">
//           {data.map((item) => (
//             <li key={item.id}>
//               <a href={item.link}>{item.title}</a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from "react";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FeedbackModal from "../../Modal/modals";
import data from "./data";
import "./navbar.css";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav>
      <div className="container nav__container">
        <label style={{ cursor: "pointer", color: "white" }}>
          <input
            type="button"
            style={{ display: "none" }}
            onClick={handleShowModal}
          />
          <FontAwesomeIcon icon={faMessage}></FontAwesomeIcon>
        </label>

        <FeedbackModal showModal={showModal} handleClose={handleCloseModal} />

        {/* Progress bar at the top */}
        <div
          className="scroll-progress"
          style={{ width: `${scrollProgress}%` }}
        />

        <ul className="nav__menu">
          {data.map((item) => (
            <li key={item.id}>
              <a className="animation" href={item.link}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
