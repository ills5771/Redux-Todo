import React from "react";
import { connect } from "react-redux";
import { addNewTodo, toggleCompleted, deleteTodo } from "../actions";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

class TodoList extends React.Component {
  state = {
    newTodo: ""
  };

  addTodo = ev => {
    ev.preventDefault();
    this.props.addNewTodo(this.state.newTodo);
    this.setState({
      newTodo: ""
    });
  };
  toggleCompleted = index => {
    this.props.toggleCompleted(index);
  };

  handleChanges = ev => {
    this.setState({
      newTodo: ev.target.value
    });
  };

  deleteTodo = ev => {
    ev.preventDefault();
    this.props.deleteTodo(this.state.newTodo);
  };

  render() {
    return (
      <div style={{ margin: "5% 20%" }} className="container">
        <div className="todo-list">
          {this.props.todos.map((todo, index) => (
            <Todo
              key={index}
              todo={todo}
              toggleCompleted={() => this.toggleCompleted(index)}
              deleteTodo={this.deleteTodo}
            />
          ))}
        </div>
        <TodoForm
          addTodo={this.addTodo}
          newTodo={this.state.newTodo}
          handleChanges={this.handleChanges}
        />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(
  mapStateToProps,
  { addNewTodo, toggleCompleted, deleteTodo }
)(TodoList);
