import React from "react";
import Card from "./Card.js";
import data from "../data.js";
function Experience() {
  const cardElements = data.map((item) => {
    return (
      <Card
        img={item.img}
        ratings={item.ratings}
        count={item.count}
        country={item.country}
        title={item.title}
        pricing={item.pricing}
        isAvailable={item.isAvailable}
        isOnline={item.isOnline}
      />
    );
  });
  return <div className="experienceContainer">{cardElements}</div>;
}

export default Experience;
