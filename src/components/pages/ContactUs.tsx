import styled from '@emotion/styled';
import BasicBox from '../basic/BasicBox';
import {TextContainer} from '../basic/TextContainer';

const textStyles = {
  fontSize: '20px',
  lineHeight: '33px',
  color: '#3f4554',
};

const Wrapper = styled(BasicBox)`
  border-left: 1px solid #3f4554;
  margin-left: -15px;
  padding-left: 15px;
  margin-right: 100px;
  @media (max-width: 1400px) {
    margin-right: 30px;
  }
  @media (max-width: 1200px) {
    font-size: 18px !important;
  }
`;

export const ContactUs = () => {
  return (
    <Wrapper fullHeight direction='column'>
      <TextContainer text='Телефон за връзка' textStyles={textStyles} />
      <TextContainer
        text='0888 888 888'
        textStyles={{...textStyles, fontWeight: 'bold'}}
      />
    </Wrapper>
  );
};
