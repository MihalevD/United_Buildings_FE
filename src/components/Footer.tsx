import styled from "@emotion/styled";
import useIsMobile from "../helper/isMobile";
import BasicBox from "./basic/BasicBox";
import { Logo } from "./basic/Logo";
import { TextContainer } from "./basic/TextContainer";
import { Ad } from "./Ad";
import house from "../img/house.png";
import useIsTablet from "../helper/isTablet";
import { MobileAd } from "./mobile/MobileAd";

const textStylesHeading = {
  font: "normal normal bold 14px/12px Segoe UI",
  letterSpacing: "0px",
  color: "#3F4554",
};
const textStylesSubHeading = {
  color: "#3F4554",
  fontSize: "14px",
  lineHeight: "24px",
};
export const Footer = () => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  return (
    <>
      <BasicBox
        fullWidth
        justify="center"
        style={{ marginBottom: "-30px", zIndex: 10 }}
      >
        {!isMobile ? <Ad /> : <MobileAd />}
      </BasicBox>
      <FooterWrapper
        fullWidth
        justify="center"
        align="center"
        $isMobile={isMobile}
      >
        <BasicBox
          justify="flex-start"
          align="center"
          style={{ width: "inherit", height: "inherit" }}
        >
          <Logo left />
          <BasicBox
            direction="column"
            left="94px"
            right={isTablet ? "20px" : "136px"}
          >
            <BasicBox bottom="25px">
              <TextContainer text="Контакти" textStyles={textStylesHeading} />
            </BasicBox>
            <TextContainer
              text="0889 466 977"
              textStyles={textStylesSubHeading}
            />
            <TextContainer
              text="sales@unitedbuildings.bg"
              textStyles={textStylesSubHeading}
            />
            <TextContainer
              text="бул. Даме Груев 1, 8001 Бургас, България"
              textStyles={textStylesSubHeading}
            />
          </BasicBox>
        </BasicBox>
      </FooterWrapper>
    </>
  );
};
const FooterWrapper = styled(BasicBox)<{ $isMobile: boolean }>`
  position: relative;
  bottom: 0;
  height: ${({ $isMobile }) => ($isMobile ? "50px" : "260px")};
  background: #cdd5b1 0% 0% no-repeat padding-box;
`;
const ImageWrapper = styled(BasicBox)`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  width: 24%;
  position: absolute;
  top: -150%;
  left: 13%;
`;
