import BasicBox from './basic/BasicBox';
import SearchIcon from '@mui/icons-material/Search';
import styled from '@emotion/styled';
const buttonStyles = {
  width: '106px',
  minWidth: '106px',
  height: '70px',
  background: '#7A7D48 0% 0% no-repeat padding-box',
  borderRadius: '20px',
  marginLeft: '20px',
  cursor: 'pointer',
};
type SearchButtonProps = {
  onClick: () => void;
};

const Wrapper = styled(BasicBox)`
  :hover {
    background: #434529 0% 0% no-repeat padding-box !important;
  }
`;
export const SearchButton = (props: SearchButtonProps) => {
  return (
    <Wrapper
      onClick={props.onClick}
      style={buttonStyles}
      align='center'
      justify='center'>
      <SearchIcon sx={{fontSize: '50px', color: 'white'}} />
    </Wrapper>
  );
};
