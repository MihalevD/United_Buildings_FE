import { Fragment } from "react";
import BasicBox from "./basic/BasicBox";
import { TextContainer } from "./basic/TextContainer";
import DOMPurify from "dompurify";

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
  textWrap: "pretty" as const,
};

export const DescriptionBlock = (props: DescriptionBlockProps) => {
  const sanitizedHTML = DOMPurify.sanitize(props.text);
  return (
    <BasicBox direction="column" top="24px">
      <BasicBox bottom="12px">
        <TextContainer text="Описание:" textStyles={textStylesHeading} />
      </BasicBox>
      <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
    </BasicBox>
  );
};
