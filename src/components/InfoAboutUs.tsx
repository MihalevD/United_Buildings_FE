import styled from "@emotion/styled";
import BasicBox from "./basic/BasicBox";
import { TextContainer } from "./basic/TextContainer";

const CustomText = styled(TextContainer)`
  text-align: center;
  font: normal normal 600 30px/40px Segoe UI;
  letter-spacing: 0px;
  color: #7a7d48;
`;

export const InfoAboutUs = () => {
  return (
    <BasicBox
      justify="space-between"
      top="54px"
      bottom="54px"
      align="center"
      style={{ width: "40%" }}
    >
      <BasicBox direction="column" align="center">
        <CustomText text="700+" />
        <CustomText text="Имоти" />
      </BasicBox>
      <BasicBox direction="column" align="center">
        <CustomText text="10+" />
        <CustomText text="Локации" />
      </BasicBox>
      <BasicBox direction="column" align="center">
        <CustomText text="20+" />
        <CustomText text="Клиенти" />
      </BasicBox>
    </BasicBox>
  );
};
