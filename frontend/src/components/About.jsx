import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
              Welcome to Flavor Haven, where passion meets the plate. Since 2015, 
              we've been crafting culinary experiences that delight the senses and 
              bring people together. Our kitchen celebrates fresh, locally-sourced 
              ingredients transformed by our talented chefs into memorable dishes. 
              Family-owned and community-driven, we believe great food creates 
              connections that last. Whether you're joining us for a casual lunch, 
              a special celebration, or a cozy dinner, our commitment to quality 
              and creativity remains unwavering. Come taste the difference when 
              food is made with heart.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;





