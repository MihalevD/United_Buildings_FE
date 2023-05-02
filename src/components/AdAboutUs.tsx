import { TextContainer } from "./basic/TextContainer";
import { ImageContainer } from "./basic/ImageContainer";
import img from "../img/about/misiq1.jpg";
import styled from "@emotion/styled";
import BasicBox from "./basic/BasicBox";

const subHeaderText =
  "ПРОФЕСИОНАЛНА УСЛУГА ЗА ВСЕКИ КЛИЕНТ, УТВЪРЖДАВАНЕ НА ДОБРИ ПАЗАРНИ ПРАКТИКИ";

const infoText =
  "Знаем, че сделките с имоти са обвързани с много емоции, притеснения и колебания и участниците искат да чувстват увереност и подкрепа. Затова сме си поставили за цел да предоставяме най-висококачествената консултантска услуга на пазара.";

const HeaderText = styled(TextContainer)`
  text-align: left;
  font: normal normal 600 30px/40px Segoe UI;
  letter-spacing: 0px;
  color: #3f4554;
`;
const SubHeaderText = styled(TextContainer)`
  text-align: left;
  font: normal normal 600 24px/32px Segoe UI;
  letter-spacing: 0px;
  color: #3f4554;
`;
const InfoText = styled(TextContainer)`
  text-align: left;
  font: normal normal normal 18px/26px Segoe UI;
  letter-spacing: 0px;
  color: #3f4554;
`;

const Wrapper = styled(BasicBox)`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 25%, 89% 0);
  border-radius: 20px;
  margin-left: -80px;
  max-height: 360px;
  margin-top: 32px;
`;

export const AdAboutUs = () => {
  return (
    <BasicBox style={{ width: "75%" }} justify="center">
      <img
        src={img}
        style={{
          width: "46%",
          boxShadow: "0px 3px 6px #00000029",
          border: "1px solid #707070",
          borderRadius: "30px",
        }}
      ></img>
      <BasicBox
        top="24px"
        left="35px"
        direction="column"
        bottom="32px"
        style={{ width: "54%" }}
      >
        <HeaderText text="МИСИЯ" />
        <Wrapper>
          <BasicBox fullPadding spacing="72px" direction="column">
            <SubHeaderText text={subHeaderText} />
            <BasicBox top="32px">
              <InfoText text={infoText} />
            </BasicBox>
          </BasicBox>
        </Wrapper>
      </BasicBox>
    </BasicBox>
  );
};
