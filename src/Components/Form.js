import React from "react";
import {
  MenuItem,
  InputLabel,
  FormControl,
  Select,
  TextField,
  Button,
  Typography,
  Paper
} from "@material-ui/core";
export default class Form extends React.Component {
  state = {
    title: this.props.title,
    description: this.props.description,
    muscles: this.props.muscles
  };

  render() {
    const { title, muscles, description } = this.state;
    return (
      <Paper>
        <form
          onSubmit={event => {
            event.preventDefault();
            this.props.onFormSubmit(this.state.title, this.state.description);
            const { title, muscles, description } = this.state;
            this.props.onEdit(this.props.id, title, muscles, description);
          }}
          style={{ marginTop: 50, padding: 50 }}
        >
          <Typography variant="h5" style={{ marginBottom: 25 }}>
            Update Exercise :{" "}
          </Typography>
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
              onChange={event => this.setState({ muscles: event.target.value })}
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
          <Button
            type="submit"
            style={{ margin: 10 }}
            variant="contained"
            color="secondary"
          >
            UPDATE
          </Button>
        </form>
      </Paper>
    );
  }
}
