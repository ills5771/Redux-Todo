import React, { Component } from "react";
import TodoList from "./containers/TodoList";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div style={{ width: "675px", margin: "10% 25%" }} className="App">
        <h1> Redux Todo </h1>
        <TodoList />
      </div>
    );
  }
}

export default App;
