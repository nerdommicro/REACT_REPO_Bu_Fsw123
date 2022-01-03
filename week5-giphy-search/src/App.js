
import './App.css';
import {useState} from 'react';



function App() {
  const [imgSrc, setSrc] = useState("");
  const [alt, setAlt] = useState("");
  const encquery = encodeURIComponent(query);
  const apikey = "jUjh96cvU4xAlSbEtj6lOlKR6g8GTv1X";
  const limit = 25;
  const randomd = Math.floor(Math.random() * limit);
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${encquery}`;

  return (
    <>
      <div id="formSearch">
        <label>Enter a word or phrase:</label><input type="text" id="input" required></input>
        <button onClick={() => {newSearch()}}>Search</button>
      </div>
      <div id="imgDiv">
        <img src={imgSrc} alt={alt} id="curImg"></img>
      </div>
    </>
  );
}

  

export default App;

// ~ Build a search form with one input and button
// Will initially render an animated GIF (use a default value as an initial query).
// User will enter a search term and click the button to render a new image
// Each new query from the user will dynamically populate the src attribute of an IMG.