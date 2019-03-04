export const ADD_TODO = "ADD_TODO";
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";
export const DELETE_TODO = "DELETE_TODO";

export function addNewTodo(newTodo) {
  return {
    type: ADD_TODO,
    payload: newTodo
  };
}

export function toggleCompleted(index) {
  return {
    type: TOGGLE_COMPLETED,
    payload: index
  };
}

export function deleteTodo(todo) {
  return {
    type: DELETE_TODO,
    payload: todo
  };
}
