import BasicBox from "./basic/BasicBox";
import { TextContainer } from "./basic/TextContainer";
import { Carousel } from "./carousel/Carousel";
import styled from "@emotion/styled";
import SimpleSlider from "./carousel/SimpleSlider";

const textStyles = {
  textAlign: "left" as const,
  font: "normal normal 600 25px/27px Segoe UI",
  letterSpacing: "0px",
  color: "#000000",
};
const CarouselWrapper = styled(BasicBox)``;

export const SuggestionSection = () => {
  return (
    <BasicBox fullWidth top="78px" bottom="78px" direction="column" gap="20px">
      <TextContainer text="Предложения в района" textStyles={textStyles} />
      <SimpleSlider />
    </BasicBox>
  );
};
