import BasicBox from './basic/BasicBox';
import {useState} from 'react';
import Spacings from '../tokens/Spacings';
import styled from '@emotion/styled';

export const MobileHeader = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleDrawer = () => (event: any) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setIsToggled(!isToggled);
  };
  return (
    <BasicBox fullWidth justify='space-between'>
      MOBILE HEADER WOW
    </BasicBox>
  );
};

const MenuItems = styled(BasicBox)`
  position: absolute;
  right: ${Spacings.medium};
  top: ${Spacings.bigger};
`;
const OptionWrapper = styled(BasicBox)`
  cursor: pointer;
`;
