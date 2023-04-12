import styled from '@emotion/styled';
import {SearchButton} from './SearchButton';
import BasicBox from './basic/BasicBox';
import {TextContainer} from './basic/TextContainer';

const textStyles = {
  fontSize: '40px',
  lineHeight: '53px',
  color: '#3f4554',
};

const blockStyle = {
  background: '#FFFFFF',
  boxShadow: '0px 3px 6px #00000029',
  opacity: '0.82',
  borderRadius: '20px 0 20px 20px',
  borderTopRightRadius: '400px 100px',
};

const InputBlock = styled.input`
  width: 260px;
  height: 77px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #c9c7c7;
  border-radius: 20px;
  opacity: 1;
  padding-left: 35px;
  font-size: 20px;
  line-height: 27px;
  margin-right: 16px;

  ::placeholder {
    color: black;
    font-size: 20px;
    line-height: 27px;
  }
`;

export const SearchBar = () => {
  return (
    <BasicBox
      direction='column'
      style={blockStyle}
      justify='space-between'
      fullPadding={true}
      spacing='100px'>
      <TextContainer
        text='Намерете перфектният недвижим имот за Вас!'
        textStyles={textStyles}
      />
      <BasicBox>
        <InputBlock type='text' placeholder='Населено място' />
        <InputBlock type='text' placeholder='Тип имот' />
        <InputBlock type='text' placeholder='Цена' />
        <SearchButton />
      </BasicBox>
    </BasicBox>
  );
};
