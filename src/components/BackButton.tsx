import styled from "@emotion/styled";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import BasicBox from "./basic/BasicBox";
import { TextContainer } from "./basic/TextContainer";

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
  return (
    <BasicBox
      onClick={goBack}
      align="center"
      top="15px"
      bottom="15px"
      style={{ cursor: "pointer" }}
    >
      <KeyboardBackspaceIcon /> <CustomText text={"Назад"} />
    </BasicBox>
  );
};
