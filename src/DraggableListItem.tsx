import React from "react";
import {
  DragSource,
  ConnectDragSource,
  DragSourceConnector,
  DragSourceMonitor,
  DragSourceCollector
} from "react-dnd";

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
      name: props.name
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

const ListItem = ({ name, isDragging, connectDragSource }: Props) =>
  connectDragSource
    ? connectDragSource(
        <li style={{ opacity: isDragging ? 0.5 : 1 }}>{name}</li>
      )
    : null;

const DraggableListItem = DragSource("workoutType", dragSource, collect)(
  ListItem
);

export default DraggableListItem;
