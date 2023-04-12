import BasicBox from './basic/BasicBox';
import {MagnifyingGlass} from './basic/MagnifyingGlass';
const buttonStyles = {
  width: '106px',
  height: '77px',
  background: '#7A7D48 0% 0% no-repeat padding-box',
  borderRadius: '20px',
  marginLeft: '20px',
};
export const SearchButton = () => {
  return (
    <BasicBox style={buttonStyles}>
      <MagnifyingGlass />
    </BasicBox>
  );
};
