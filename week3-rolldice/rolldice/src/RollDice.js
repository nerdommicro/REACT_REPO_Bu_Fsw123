import React from "react";
import { useState } from "react";
import "./App.css";

function RollDice() {
  const [dice1, setDice1] = useState(Math.floor(Math.random() * 6) + 1);
  const [dice2, setDice2] = useState(Math.floor(Math.random() * 6) + 1);

  const diceNumberList = {
    1: "fas fa-dice-one dice",
    2: "fas fa-dice-two dice",
    3: "fas fa-dice-three dice",
    4: "fas fa-dice-four dice",
    5: "fas fa-dice-five dice",
    6: "fas fa-dice-six dice",
  };


  return (
    <>
      <div className="container">
        <div className="diceContainer">
        <i className={`dice1 in ${diceNumberList ? diceNumberList[dice1] : ""}`
        }>          
        </i>        
        </div>
        <div className="diceContainer">
        <i className={`dice2 in ${diceNumberList ? diceNumberList[dice2] : ""}`
        }>          
        </i>        
        </div>
      </div>      
      <button onClick={() => {
            setDice1(Math.floor(Math.random() * 6) + 1);
            setDice2(Math.floor(Math.random() * 6) + 1);
            }
      }>Roll Dice</button>
    </>
  );
}

export default RollDice;
