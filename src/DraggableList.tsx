import React from "react";
import DraggableListItem from "./DraggableListItem";

interface DraggableListItemType {
  id: string;
  name: string;
}

const DraggableList = ({ items }: { items: DraggableListItemType[] }) => {
  const listItems = items.map(({ id, name }) => (
    <DraggableListItem key={id} name={name} />
  ));
  return <ul>{listItems}</ul>;
};

export default DraggableList;
