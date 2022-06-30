import React from "react";
import TaskItem from "./TaskItem";

const TasksList = ({ tasksList, setSelectedTask, handleDeleteTask }) => {
  return (
    <>
      {tasksList.map((task) => (
        <TaskItem
          task={task}
          key={task.id}
          setSelectedTask={setSelectedTask}
          handleDeleteTask={handleDeleteTask}
        ></TaskItem>
      ))}
    </>
  );
};

export default TasksList;
