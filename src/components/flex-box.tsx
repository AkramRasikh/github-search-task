import React from "react";
import styled from "styled-components";

interface FlexboxProps {
  children: React.ReactNode;
  flexDirection?: string;
  justifyContent?: string;
}

interface StyledFlexboxProps {
  flexDirection?: string;
  justifyContent?: string;
}

const StyledFlexBox = styled.div<StyledFlexboxProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection && flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent && justifyContent};
`;

const FlexBox = ({ flexDirection, justifyContent, children }: FlexboxProps) => (
  <StyledFlexBox flexDirection={flexDirection} justifyContent={justifyContent}>
    {children}
  </StyledFlexBox>
);

export default FlexBox;
