import React, { Fragment } from "react";

import { Header, Footer } from "./Layouts";
import Exercise from "./Exercises";
import { muscles, exercises } from "../store";
import Create from "./Exercises/Dialog/Create";

class App extends React.Component {
  state = { exercises, category: "all" };

  getExerciseByMuscles() {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;
        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise];

        return exercises;
      }, {})
    );
  }

  handleCategorySelected = category => {
    this.setState({ category });
  };

  handleExerciseSubmit = exercise => {
    exercise.id = exercise.title;
    this.setState(({ exercises }) => {
      return exercises.push(exercise);
    });
  };

  handleDeleteIcon = id => {
    const array = this.state.exercises.filter(exercise => exercise.id !== id);
    this.setState({ exercises: array });
  };

  handleEditIcon = (id, title, muscles, description) => {
    let array = this.state.exercises.map(exercise => {
      if (exercise.id === id) {
        exercise.title = title;
        exercise.description = description;
        exercise.muscles = muscles;
      }
      return exercise;
    });
    this.setState({ exercises: array });
  };

  render() {
    const exercises = this.getExerciseByMuscles();

    return (
      <Fragment>
        <Header handleExerciseSubmit={this.handleExerciseSubmit} />

        <Exercise
          onDelete={this.handleDeleteIcon}
          category={this.state.category}
          exercises={exercises}
          onEdit={this.handleEditIcon}
        />

        <Footer
          category={this.state.category}
          muscles={muscles}
          onSelect={this.handleCategorySelected}
        />
      </Fragment>
    );
  }
}

export default App;
