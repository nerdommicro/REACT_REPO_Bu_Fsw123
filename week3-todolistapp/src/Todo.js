import React from 'react';
import Todolist from './Todolist';

function Todo(key, completed, task, deleted) {
return ( 
<li key={key} style={{textDecoration:{completed} ? "line-through" : "" }}>
    {task}>    
    <input type="checkbox" checked={completed}
      onChange={() => completeTodo(key)}></input>      
</li> 
);
}

export default Todo;