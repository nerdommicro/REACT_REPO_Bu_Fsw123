
function Todo(item, completetodo, deletetodo) {
return (
    <li key={item.id}>
        <input type="checkbox" checked={item.isCompleted} onChange={() => completetodo(item.id)} /> 
        <span style={{textDecoration:item.isCompleted ? "line-through":''}}>{item.text}</span>
        <button onClick = {() => deletetodo(item.id)}>x</button>
    </li>
);
}
export default Todo;