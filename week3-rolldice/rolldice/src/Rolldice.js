import {useState} from 'react';
import Dice from './Dice.js';

export default function Rolldice(props) {
  const [dice1, setStateDie1] = useState("1");
  const [dice2, setStateDie2] = useState("1");
  const roll = ()=>{
    setStateDie1(Math.floor(Math.random() * 6)+1);
    setStateDie2(Math.floor(Math.random() * 6)+1);
  }
  return(
    <Dice 
      dice1 = {dice1} dice2 = {dice2}
    />
    )
}