import React from "react";
import "./Services.css"; // Import the CSS file

function Services() {
  return (
    <>
      <h1 className="services-main-heading">Services</h1>
      <div className="service-section">
        <div className="service-content">
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
              kitchen that exceeds your expectations. In addition to our design
              and material expertise, we stay abreast of the latest trends and
              innovations in kitchen remodeling. This knowledge allows us to
              incorporate modern solutions that enhance both the aesthetics and
              functionality of your space. We also prioritize clear and open
              communication throughout the project, ensuring that you are
              informed and involved at every stage. By collaborating closely
              with you, we aim to create a kitchen that not only meets but
              surpasses your expectations, providing a space that you and your
              family will enjoy for years to come.
            </p>
          </div>
          <div className="service-image">
            <img src="./images/remo-kitchen.jpg" alt="Kitchen Remodeling" />
          </div>
        </div>
      </div>
      <div className="service-section">
        <div className="service-content reverse">
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
              expectations. We stay informed about the latest trends and
              innovations in bathroom remodeling, such as nature-inspired
              designs, minimalist aesthetics, and the use of organic shapes to
              create serene and inviting environments.
            </p>
          </div>
          <div className="service-image">
            <img src="./images/remo-bathroom.jpg" alt="Bathroom Remodeling" />
          </div>
        </div>
      </div>
      <div className="service-section">
        <div className="service-content">
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
              expectations. We stay informed about the latest trends and
              innovations in basement remodeling. Current trends include
              creating home theaters, personal gyms, multipurpose rooms, and
              incorporating smart home features. For instance, transforming your
              basement into a home theater with high-definition projectors,
              surround sound systems, and comfortable seating can provide an
              immersive entertainment experience.
            </p>
          </div>
          <div className="service-image">
            <img src="./images/remo-basement.jpg" alt="Basement Remodeling" />
          </div>
        </div>
      </div>
      <div className="service-section">
        <div className="service-content reverse">
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
              regulations. We are committed to ensuring that all work complies
              with local building codes and regulations. By collaborating
              closely with our clients and maintaining open communication, we
              aim to deliver high-quality services that meet your expectations
              and adhere to all necessary legal requirements.
            </p>
          </div>
          <div className="service-image">
            <img src="./images/remo-service.jpg" alt="Other Services" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;


