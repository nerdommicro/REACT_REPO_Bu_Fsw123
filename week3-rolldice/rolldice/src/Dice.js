export default function Dice(props) {
  return(
    <div class="flexContainer">  
    <div class="dice">   
      <div class="dice">{props.Dice}</div> 
      <div class="dice">{props.Dice}</div>  
    </div>
      <div class="buttonContainer">
          <button onClick={props.Rolldice}>
            Roll Dice
          </button>
      </div>
    </div>
  );
}