import React from "react";
import { Modal, Button } from "react-bootstrap";
import VerticaltimeLine from "./verticaltimeLine";
import "../sections/about/about.css";
const ModalComponent = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header style={{ backgroundColor: "#AA9FE4" }} closeButton>
        <Modal.Title>Experience Details</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: "#AA9FE4" }}>
        <VerticaltimeLine></VerticaltimeLine>
      </Modal.Body>
      <Modal.Footer style={{ backgroundColor: "#AA9FE4" }}>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalComponent;
