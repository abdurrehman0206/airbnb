import React from "react";
import grid from "../images/grid.png";

export default function Hero() {
  return (
    <div className="hero">
      <div className="gridContainer">
        <img src={grid} alt="" />
      </div>
      <div className="textContainer">
        <h1>Online Experiences</h1>
        <section>
          <p>
            Join unique interactive activities led by one-of-a-kind hosts—all
            without leaving home.
          </p>
        </section>
      </div>
    </div>
  );
}
