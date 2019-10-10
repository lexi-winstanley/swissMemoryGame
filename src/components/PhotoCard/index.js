import React from "react";
import "./style.css";

function PhotoCard(props) {
  return (
    <div className="card" onClick={() => props.checkClicked(props.id)}>
      <div className="img-container">
        <img alt={props.alt} src={props.src} />
      </div>
    </div>
  );
}

export default PhotoCard;
