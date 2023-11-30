import LocationOnIcon from "@mui/icons-material/LocationOn";
import { AdWrapperProperty } from "./AdWrapperProperty";
import BasicBox from "./basic/BasicBox";
import { TextContainer } from "./basic/TextContainer";
import { DescriptionBlock } from "./DescriptionBlock";
import styled from "@emotion/styled";
import { LightButton } from "./basic/LightButton";
import IosShareIcon from "@mui/icons-material/IosShare";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import ModalImage, { Lightbox } from "react-modal-image";
import explan from "../img/ex_plan.png";
import { useState } from "react";
import { ShareModal } from "./modals/ShareModal";
import { ApartType } from "./carousel/CarouselBlock";
// @ts-ignore

const textStylesHeading = {
  font: "normal normal bold 30px/40px Segoe UI",
  letterSpacing: "0px",
  color: "#3F4554",
  opacity: "1",
};

const textStylesSubHeading = {
  textAlign: "center" as const,
  font: "normal normal 600 24px/32px Segoe UI",
  letterSpacing: "0px",
  color: "#3F4554",
};

type InfoBoxProps = {
  data?: ApartType;
};

const Wrapper = styled(BasicBox)`
  @media (max-width: 1150px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-left: 0px;
    padding-left: 0px;
    gap: 50px;
  }
`;
const InfoWrapper = styled(BasicBox)`
  width: 50%;
  @media (max-width: 1150px) {
    width: 100%;
    margin-left: 0px;
    padding-left: 0px;
  }
`;

export const InfoBoxProperty = (props: InfoBoxProps) => {
  const [isOpenPlans, setIsOpenPlans] = useState(false);
  const [isOpenShare, setIsOpenShare] = useState(false);

  const openLightbox = () => {
    setIsOpenPlans(true);
  };
  const closeLightbox = () => {
    setIsOpenPlans(false);
  };

  const openShare = () => {
    setIsOpenShare(true);
  };

  const closeShare = () => {
    setIsOpenShare(false);
  };

  return (
    <Wrapper
      top="33px"
      fullWidth
      justify="space-between"
      bottom="78px"
      style={{ position: "relative" }}
    >
      <InfoWrapper direction="column">
        <TextContainer
          text={
            props.data?.type_name
              ? props.data.type_name
              : "Чудесен едностаен апартамент"
          }
          textStyles={textStylesHeading}
        />
        <BasicBox top="16px">
          <LocationOnIcon width="36px" />
          <TextContainer
            customStyles={{ marginLeft: "10px" }}
            text={props.data ? props.data.location_name : "No address"}
            textStyles={textStylesSubHeading}
          />
        </BasicBox>
        <DescriptionBlock text={props.data?.description || "No Description"} />
        <BasicBox style={{ position: "relative" }}>
          <CustomButton onClick={() => openLightbox()}>
            <AspectRatioIcon />
            Планове
          </CustomButton>
          <CustomButton onClick={() => openShare()}>
            <IosShareIcon />
          </CustomButton>
          {isOpenShare && (
            <ShareModal onClose={() => closeShare()} isOpen={isOpenShare} />
          )}
        </BasicBox>
      </InfoWrapper>
      <AdWrapperProperty />
      {isOpenPlans && (
        // @ts-ignore
        <Lightbox
          small={explan}
          medium={explan}
          alt="Plan"
          onClose={() => closeLightbox()}
        />
      )}
    </Wrapper>
  );
};

const CustomButton = styled.button`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 30px;
  padding: 10px 24px;
  text-align: left;
  font: normal normal 600 20px/12px Segoe UI;
  letter-spacing: 0px;
  color: #3f4554;
  display: flex;
  align-items: center;
  margin-right: 16px;
  cursor: pointer;
  border: none;
  gap: 18px;
  :hover {
    background: #dce2c5 0% 0% no-repeat padding-box !important;
  }
`;
