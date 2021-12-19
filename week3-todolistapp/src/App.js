import './App.css';
import {useState} from 'react';
import {TodosArray} from './STORE';
import Todolist from './Todolist';



function App() {
  // Create a state variable called todos to store the array of todos.
  // The default value for this todos state variable will be 
  // the imported array from STORE.js  
  const [todos, setTodos] = useState(TodosArray);

  const completetodo = (id)=> {
    const temp = [...todos];
    const index = temp.findIndex(item=>item.id === id);
    temp[index].isCompleted = !temp[index].isCompleted;
    setTodos(temp);
  };

  const deletetodo = (id) => {
    const temp = [...todos];
    const index = temp.findIndex(item=>item.id === id);   
    temp[index].pop(); 
    setTodos(temp);
  }

  return <Todolist items = {todos} completetodo = {completetodo} deletetodo = {deletetodo} />    
  
}

export default App;
