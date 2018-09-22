import React, { Component } from "react";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import DraggableList from "./DraggableList";
import Workout from "./Workout";

class WorkoutType {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}

const allTypes = [
  new WorkoutType("1", "amrap"),
  new WorkoutType("2", "tabata")
];

interface Props {}

interface State {
  types: string[];
}

class Content extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      types: []
    };
  }

  handleDrop = (type: string) => {
    this.setState(prevState => ({ types: [...prevState.types, type] }));
  };

  render() {
    return (
      <div>
        <DraggableList items={allTypes} />
        <Workout types={this.state.types} onDrop={this.handleDrop} />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(Content);
