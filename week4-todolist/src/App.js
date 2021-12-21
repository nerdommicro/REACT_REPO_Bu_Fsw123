import TodoList from "./Todolist";
import { useState } from "react";
import { tododata } from "./STORE";
import { v4 as uuidv4 } from "uuid";

function App() {
    const [todos, setTodos] = useState(tododata);

    const completeTodo = (id) => {
        const temp = [...todos];
        const index = temp.findIndex((item) => item.id === id);
        temp[index].isCompleted = !temp[index].isCompleted;
        setTodos(temp);
    };

    const deleteTodo = (id) => {
        const tempTodos = [...todos];
        const index = tempTodos.findIndex((item) => item.id === id);
        tempTodos.splice(index, 1);
        setTodos(tempTodos);
    };

    const addTodo = (todotext) => {
        const newTodos = [...todos];
        const todo1 =  
            {
                id: uuidv4(),
                text: `${todotext}`,
                isCompleted: false,
            };
        newTodos.push(todo1);
        
        setTodos(newTodos);
    };

    return (
        <>            
            <TodoList
                items={todos}
                completeTodo={completeTodo}
                deleteTodo={deleteTodo}
                addTodo={addTodo}
            />
        </>
    );
}

export default App;
