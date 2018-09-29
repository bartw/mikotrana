import React from "react";
import {
  DragSource,
  ConnectDragSource,
  DragSourceConnector,
  DragSourceMonitor,
  DragSourceCollector
} from "react-dnd";
import Card, { CardProps } from "./Card";
import Event from "./Event";
import styled from "./styled";

interface CollectedProps {
  isDragging?: boolean;
  connectDragSource?: ConnectDragSource;
}

interface Props extends CollectedProps, CardProps {
  dragType: string;
  eventSupplier: () => Event;
}

const dragSource = {
  beginDrag({ eventSupplier }: Props) {
    return {
      event: eventSupplier()
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

const WrappedCard = (props: Props) =>
  props.connectDragSource
    ? props.connectDragSource(
        <div>
          <Card {...props} />
        </div>
      )
    : null;

const StyledWrappedCard = styled(WrappedCard)`
  opacity: ${props => (props.isDragging ? 0.5 : 1)};
`;

const DraggableCard = DragSource(
  ({ dragType }: Props) => dragType,
  dragSource,
  collect
)(StyledWrappedCard);

export default DraggableCard;
