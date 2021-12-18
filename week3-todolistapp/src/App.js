import React from 'react';
import {useState} from 'react';
import TodosArray from './STORE';
import Todolist from './Todolist';

function App() {
  // Create a state variable called todos to store the array of todos.
  // The default value for this todos state variable will be 
  // the imported array from STORE.js  
  const [todos, setTodos] = useState(TodosArray);

  const completeTodo = id=> {
    const temp = [...todos];
    const index = temp.findIndex(i=>i.id === id);
    temp[index].completeTodo = !temp[index].completeTodo;
    setTodos(temp);
  };

  const deleteTodo = id => {
    const temp = [...todos];
    const newTodos = temp.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  return (
    <div>            
        <Todolist 
          items = {TodosArray}
          completed = {completeTodo}         
          deleted = {deleteTodo}      
        />
    </div>
  );
}

export default App;
