import LocationOnIcon from "@mui/icons-material/LocationOn";
import { AdWrapperProperty } from "../AdWrapperProperty";
import BasicBox from "../basic/BasicBox";
import { TextContainer } from "../basic/TextContainer";
import { DescriptionBlock } from "../DescriptionBlock";
import { PropertyPageInfo } from "../PropertyPageInfo";
import { MobilePropertyPageInfo } from "./MobileProperyPageInfo";

const textStylesHeading = {
  font: "normal normal bold 24px/32px Segoe UI",
  letterSpacing: "0px",
  color: "#3F4554",
  opacity: "1",
};

const textStylesSubHeading = {
  textAlign: "center" as const,
  font: "normal normal 600 18px/24px Segoe UI",
  letterSpacing: "0px",
  color: "#3F4554",
};

type InfoBoxProps = {
  data?: {
    title: string;
    address: string;
  };
};

export const MobileInfoBoxProperty = (props: InfoBoxProps) => {
  return (
    <BasicBox
      top="33px"
      fullWidth
      justify="space-between"
      direction="column"
      style={{ boxSizing: "border-box" }}
    >
      <BasicBox direction="column">
        <TextContainer
          text={props.data ? props.data.title : "Чудесен едностаен апартамент"}
          textStyles={textStylesHeading}
        />
        <BasicBox top="16px" fullWidth bottom="12px">
          <LocationOnIcon width="36px" />
          <TextContainer
            text={props.data ? props.data.address : "No address"}
            textStyles={textStylesSubHeading}
          />
        </BasicBox>
        <MobilePropertyPageInfo />
        <DescriptionBlock
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
          }
        />
      </BasicBox>
    </BasicBox>
  );
};
