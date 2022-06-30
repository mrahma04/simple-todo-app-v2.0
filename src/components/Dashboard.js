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
          ></TaskForm>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
