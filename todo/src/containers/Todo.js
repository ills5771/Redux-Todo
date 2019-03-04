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
      <Checkbox disableRipple />
      <ListItemText primary={props.todo.task} />
      <ListItemSecondaryAction>
        <IconButton aria-label="Delete Todo">
          <DeleteOutlined />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
