import React from "react";
import { TextField, Paper, Button, Grid } from "@material-ui/core";

function TodoForm(props) {
  return (
    <Paper style={{ margin: 16, padding: 16 }}>
      <Grid container>
        <Grid xs={10} md={11} item style={{ paddingRight: 16 }}>
          <TextField
            placeholder="Add Todo"
            value={props.newTodo}
            onChange={props.handleChanges}
            fullWidth
          />
        </Grid>
        <Grid xs={2} md={1} item>
          <Button
            fullWidth
            color="secondary"
            variant="outlined"
            onClick={props.addTodo}
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoForm;
