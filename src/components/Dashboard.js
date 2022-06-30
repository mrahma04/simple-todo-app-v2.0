import React, { useState } from "react";
import TasksList from "./TasksList";
import TaskForm from "./TaskForm";
import tasks from "../data/tasks";
import { Container, Grid, Typography } from "@mui/material";

const Dashboard = () => {
  const [tasksList, setTasksList] = useState(tasks);

  const handleCreateTask = (task) => {
    setTasksList([...tasksList, task]);
  };

  const handleDeleteTask = (id) => {
    setTasksList(tasksList.filter((task) => task.id !== id));
  };

  const [selectedTask, setSelectedTask] = useState(null);

  const updateSelectedTask = (selectedTask) => {
    setTasksList(
      tasksList.map((task) =>
        task.id === selectedTask.id ? selectedTask : task
      )
    );
    setSelectedTask(null); // need to set the state back to 'null', otherwise form will remain populated with original state
  };

  console.log("RED", selectedTask);

  return (
    <Container>
      <Grid container px={{ xs: 10 }}>
        <Grid item xs={8}>
          <Container>
            <Typography variant="h3" gutterBottom>
              Tasks List
            </Typography>
            <TasksList
              tasksList={tasksList}
              setSelectedTask={setSelectedTask}
              handleDeleteTask={handleDeleteTask}
            ></TasksList>
          </Container>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h3" gutterBottom>
            Add Tasks
          </Typography>
          <TaskForm
            handleCreateTask={handleCreateTask}
            selectedTask={selectedTask}
            key={selectedTask ? selectedTask.id : null}
            updateSelectedTask={updateSelectedTask}
          ></TaskForm>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
