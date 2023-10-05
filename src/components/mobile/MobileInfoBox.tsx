import styled from "@emotion/styled";
import BasicBox from "../basic/BasicBox";
import { TextContainer } from "../basic/TextContainer";

type MobileInfoProps = {
  titleSVG: React.FunctionComponent;
  value: string;
  reverse?: boolean;
  textTop?: string;
};

type WrapperProps = {
  reverse?: boolean;
};

const Wrapper = styled(BasicBox)<WrapperProps>`
  width: 100%;
  max-height: 280px;
  background: #cdd5b1;
`;

const textStyles = {
  fontSize: "16px",
  lineHeight: "22px",
  letterSpacing: "0px",
  color: "#3F4554",
};

export const MobileInfoBox = (props: MobileInfoProps) => {
  const texts = props.value.split("....");
  const Icon = props.titleSVG;
  return (
    <Wrapper
      reverse={props.reverse}
      direction="column"
      justify="flex-start"
      top="20px"
      align="center"
      style={{ marginBottom: "14px", boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)" }}
    >
      <Icon />
      <BasicBox fullPadding spacing="30px" top={props.textTop}>
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
