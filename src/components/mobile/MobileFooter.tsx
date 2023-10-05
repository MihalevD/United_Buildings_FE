import BasicBox from "../basic/BasicBox";
import { MobileLogo } from "../basic/MobileLogo";
import { TextContainer } from "../basic/TextContainer";

const textStylesHeading = {
  font: "normal normal bold 14px/12px Segoe UI",
  letterSpacing: "0px",
  color: "#3F4554",
};
const textStylesSubHeading = {
  color: "#3F4554",
  fontSize: "14px",
  lineHeight: "24px",
};

export const MobileFooter = () => {
  return (
    <BasicBox
      fullWidth
      left="36px"
      top="36px"
      style={{ backgroundColor: "#CDD5B1" }}
      direction="column"
    >
      <BasicBox bottom="25px">
        <MobileLogo />
      </BasicBox>
      <BasicBox direction="column" bottom="36px">
        <BasicBox bottom="10px">
          <TextContainer text="Контакти" textStyles={textStylesHeading} />
        </BasicBox>
        <TextContainer text="0889 466 977" textStyles={textStylesSubHeading} />
        <TextContainer
          text="sales@unitedbuildings.bg"
          textStyles={textStylesSubHeading}
        />
        <TextContainer
          text="бул. Даме Груев 1, 8001 Бургас, България"
          textStyles={textStylesSubHeading}
        />
      </BasicBox>
    </BasicBox>
  );
};
