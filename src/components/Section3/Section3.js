import React from "react";
import "./section3.css";

const Section3 = () => {
  return (
    <section id="section3">
      <div id="section3" className="container-section3">
        <h1 data-aos="fade-up" data-aos-duration="1000">
          THIS IS HEADING OF SECTION
        </h1>

        <p data-aos="fade-up" data-aos-duration="2000">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          aliquid laboriosam quidem officiis ut debitis dolores, dignissimos
          magni maiores ullam, excepturi omnis, quam maxime voluptatibus
          deleniti dicta esse atque porro.
        </p>
        <div
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-duration="3000"
          className="section3-img-holder"
        >
          <a href="https://placeholder.com">
            <img src="https://via.placeholder.com/190" alt="img" />
          </a>
          <a href="https://placeholder.com">
            <img src="https://via.placeholder.com/190" alt="img" />
          </a>
          <a href="https://placeholder.com">
            <img src="https://via.placeholder.com/190" alt="img" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Section3;
