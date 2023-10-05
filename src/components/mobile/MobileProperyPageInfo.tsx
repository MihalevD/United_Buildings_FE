import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import ImageAspectRatioOutlinedIcon from "@mui/icons-material/ImageAspectRatioOutlined";
import styled from "@emotion/styled";
import BasicBox from "../basic/BasicBox";
import { TextContainer } from "../basic/TextContainer";

const InformationWrapper = styled(BasicBox)`
  box-sizing: border-box;
  border: 1px solid #c9c7c7;
  border-radius: 20px;
`;

const textStyle = {
  textAlign: "left" as const,
  font: "normal normal normal 18px/12px Segoe UI",
  letterSpacing: "0px",
  color: "#3F4554",
  marginRight: "17px",
};

const textStyle2 = {
  textАlign: "left" as const,
  font: "normal normal bold 20px/12px Segoe UI",
  letterSpacing: "0px",
  color: "#3F4554",
};

export const MobilePropertyPageInfo = () => {
  return (
    <InformationWrapper
      fullWidth
      spacing="24px"
      fullPadding
      justify="space-between"
      style={{ boxSizing: "border-box" }}
    >
      <BasicBox align="center">
        <BasicBox align="center">
          <BedOutlinedIcon />
          <TextContainer text={"1"} textStyles={textStyle2} />
        </BasicBox>
      </BasicBox>
      <BasicBox align="center">
        <BasicBox align="center">
          <BathtubOutlinedIcon />
          <TextContainer text={"1"} textStyles={textStyle2} />
        </BasicBox>
      </BasicBox>
      <BasicBox align="center">
        <BasicBox align="center">
          <ImageAspectRatioOutlinedIcon />
          <TextContainer text={"1"} textStyles={textStyle2} />
        </BasicBox>
      </BasicBox>
    </InformationWrapper>
  );
};
