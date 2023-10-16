import styled from "@emotion/styled";
import BasicBox from "../basic/BasicBox";
import useIsMobile from "../../helper/isMobile";
import Spacings from "../../tokens/Spacings";
import { InfoComponent } from "../InfoComponent";
import { SuggestionsBar } from "../SuggestionsBar";
import { Locations } from "../Locations";
import { MobileHomePage } from "./MobileHomePage";

export const HomePage = () => {
  const isMobile = useIsMobile();
  return (
    <>
      {!isMobile ? (
        <BasicBox fullWidth justify="center" direction="column" align="center">
          <InfoComponent />
          <Locations />
          <SuggestionsBar />
        </BasicBox>
      ) : (
        <MobileHomePage />
      )}
    </>
  );
};
const ContentWrapper = styled(BasicBox)`
  min-height: calc(100vh - 200px);
`;
