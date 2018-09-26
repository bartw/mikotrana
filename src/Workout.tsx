import React from "react";
import {
  DropTarget,
  DropTargetMonitor,
  DropTargetConnector,
  ConnectDropTarget,
  DropTargetCollector
} from "react-dnd";

interface CollectedProps {
  connectDropTarget?: ConnectDropTarget;
  isOver?: boolean;
}

interface WorkoutProps extends CollectedProps {
  segments: string[];
  onDrop: (segment: string) => void;
}

const target = {
  drop(props: WorkoutProps, monitor: DropTargetMonitor) {
    props.onDrop(monitor.getItem().name);
  }
};

const collect: DropTargetCollector<CollectedProps> = (
  connect: DropTargetConnector,
  monitor: DropTargetMonitor
) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver()
});

const Workout = ({ connectDropTarget, isOver, segments }: WorkoutProps) =>
  connectDropTarget
    ? connectDropTarget(
        <div style={{ border: isOver ? "3px solid white" : "1px solid white" }}>
          this is your workout: {segments.join(", ")}
        </div>
      )
    : null;

export default DropTarget("segment", target, collect)(Workout);
