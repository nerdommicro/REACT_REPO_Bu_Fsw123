
import Todo from './Todo';

function Todolist({items, completetodo, deletetodo }) {   

    const listTodos =  items.map((todo) => {        
        return <Todo key={todo.id} item={todo} completetodo={completetodo} deletetodo={deletetodo} />                
    })

    return <ul>{listTodos}</ul> 
}
export default Todolist;