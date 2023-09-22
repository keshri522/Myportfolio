import Logo from "../../assets/logo.jpg";
import { useState } from "react";
import FeedbackModal from "../../Modal/modals";
import data from "./data";
import { IoIosColorPalette } from "react-icons/io";
import "./navbar.css";
import Mypic from "../../assets/aboutpic.jpg";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  // this is the navbar which contain all the navbars items in the data which improts
  return (
    <nav>
      <div className="container nav__container">
        {/* <a href="index.html" className="nav__logo">
          <img src={Mypic} alt="Logo" />
        </a> */}
        <label style={{ cursor: "pointer", color: "white" }}>
          <input
            type="button"
            style={{ display: "none" }}
            onClick={handleShowModal}
          />
          <FontAwesomeIcon icon={faMessage}></FontAwesomeIcon>
        </label>

        <FeedbackModal showModal={showModal} handleClose={handleCloseModal} />
        <ul className="nav__menu">
          {data.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
        {/* <button id="theme__icon">
          <IoIosColorPalette />
        </button> */}
      </div>
    </nav>
  );
};

export default Navbar;
