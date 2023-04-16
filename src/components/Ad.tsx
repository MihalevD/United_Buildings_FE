import BasicBox from './basic/BasicBox';
import styled from '@emotion/styled';
import {ImageContainer} from './basic/ImageContainer';

const Wrapper = styled(BasicBox)`
  position: absolute;
  width: 75vw;
  background: #7a7d48 0% 0% no-repeat padding-box;
  border: 1px solid #707070;
  height: 500px;
  border-radius: 20px;
  clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 25%, 89% 0);
  top: -180%;
`;

const Text = styled.span`
  text-align: left;
  font-size: 30px;
  line-height: 20px;
  letter-spacing: 0px;
  color: #cdd5b1;
  opacity: 1;
`;

const SecondaryText = styled.span`
  text-align: center;
  font: normal normal normal 20px/27px Segoe UI;
  letter-spacing: 0px;
  color: #cdd5b1;
  opacity: 1;
  padding-top: 10px;
  padding-bottom: 4px;
`;

const InputBlock = styled.input`
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #707070;
  border-radius: 30px;
  padding-left: 30px;
  font: normal normal 300 18px/24px Segoe UI;
  letter-spacing: 0px;
  color: #696969;
  padding-top: 16px;
  padding-bottom: 16px;
  ::placeholder {
    font: normal normal 300 18px/24px Segoe UI;
    letter-spacing: 0px;
    color: #696969;
  }
  outline-style: none;
`;

const CustomTextArea = styled.textarea`
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #707070;
  width: 100%;
  height: 100px;
  resize: none;
  outline-style: none;
  border-radius: 30px;
  padding-left: 30px;
  padding-top: 12px;
  box-sizing: border-box;
  font: normal normal 300 18px/24px Segoe UI;
  letter-spacing: 0px;
  color: #696969;
`;
export const Ad = () => {
  return (
    <Wrapper>
      <BasicBox top='20px' right='96px' fullWidth justify='flex-end'>
        <BasicBox
          style={{width: '60%'}}
          top='60px'
          direction='column'
          align='flex-start'>
          <Text>
            С <span style={{fontWeight: 'bold'}}>United Buildings</span> винаги
            е лесно
          </Text>
          <SecondaryText>
            <span>Направи запитване</span>
          </SecondaryText>
          <BasicBox fullWidth bottom='8px' justify='space-between'>
            <InputBlock placeholder='Твоето име' style={{width: '40%'}} />
            <InputBlock placeholder='Твоя телефон' style={{width: '45%'}} />
          </BasicBox>
          <BasicBox fullWidth bottom='8px'>
            <InputBlock placeholder='Твоя имейл' style={{width: '100%'}} />
          </BasicBox>
          <CustomTextArea placeholder='Въведи съобщението си' />
          <BasicBox fullWidth justify='center' top='16px'>
            <CustomButton>Изпрати</CustomButton>
          </BasicBox>
        </BasicBox>
      </BasicBox>
    </Wrapper>
  );
};

const CustomButton = styled.button`
  width: 229px;
  height: 56px;
  background: #cdd5b1 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 30px;
  text-align: center;
  font: normal normal 600 20px/27px Segoe UI;
  letter-spacing: 0px;
  color: #3f4554;
  border: none;
  cursor: pointer;
  :hover {
    background: #dce2c5 0% 0% no-repeat padding-box !important;
  }
`;
