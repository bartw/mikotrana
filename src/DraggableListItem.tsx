import React from "react";
import { DragSource } from "react-dnd";

const dragSource = {
  beginDrag(props: any) {
    return {
      name: props.name
    };
  }
};

const collect = (connect: any, monitor: any) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
});

interface Props {
  name: string;
  isDragging: boolean;
  connectDragSource: any;
}

const ListItem = ({ name, isDragging, connectDragSource }: Props) =>
  connectDragSource(<li style={{ opacity: isDragging ? 0.5 : 1 }}>{name}</li>);

const DraggableListItem = DragSource("workoutType", dragSource, collect)(
  ListItem
);

export default DraggableListItem;
