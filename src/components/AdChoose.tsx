import BasicBox from "./basic/BasicBox";
import { LightButton } from "./basic/LightButton";

export const AdChoose = () => {
  return (
    <BasicBox fullWidth justify="space-evenly" top="15px">
      <LightButton
        style={{ paddingLeft: "32px", paddingRight: "32px", width: "auto" }}
      >
        Търся апартамент
      </LightButton>
      <LightButton
        style={{ paddingLeft: "32px", paddingRight: "32px", width: "auto" }}
      >
        Продавам апартамент
      </LightButton>
    </BasicBox>
  );
};
