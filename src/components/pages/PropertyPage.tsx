import { useParams } from "react-router-dom";
import BasicBox from "../basic/BasicBox";
import { useState } from "react";
import { items } from "../../helper/constants";
import { ImageBlockProperty } from "../ImageBlockProperty";
import { BackButton } from "../BackButton";
import { InfoBoxProperty } from "../InfoBoxProperty";
import { SuggestionSection } from "../SuggestionSection";
import useIsMobile from "../../helper/isMobile";
import { MobilePropertyPage } from "../mobile/MobilePropertyPage";
import Stepper from "../basic/Stepper";
import { CreditCalculator } from "../CreditCalculator";

export const PropertyPage = () => {
  const { id } = useParams();
  const [data] = useState(items.find((elem) => elem.id === Number(id)));
  const isMobile = useIsMobile();
  return (
    <>
      {!isMobile ? (
        <BasicBox
          left="100px"
          right="100px"
          fullWidth
          style={{ boxSizing: "border-box" }}
          direction="column"
          bottom="500px"
        >
          <BackButton />
          <BasicBox fullWidth>
            <Stepper />
          </BasicBox>
          <InfoBoxProperty data={data} />
          <CreditCalculator price={"78000"} />
          <SuggestionSection />
        </BasicBox>
      ) : (
        <MobilePropertyPage />
      )}
    </>
  );
};
