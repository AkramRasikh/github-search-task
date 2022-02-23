import styled from "styled-components";
import Button from "./button";
import FlexBox from "./flex-box";

const StyledTabButton = styled(Button)<{ selected: boolean }>`
  border-bottom: ${({ selected }) => selected && "1px solid blue"};
`;

interface TabProp {
  onClick: () => void;
  text: string;
  selected: boolean;
}

interface TabsProps {
  tabs: TabProp[];
}

const Tabs = ({ tabs }: TabsProps) => (
  <FlexBox justifyContent='center'>
    {tabs.map(({ onClick, text, selected }, index) => (
      <StyledTabButton key={index} onClick={onClick} selected={selected}>
        {text}
      </StyledTabButton>
    ))}
  </FlexBox>
);

export default Tabs;
