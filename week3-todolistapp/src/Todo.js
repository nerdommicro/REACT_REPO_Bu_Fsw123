
function Todo(key, completetodo, text, deletetodo) {
return (
    <li key={key}>
    <input type="checkbox" checked={completetodo} onChange={() => completetodo(key)} /> 
    <span style={{textDecoration:{completetodo} ? "line-through":''}}>{text}</span>
    <button onClick = {() => deletetodo(key)}>x</button>
    </li>
);
}
export default Todo;