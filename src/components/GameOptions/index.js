import React from "react";
import "./style.css";

function GameOptions(props) {
  return (
    <div className="optionsContainer">
      <h3>{props.message}</h3>
      <div className="buttonHolder">
        <button id="easy" className="gameLevel" onClick={() => props.startGame("easy")}>Easy</button>
        <button id="medium" className="gameLevel" onClick={() => props.startGame("medium")}>Medium</button>
        <button id="hard" className="gameLevel" onClick={() => props.startGame("hard")}>Hard</button>
      </div>
    </div>
  );
}

export default GameOptions;
