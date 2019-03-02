import React, { Component } from "react";
import TodoForm from "./TodoForm";

export default class TodoList extends Component {
  state = {
    newTodo: ""
  };

  handleChanges = ev => {
    this.setState({
      newTodo: ev.target.value
    });
  };
  render() {
    return (
      <div className="container">
        <div className="todo-list">
          {this.props.todos.map((todo, index) => {
            <h4 key={index}> {todo.task} </h4>;
          })}
        </div>
        <TodoForm
          newTodo={this.state.newTodo}
          handleChanges={this.handleChanges}
        />
      </div>
    );
  }
}
