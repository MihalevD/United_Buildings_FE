import useIsMobile from "../helper/isMobile";
import BasicBox from "./basic/BasicBox";
import { LightButton } from "./basic/LightButton";

export const AdChoose = () => {
  const isMobile = useIsMobile();
  return (
    <BasicBox
      fullWidth
      justify="space-evenly"
      top="15px"
      direction={isMobile ? "column" : "row"}
      style={{ gap: "16px" }}
      align="center"
    >
      <LightButton>Търся апартамент</LightButton>
      <LightButton>Продавам апартамент</LightButton>
    </BasicBox>
  );
};
