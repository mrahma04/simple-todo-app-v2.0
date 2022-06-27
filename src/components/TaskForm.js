import React, { useState } from "react";
import { Box, TextField, Button, CardActions } from "@mui/material";

const TaskForm = () => {
  const [inputValues, setInputValues] = useState({
    title: "",
    details: "",
  });

  const updateValues = (event) => {
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("clicked Save", inputValues);
  };

  return (
    <Box component="form" onSubmit={(event) => handleSubmit(event)}>
      <TextField
        label="Task Title"
        size="small"
        margin="none"
        sx={{ marginBottom: "1rem" }}
        fullWidth
        name="title" // name and value are required for controlled component
        value={inputValues.title} // controlled component uses 'useState
        onChange={updateValues}
      ></TextField>
      <TextField
        label="Task Details"
        size="small"
        margin="none"
        multiline
        rows={4}
        fullWidth
        name="details" // name and value are required for controlled component
        value={inputValues.details} // controlled component uses 'useState'
        onChange={(event) => updateValues(event)} // both syntax are valid and will pass the 'click event'
      ></TextField>
      {/* default padding for CardActions is 8px all-around */}
      <CardActions sx={{ paddingLeft: "0" }}>
        <Button variant="contained" size="small" type="submit">
          Save
        </Button>
      </CardActions>
    </Box>
  );
};

export default TaskForm;
