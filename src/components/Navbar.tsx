import styled from "@emotion/styled";
import BasicBox from "./basic/BasicBox";
import { Logo } from "./basic/Logo";
import { NavbarButtons } from "./NavbarButtons";

const Wrapper = styled(BasicBox)`
  position: relative;
  width: 100%;
  padding-top: 23px;
  padding-bottom: 23px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const Navbar = () => {
  return (
    <Wrapper>
      <BasicBox justify="space-between" width="90%" align="center">
        <Logo />
        <NavbarButtons />
      </BasicBox>
    </Wrapper>
  );
};
