import TodoList from "./Todolist";
import { useState } from "react";
import { todoList } from "./STORE";

function App() {
    const [todos, setTodos] = useState(todoList);
    const completeTodo = (id) => {
        const tempTodos = [...todos];
        const index = tempTodos.findIndex((item) => item.id === id);
        tempTodos[index].isComplete = !tempTodos[index].isComplete;
        setTodos(tempTodos);
    };

    const deleteTodo = (id) => {
        const tempTodos = [...todos];
        const index = tempTodos.findIndex((item) => item.id === id);
        const filteredTodos = tempTodos.splice(index, 1);
        setTodos(tempTodos);
    };

    return (
        <>
            <TodoList
                items={todos}
                completeTodo={completeTodo}
                deleteTodo={deleteTodo}
            />
        </>
    );
}

export default App;
