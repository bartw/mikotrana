import React, { Component } from "react";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import List from "./List";
import Workout from "./Workout";
import SegmentComponent from "./Segment";

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
  segments: string[];
}

class Content extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      segments: []
    };
  }

  handleDrop = (segment: string) => {
    this.setState(prevState => ({ segments: [...prevState.segments, segment] }));
  };

  render() {
    return (
      <div>
        <List
          items={[new Segment("Interval"), new Segment("Set")]}
          keyProvider={(segment: Segment) => segment.name}
          viewProvider={(segment: Segment) => (
            <SegmentComponent name={segment.name} />
          )}
        />
        <Workout segments={this.state.segments} onDrop={this.handleDrop} />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(Content);
