import React, { ReactText, ReactNode } from "react";
import ListItem from "./ListItem";

interface Props<T> {
  items: T[];
  keyProvider: (item: T) => ReactText;
  viewProvider: (item: T) => ReactNode;
}

function List <T>({ items, keyProvider, viewProvider }: Props<T>) {
  const listItems = items.map(item => (
    <ListItem key={keyProvider(item)}>{viewProvider(item)}</ListItem>
  ));
  return <ul>{listItems}</ul>;
}

export default List;
