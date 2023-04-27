import BasicBox from "./basic/BasicBox";
import { TextContainer } from "./basic/TextContainer";

type DescriptionBlockProps = {
  text: string;
};

const textStylesHeading = {
  textAlign: "left" as const,
  font: "normal normal 600 20px/12px Segoe UI",
  letterSpacing: "0px",
  color: "#3F4554",
};

const textStylesSubHeading = {
  textAlign: "left" as const,
  font: "normal normal normal 20px/27px Segoe UI",
  letterSpacing: "0px",
  color: "#3F4554",
};

export const DescriptionBlock = (props: DescriptionBlockProps) => {
  return (
    <BasicBox direction="column" top="24px">
      <BasicBox bottom="12px">
        <TextContainer text="Описание:" textStyles={textStylesHeading} />
      </BasicBox>
      <TextContainer text={props.text} textStyles={textStylesSubHeading} />
    </BasicBox>
  );
};
