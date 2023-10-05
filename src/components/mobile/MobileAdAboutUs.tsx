import { TextContainer } from "../basic/TextContainer";
import { ImageContainer } from "../basic/ImageContainer";
import img from "../../img/about/misiq1.jpg";
import styled from "@emotion/styled";
import BasicBox from "../basic/BasicBox";

const subHeaderText = "ПРОФЕСИОНАЛНА УСЛУГА ЗА ВСЕКИ КЛИЕНТ";

const infoText =
  "Знаем, че сделките с имоти са обвързани с много емоции, притеснения и колебания и участниците искат да чувстват увереност и подкрепа. Затова сме си поставили за цел да предоставяме най-висококачествената консултантска услуга на пазара.";

const HeaderText = styled(TextContainer)`
  text-align: left;
  font: normal normal 600 20px/27px Segoe UI;
  letter-spacing: 0px;
  color: #3f4554;
`;
const SubHeaderText = styled(TextContainer)`
  text-align: left;
  font: normal normal 600 18px/24px Segoe UI;
  letter-spacing: 0px;
  color: rgba(0, 0, 0, 1);
`;
const InfoText = styled(TextContainer)`
  text-align: left;
  font: normal normal normal 16px/21px Segoe UI;
  letter-spacing: 0px;
  color: rgba(0, 0, 0, 1);
`;

const customStyles = {
  position: "absolute" as const,
  top: "40%",
  left: "0",
  borderRadius: "30px",
  padding: "7px 16px",
  height: "fit-content",
  background: "#ffffff 0% 0% no-repeat padding-box",
  border: "1px solid rgba(112, 112, 112, 1)",
};

export const MobileAdAboutUs = () => {
  return (
    <BasicBox
      justify="center"
      direction="column"
      style={{ position: "relative" }}
    >
      <img
        src={img}
        style={{
          width: "100%",
          boxShadow: "0px 3px 6px #00000029",
          border: "1px solid #707070",
          borderRadius: "30px",
        }}
      ></img>
      <HeaderText text="МИСИЯ" customStyles={customStyles} />
      <BasicBox top="24px" direction="column" bottom="32px">
        <SubHeaderText text={subHeaderText} />
        <BasicBox top="6px">
          <InfoText text={infoText} />
        </BasicBox>
      </BasicBox>
    </BasicBox>
  );
};
