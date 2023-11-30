import { useParams } from "react-router-dom";
import BasicBox from "../basic/BasicBox";
import { useEffect, useState } from "react";
import { items } from "../../helper/constants";
import { ImageBlockProperty } from "../ImageBlockProperty";
import { BackButton } from "../BackButton";
import { InfoBoxProperty } from "../InfoBoxProperty";
import { SuggestionSection } from "../SuggestionSection";
import useIsMobile from "../../helper/isMobile";
import { MobilePropertyPage } from "../mobile/MobilePropertyPage";
import Stepper from "../basic/Stepper";
import { CreditCalculator } from "../CreditCalculator";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { asyncGetChosenApartment } from "../../redux/actions/apartmentActions";

export const PropertyPage = () => {
  const { id } = useParams();
  const chosenApartment = useSelector(
    (state: RootState) => state.apartments.chosenApartment
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!chosenApartment) {
      dispatch(asyncGetChosenApartment(Number(id)) as any);
    }
  }, []);

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
          bottom="50px"
        >
          <BackButton />
          <BasicBox fullWidth>
            {chosenApartment?.image_url && (
              <Stepper images={chosenApartment?.image_url} />
            )}
          </BasicBox>
          <InfoBoxProperty data={chosenApartment} />
          <CreditCalculator
            price={chosenApartment ? chosenApartment.price * 100 : 0}
          />
          <SuggestionSection />
        </BasicBox>
      ) : (
        <MobilePropertyPage />
      )}
    </>
  );
};
