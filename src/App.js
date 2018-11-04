import React, { Component } from 'react';
import './App.css';
import AddButton from './components/AddButton';
import BodyPart from './components/BodyPart/BodyPart';

class App extends Component {
  state = {
    editingNewBodyPart: false,
    bodyParts: [],
    workouts: {}
  };
  render() {
    const { editingNewBodyPart, bodyParts } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h2>Simple Lifts Tracker</h2>
        </header>
        {bodyParts.map((bodyPart, index) => <BodyPart key={index} name={bodyPart} addNewWorkout={this.addNewWorkout}/>)}
        {editingNewBodyPart && <BodyPart
          isEditNameState={true}
          addNewBodyPart={this.addNewBodyPart}
          addNewWorkout={this.addNewWorkout}
        />}
        <AddButton
          text="Add body part"
          handleAddClick={() => this.setState({ editingNewBodyPart: true })}
        />
      </div>
    );
  }

  addNewBodyPart = name => {
    if (!this.state.bodyParts.includes(name)) {
      this.setState({
        bodyParts: [...this.state.bodyParts, name],
        editingNewBodyPart: false
      });
    }
  }

  addNewWorkout = (bodyPartName, workoutName) => {
    this.setState({
      workouts: {
        [bodyPartName]: {
          workoutName,
          weights: []
        }
      }
    });
  }
}

export default App;
