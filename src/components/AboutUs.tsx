import styled from "@emotion/styled";
import BasicBox from "./basic/BasicBox";

import { InfoAboutUs } from "./InfoAboutUs";
import { AdAboutUs } from "./AdAboutUs";
import { TextContainer } from "./basic/TextContainer";
import { ClientsAboutUs } from "./ClientsAboutUs";
import { LocationsAboutUs } from "./LocationsAbousUs";

export const AboutUs = () => {
  return (
    <BasicBox fullWidth align="center" direction="column">
      <InfoAboutUs />
      <AdAboutUs />
      <ClientsAboutUs />
      <LocationsAboutUs />
    </BasicBox>
  );
};
