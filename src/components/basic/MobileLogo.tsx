import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import logo from "../../img/logo.png";
import { ImageContainer } from "./ImageContainer";
import BasicBox from "./BasicBox";
type MobileLogoProps = {
  width?: string;
  styles?: React.CSSProperties;
};

export const MobileLogo: React.FC<MobileLogoProps> = ({
  width = "178px",
  styles,
}) => {
  return (
    <BasicBox style={{ width: width, ...styles }}>
      <ImageContainer
        imageSrc={logo}
        imageStyles={{ height: "100%", width: "100%" }}
      ></ImageContainer>
    </BasicBox>
  );
};
