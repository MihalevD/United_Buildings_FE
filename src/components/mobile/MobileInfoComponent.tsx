import BasicBox from "../basic/BasicBox";
import { ImageContainer } from "../basic/ImageContainer";
import { MobileInfoBox } from "./MobileInfoBox";
import HomeIcon from "@mui/icons-material/Home";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import icon from "../../img/iconLogo.png";

const text1 =
  ".... обединява целия процес по закупуването на нов недвижим имот. Нашият екип ще бъде вашия доверен партньор при всяка една стъпка в процеса на покупкa вашия имот.";

const text2 =
  "Продайте своя имот с .... Ние ще направим оглед на вашия имот, до 24ч ще получите оферта с продажната сума на имота и след предоставяне на необходимите документи, ние започваме работа с вас.";

export const MobileinfoComponent = () => {
  return (
    <BasicBox
      direction="column"
      justify="center"
      left="36px"
      right="36px"
      top="56px"
      bottom="36px"
      style={{
        maxWidth: "322px",
        position: "relative",
      }}
    >
      <MobileInfoBox
        reverse={false}
        value={text1}
        titleSVG={() => (
          <HomeIcon sx={{ fontSize: "50px", color: "#7A7D48" }} />
        )}
        textTop="25px"
      />
      <BasicBox
        style={{
          position: "absolute",
          top: "47%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          zIndex: "100",
        }}
      >
        <ImageContainer
          imageSrc={icon}
          imageStyles={{
            width: "76px",
            height: "59px",
          }}
        ></ImageContainer>
      </BasicBox>
      <MobileInfoBox
        reverse={true}
        value={text2}
        titleSVG={() => (
          <MonetizationOnIcon sx={{ fontSize: "50px", color: "#7A7D48" }} />
        )}
        textTop="10px"
      />
    </BasicBox>
  );
};
