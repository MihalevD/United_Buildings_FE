import { ImageContainer } from "./basic/ImageContainer";
import bkg from "./../img/apart2.jpg";
import apart from "./../img/apart.jpg";
import styled from "@emotion/styled";
import BasicBox from "./basic/BasicBox";
import { TextContainer } from "./basic/TextContainer";

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

export const ImageBlockProperty = () => {
  return (
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
            }}
          ></ImageContainer>
          <Custom>
            <InsideButtonText text={"Разгледай всички 5 снимки"} />
          </Custom>
        </SmallImg>
      }
    />
  );
};
