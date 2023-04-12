import styled from '@emotion/styled';
import {navigation} from '../tokens/Texts';
import BasicBox from './basic/BasicBox';
import {LinkButton} from './basic/LinkButton';
import {ContactUs} from './ContactUs';

const Wrapper = styled(BasicBox)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const NavbarButtons = () => {
  return (
    <Wrapper>
      {navigation.map(nav => {
        return <LinkButton href={nav.path} text={nav.name}></LinkButton>;
      })}
      <ContactUs />
    </Wrapper>
  );
};
