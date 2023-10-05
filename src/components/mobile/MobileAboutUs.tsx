import styled from "@emotion/styled";
import BasicBox from "../basic/BasicBox";
import { MobileInfoAboutUs } from "./MobileInfoAboutUs";
import { MobileAdAboutUs } from "./MobileAdAboutUs";
import { MobileClientsAboutUs } from "./MobileClientsAboutUs";
import { MobileLocationsAboutUs } from "./MobileLocationsAboutUs";
import { MobileAd } from "./MobileAd";

export const MobileAboutUs = () => {
  return (
    <BasicBox
      fullWidth
      align="center"
      direction="column"
      left="36px"
      right="36px"
      style={{ boxSizing: "border-box" }}
    >
      <MobileInfoAboutUs />
      <MobileAdAboutUs />
      <MobileClientsAboutUs />
      <MobileLocationsAboutUs />
      <MobileAd hasPadding={false} />
    </BasicBox>
  );
};
