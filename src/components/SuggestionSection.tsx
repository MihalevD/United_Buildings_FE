import BasicBox from "./basic/BasicBox";
import { TextContainer } from "./basic/TextContainer";
import { Carousel } from "./carousel/Carousel";

const textStyles = {
  textAlign: "left" as const,
  font: "normal normal 600 25px/27px Segoe UI",
  letterSpacing: "0px",
  color: "#000000",
};

export const SuggestionSection = () => {
  return (
    <BasicBox fullWidth top="78px" bottom="78px" direction="column">
      <TextContainer text="Предложения в района" textStyles={textStyles} />
      <BasicBox top="37px">
        <Carousel />
      </BasicBox>
    </BasicBox>
  );
};
