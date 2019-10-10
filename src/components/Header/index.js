import React from "react";
import "./style.css";

function Header(props) {
  return (
    <header>
      <h1 className="title">Swiss Memory Game</h1>
      <h2>Click an image to begin!</h2>
      <h2>Score: {props.score}</h2>
      <h2>Top Score: {props.top}</h2>
    </header>
  );
}

export default Header;
