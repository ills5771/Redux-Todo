import { ADD_TODO } from "../actions";

const initialState = {
  todos: [
    { task: "Rake leaves", completed: false },
    { task: "Laundry", completed: false }
  ]
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        task: action.payload,
        completed: false
      };
      return {
        ...state,
        todos: [...state.todos, newTodo]
      };
    default:
      return state;
  }
};
