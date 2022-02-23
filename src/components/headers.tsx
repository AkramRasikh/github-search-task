import React from "react";
import styled from "styled-components";

interface HeaderProps {
  children: React.ReactNode;
}

const StyledHeader = styled.h1`
  text-align: center;
`;

const Header = ({ children }: HeaderProps) => (
  <StyledHeader>{children}</StyledHeader>
);

export default Header;
