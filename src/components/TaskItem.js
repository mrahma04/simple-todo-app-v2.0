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

const TaskItem = () => {
  return (
    <Card sx={{ width: "80%" }} variant="outlined">
      <CardHeader title="Task #1"></CardHeader>
      <Divider></Divider>
      <CardContent>
        <Typography variant="body2" sx={{ minHeight: "2rem" }}>
          Task #1 Details
        </Typography>
      </CardContent>
      <Divider></Divider>
      <CardActions>
        <Button variant="contained" size="small" onClick={() => console.log('clicked View')}>
          View
        </Button>
        <Button variant="contained" size="small" color='error' onClick={() => console.log('clicked Delete')}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default TaskItem;
