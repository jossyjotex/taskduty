import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const AllTask = () => {
  useEffect(() => {
    document.title = "All-Task || page";
  });
  const scrollToTop = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };
  return (
    <main className="container">
      <div className="mt-4"></div>
      <div className="d-flex justify-content-between align-items-center">
        <Link className="text-decoration-none text-dark">
          <h1>My Task</h1>
        </Link>
        <Link to="/NewTask" className="text-decoration-none text-dark">
          <h3 style={{ color: "#974FD0" }}>+ Add to my Task</h3>
        </Link>
      </div>
      <div>
        {/* {================================} */}
        <div className="my-5 border rounded">
          <div className="d-flex justify-content-between align-items-center">
            <h4 className="text-danger ms-3">Urgent</h4>
          </div>
          <div className="d-flex gap-3 my-3">
            <Link to="/EditTask" className="text-decoration-none">
              <button
                className="btn btn text-light btn-lg"
                style={{ backgroundColor: "#974FD0" }}
              >
                <img src="" alt="" />
                Edit
              </button>
            </Link>
            <div>
              <button
                className="btn btn-light btn-lg"
                style={{ color: "974FD0" }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
        <hr />
        <div className="mt-4 p-2">
          <h2>Fintech Website Update</h2>
          <p className="fs-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            voluptas sequi eius sed animi suscipit dolorum eveniet laborum
            soluta molestias?
          </p>
        </div>
      </div>
      <Link>
        <p
          onClick={scrollToTop}
          className="text-center fs-4 mt-5"
          style={{ color: "#974FD0" }}
        >
          Back to the top
        </p>
      </Link>
    </main>
  );
};

export default AllTask;
