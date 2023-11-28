import BasicBox from "../BasicBox";
import styled from "@emotion/styled";

type ProjectInforBoxProps = {
  top: boolean;
  customKey?: string;
  value?: string;
};

const Wrapper = styled(BasicBox)<{ $top?: boolean }>`
  border-top: ${(props) => (props.$top ? "1px solid black" : "none")};
  padding: 16px 0;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  min-height: 70px;
`;

const textStyles = {
  fontWeight: "bold",
  fontSize: "18px",
  lineHeight: "30px",
  color: "#3F4554",
};

const secondaryTextStyles = {
  fontWeight: "normal",
  fontSize: "18px",
  lineHeight: "30px",
  color: "#3F4554",
};

export const ProjectInfoBox: React.FC<ProjectInforBoxProps> = (props) => {
  return (
    <Wrapper $top={props.top}>
      <BasicBox width="55%" style={textStyles}>
        {props.customKey}
      </BasicBox>
      <BasicBox width="40%" style={secondaryTextStyles}>
        {props.value}
      </BasicBox>
    </Wrapper>
  );
};
