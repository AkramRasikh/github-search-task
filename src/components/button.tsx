import React from "react";
import styled from "styled-components";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}

const StyledButton = styled.button`
  background: none;
  border: none;
  width: fit-content;
  cursor: pointer;
`;

const Button = ({ onClick, children, className }: ButtonProps) => (
  <StyledButton onClick={onClick} className={className}>
    {children}
  </StyledButton>
);

export default Button;
