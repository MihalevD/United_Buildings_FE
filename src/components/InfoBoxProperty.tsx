import LocationOnIcon from "@mui/icons-material/LocationOn";
import { AdWrapperProperty } from "./AdWrapperProperty";
import BasicBox from "./basic/BasicBox";
import { TextContainer } from "./basic/TextContainer";
import { DescriptionBlock } from "./DescriptionBlock";
import styled from "@emotion/styled";

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
  data?: {
    title: string;
    address: string;
  };
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
  return (
    <Wrapper top="33px" fullWidth justify="space-between" bottom="78px">
      <InfoWrapper direction="column">
        <TextContainer
          text={props.data ? props.data.title : "Чудесен едностаен апартамент"}
          textStyles={textStylesHeading}
        />
        <BasicBox top="16px">
          <LocationOnIcon width="36px" />
          <TextContainer
            customStyles={{ marginLeft: "10px" }}
            text={props.data ? props.data.address : "No address"}
            textStyles={textStylesSubHeading}
          />
        </BasicBox>
        <DescriptionBlock
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
          }
        />
      </InfoWrapper>
      <AdWrapperProperty />
    </Wrapper>
  );
};
