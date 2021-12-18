import React from 'react';
import Todolist from './Todolist';

function Todo(key, completed, task, deleted) {
return ( 
<li key={key} style={{textDecoration:{completed} ? "line-through" : "" }}>
    <input type="checkbox" 
    checked={completed} 
    onChange={() => 
    completeTodo(key)}>     
    </>
    {task}       
</li> 
);
}

export default Todo;