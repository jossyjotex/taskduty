import React, {useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import AuthContext from "../context/authContext";

const ClientTask = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const userId = useParams();
  const {loggedin} = useContext(AuthContext)
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const request = await fetch("http://localhost:6767/api/task");
      const response = await request.json();
      setData(response.tasks);
      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  // delete function
  const handleDelete = async (userId) => {
    try {
      const response = await axios.delete(
        `https://last-task-duty.onrender.com/api/task/${userId}`
      );
      console.log(response);
      if (response.status === 200) {
        // alert(response.data.message)
        toast.success(response.data.message);
      }
      setData(data.filter((existingDatum) => existingDatum._id !== userId));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    document.title = "All-Task || page";
    fetchData();
  }, []);
  const scrollToTop = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };
  return (
    <main className="container ">
      <div className="mt-4">
        <p> {isLoading && <Spinner animation="border" />} </p>
        <div className="d-flex justify-content-between align-items-center">
          <Link className="text-decoration-none text-dark">
            <h1>My Task</h1>
          </Link>
          <Link to="/NewTask" className="text-decoration-none text-dark">
            <h3 style={{ color: "#974FD0" }}> + Add to My Task </h3>
          </Link>
        </div>
      </div>
      <section className="mt-5 ">
        {data && data.length >= 1 ? (
          <>
            {data.map((datum) => {
              const { _id, tags, title, description } = datum;
              return (
                <div className="mt-5 border rounded" key={_id}>
                  <div className="d-flex justify-content-between align-items-center">
                    <h4 className="text-danger ms-3"> {tags} </h4>
                    <div className="d-flex gap-3 my-3">
                      <Link
                        to={`/EditTask/${_id}`}
                        className="text-decoration-none"
                      >
                        <button
                          className="btn btn text-light btn-lg"
                          style={{ backgroundColor: "#974FD0" }}
                        >
                          Edit
                        </button>
                      </Link>
                      <div>
                        <button
                          className="btn btn-light btn-lg"
                          style={{ color: "974FD0" }}
                          onClick={() => handleDelete(_id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="mt-4 p-2">
                    <h2> {title} </h2>
                    <p className="fs-3">{description}</p>
                  </div>
                </div>
                // <main key={_id} className="d-flex justify-content-between align-items-center">
                //   <p> {tags} </p>
                //   <h2> {title} </h2>
                //   <h3> {description} </h3>
                // </main>
              );
            })}
          </>
        ) : (
          <>
            <h2> No task(s) </h2>
          </>
        )}
      </section>
      {/* ================================= */}
      {/* <div className="mt-5 border rounded">
        <div className="d-flex justify-content-between align-items-center">
          <h4 className="text-danger ms-3">urgent</h4>
          <div className="d-flex gap-3 my-3">
            <Link to="/EditTask" className="text-decoration-none">
              <button
                className="btn btn text-light btn-lg"
                style={{ backgroundColor: "#974FD0" }}
              >
                <img src={editLogo} alt="edit-logo" />
                Edit
              </button>
            </Link>
            <div>
              <button
                className="btn btn-light btn-lg"
                style={{ color: "974FD0" }}
              >
                <img src={deleteLogo} alt="delete-logo" />
                Delete
              </button>
            </div>
          </div>
        </div>
        <hr />
        <div className="mt-4 p-2">
          <h2> Fintech Website Update </h2>
          <p className="fs-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quis
            nibh posuere non tempor. Erat mattis gravida pulvinar nibh aliquam
            faucibus et magna. Interdum eu tempus ultricies cras neque mi. Eget
            tellus suspendisse et viverra.
          </p>
        </div>
      </div> */}
      <Link onClick={scrollToTop}>
        <p className="text-center fs-4 mt-5" style={{ color: "#974FD0" }}>
          Back to Top
        </p>
      </Link>
    </main>
  );
};

export default ClientTask;
