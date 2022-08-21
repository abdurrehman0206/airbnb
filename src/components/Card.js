import React from "react";
import star from "../images/star.png";
function Card(props) {
  const isAvailable = props.isAvailable;
  const isOnline = props.isOnline;
  return (
    <div className="card">
      {!isAvailable && <div className="status">Sold Out</div>}
      {isOnline && <div className="status">🟢Online</div>}
      <img className="main-image" src={props.img} alt="" />
      <div className="textArea">
        <div className="detailContainer">
          <img className="star" src={star} alt="" />
          <p>{props.ratings}</p>
          <p className="gray">({props.count})</p>
          <p className="gray">•{props.country}</p>
        </div>
        <p>{props.title}</p>
        <p>
          <span>From ${props.pricing} </span>/ per Person
        </p>
      </div>
    </div>
  );
}

export default Card;
