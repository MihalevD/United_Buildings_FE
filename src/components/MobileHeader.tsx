import BasicBox from "./basic/BasicBox";
import { useState } from "react";
import Spacings from "../tokens/Spacings";
import styled from "@emotion/styled";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";

import background from "../img/mobile_header.png";
import backgroundAboutPage from "../img/about/banner.png";
import { useLocation } from "react-router-dom";
import { MobileLogo } from "./basic/MobileLogo";
import { MobileSearchBox } from "./mobile/MobileSeachBox";
import MobileSidebar from "./mobile/MobileSidebar";
import { BackButton } from "./BackButton";
import { ImageBlockProperty } from "./ImageBlockProperty";

const HeaderContainer = styled(BasicBox)<{}>`
  max-height: 380px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Text = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgba(63, 69, 84, 1);
  font-size: 20px;
  line-height: 40px;
  width: 80%;
  font-weight: bold;
`;

export const MobileHeader = () => {
  const [isToggled, setIsToggled] = useState(false);

  const location = useLocation();
  const isAboutPage = location.pathname.split("/")[1] == "about-us";
  const isProductPage = location.pathname.split("/")[1] == "property";

  const toggleDrawer = (event: any) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsToggled(!isToggled);
  };

  return (
    <HeaderContainer
      fullWidth
      justify="space-between"
      bottom={!isAboutPage ? (!isProductPage ? "260px" : "0px") : "0px"}
      style={{ position: "relative" }}
    >
      {!isProductPage ? (
        <>
          {!isAboutPage ? (
            <img src={background} style={{ width: "100%" }} />
          ) : (
            <>
              <Text>НИЕ РАЗБИРАМЕ САМО ОТ ИМОТИ, НО СМЕ ДОБРИ В ТОВА</Text>
              <img
                src={backgroundAboutPage}
                style={{
                  width: "100%",
                  minHeight: "340px",
                  objectFit: "cover",
                }}
              />
            </>
          )}
        </>
      ) : (
        <>
          <BackButton />
        </>
      )}
      <MenuItems onClick={(e) => toggleDrawer(e)}>
        <ViewHeadlineIcon fontSize="large" />
      </MenuItems>
      <LogoBlock>
        <MobileLogo />
      </LogoBlock>
      {!isAboutPage && !isProductPage && <MobileSearchBox />}
      {isToggled && (
        <MobileSidebar isOpen={isToggled} closeSidebar={toggleDrawer} />
      )}
    </HeaderContainer>
  );
};

const MenuItems = styled(BasicBox)`
  position: absolute;
  left: ${Spacings.medium};
  top: ${Spacings.medium};
  z-index: 100;
  cursor: pointer;
`;

const LogoBlock = styled(BasicBox)`
  position: absolute;
  left: 50%;
  top: ${Spacings.medium};
  transform: translateX(-50%);
`;
const OptionWrapper = styled(BasicBox)`
  cursor: pointer;
`;
