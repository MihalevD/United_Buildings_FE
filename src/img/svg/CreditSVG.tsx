import React from "react";
import ReactLogo from "./CreditSVG.svg";
import BasicBox from "../../components/basic/BasicBox";

const CreditSVG = () => {
  return (
    <BasicBox width="40%">
      <img
        src={ReactLogo}
        alt="CreditSVG"
        style={{ width: "100%", height: "100%" }}
      />
    </BasicBox>
  );
};
export default CreditSVG;
