import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import img from "../assets/eva_arrow-ios-back-fill.svg";


const EditTask = () => {
  useEffect(() => {
    document.title = "Edit-Task || page";
  });

  const scrollToTop = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="container">
      <div className="mt-4">
        <Link to="/" className="text-decoration-none text-dark fs-1 fw-bold">
          <img src={img} alt="eva-arrow" />
          Edit Task
        </Link>
      </div>
      <div className="fieldset-container m-5 h-25">
        <h5 className="fieldset-title fs-4">Task Title</h5>
        <input
          type="text"
          className="w-100"
          placeholder="Project Completion"
        />
      </div>

      <div className="fieldset-container m-5 h-25">
        <h5 className="fieldset-title fs-4">Description</h5>
        <p className="fs-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non tellus,
          sapien, morbi ante nunc euismod ac felis ac. Massa et, at platea
          tempus duis non eget. Hendrerit tortor fermentum bibendum mi nisl
          semper porttitor. Nec accumsan.
        </p>
        <input type="text" className="w-100" placeholder="" />
      </div>
      {/* options */}
      <div className="fieldset-container m-5">
        <h5 className="fieldset-title fs-4">Tags</h5>
        <Form.Select
          aria-label="Default select example"
          className="form-select"
        >
          <option value="">
           <span>URGENT</span> <span>IMPORTANT</span>
          </option>
          <option value="1">urgent</option>
          <option value="2">important</option>
        </Form.Select>
      </div>
      <div>
        <button
          className="btn btn-lg text-light fs-4 w-100"
          style={{ backgroundColor: "#974FD0" }}
        >
          Done
        </button>
      </div>
      <Link onClick={scrollToTop}>
        <p className="text-center fs-4 mt-5" style={{ color: "#974FD0" }}>
          Back to Top
        </p>
      </Link>
    </main>
  );
};

export default EditTask;
