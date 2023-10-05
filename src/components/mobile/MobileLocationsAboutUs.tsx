import styled from "@emotion/styled";
import BasicBox from "../basic/BasicBox";
import img from "../../img/about/location.jpg";
import { TextContainer } from "../basic/TextContainer";

const CustomText = styled(TextContainer)`
  text-align: left;
  font: normal normal 600 20px/28px Segoe UI;
  letter-spacing: 0px;
  color: rgba(112, 112, 112, 1);
`;

const HeaderText = styled(TextContainer)`
  text-align: left;
  font: normal normal 600 18px/28px Segoe UI;
  letter-spacing: 0px;
  color: #3f4554;
`;

const SubHeaderText = styled(TextContainer)`
  text-align: left;
  font: normal normal normal 16px/30px Segoe UI;
  letter-spacing: 0px;
  color: #3f4554;
  opacity: 1;
`;

export const MobileLocationsAboutUs = () => {
  return (
    <>
      <BasicBox top="48px" bottom="16px" fullWidth>
        <CustomText text="НАМЕРЕТЕ НИ" />
      </BasicBox>
      <img
        src={img}
        style={{
          width: "100%",
          border: "1px solid #707070",
          borderRadius: "30px",
        }}
      ></img>
      <BasicBox direction="column">
        <BasicBox direction="column" bottom="26px">
          <HeaderText text="Офис" />
          <SubHeaderText text="бул. Даме Груев 1, 8001 Бургас, България" />
        </BasicBox>

        <BasicBox direction="column" fullWidth>
          <HeaderText text="Работно време" />
          <BasicBox fullWidth justify="space-between">
            <SubHeaderText text="Понеделник - Събота" />
            <SubHeaderText text="09:00 - 19:00" />
          </BasicBox>
          <BasicBox fullWidth justify="space-between">
            <SubHeaderText text="Неделя" />
            <SubHeaderText text="Почивен ден" />
          </BasicBox>
        </BasicBox>
        <BasicBox direction="column" top="26px" bottom="18px">
          <HeaderText text="Контакти" />
          <SubHeaderText text="0889 466 977" />
          <SubHeaderText text="sales@unitedbuildings.bg" />
        </BasicBox>
      </BasicBox>
    </>
  );
};
