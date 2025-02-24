import React, { useRef } from "react";
import "./Services.css"; // Import the CSS file

function Services() {
  const kitchenRef = useRef(null);
  const bathroomRef = useRef(null);
  const basementRef = useRef(null);
  const otherRef = useRef(null);

  const scrollToSection = (ref) => {
    const offset = 120; // Adjust this value to leave space for the title
    const elementPosition =
      ref.current.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
  };

  return (
    <>
      <h1 className="services-main-heading">Our Services</h1>
      <div className="service-summary">
        <ul>
          <li onClick={() => scrollToSection(kitchenRef)}>
            Kitchen Remodeling
          </li>
          <li onClick={() => scrollToSection(bathroomRef)}>
            Bathroom Remodeling
          </li>
          <li onClick={() => scrollToSection(basementRef)}>
            Basement Remodeling
          </li>
          <li onClick={() => scrollToSection(otherRef)}>Other Services</li>
        </ul>
      </div>

      <div className="service-section" ref={kitchenRef}>
        <div className="service-content reverse-mobile">
          <div className="service-text">
            <h3 className="service-heading">Kitchen Remodeling</h3>
            <p className="service-paragraph">
              With years of experience in kitchen remodeling, we understand that
              the process can be both exciting and demanding. Our expertise in
              selecting durable materials and designing functional layouts
              ensures that your kitchen not only reflects your personal style
              but also stands the test of time. We offer a complimentary
              consultation to clarify your vision and provide a clear
              understanding of the final project. Our commitment to customer
              satisfaction drives us to deliver exceptional service, combining
              your preferences with our professional insights to create a
              kitchen that exceeds your expectations.
            </p>
          </div>
          <div className="service-image">
            <img src="./images/remo-kitchen.jpg" alt="Kitchen Remodeling" />
          </div>
        </div>
      </div>

      <div className="service-section" ref={bathroomRef}>
        <div className="service-content">
          <div className="service-image">
            <img src="./images/remo-bathroom.jpg" alt="Bathroom Remodeling" />
          </div>
          <div className="service-text">
            <h3 className="service-heading">Bathroom Remodeling</h3>
            <p className="service-paragraph">
              With extensive experience in bathroom remodeling, we understand
              that the process can be both exciting and challenging. Our
              expertise in selecting durable materials and creating functional
              designs ensures your bathroom reflects your personal style while
              withstanding daily use. We offer a complimentary consultation to
              clarify your vision and provide a comprehensive understanding of
              the final project. Our commitment to customer satisfaction drives
              us to deliver exceptional service, blending your preferences with
              our professional insights to create a bathroom that exceeds your
              expectations.
            </p>
          </div>
        </div>
      </div>

      <div className="service-section" ref={basementRef}>
        <div className="service-content reverse-mobile">
          <div className="service-text">
            <h3 className="service-heading">Basement Remodeling</h3>
            <p className="service-paragraph">
              With extensive experience in basement remodeling, we recognize
              that transforming this often-underutilized space can be both
              exciting and challenging. Our expertise in selecting durable
              materials and creating functional designs ensures your basement
              becomes a valuable extension of your home, tailored to your
              lifestyle and preferences. We offer a complimentary consultation
              to clarify your vision and provide a comprehensive understanding
              of the final project. Our commitment to customer satisfaction
              drives us to deliver exceptional service, blending your ideas with
              our professional insights to create a basement that exceeds your
              expectations.
            </p>
          </div>
          <div className="service-image">
            <img src="./images/remo-basement.jpg" alt="Basement Remodeling" />
          </div>
        </div>
      </div>

      <div className="service-section" ref={otherRef}>
        <div className="service-content">
          <div className="service-image">
            <img src="./images/remo-service.jpg" alt="Other Services" />
          </div>
          <div className="service-text">
            <h3 className="service-heading">Other Services</h3>
            <p className="service-paragraph">
              In addition to our comprehensive remodeling services, we offer a
              range of contracting services, including recessed lighting
              installation, chandelier installation, door installation, various
              flooring installations, and drywall installation and repair. We
              strictly adhere to Illinois regulations and prioritize our
              customers' preferences to build trust and provide an enjoyable
              experience. It's important to note that certain projects may
              require building permits, depending on the scope of work and local
              regulations.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
