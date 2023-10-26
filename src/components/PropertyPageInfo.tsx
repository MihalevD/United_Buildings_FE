import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import BathtubOutlinedIcon from "@mui/icons-material/BathtubOutlined";
import ImageAspectRatioOutlinedIcon from "@mui/icons-material/ImageAspectRatioOutlined";
import styled from "@emotion/styled";
import BasicBox from "./basic/BasicBox";
import { TextContainer } from "./basic/TextContainer";
import { AspectRatio } from "@mui/icons-material";
import StairsIcon from "@mui/icons-material/StairsOutlined";
import HomeWorkIcon from "@mui/icons-material/HomeWorkOutlined";
import HvacIconOutlined from "@mui/icons-material/HvacOutlined";

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

export const PropertyPageInfo = () => {
  return (
    <InformationWrapper
      fullWidth
      spacing="24px"
      fullPadding
      justify="space-between"
      gap="20px"
      style={{ boxSizing: "border-box", flexWrap: "wrap" }}
    >
      <BasicBox align="center" width="45%">
        <BasicBox justify="space-between" align="center" gap="10px">
          <BedOutlinedIcon sx={{ fontSize: "30px" }} />
          <TextContainer text={"Спални"} textStyles={textStyle} />
        </BasicBox>
        <TextContainer
          text={"1"}
          customStyles={{ width: "100%", justifyContent: "flex-end" }}
          textStyles={textStyle2}
        />
      </BasicBox>
      <BasicBox align="center" width="45%">
        <BasicBox justify="space-between" align="center" gap="10px">
          <BathtubOutlinedIcon sx={{ fontSize: "30px" }} />
          <TextContainer text={"Бани"} textStyles={textStyle} />
        </BasicBox>
        <TextContainer
          text={"1"}
          customStyles={{ width: "100%", justifyContent: "flex-end" }}
          textStyles={textStyle2}
        />
      </BasicBox>
      <BasicBox align="center" width="45%">
        <BasicBox justify="space-between" align="center" gap="10px">
          <AspectRatio sx={{ fontSize: "30px" }} />
          <TextContainer text={"Площ"} textStyles={textStyle} />
        </BasicBox>
        <TextContainer
          text={"1"}
          customStyles={{ width: "100%", justifyContent: "flex-end" }}
          textStyles={textStyle2}
        />
      </BasicBox>
      <BasicBox align="center" width="45%">
        <BasicBox justify="space-between" align="center" gap="10px">
          <StairsIcon sx={{ fontSize: "30px" }} />
          <TextContainer text={"Етаж"} textStyles={textStyle} />
        </BasicBox>
        <TextContainer
          text={"1"}
          customStyles={{ width: "100%", justifyContent: "flex-end" }}
          textStyles={textStyle2}
        />
      </BasicBox>
      <BasicBox align="center" width="45%">
        <BasicBox justify="space-between" align="center" gap="10px">
          <HomeWorkIcon sx={{ fontSize: "30px" }} />
          <TextContainer text={"Год. на строеж"} textStyles={textStyle} />
        </BasicBox>
        <TextContainer
          text={"1"}
          customStyles={{ width: "100%", justifyContent: "flex-end" }}
          textStyles={textStyle2}
        />
      </BasicBox>
      <BasicBox align="center" width="45%">
        <BasicBox justify="space-between" align="center" gap="10px">
          <HvacIconOutlined sx={{ fontSize: "30px" }} />
          <TextContainer text={"Отопление"} textStyles={textStyle} />
        </BasicBox>
        <TextContainer
          text={"1"}
          customStyles={{ width: "100%", justifyContent: "flex-end" }}
          textStyles={textStyle2}
        />
      </BasicBox>
    </InformationWrapper>
  );
};
