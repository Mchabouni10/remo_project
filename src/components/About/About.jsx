import React from "react";
import "./About.css";

function About() {
  return (
    <>
      <h1 className="about-main-heading">About Rawdah Remodeling Company</h1>
      
      <div className="about-section">
        <div className="about-content">
          <div className="about-text">
            <p>
              Welcome to <strong>Rawdah Remodeling Company</strong>, where your dream home becomes a reality.  
              At Rawdah Remodeling, we are committed to transforming houses into beautiful, functional spaces that reflect your vision.
            </p>
          </div>
          <div className="logo3">
            <img src="./images/logo3.png" alt="Home Transformation" />
          </div>
        </div>
      </div>

      <div className="about-section">
        <div className="about-content reverse">
          <div className="about-text">
            <p>
              Founded by <strong>Samir and Mouloud</strong>, our company was built on the belief that home remodeling should be a 
              <strong>stress-free and enjoyable experience</strong>. With years of expertise and a deep passion for our craft, we focus on every detail to ensure exceptional quality and client satisfaction.
            </p>
          </div>
          <div className="about-image">
            <img src="./images/TogetherReplace.jpg" alt="Expert Remodeling" />
          </div>
        </div>
      </div>

      <div className="about-section">
        <div className="about-content">
          <div className="about-text">
            <p>
              What sets us apart is our <strong>collaborative approach</strong>—we believe that homeowners should be actively involved in the remodeling process.  
              Your ideas and input are invaluable, and we work closely with you to bring your vision to life.
            </p>
          </div>
          <div className="about-image">
            <img src="./images/collaboration.jpg" alt="Collaboration" />
          </div>
        </div>
      </div>

      <div className="about-section">
        <div className="about-content reverse">
          <div className="about-text">
            <p>
              <strong>Rawdah Remodeling Company</strong> is not just a remodeling company; it’s a <strong>friendly, welcoming environment</strong> where creativity meets craftsmanship.  
              We proudly serve <strong>Chicago and surrounding areas within a 50-mile radius</strong>, ensuring that homeowners in our community have access to high-quality remodeling services.
            </p>
          </div>
          <div className="about-image">
            <img src="./images/chicago.jpg" alt="Serving Chicago Area" />
          </div>
        </div>
      </div>

      <div className="about-section">
        <div className="about-content">
          <div className="about-text">
            <p>
              Our ultimate goal is to make the process <strong>seamless and stress-free</strong>, allowing you to enjoy the transformation of your home without worry.  
              Your satisfaction is our driving force, and we are dedicated to exceeding your expectations every step of the way.
            </p>
          </div>
          <div className="about-image">
            <img src="./images/stressfree.jpg" alt="Stress-Free Remodeling" />
          </div>
        </div>
      </div>

      <div className="about-section">
        <div className="about-content reverse">
          <div className="about-text">
            <p>
              Let <strong>Rawdah Remodeling Company</strong> bring your ideas to life—because your dream home deserves the best.
            </p>
          </div>
          <div className="about-image">
            <img src="./images/dreamhome.jpg" alt="Dream Home Remodeling" />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

