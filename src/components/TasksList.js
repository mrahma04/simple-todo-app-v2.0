import React from "react";
import TaskItem from "./TaskItem";

const TasksList = ({ tasksList }) => {
  return (
    <>
      {tasksList.map((task) => (
        <TaskItem task={task} key={task.id}></TaskItem>
      ))}
    </>
  );
};

export default TasksList;
