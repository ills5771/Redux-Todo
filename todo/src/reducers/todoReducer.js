import { ADD_TODO, TOGGLE_COMPLETED, DELETE_TODO } from "../actions";

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
    case TOGGLE_COMPLETED:
      return {
        ...state,
        todos: state.todos.map((todo, index) =>
          action.payload === index
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.completed === false)
      };

    default:
      return state;
  }
};
