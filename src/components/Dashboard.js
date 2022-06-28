import React, { useState } from "react";
import TasksList from "./TasksList";
import TaskForm from "./TaskForm";
import tasks from "../data/tasks";
import { Container, Grid, Typography } from "@mui/material";

const Dashboard = () => {
  const [tasksList, setTasksList] = useState(tasks);

  console.log(tasksList);

  const handleCreateTask = (task) => {
    setTasksList([...tasksList, task]);
  };

  return (
    <Container>
      <Grid container px={{ xs: 10 }}>
        <Grid item xs={8}>
          <Container>
            <Typography variant="h3" gutterBottom>
              Tasks
            </Typography>
            <TasksList tasksList={tasksList}></TasksList>
          </Container>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h3" gutterBottom>
            Add Tasks
          </Typography>
          <TaskForm handleCreateTask={handleCreateTask}></TaskForm>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
