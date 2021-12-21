import { useState } from "react";

function TodoForm(addTodo) {
    const [input, setInput] = useState("");

    const handleSaveInput = (e) => {
        e.preventDefault();
        setInput(document.getElementById("input").value);
    };
    const submitTodo = () => {
        addTodo(input);
    };
    return (
        <>
            <form onSubmit={() => submitTodo()}>
                <h1>ToDo App</h1>
                <h2>Add new todos via the input field:</h2>
                <input
                    type="text"
                    id="input"
                    onChange={() => handleSaveInput()}
                />
                <button type="submit">Add To Do</button>
            </form>
        </>
    );
}

export default TodoForm;
