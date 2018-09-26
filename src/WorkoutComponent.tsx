import React from "react";
import {
  DropTarget,
  DropTargetMonitor,
  DropTargetConnector,
  ConnectDropTarget,
  DropTargetCollector
} from "react-dnd";
import {
  Workout,
  WorkoutEvent,
  RemoveSegmentFromWorkoutEvent
} from "./workout/Workout";

interface CollectedProps {
  connectDropTarget?: ConnectDropTarget;
  isOver?: boolean;
}

interface WorkoutProps extends CollectedProps {
  workout: Workout;
  onEvent: (event: WorkoutEvent) => void;
}

const target = {
  drop(props: WorkoutProps, monitor: DropTargetMonitor) {
    props.onEvent(monitor.getItem().event);
  }
};

const collect: DropTargetCollector<CollectedProps> = (
  connect: DropTargetConnector,
  monitor: DropTargetMonitor
) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver()
});

const WorkoutComponent = ({
  connectDropTarget,
  isOver,
  workout,
  onEvent
}: WorkoutProps) =>
  connectDropTarget
    ? connectDropTarget(
        <div style={{ border: isOver ? "3px solid white" : "1px solid white" }}>
          this is your workout:
          <ul>
            {workout.state().map(segment => (
              <li key={segment}>
                <span>{segment}</span>
                <span
                  onClick={() =>
                    onEvent(new RemoveSegmentFromWorkoutEvent(segment))
                  }
                >
                  X
                </span>
              </li>
            ))}
          </ul>
        </div>
      )
    : null;

export default DropTarget("segment", target, collect)(WorkoutComponent);
