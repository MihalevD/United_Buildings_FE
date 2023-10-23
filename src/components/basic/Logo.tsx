import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import logo from "../../img/logo.png";
import { ImageContainer } from "./ImageContainer";

const LogoBox = styled.div<{ $left: boolean }>`
  width: 250px;
  height: 50px;
  position: relative;
  padding-left: ${({ $left }) => (!$left ? "0px" : "100px")};
  @media (max-width: 1200px) {
    padding-left: ${({ $left }) => (!$left ? "0px" : "30px")};
  }
`;

type LogoProps = {
  left?: boolean;
};

export const Logo: React.FC<LogoProps> = ({ left = false }) => {
  return (
    <LogoBox $left={left}>
      <ImageContainer
        imageSrc={logo}
        imageStyles={{ height: "100%", width: "100%" }}
      ></ImageContainer>
    </LogoBox>
  );
};
