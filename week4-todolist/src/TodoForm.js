
function TodoForm(addTodo) {
  var inputBox = document.getElementById("input");
 

  const handleSubmit = (event) => {
    event.preventDefault();  
    
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>ToDo App</h1>
        <h2>Add new todos via the input field:</h2>
        <input 
          type="text" name="input" />         
        <button type="submit" onClick={() => addTodo(inputBox.value)}>Add To Do</button>   
      </form>
    </>
  );
}


export default TodoForm;
