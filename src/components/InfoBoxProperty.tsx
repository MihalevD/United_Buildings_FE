import LocationOnIcon from "@mui/icons-material/LocationOn";
import { AdWrapperProperty } from "./AdWrapperProperty";
import BasicBox from "./basic/BasicBox";
import { TextContainer } from "./basic/TextContainer";
import { DescriptionBlock } from "./DescriptionBlock";

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

export const InfoBoxProperty = (props: InfoBoxProps) => {
  return (
    <BasicBox top="33px" fullWidth justify="space-between">
      <BasicBox direction="column" style={{ width: "40%" }}>
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
      </BasicBox>
      <AdWrapperProperty />
    </BasicBox>
  );
};
