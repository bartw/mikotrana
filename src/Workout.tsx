import React from "react";
import { DropTarget } from "react-dnd";

interface Props {
  types: string[];
  onDrop: (type: string) => void;
}

const target = {
  drop(props: Props, monitor: any) {
    props.onDrop(monitor.getItem().name);
  }
};

const collect = (connect: any, monitor: any) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver()
});

interface WorkoutProps extends Props {
  connectDropTarget: any;
  isOver: boolean;
}

const Workout = ({ connectDropTarget, isOver, types }: WorkoutProps) =>
  connectDropTarget(
    <div style={{ border: isOver ? "3px solid white" : "1px solid white" }}>
      this is your workout: {types.join(", ")}
    </div>
  );

export default DropTarget("workoutType", target, collect)(Workout);
