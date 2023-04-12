import BasicBox from './basic/BasicBox';
import styled from '@emotion/styled';
import {ImageContainer} from './basic/ImageContainer';
import house from '../img/house.png';

const Wrapper = styled(BasicBox)`
  position: absolute;
  width: 70%;
  background: #7a7d48 0% 0% no-repeat padding-box;
  border: 1px solid #707070;
  height: 343px;
  border-radius: 20px;
  clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 25%, 89% 0);
  top: -120%;
`;

const Text = styled.span`
  text-align: left;
  font-size: 30px;
  line-height: 20px;
  letter-spacing: 0px;
  color: #cdd5b1;
  opacity: 1;
`;
export const Ad = () => {
  return (
    <Wrapper>
      <BasicBox top='20px' style={{marginLeft: '100px'}}>
        <ImageContainer imageSrc={house} />
        <BasicBox top='60px'>
          <Text>
            С <span style={{fontWeight: 'bold'}}>United Buildings</span> винаги
            е лесно
          </Text>
        </BasicBox>
      </BasicBox>
    </Wrapper>
  );
};
