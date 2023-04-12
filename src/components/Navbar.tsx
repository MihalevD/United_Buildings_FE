import styled from '@emotion/styled';
import BasicBox from './basic/BasicBox';
import {Logo} from './basic/Logo';
import {NavbarButtons} from './NavbarButtons';

const Wrapper = styled(BasicBox)`
  position: relative;
  width: 100%;
  padding-top: 47px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Navbar = () => {
  return (
    <Wrapper>
      <Logo />
      <NavbarButtons />
    </Wrapper>
  );
};
