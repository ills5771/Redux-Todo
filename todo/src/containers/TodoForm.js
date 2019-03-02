import React from "react";

function TodoForm(props) {
  return (
    <form>
      <input type="text" value={props.newTodo} onChange={props.handleChanges} />
      <button>Add Todo</button>
      <button>Clear Completed</button>
    </form>
  );
}

export default TodoForm;
