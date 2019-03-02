import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { todoReducer } from "./reducers/todoReducer";
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(todoReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
