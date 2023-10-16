import styled from "@emotion/styled";
import BasicBox from "./basic/BasicBox";
import { TextContainer } from "./basic/TextContainer";

type InfoBoxProps = {
  titleSVG: React.FunctionComponent;
  value: string;
  reverse?: boolean;
};

type WrapperProps = {
  reverse?: boolean;
};

const Wrapper = styled(BasicBox)<WrapperProps>`
  height: 392px;
  min-width: 400px;
  background: #cdd5b1;
  @media (max-width: 1365px) {
    width: 40%;
  }
  @media (max-width: 1160px) {
    width: 48%;
  }

  clip-path: ${({ reverse }) =>
    !reverse
      ? "polygon(0 0, 0 100%, 100% 100%, 100% 15%, 83% 0)"
      : "polygon(17% 0, 100% 0, 100% 100%, 0 100%, 0 15%);"};
`;

const textStyles = {
  fontSize: "20px",
  lineHeight: "27px",
  letterSpacing: "0px",
  color: "#3F4554",
  textAlign: "center" as const,
};

export const InfoBox = (props: InfoBoxProps) => {
  const texts = props.value.split("....");
  const Icon = props.titleSVG;
  return (
    <Wrapper
      reverse={props.reverse}
      direction="column"
      justify="flex-start"
      top="110px"
      align="center"
      fullWidth
    >
      <Icon />
      <BasicBox top="24px" left="94px" right="94px">
        <span style={{ textAlign: "center" }}>
          {texts.length > 1 && <span style={textStyles}>{texts[0]}</span>}
          <span style={{ ...textStyles, fontWeight: "bold" }}>
            United buildings
          </span>
          <span style={textStyles}>{texts[1]}</span>
        </span>
      </BasicBox>
    </Wrapper>
  );
};
