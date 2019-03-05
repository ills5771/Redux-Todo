import React from "react";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";
import {
  List,
  ListItem,
  Checkbox,
  IconButton,
  ListItemText,
  ListItemSecondaryAction
} from "@material-ui/core";

export default function Todo(props) {
  return (
    <ListItem>
      <Checkbox
        checked={props.checked}
        onClick={props.toggleCompleted}
        disableRipple
      />
      <ListItemText primary={props.todo.task} />
      <ListItemSecondaryAction>
        <IconButton onClick={props.deleteTodo} aria-label="Delete Todo">
          <DeleteOutlined />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
