import React from "react";
import styled, { StyledProps } from "./styled";

export interface CardProps extends StyledProps {
  type: string;
  title: string;
  description: string;
  link?: string;
}

const Card = ({ className, type, title, description, link }: CardProps) => (
  <div className={className}>
    <div>{type}</div>
    <div>{title}</div>
    <div>{description}</div>
    {link && <div>{link}</div>}
  </div>
);

const Styled = styled(Card)`
  display: inline-block;
  border: 1px solid #cccccc;
  padding: 10px;
`;

export default Styled;
