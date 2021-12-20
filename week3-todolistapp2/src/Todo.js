function Todo({item, completeTodo, deleteTodo}) {

    return (
        <li key={item.id}>
            <input type="checkbox" checked={item.isComplete} onChange={() => completeTodo(item.id)} />
            <span style={{textDecoration: item.isComplete ? "line-through" : ""}}>{item.text}</span>
            <button onClick={() => deleteTodo(item.id)}>Delete</button>
        </li>
    )
}

export default Todo