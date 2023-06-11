import { PropertyPageInfo } from "./PropertyPageInfo";
import BasicBox from "./basic/BasicBox";
import { LightButton } from "./basic/LightButton";
import { TextContainer } from "./basic/TextContainer";
import styled from "@emotion/styled";

const AdWrapper = styled(BasicBox)`
  box-sizing: border-box;
  width: 30%;
  min-width: 500px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 30px;
  opacity: 1;
`;

const textStyles = {
  textАlign: "left" as const,
  font: "normal normal bold 20px/12px Segoe UI",
  letterSpacing: "0px",
  color: "#3F4554",
};

const StyledButton = styled.button`
  width: 100%;
  height: 50px;

  background: #3f4554 0% 0% no-repeat padding-box;
`;

export const AdWrapperProperty = () => {
  return (
    <AdWrapper direction="column" spacing="24px" fullPadding>
      <BasicBox bottom="21px">
        <TextContainer text={"Кратко описание"} textStyles={textStyles} />
      </BasicBox>
      <PropertyPageInfo />
      <BasicBox fullWidth justify="center" top="30px">
        <LightButton>Направете запитване</LightButton>
      </BasicBox>
    </AdWrapper>
  );
};
