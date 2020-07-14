import React, { useState, Fragment } from "react";
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  ListItemSecondaryAction,
  IconButton
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditTwoToneIcon from "@material-ui/icons/EditTwoTone";
import Form from "../Form";

const myStyle = {
  Paper: {
    padding: 30,
    height: 550,
    overflowY: "auto"
  }
};

export default ({ category, exercises, onDelete, onEdit }) => {
  const [exercise, setExercise] = useState({});
  const [title, setTitle] = useState(rightPanelData.title);
  const [description, setDescription] = useState(rightPanelData.description);
  const [url, setUrl] = useState(
    "https://image.shutterstock.com/image-vector/happy-family-sport-activity-mother-600w-1479978965.jpg"
  );

  const [editMode, setEditMode] = useState(false);

  function handleExerciseItemClicked(title, description, url){
    setEditMode(false);
    setTitle(title);
    setDescription(description);
    url
      ? setUrl(url)
      : setUrl(
          "https://image.shutterstock.com/image-vector/happy-family-sport-activity-mother-600w-1479978965.jpg"
        );
  };

  return (
    <Grid container>
      {/* Left Panel */}
      <Grid item xs={12} sm={6}>
        <Paper style={myStyle.Paper} variant="outlined">
          {exercises.map(([group, exercises]) => {
            if (category === group || category === "all") {
              return (
                <Fragment>
                  <Typography
                    variant="h6"
                    style={{ textTransform: "capitalize" }}
                  >
                    {group}
                  </Typography>
                  <List>
                    {exercises.map(exercise => {
                      return (
                        <ListItem key={exercise.id}>
                          <ListItemText
                            onClick={() => {
                              handleExerciseItemClicked(
                                exercise.title,
                                exercise.description,
                                exercise.url
                              );
                            }}
                            primary={exercise.title}
                          />
                          <ListItemSecondaryAction>
                            <IconButton
                              onClick={() => {
                                setExercise(exercise);
                                setEditMode(true);
                              }}
                            >
                              <EditTwoToneIcon />
                            </IconButton>
                            <IconButton onClick={() => onDelete(exercise.id)}>
                              <DeleteIcon />
                            </IconButton>
                          </ListItemSecondaryAction>
                        </ListItem>
                      );
                    })}
                    <Divider />
                  </List>
                </Fragment>
              );
            }
            return null;
          })}
        </Paper>
      </Grid>

      {/*Right Panel  */}
      <Grid item xs={12} sm={6}>
        {editMode === true ? (
          <Form
            id={exercise.id}
            title={exercise.title}
            description={exercise.description}
            muscles={exercise.muscles}
            onEdit={onEdit}
            onFormSubmit={handleExerciseItemClicked}
          />
        ) : (
          <Fragment>
            <Paper style={myStyle.Paper} variant="outlined">
              <Typography variant="h3">{title}</Typography>
              <Typography variant="body1" style={{ marginTop: 15 }}>
                {description}
              </Typography>
              <img
                src={url}
                style={{ marginTop: 15 }}
                alt="Aimage"
                height="400"
                width="400"
              />
            </Paper>
          </Fragment>
        )}
      </Grid>
    </Grid>
  );
};

const rightPanelData = {
  title: "Welcome!",
  description: "Please select an exercise from a list of Exercises"
};
