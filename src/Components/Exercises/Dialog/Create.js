import React, { Fragment } from "react";
import {
  MenuItem,
  InputLabel,
  FormControl,
  Select,
  Button,
  Dialog,
  TextField,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core";

class Create extends React.Component {
  state = {
    open: false,
    title: "",
    description: "",
    muscles: ""
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSubmit = () => {
    this.handleClose();
    const { title, description, muscles } = this.state;
    const exercise = {
      title,
      description,
      muscles
    };
    this.props.handleSubmit(exercise);
  };

  render() {
    const { open, title, description, muscles } = this.state;
    return (
      <Fragment>
        {/* Button Content */}
        <Button
          onClick={this.handleClickOpen}
          variant="contained"
          color="secondary"
        >
          Add
        </Button>
        {/* Dialog Box Content */}
        <Dialog open={open} close={this.handleClose}>
          <DialogTitle id="form-dialog-title">New Exercise</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Create a new Exercise by properly mentioning all of the details
              properly
            </DialogContentText>
            <form>
              <TextField
                fullWidth
                style={{ width: "500" }}
                onChange={event => {
                  this.setState({ title: event.target.value });
                }}
                variant="outlined"
                label="Title"
                value={title}
              />
              <FormControl>
                <InputLabel id="muscles">Muscles</InputLabel>
                <Select
                  style={{ minWidth: 120, marginBottom: 25 }}
                  labelId="muscles"
                  id="demo-simple-select"
                  value={muscles}
                  onChange={event =>
                    this.setState({ muscles: event.target.value })
                  }
                >
                  <MenuItem value="legs">LEGS</MenuItem>
                  <MenuItem value="arms">ARMS</MenuItem>
                  <MenuItem value="shoulders">SHOULDER</MenuItem>
                  <MenuItem value="back">BACK</MenuItem>
                  <MenuItem value="chest">CHEST</MenuItem>
                </Select>
              </FormControl>
              <TextField
                multiline
                fullWidth
                onChange={event =>
                  this.setState({ description: event.target.value })
                }
                variant="outlined"
                label="Description"
                value={description}
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleSubmit} variant="text">
              CREATE
            </Button>
            <Button onClick={this.handleClose} variant="text">
              CANCEL
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

export default Create;
