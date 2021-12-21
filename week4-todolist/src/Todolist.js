import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoList({items, completeTodo, deleteTodo, addTodo }) {
  const list = items.map((todo) => {
    return (
      <Todo
        key={todo.id}
        item={todo}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />
    );
  });

  return (
    <>
      <TodoForm addTodo={addTodo} />
      <ul>{list}</ul>
    </>
  );
}

export default TodoList;
