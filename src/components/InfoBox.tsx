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
  background: #cdd5b1;
  padding-top: 110px;
  @media (max-width: 1365px) {
    height: 300px;
    padding-top: 50px;
    padding-bottom: 20px;
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
      align="center"
      fullWidth
    >
      <Icon />
      <TextBox top="24px" left="94px" right="94px">
        <span style={{ textAlign: "center" }}>
          {texts.length > 1 && <Text>{texts[0]}</Text>}
          <Text style={{ fontWeight: "bold" }}>United buildings</Text>
          <Text>{texts[1]}</Text>
        </span>
      </TextBox>
    </Wrapper>
  );
};

const Text = styled.span`
  font: normal normal normal 20px/27px Segoe UI;
  letter-spacing: 0px;
  color: #3f4554;
  text-align: center;
  @media (max-width: 1365px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

const TextBox = styled(BasicBox)`
  @media (max-width: 1360px) {
    padding-left: 62px;
    padding-right: 62px;
  }
`;
