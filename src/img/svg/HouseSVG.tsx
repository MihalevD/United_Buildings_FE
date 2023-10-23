import React from "react";
import ReactLogo from "./HouseSVG.svg";
import BasicBox from "../../components/basic/BasicBox";

const HouseSVG = () => {
  return (
    <BasicBox width="50%" fullPadding spacing="20px">
      <img
        src={ReactLogo}
        alt="HouseSVG"
        style={{ width: "80%", maxHeight: "400px" }}
      />
    </BasicBox>
  );
};
export default HouseSVG;
