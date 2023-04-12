import BasicBox from './basic/BasicBox';
import SearchIcon from '@mui/icons-material/Search';
const buttonStyles = {
  width: '106px',
  height: '77px',
  background: '#7A7D48 0% 0% no-repeat padding-box',
  borderRadius: '20px',
  marginLeft: '20px',
};
export const SearchButton = () => {
  return (
    <BasicBox style={buttonStyles} align='center' justify='center'>
      <SearchIcon sx={{fontSize: '50px', color: 'white'}} />
    </BasicBox>
  );
};
