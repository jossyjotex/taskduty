import React, { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useMatch } from "react-router-dom";
import navimg from "../assets/Rectangle 1.svg";
import img from "../assets/Ellipse 1.svg";
import { Button } from "react-bootstrap";
import SignUp from "../auth/signUp";
import SignIn from "../auth/SignIn";
import AuthContext from "../context/authContext";

const NavBar = () => {
  const [modalShow, setModalShow] = useState(false);
  const [modalSignIn,setModalSignIn] = useState(false)
  const [showAuth, setShowAuth] = useState(false); 
  // const {loggedIn,logout} = useContext(AuthContext)

  const isAbout = useMatch("/AllTask");
  const isNew = useMatch("/NewTask");
  return (
    <>
      <Navbar expand="lg" className="container mt-4">
        <Container fluid>
          <h2>
            {" "}
            <Link to="/" className="text-decoration-none text-dark">
              <img src={navimg} alt="logo" /> TaskDuty{" "}
            </Link>{" "}
          </h2>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>

            {showAuth === false ? (
              <>
                <section className="d-flex gap-5 align-items-center">
                  <div>
                    <Button
                      variant=""
                      className="bg-dark outline-none text-light "
                      onClick={() => setModalShow(true)}
                    >
                      sign up
                    </Button>

                    <SignUp
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                    />
                  </div>
                  {/* signIn */}
                  <div className="">
                    <Button
                      variant=""
                      className="bg-dark outline-none text-light "
                      onClick={() => setModalSignIn(true)}
                    >
                      sign In
                    </Button>

                    <SignIn
                      show={modalSignIn}
                      onHide={() => setModalSignIn(false)}
                    />
                  </div>
                  <Link className="text-decoration-none text-dark d-none d-lg-block">
                    <img src={navimg} alt="nav-img" />
                  </Link>
                </section>
              </>
            ) : (
              <>
                <div className="d-flex gap-4 lh-base align-items-center">
                  {!isNew && "AllTask" && (
                    <Link
                      to="/NewTask"
                      className="text-decoration-none text-dark"
                    >
                      <h4> New Task </h4>
                    </Link>
                  )}

                  {!isAbout && "/AllTask" && (
                    <Link
                      to="/AllTask"
                      className="text-decoration-none text-dark"
                    >
                      <h4> All Task </h4>
                    </Link>
                  )}
                  <div>
                    <button className="btn btn-danger"onClick={logout}>logout</button>

                  </div>

                  <Link className="text-decoration-none text-dark d-none d-lg-block">
                    <img src={navimg} alt="nav-img" />{" "}
                  </Link>
                </div>
              </>
            )}

            <div className="d-flex gap-4 lh-base align-items-center">
              {!isNew && "/AllTask" && (
                <Link to="/NewTask" className="text-decoration-none text-dark">
                  <h4> New Task </h4>
                </Link>
              )}
              {!isAbout && "/AllTask" && (
                <Link to="/AllTask" className="text-decoration-none text-dark">
                  <h4> All Task </h4>
                </Link>
              )}
              <Link className="text-decoration-none text-dark d-none d-lg-block">
                {" "}
              </Link>{" "}
              <img src={img} alt="" />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
