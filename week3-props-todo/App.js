import {useState} from 'react';
import './App.css';
import STORE from './STORE';
import Todolist from './Todolist';
import React from 'react';


function App() {
  const [todos, setTodos] = useState(STORE)

  const completeToDo = (item, id) => {    

    const toDoListCopy = [...toDoList];
    
    const toDo = toDoListCopy.findIndex(e => e.id === id);

    if (item.isCompleted === false) {
            item.isCompleted = true;    }
    else {      setitemText.isCompleted = false;    }
    // toDoListCopy.splice(todox, 1, setText)
    setTodos(toDoListCopy);
  }

  const deleteToDo = (id) => {

    const toDoListCopy = [...toDoList];
    const todox = toDoListCopy.findIndex(e => e.id === id);
    toDoListCopy.splice(todox, 1)

    setTodos(toDoListCopy);
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
