import React from "react";
import "./section2.css";

const Section2 = () => {
  return (
    <section id="section2">
      <div className="container-section2">
        <h1 data-aos="fade-up" data-aos-anchor-placement="top-center">
          THIS IS HEADING OF SECTION
        </h1>

        <p data-aos="fade-left" data-aos-offset="500" data-aos-duration="1000">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          aliquid laboriosam quidem officiis ut debitis dolores, dignissimos
          magni maiores ullam, excepturi omnis, quam maxime voluptatibus
          deleniti dicta esse atque porro.
        </p>
        <div
          data-aos="fade-left"
          data-aos-offset="500"
          data-aos-duration="2000"
          className="section2-img-holder"
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
      <div className="linear"></div>
    </section>
  );
};

export default Section2;
