import {useState} from 'react';
import './App.css';
import STORE from './STORE';
import Todolist from './Todolist';
import React from 'react';


function App() {
  const [toDoList, changeToDo] = useState(STORE)

  const completeToDo = (setText, setID) => {
    
    const toDoListCopy = [...toDoList];

    const toDo = toDoListCopy.findIndex(e => e.id === setID);

    if (setText.isCompleted === false) {

      setText.isCompleted = true;
    }
    else {

      setText.isCompleted = false;
    }

    toDoListCopy.splice(toDo, 1, setText)

    changeToDo(toDoListCopy);
  }

  const deleteToDo = (setID) => {

    const toDoListCopy = [...toDoList];

    const toDo = toDoListCopy.findIndex(index => index.id === setID);

    toDoListCopy.splice(toDo, 1)

    changeToDo(toDoListCopy);
  }











  return (
      <ul>To do list
        <Todolist text = {STORE}
        completeToDo = {completeToDo}
        deleteToDo = {deleteToDo}/>
      </ul>
  );
}

export default App;
