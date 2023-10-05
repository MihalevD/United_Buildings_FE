import styled from "@emotion/styled";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import BasicBox from "./basic/BasicBox";
import { TextContainer } from "./basic/TextContainer";
import useIsMobile from "../helper/isMobile";

const CustomText = styled(TextContainer)`
  text-align: left;
  font: normal normal normal 20px/27px Segoe UI;
  letter-spacing: 0px;
  color: #000000;
`;

export const BackButton = () => {
  const goBack = () => {
    window.history.back();
  };
  const isMobile = useIsMobile();
  return (
    <BasicBox
      onClick={goBack}
      align="center"
      top={isMobile ? "70px" : "15px"}
      left={isMobile ? "22px" : "0px"}
      bottom="15px"
      style={{ cursor: "pointer" }}
    >
      <KeyboardBackspaceIcon /> <CustomText text={"Назад"} />
    </BasicBox>
  );
};
