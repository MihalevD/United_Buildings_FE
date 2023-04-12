import BasicBox from './basic/BasicBox';
import {TextContainer} from './basic/TextContainer';

const textStyles = {
  fontSize: '25px',
  lineHeight: '33px',
  color: '#3f4554',
};

export const ContactUs = () => {
  return (
    <BasicBox
      fullHeight
      direction='column'
      style={{
        borderLeft: '1px solid #3F4554',
        marginLeft: '-15px',
        paddingLeft: '15px',
        paddingRight: '104px',
      }}>
      <TextContainer text='Телефон за връзка' textStyles={textStyles} />
      <TextContainer
        text='0888 888 888'
        textStyles={{...textStyles, fontWeight: 'bold'}}
      />
    </BasicBox>
  );
};
