import { Fragment } from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import { useModalContext } from "../context/modal-context";
import "./modal.css";

const Modal = ({ children, className }) => {
  console.log(children, className);
  const { showModal, closeModalHandler } = useModalContext();

  return (
    <Fragment>
      {showModal &&
        ReactDOM.createPortal(
          <>
            <section id="backdrop" onClick={closeModalHandler}></section>
            <Card className={className}>{children}</Card>{" "}
            {/* Pass className to Card */}
          </>,
          document.querySelector("#overlays")
        )}
    </Fragment>
  );
};

export default Modal;
