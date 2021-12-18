import './App.css';
import {TodosArray} from './STORE';
import Todolist from './Todolist';
import {useState} from 'react';


function App() {
  // Create a state variable called todos to store the array of todos.
  // The default value for this todos state variable will be 
  // the imported array from STORE.js  
  const [todos, setTodos] = useState(TodosArray);

  const completetodo = (id)=> {
    const temp = [...todos];
    const index = temp.find(i=>i.id === id);
    temp[index].isCompleted = !temp[index].isCompleted;
    setTodos(temp);
  };

  const deletetodo = (id) => {
    const temp = [...todos];
    const newTodos = temp.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  return (              
        <Todolist 
          items = {todos}
          completetodo = {completetodo}         
          deletetodo = {deletetodo}      
        />    
  );
}

export default App;
