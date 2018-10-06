import React from "react";
import {
  DragSource,
  ConnectDragSource,
  DragSourceConnector,
  DragSourceMonitor,
  DragSourceCollector
} from "react-dnd";
import { AddSegmentToWorkoutEvent } from "./workout/Workout";
import Uuid from "Uuid";

interface CollectedProps {
  isDragging?: boolean;
  connectDragSource?: ConnectDragSource;
}

interface Props extends CollectedProps {
  name: string;
}

const dragSource = {
  beginDrag(props: Props) {
    return {
      event: new AddSegmentToWorkoutEvent(Uuid.generate())
    };
  }
};

const collect: DragSourceCollector<CollectedProps> = (
  connect: DragSourceConnector,
  monitor: DragSourceMonitor
) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
});

const Segment = ({ name, isDragging, connectDragSource }: Props) =>
  connectDragSource
    ? connectDragSource(
        <div style={{ opacity: isDragging ? 0.5 : 1 }}>{name}</div>
      )
    : null;

const DraggableSegment = DragSource("segment", dragSource, collect)(Segment);

export default DraggableSegment;
