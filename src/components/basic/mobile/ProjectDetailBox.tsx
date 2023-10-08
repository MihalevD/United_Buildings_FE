import BasicBox from "../BasicBox";
import styled from "@emotion/styled";

const Wrapper = styled(BasicBox)`
  background-color: #7a7d48;
  border-radius: 20px;
  color: #cdd5b1;
  font-size: 16px;
  line-height: 16px;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1;
`;

type ProjectDetailBoxProps = {
  text: string;
  number: string;
};

export const ProjectDetailBox: React.FC<ProjectDetailBoxProps> = ({
  text,
  number,
}) => {
  return (
    <Wrapper width="100%" direction="column">
      {number}
      <span style={{ fontSize: "14px" }}>{text}</span>
    </Wrapper>
  );
};
