import styled from "@emotion/styled";
import BasicBox from "../basic/BasicBox";
import { TextContainer } from "../basic/TextContainer";

const textStyles = {
  fontSize: "20px",
  lineHeight: "33px",
  color: "#3f4554",
};

const Wrapper = styled(BasicBox)`
  border-left: 1px solid #3f4554;
  margin-right: 30px;
  border: 1px solid #3f4554;
  border-radius: 20px;
  @media (max-width: 1400px) {
    margin-right: 30px;
  }
  @media (max-width: 1200px) {
    font-size: 18px !important;
  }
  padding: 10px;
  background-color: #fff;
  :hover {
    background-color: #f2f2f2;
  }
  cursor: pointer;
  font-weight: 700;
  font-size: 20px;
`;

export const ContactUs = () => {
  return (
    <Wrapper fullHeight direction="column">
      <a href="tel:8882192787">089 232 288</a>
    </Wrapper>
  );
};
