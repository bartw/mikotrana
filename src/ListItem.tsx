import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ListItem = ({ children }: Props) => <li>{children}</li>;

export default ListItem;
