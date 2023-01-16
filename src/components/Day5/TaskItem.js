import React from "react";

import { Card, CardActions, CardContent } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeIcon from "@mui/icons-material/Mode";
import DoneIcon from "@mui/icons-material/Done";

import "./TaskItem.css";
import { DoneAll } from "@mui/icons-material";

const TaskItem = (props) => {
  const manipulateTask = (type, data) => {
    switch (type) {
      case "delete":
        props.updateTasks(type, data);
        break;
      case "edit":
        props.updateTasks(type, data);
        break;
      case "complete":
        props.updateTasks(type, data);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      {props.tasks.map((task) => {
        return (
          <Card
            className={`item ${
              task.completed ? "taskCompleted" : "taskIncomplete"
            }`}
            key={task._id}
          >
            <CardContent sx={{ padding: "4px !important" }}>
              {task.name}
            </CardContent>
            <CardActions>
              {task.completed ? (
                <DoneAll
                  color="disabled"
                  fontSize="small"
                  className="icon"
                  style={{ cursor: "not-allowed" }}
                />
              ) : (
                <DoneIcon
                  color="error"
                  fontSize="small"
                  className="icon"
                  onClick={() => {
                    manipulateTask("complete", {
                      name: task.name,
                      completed: true,
                      _id: task._id,
                    });
                  }}
                />
              )}
              <ModeIcon
                color="primary"
                fontSize="small"
                className="icon"
                onClick={() => {
                  manipulateTask("edit", task);
                }}
              />
              <DeleteIcon
                color="error"
                fontSize="small"
                className="icon"
                onClick={() => {
                  manipulateTask("delete", task._id);
                }}
              />
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
};

export default TaskItem;
