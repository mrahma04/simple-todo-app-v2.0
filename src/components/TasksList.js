import React from "react";
import TaskItem from "./TaskItem";

const TasksList = ({ tasksList, handleDeleteTask }) => {
  return (
    <>
      {tasksList.map((task) => (
        <TaskItem
          task={task}
          key={task.id}
          handleDeleteTask={handleDeleteTask}
        ></TaskItem>
      ))}
    </>
  );
};

export default TasksList;
