import React from "react";
import { AppBar, Toolbar, Typography, Grid } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import Create from "../Exercises/Dialog/Create";
import SportsGolfIcon from "@material-ui/icons/SportsGolf";

const Header = ({ handleExerciseSubmit }) => {
  return (
    <Grid container>
      <AppBar position="static">
        <Toolbar>
          <Grid item xs={10}>
            <IconButton>
              <SportsGolfIcon />
            </IconButton>
            <Typography
              style={{ display: "inline" }}
              variant="h6"
              color="inherit"
            >
              Reflectly : Your Personal Exercise Maker
            </Typography>
          </Grid>

          <Grid item>
            <Create
              style={{ display: "grid" }}
              handleSubmit={handleExerciseSubmit}
            />
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default Header;
