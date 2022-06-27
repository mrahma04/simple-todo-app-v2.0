import React from "react";
import TasksList from "./TasksList";
import TaskForm from "./TaskForm";
import { Container, Grid, Typography } from "@mui/material";

const Dashboard = () => {
  return (
    <Container>
      <Grid container px={{ xs: 10 }}>
        <Grid item xs={8}>
          <Container>
            <Typography variant="h3" gutterBottom>Tasks</Typography>
            <TasksList></TasksList>
          </Container>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h3" gutterBottom>
            Add Tasks
          </Typography>
          <TaskForm></TaskForm>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
