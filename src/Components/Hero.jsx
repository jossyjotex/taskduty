import React  from "react";
import { Link } from "react-router-dom";
import componentimg from '../assets/Component 1.svg'
import { Button } from "react-bootstrap";
import '../Styles/Hero.css'



const Hero = () => {
  return (
    <main className="container mt-5">
      <div className="row justify-content-between align-items-center">
        <div className="col-sm-12 col-lg-6 hero-container">
          <h2> Manage Your Tasks On <br /><span>Task Duty </span></h2>
          <div>
            <p className="fs-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              mod atque repellat quas perferendis ea sit velit nemo dignissimos
              obcaecati voluptatum eveniet voluptas est similique nesciunt,
              iusto dolor voluptates? Pariatur!
            </p>
            <Link to='/AllTask'>
              <Button className='w-75 fs-4' variant="secondary">
              
              Go to My Task

              </Button>
           
        
            </Link>
          </div>
        </div>
        <div className="col-sm-12 col-lg-5 pt-3">
            <img className="img-fluid" src={componentimg} alt="component-image" />
        </div>
      </div>
    </main>
  );
};

export default Hero;
