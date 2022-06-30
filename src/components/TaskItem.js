import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  Divider,
} from "@mui/material";

const TaskItem = ({ task, handleDeleteTask }) => {
  return (
    <Card sx={{ width: "80%", marginBottom: "1rem" }} variant="outlined">
      <CardHeader title={task.title}></CardHeader>
      <Divider></Divider>
      <CardContent>
        <Typography variant="body2" sx={{ minHeight: "2rem" }}>
          {task.details}
        </Typography>
      </CardContent>
      <Divider></Divider>
      <CardActions>
        <Button
          variant="contained"
          size="small"
        >
          View
        </Button>
        <Button
          variant="contained"
          size="small"
          color="error"
          onClick={() => handleDeleteTask(task.id)}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default TaskItem;
