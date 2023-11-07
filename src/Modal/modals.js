import React, { useState } from "react";
import { toast } from "react-toastify";
import Spinner from "../Spinner/Spinner";
import "../Spinner/spinner.css";
const FeedbackModal = (props) => {
  const [show, Setshow] = useState(false);
  const { showModal, handleClose } = props; // Destructure props to access showModal and handleClose
  const [values, Setvalues] = useState({
    name: "",
    email: "",
    textarea: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // clear the state;
    setTimeout(() => {
      Setvalues({
        name: "",
        email: "",
        textarea: "",
      });
    }, 2000);
    // Add form submission logic here
  };
  const handlechange = (e) => {
    const { name, value } = e.target; // Destructure name and value from e.target

    Setvalues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <div
        className={`modal ${showModal ? "show" : ""}`}
        tabIndex="-1"
        role="dialog"
        style={{ display: showModal ? "block" : "none" }}
      >
        <div className="modal-dialog" role="document">
          <div style={{ backgroundColor: "silver" }} className="modal-content">
            <form onSubmit={handleSubmit}>
              <div className="modal-header">
                <h5 className="modal-title">Your Valuable Feedback</h5>
                {/* <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={handleClose}
                >
                  <span aria-hidden="true">&times;</span>x
                </button> */}
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handlechange}
                    className="form-control"
                    placeholder="Your Name"
                    required
                    style={{
                      color: "black",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="">Email</label>
                  <input
                    type="text"
                    name="email"
                    value={values.email}
                    onChange={handlechange}
                    className="form-control"
                    placeholder="Your Email"
                    required
                    style={{
                      color: "black",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="feedback">Feedback:</label>

                  <textarea
                    className="form-control"
                    id="feedback"
                    rows="3"
                    name="textarea"
                    value={values.textarea}
                    required
                    onChange={handlechange}
                    placeholder="What i need to Improve.Please give your valuable feedback"
                    style={{
                      color: "black",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  ></textarea>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                  onClick={handleClose}
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    // added contidnally showing of spinner based on the state
                    Setshow(true);
                    setTimeout(() => {
                      toast.success("Thankyou for your valuable feedback");
                      handleClose();
                      Setshow(false);
                    }, 2000);
                  }}
                  type="submit"
                  className="btn btn-primary"
                  disabled={!values.email || !values.name || !values.textarea}
                >
                  {show ? <Spinner></Spinner> : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedbackModal;
