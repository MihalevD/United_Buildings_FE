import styled from "@emotion/styled";
import BasicBox from "./basic/BasicBox";
import img from "../img/about/location.jpg";
import { TextContainer } from "./basic/TextContainer";

const CustomText = styled(TextContainer)`
  text-align: left;
  font: normal normal 600 30px/40px Segoe UI;
  letter-spacing: 0px;
  color: #3f4554;
`;

const Wrapper = styled(BasicBox)`
  clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 25%, 89% 0);
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 20px;
  width: 100%;
  box-sizing: border-box;
`;

const HeaderText = styled(TextContainer)`
  text-align: left;
  font: normal normal 600 24px/28px Segoe UI;
  letter-spacing: 0px;
  color: #3f4554;
`;

const SubHeaderText = styled(TextContainer)`
  text-align: left;
  font: normal normal normal 18px/40px Segoe UI;
  letter-spacing: 0px;
  color: #3f4554;
  opacity: 1;
`;

export const LocationsAboutUs = () => {
  return (
    <>
      <BasicBox top="80px" bottom="50px">
        <CustomText text="ОТДЕЛ ПРОДАЖБИ" />
      </BasicBox>
      <BasicBox style={{ width: "80%" }} bottom="620px">
        <BasicBox
          direction="column"
          justify="space-between"
          style={{ width: "45%", marginRight: "100px" }}
        >
          <Wrapper
            left="75px"
            top="50px"
            bottom="50px"
            direction="column"
            style={{ marginBottom: "40px" }}
          >
            <BasicBox direction="column" bottom="38px">
              <HeaderText text="Офис" />
              <SubHeaderText text="бул. Даме Груев 1, 8001 Бургас, България" />
            </BasicBox>

            <BasicBox direction="column" fullWidth>
              <HeaderText text="Работно време" />
              <BasicBox
                fullWidth
                justify="space-between"
                style={{ width: "70%" }}
              >
                <SubHeaderText text="Понеделник - Събота" />
                <SubHeaderText text="09:00 - 19:00" />
              </BasicBox>
              <BasicBox
                fullWidth
                justify="space-between"
                style={{ width: "70%" }}
              >
                <SubHeaderText text="Неделя" />
                <SubHeaderText text="Почивен ден" />
              </BasicBox>
            </BasicBox>
          </Wrapper>
          <Wrapper left="75px" top="50px" bottom="50px">
            <BasicBox direction="column">
              <HeaderText text="Контакти" />
              <SubHeaderText text="0889 466 977" />
              <SubHeaderText text="sales@unitedbuildings.bg" />
            </BasicBox>
          </Wrapper>
        </BasicBox>
        <img
          src={img}
          style={{
            width: "50%",
            border: "1px solid #707070",
            borderRadius: "30px",
          }}
        ></img>
      </BasicBox>
    </>
  );
};
