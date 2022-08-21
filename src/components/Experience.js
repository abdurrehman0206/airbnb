import React from "react";
import Card from "./Card.js";
import data from "../data.js";
function Experience() {
  const cardElements = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return <div className="experienceContainer">{cardElements}</div>;
}

export default Experience;
