import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import background from "../img/apart.jpg";
import { Navbar } from "./Navbar";
import { SearchBar } from "./SearchBar";
import BasicBox from "./basic/BasicBox";
import { FilterType } from "../config/types";
import { useLocation } from "react-router-dom";
import backgroundAboutPage from "../img/about/banner.png";
import backgroundProjectsPage from "../img/projects.png";

const HeaderContainer = styled.div<{
  $isPropPage: boolean;
  $isAboutPage: boolean;
  $isProjectsPage: boolean;
  $singlePage: boolean;
}>`
  min-height: 100%;
  height: 100%;
  width: 100%;
  position: ${(props) => (props.$singlePage ? "relative" : "")};
  background-size: cover;
  background-image: ${({
    $isPropPage,
    $isAboutPage,
    $isProjectsPage,
    $singlePage,
  }) =>
    $isPropPage
      ? "none"
      : $isAboutPage
      ? `url(${backgroundAboutPage})`
      : $singlePage
      ? "none"
      : $isProjectsPage
      ? `url(${backgroundProjectsPage})`
      : `url(${background})`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const DesktopHeader = () => {
  const location = useLocation();
  const isProductPage = location.pathname.split("/")[1] == "property";
  const isAboutPage = location.pathname.split("/")[1] == "about-us";
  const isPorjectsPage = location.pathname.split("/")[1] == "projects";
  const singlePage =
    location.pathname.split("/")[2] !== undefined && isPorjectsPage;
  return (
    <div
      style={{
        maxHeight: "724px",
        height: isProductPage || singlePage ? "100%" : "58vh",
        width: "100%",
        overflow: "hidden",
        backgroundColor: singlePage ? "rgba(245, 245, 245, 0.6)" : "none",
        zIndex: 1,
      }}
    >
      <HeaderContainer
        $isPropPage={isProductPage}
        $isAboutPage={isAboutPage}
        $isProjectsPage={isPorjectsPage}
        $singlePage={singlePage}
      >
        <Navbar />
        {!isProductPage && !isAboutPage && !isPorjectsPage && !singlePage && (
          <SearchBar />
        )}
        {isPorjectsPage && !singlePage && <TextBox>ПРОЕКТИ</TextBox>}
        <Overlay />
      </HeaderContainer>
    </div>
  );
};

const TextBox = styled(BasicBox)`
  z-index: 1;
  position: absolute;
  top: 40%;
  left: 15%;
  text-align: center;
  font: normal normal 600 40px/53px Segoe UI;
  letter-spacing: 0px;
  color: #3f4554;
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(3px) brightness(-4px);
  z-index: 0;
`;
