import BasicBox from './basic/BasicBox';
import {TextContainer} from './basic/TextContainer';
import {Carousel} from './carousel/Carousel';

const textStyles = {
  color: 'black',
  fontSize: '30px',
  lineHeight: '40px',
  fontWeight: 'bold',
};

export const SuggestionsBar = () => {
  return (
    <BasicBox
      top='60px'
      fullWidth
      bottom='92px'
      style={{
        background: '#7A7D48',
        border: '1px solid #696969',
        marginLeft: '-2px',
      }}>
      <BasicBox left='140px' direction='column'>
        <BasicBox bottom='30px'>
          <TextContainer text='Нови предложения' textStyles={textStyles} />
        </BasicBox>
        <Carousel />
      </BasicBox>
    </BasicBox>
  );
};
