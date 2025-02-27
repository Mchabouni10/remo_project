import React from "react";
import "./Portfolio.css"; // Import the new CSS file

function Portfolio() {
  return (
    <>
      <h1 className="portfolio-main-heading">Portfolio</h1>

      <div className="portfolio-section">
        <div className="portfolio-content">
          <div className="portfolio-text">
            <h3>Samir</h3>
            <p>
              Versatile Professional in Construction & Electrical Engineering
              <br />
              <br />
              With a solid foundation in both construction and electrical
              engineering, I bring a unique combination of hands-on experience
              and technical expertise. My professional journey has encompassed
              extensive work in construction, including masonry, drywall
              installation, flooring, and full-scale remodeling of kitchens and
              bathrooms. This practical background has provided me with a deep
              understanding of structural integrity, material selection, and
              efficient project execution.
              <br />
              <br />
              In parallel, my academic pursuit of electrical engineering has
              broadened my analytical skills, problem-solving abilities, and
              capacity for innovative thinking. Through rigorous coursework and
              applied learning, I have developed a strong proficiency in
              electrical systems, circuit design, power distribution, and energy
              efficiency solutions. My ability to integrate theoretical
              knowledge with real-world applications allows me to approach
              projects with precision, ensuring both functionality and
              sustainability.
              <br />
              <br />
              By combining practical craftsmanship with a structured engineering
              mindset, I am able to assess challenges from multiple perspectives
              and develop solutions that are both efficient and technically
              sound. My goal is to leverage this dual expertise to contribute to
              complex construction and engineering projects, drive innovation,
              and optimize project outcomes through a blend of technical
              accuracy and hands-on proficiency.
            </p>
          </div>
          <div className="portfolio-image">
            <img
              src="./images/SamirReplace.jpg"
              alt="Samir - Construction & Electrical Engineering"
            />
          </div>
        </div>
      </div>

      <div className="portfolio-section">
        <div className="portfolio-content reverse">
          <div className="portfolio-text">
            <h3>Mouloud</h3>
            <p>
              Software Engineer | Passionate Craftsman in Construction &
              Remodeling
              <br />
              <br />
              With a strong foundation in software engineering and a deep
              passion for construction and remodeling, I bring a unique
              interdisciplinary approach to problem-solving and design. While my
              primary expertise lies in software development, my years of
              hands-on experience in masonry, remodeling, and architectural
              design have allowed me to merge technical precision with
              craftsmanship.
              <br />
              <br />
              My work in construction and remodeling extends beyond a hobby—it
              is a commitment to transforming spaces with attention to detail,
              functionality, and aesthetics. I have honed my skills in masonry,
              kitchen and bathroom remodeling, flooring installation, and
              structural enhancements, ensuring that every project is executed
              with precision and efficiency. My deep understanding of materials,
              project costs, and timelines allows me to optimize resources while
              maintaining the highest standards of quality.
              <br />
              <br />
              By combining the analytical mindset of a software engineer with
              the hands-on expertise of a craftsman, I am able to conceptualize,
              design, and bring ideas to life with a focus on both innovation
              and practicality. Whether working on digital solutions or physical
              structures, my approach remains the same—meticulous planning,
              creative problem-solving, and an unwavering commitment to
              excellence. Through my work, I aim to bridge the gap between
              technology and craftsmanship, ensuring that every project, whether
              digital or physical, is built to last and designed to inspire.
            </p>
          </div>
          <div className="portfolio-image">
            <img
              src="./images/MouloudReplace.jpg"
              alt="Mouloud - Software Engineer & Craftsman"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
