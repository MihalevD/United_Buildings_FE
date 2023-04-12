import BasicBox from './basic/BasicBox';
import styled from '@emotion/styled';

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
export const Ad = () => {
  return <Wrapper></Wrapper>;
};
