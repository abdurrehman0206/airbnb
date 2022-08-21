import React from "react";
import Card from "./Card.js";
import e1 from "../images/1.png";
import e2 from "../images/3.png";
import e3 from "../images/2.png";
function Experience() {
  return (
    <div className="experienceContainer">
      <Card
        img={e1}
        ratings="5.0"
        count="6"
        country="USA"
        title="Life lessons with katie Zaferes"
        pricing="136"
        isAvailable={false}
        isOnline={false}
      />
      <Card
        img={e2}
        ratings="5.0"
        count="30"
        country="USA"
        title="Learn wedding photography"
        pricing="125"
        isAvailable={true}
        isOnline={true}
      />
      <Card
        img={e3}
        ratings="4.8"
        count="3"
        country="USA"
        title="Group mountain biking"
        pricing="50"
        isAvailable={true}
        isOnline={false}
      />
    </div>
  );
}

export default Experience;
