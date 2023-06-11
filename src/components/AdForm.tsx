import styled from "@emotion/styled";
import BasicBox from "./basic/BasicBox";
import { ImageContainer } from "./basic/ImageContainer";
import { LightButton } from "./basic/LightButton";

export const AdForm = () => {
  return (
    <>
      <BasicBox fullWidth bottom="8px" justify="space-between">
        <InputBlock placeholder="Твоето име" style={{ width: "40%" }} />
        <InputBlock placeholder="Твоя телефон" style={{ width: "45%" }} />
      </BasicBox>
      <BasicBox fullWidth bottom="8px">
        <InputBlock placeholder="Твоя имейл" style={{ width: "100%" }} />
      </BasicBox>
      <CustomTextArea placeholder="Въведи съобщението си" />
      <BasicBox fullWidth justify="center" top="16px">
        <LightButton>Изпрати</LightButton>
      </BasicBox>
    </>
  );
};
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
