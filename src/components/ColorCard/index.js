import React from "react";
import "./style.css";

function ColorCard(props) {
  console.log(props);
  return (
    <div className="card" style={{backgroundImage: `url:(${props.image})`}}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default ColorCard;
