import React from "react";
import ReactLogo from "./HouseSVG.svg";
import BasicBox from "../../components/basic/BasicBox";

const HouseSVG = () => {
  return (
    <BasicBox
      width="50%"
      fullPadding
      spacing="20px"
      style={{ minWidth: "200px" }}
    >
      <img
        src={ReactLogo}
        alt="HouseSVG"
        style={{ width: "80%", maxHeight: "400px", minWidth: "200px" }}
      />
    </BasicBox>
  );
};
export default HouseSVG;
