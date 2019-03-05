import React, { Component } from "react";
import TodoList from "./containers/TodoList";
import "./App.css";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

class App extends Component {
  render() {
    return (
      <div style={{ width: "1280" }} className="App">
        <AppBar color="primary" position="static" style={{ height: 64 }}>
          <Toolbar style={{ height: 64 }}>
            <Typography color="inherit">Redux Todo </Typography>
          </Toolbar>
        </AppBar>

        <TodoList />
      </div>
    );
  }
}

export default App;
