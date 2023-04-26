import { useParams } from "react-router-dom";
import BasicBox from "../basic/BasicBox";
import { useState } from "react";
import { items } from "../../helper/constants";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { TextContainer } from "../basic/TextContainer";
import styled from "@emotion/styled";
import { ImageContainer } from "../basic/ImageContainer";
import bkg from "../../img/apart2.jpg";
import apart from "../../img/apart.jpg";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const CustomText = styled(TextContainer)`
  text-align: left;
  font: normal normal normal 20px/27px Segoe UI;
  letter-spacing: 0px;
  color: #000000;
`;

const SmallImg = styled(BasicBox)`
  width: 251px;
  height: 143px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #707070;
  border-radius: 20px;
  position: absolute;
  right: 5%;
  bottom: 5%;
  cursor: pointer;
  :before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 101;
    border-radius: 20px;
    transition: background-color 0.5s;
  }
  :hover:before {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

const Custom = styled(BasicBox)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 102;
  width: 80%;
`;

const InsideButtonText = styled(TextContainer)`
  text-align: center;
  font: normal normal 600 20px/27px Segoe UI;
  letter-spacing: 0px;
  color: #3f4554;
  opacity: 1;
  color: #ffffff;
`;
const textStylesHeading = {
  font: "normal normal bold 30px/40px Segoe UI",
  letterSpacing: "0px",
  color: "#3F4554",
  opacity: "1",
};

const textStylesHeading2 = {
  textАlign: "left" as const,
  font: "normal normal bold 20px/12px Segoe UI",
  letterSpacing: "0px",
  color: "#3F4554",
};

const textStylesSubHeading = {
  textAlign: "center" as const,
  font: "normal normal 600 24px/32px Segoe UI",
  letterSpacing: "0px",
  color: "#3F4554",
};

const AdWrapper = styled(BasicBox)`
  box-sizing: border-box;
  width: 30%;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 30px;
  opacity: 1;
`;
export const PropertyPage = () => {
  const { id } = useParams();
  const [data, setData] = useState(
    items.find((elem) => elem.id === Number(id))
  );

  const goBack = () => {
    window.history.back();
  };
  return (
    <BasicBox
      left="100px"
      right="100px"
      fullWidth
      style={{ boxSizing: "border-box" }}
      direction="column"
      bottom="500px"
    >
      <BasicBox
        onClick={goBack}
        align="center"
        top="15px"
        bottom="15px"
        style={{ cursor: "pointer" }}
      >
        <KeyboardBackspaceIcon /> <CustomText text={"Назад"} />
      </BasicBox>
      <BasicBox fullWidth>
        <ImageContainer
          imageSrc={bkg}
          fullWidth
          style={{
            width: "100%",
            borderRadius: "30px",
            maxHeight: "550px",
            clipPath: "polygon(0 0, 0 100%, 100% 100%, 100% 25%, 89% 0)",
          }}
          imageStyles={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          children={
            <SmallImg>
              <ImageContainer
                imageSrc={apart}
                fullWidth
                fullHeight
                style={{ borderRadius: "20px" }}
                imageStyles={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              ></ImageContainer>
              <Custom>
                <InsideButtonText text={"Разгледай всички 5 снимки"} />
              </Custom>
            </SmallImg>
          }
        />
      </BasicBox>
      <BasicBox top="33px" fullWidth justify="space-between">
        <BasicBox direction="column">
          <TextContainer
            text={data ? data.title : "Чудесен едностаен апартамент"}
            textStyles={textStylesHeading}
          />
          <BasicBox top="16px">
            <LocationOnIcon width="36px" />
            <TextContainer
              customStyles={{ marginLeft: "10px" }}
              text={data ? data.address : "No address"}
              textStyles={textStylesSubHeading}
            />
          </BasicBox>
        </BasicBox>
        <AdWrapper direction="column" spacing="24px" fullPadding>
          <BasicBox bottom="21px">
            <TextContainer
              text={"Кратко описание"}
              textStyles={textStylesHeading2}
            />
          </BasicBox>
          <BasicBox bottom="21px"></BasicBox>
        </AdWrapper>
      </BasicBox>
    </BasicBox>
  );
};
