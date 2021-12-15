
import './App.css';
import STORE from './STORE';
import Todolist from './Todolist';
import React from 'react';

function App() {
  return (
      <ul>To do list
        <Todolist text = {STORE}/>
      </ul>
  );
}

export default App;
