import React from "react";
import "./section1.css";

const Section1 = () => {
  return (
    <section id="section1">
      <div className="container-section1">
        <h1 data-aos="fade-up" data-aos-anchor-placement="top-center">
          THIS IS HEADING OF SECTION
        </h1>

        <p data-aos="fade-left" data-aos-duration="1000">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          aliquid laboriosam quidem officiis ut debitis dolores, dignissimos
          magni maiores ullam, excepturi omnis, quam maxime voluptatibus
          deleniti dicta esse atque porro.
        </p>
      </div>
      <div className="linear"></div>
    </section>
  );
};

export default Section1;
