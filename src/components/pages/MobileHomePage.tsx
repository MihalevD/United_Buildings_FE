import BasicBox from "../basic/BasicBox";
import { MobileAd } from "../mobile/MobileAd";
import { MobileinfoComponent } from "../mobile/MobileInfoComponent";
import { MobileLocations } from "../mobile/MobileLocations";
import { MobileSuggestionsBar } from "../mobile/MobileSugetionsBar";

export const MobileHomePage = () => {
  return (
    <BasicBox direction="column" fullWidth>
      <MobileinfoComponent />
      <MobileSuggestionsBar />
      <MobileLocations />
      <MobileAd />
    </BasicBox>
  );
};
