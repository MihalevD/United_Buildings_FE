import { ApartmentRow } from "./ApartmentRow";
import BasicBox from "./basic/BasicBox";
import { TextContainer } from "./basic/TextContainer";

const textStyles = {
  fontWeight: "600",
  fontSize: "30px",
  lineHeight: "50px",
  color: "#3F4554",
};

export const Apartments = () => {
  return (
    <BasicBox direction="column" fullWidth top="80px">
      <TextContainer text="ЖИЛИЩА" textStyles={textStyles} />
      <ApartmentRow />
    </BasicBox>
  );
};
