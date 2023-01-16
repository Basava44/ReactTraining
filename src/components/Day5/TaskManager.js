import React, { useEffect, useState } from "react";

import Divider from "@mui/material/Divider";

import Input from "./Input";
import TaskItem from "./TaskItem";
import SnackBar from "./SnackBar";
import {
  deleteMethod,
  getMethod,
  postMethod,
  putMethod,
} from "./utilityFunctions";

import "./TaskManager.css";

const TaskManager = () => {
  const [snackOpen, setSnackOpen] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");
  const [buttonText, setButtonText] = useState("Add");
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editId, seteditId] = useState("");

  useEffect(() => {
    getMethod().then((res) => {
      setTasks(res.data);
    });
  }, []);

  const getLists = () => {
    getMethod().then((res) => {
      setTasks(res.data);
    });
  };

  const updateTasks = (updateType, data) => {
    switch (updateType) {
      case "add": {
        postMethod(data).then((res) => {
          getLists();
          setSnackOpen(false);
          openSnackBar("Item Addedd Successfully");
          setSnackOpen(true);
        });
        break;
      }
      case "complete": {
        putMethod(data).then((res) => {
          getLists();
          openSnackBar("Item Edited Successfully");
          setSnackOpen(true);
        });
        break;
      }
      case "edit": {
        setButtonText("edit");
        setInputValue(data.name);
        seteditId(data._id);
        break;
      }
      case "editTask": {
        putMethod(data).then((res) => {
          getLists();
          setButtonText("add");
        });
        break;
      }
      case "delete":
        deleteMethod(data).then((res) => {
          getLists().then((res) => {
            setSnackOpen(true);
            openSnackBar("Item Deleted Successfully");
          });
        });
        break;
      default:
        break;
    }
  };

  const openSnackBar = (message) => {
    setSnackMessage(message);
  };

  const tasksCompleted = () => {
    let count = 0;
    for (const i of tasks)
      if (i.completed) {
        count++;
      }

    return count;
  };

  return (
    <div className="container">
      <SnackBar snackOpen={snackOpen} message={snackMessage} />
      <h2 className="title">Task Manager</h2>
      <Input
        updateTasks={updateTasks}
        buttonText={buttonText}
        inputValue={inputValue}
        editId={editId}
      />
      <Divider variant="fullWidth" className="divider" />
      {tasks.length > 0 ? (
        <TaskItem tasks={tasks} updateTasks={updateTasks} />
      ) : (
        <h4 className="alignCenter">No Tasks Found!</h4>
      )}
      {tasks.length > 0 ? (
        <p className="result">
          {tasksCompleted()}/{tasks.length} Tasks Completed
        </p>
      ) : (
        <></>
      )}
    </div>
  );
};

export default TaskManager;
