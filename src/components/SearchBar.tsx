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
  background: 'rgba(255, 255, 255, 0.82)',
  boxShadow: '0px 3px 6px #00000029',
  borderRadius: '20px 0 20px 20px',
  clipPath: 'polygon(0 0, 0 100%, 100% 100%, 100% 25%, 89% 0)',
};

const InputBlock = styled.input`
  width: 225px;
  height: 77px;
  background: #ffffff;
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
      spacing='30px'
      bottom='53px'
      left='75px'
      right='53px'>
      <BasicBox fullWidth align='center' direction='column'>
        <TextContainer
          text='Намерете перфектният недвижим'
          textStyles={textStyles}
        />
        <TextContainer text='имот за Вас!' textStyles={textStyles} />
      </BasicBox>
      <BasicBox top='53px'>
        <InputBlock type='text' placeholder='Населено място' />
        <InputBlock type='text' placeholder='Тип имот' />
        <InputBlock type='text' placeholder='Цена' />
        <SearchButton />
      </BasicBox>
    </BasicBox>
  );
};
