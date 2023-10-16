import BasicBox from "./basic/BasicBox";
import { ImageContainer } from "./basic/ImageContainer";
import { InfoBox } from "./InfoBox";
import HomeIcon from "@mui/icons-material/Home";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import icon from "../img/iconLogo.png";

const text1 =
  ".... обединява целия процес по закупуването на нов недвижим имот. Нашият екип ще бъде вашия доверен партньор при всяка една стъпка в процеса на покупкa вашия имот.";

const text2 =
  "Продайте своя имот с .... Ние ще направим оглед на вашия имот, до 24ч ще получите оферта с продажната сума на имота и след предоставяне на необходимите документи, ние започваме работа с вас.";

export const InfoComponent = () => {
  return (
    <BasicBox
      direction="row"
      justify="center"
      width="75%"
      top="180px"
      bottom="90px"
      gap="50px"
    >
      <InfoBox
        reverse={false}
        value={text1}
        titleSVG={() => (
          <HomeIcon sx={{ fontSize: "100px", color: "#7A7D48" }} />
        )}
      />
      <InfoBox
        reverse={true}
        value={text2}
        titleSVG={() => (
          <MonetizationOnIcon sx={{ fontSize: "100px", color: "#7A7D48" }} />
        )}
      />
    </BasicBox>
  );
};
