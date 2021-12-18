
import React from 'react';
import Todo from './Todo';


function Todolist({items, completetodo, deletetodo }) {   

    const listTodos =  items.map((todo) => {
        //pass each todo  to Todo function which renders the one li
        return (
                    <Todo 
                        key={todo.id} 
                        completetodo={todo.isCompleted}
                        text={todo.text}                  
                        deletetodo={deletetodo}
                    />
                )
        }
    ); //end of the mapping

    return (<>
            <h1>To Do List</h1>       
            <ul>{listTodos}</ul>        
            </>);
}
export default Todolist;