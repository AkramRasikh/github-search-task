import React from "react";
import styled from "styled-components";

interface StyledUnorderedListsProps {
  display?: string;
}

const StyledUnorderedLists = styled.ul<StyledUnorderedListsProps>`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const StyledListItem = styled.li<StyledUnorderedListsProps>`
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
`;

interface UnorderedListItemProps {
  dataTestId?: string;
  display?: string;
  className?: string;
  children: React.ReactNode;
}

interface ListItemProps {
  dataTestId?: string;
  children: React.ReactNode;
}

const UListItem = ({
  display,
  dataTestId,
  className,
  children,
}: UnorderedListItemProps) => (
  <StyledUnorderedLists
    data-testid={dataTestId}
    className={className}
    display={display}
  >
    {children}
  </StyledUnorderedLists>
);

export const ListItem = ({ dataTestId, children }: ListItemProps) => (
  <StyledListItem data-testid={dataTestId}>{children}</StyledListItem>
);

export default UListItem;
