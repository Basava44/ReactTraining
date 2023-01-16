import React, { useEffect, useState } from "react";

import { Button, TextField } from "@mui/material";

const Input = (props) => {
  const [task, setTask] = useState(props.inputValue);
  const addTask = (event) => {
    event.preventDefault();
    if (props.buttonText === "edit") {
      props.updateTasks("editTask", {
        name: task,
        completed: false,
        _id: props.editId,
      });
    } else {
      props.updateTasks("add", { name: task, completed: false });
    }
    setTask("");
  };

  const handelInput = (event) => {
    setTask(event.target.value);
  };

  useEffect(() => {
    setTask(props.inputValue);
  }, [props.inputValue]);

  return (
    <form onSubmit={addTask}>
      <TextField
        id="outlined-basic"
        variant="outlined"
        placeholder="Add Task"
        InputProps={{
          endAdornment: (
            <Button type="submit" variant="contained" disabled={task === ""}>
              {props.buttonText}
            </Button>
          ),
        }}
        color="info"
        onChange={handelInput}
        value={task}
        autoComplete="off"
      />
    </form>
  );
};

export default Input;
