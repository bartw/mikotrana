import React, { Component } from "react";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import List from "./List";
import WorkoutComponent from "./WorkoutComponent";
import SegmentComponent from "./Segment";
import { Workout, WorkoutEvent } from "./workout/Workout";
import DraggableCard from "./DraggableCard";
import { AddSegmentToWorkoutEvent } from "./workout/Workout";
import Uuid from "uuid";

class Segment {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name() {
    return this._name;
  }
}

interface Props {}

interface State {
  workout: Workout;
}

class Content extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      workout: Workout.empty()
    };
  }

  handleEvent = (event: WorkoutEvent) => {
    this.setState(prevState => ({ workout: prevState.workout.push(event) }));
  };

  render() {
    return (
      <div>
        <DraggableCard
          eventSupplier={() => new AddSegmentToWorkoutEvent(Uuid.generate())}
          dragType="segment"
          type="Segment"
          title="Interval"
          description="Exercise for a limited time"
        />
        <List
          items={[new Segment("Interval"), new Segment("Set")]}
          keyProvider={(segment: Segment) => segment.name}
          viewProvider={(segment: Segment) => (
            <SegmentComponent name={segment.name} />
          )}
        />
        <WorkoutComponent
          workout={this.state.workout}
          onEvent={this.handleEvent}
        />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(Content);
