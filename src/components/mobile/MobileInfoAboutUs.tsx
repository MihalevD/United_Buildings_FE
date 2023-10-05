import styled from "@emotion/styled";
import BasicBox from "../basic/BasicBox";
import { TextContainer } from "../basic/TextContainer";

const CustomText = styled(TextContainer)`
  text-align: center;
  font: normal normal 600 20px/27px Segoe UI;
  letter-spacing: 0px;
  color: rgba(0, 0, 0, 1);
`;

export const MobileInfoAboutUs = () => {
  return (
    <BasicBox
      justify="space-between"
      top="54px"
      bottom="54px"
      align="center"
      fullWidth
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
        <CustomText text="200+" />
        <CustomText text="Клиенти" />
      </BasicBox>
    </BasicBox>
  );
};
