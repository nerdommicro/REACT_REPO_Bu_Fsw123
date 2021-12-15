
import "./Card.css";

function Card(props){

  const myStyle = {
    backgroundColor: props.bgColor,
    width: props.width
  }
  
  return(
  
  <div 
      style={myStyle} >
      
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>        
        <h3>{props.description}</h3>
    </div>
   
  );
}

export default Card;
