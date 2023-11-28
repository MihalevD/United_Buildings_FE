import BasicBox from "./basic/BasicBox";
import { TextContainer } from "./basic/TextContainer";
import { Carousel } from "./carousel/Carousel";
import SimpleSlider from "./carousel/SimpleSlider";

const textStyles = {
  color: "black",
  fontSize: "30px",
  lineHeight: "40px",
  fontWeight: "bold",
};

export const SuggestionsBar = () => {
  return (
    <BasicBox
      top="60px"
      fullWidth
      bottom="92px"
      style={{
        background: "#7A7D48",
        borderTop: "1px solid #696969",
        borderBottom: "1px solid #696969",
        marginBottom: "80px",
      }}
      justify="center"
    >
      <BasicBox width="80%" direction="column" style={{ position: "relative" }}>
        <BasicBox bottom="30px">
          <TextContainer text="Нови предложения" textStyles={textStyles} />
        </BasicBox>
        <SimpleSlider />
      </BasicBox>
    </BasicBox>
  );
};
