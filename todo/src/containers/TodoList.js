import React from "react";
import { connect } from "react-redux";
import { addNewTodo } from "../actions";
import TodoForm from "./TodoForm";

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

  handleChanges = ev => {
    this.setState({
      newTodo: ev.target.value
    });
  };
  render() {
    return (
      <div className="container">
        <div className="todo-list">
          {this.props.todos.map((todo, index) => (
            <h4 key={index}>{todo.task}</h4>
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
  { addNewTodo }
)(TodoList);
