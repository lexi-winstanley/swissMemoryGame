import React from "react";
import "./style.css";

function PhotoCard(props) {
  return (
    <div className="polaroid" onClick={() => props.checkClicked(props.id)}>
      <div className="imageContainer">
        <img alt={props.alt} src={props.src} />
      </div>
      <h4 className="caption">{props.alt}</h4>
    </div>
  );
}

export default PhotoCard;
