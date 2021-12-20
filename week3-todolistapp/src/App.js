import TodoList from "./Todolist";
import { useState } from "react";
import { tododata } from "./STORE";

function App() {
    const [todos, setTodos] = useState(tododata);
    const completeTodo = (id) => {
        const temp = [...todos];
        const index = temp.findIndex((item) => item.id === id);
        temp[index].isComplete = !temp[index].isComplete;
        setTodos(temp);
    };

    const deleteTodo = (id) => {
        const tempTodos = [...todos];
        const index = tempTodos.findIndex((item) => item.id === id);
        const filteredTodos = tempTodos.splice(index, 1); //not sure here
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
