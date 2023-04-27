import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import background from "../img/apart.jpg";
import { Logo } from "./basic/Logo";
import { Navbar } from "./Navbar";
import { SearchBar } from "./SearchBar";
import BasicBox from "./basic/BasicBox";
import { FilterType } from "../config/types";
import { useIsPropertyPage } from "../helper/isPropertyPage";

const HeaderContainer = styled.div<{ $isPropPage: boolean }>`
  min-height: 100%;
  height: 100%;
  width: 100%;
  background-size: cover;
  background-image: ${({ $isPropPage }) =>
    $isPropPage ? "none" : `url(${background})`};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

type DesktopHeaderProps = {
  setFilters: (filters: FilterType) => void;
  isPropertyPage?: boolean;
};

export const DesktopHeader = (props: DesktopHeaderProps) => {
  const [isProductPage, setIsProductPage] = useState(true);

  useEffect(() => {
    setIsProductPage(props.isPropertyPage ?? false);
  }, [props.isPropertyPage]);

  return (
    <div
      style={{
        maxHeight: "724px",
        height: isProductPage ? "100%" : "58vh",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <HeaderContainer $isPropPage={isProductPage}>
        <Navbar />
        {!isProductPage && (
          <BasicBox fullWidth justify="center">
            <SearchBar setFilters={props.setFilters} />
          </BasicBox>
        )}
      </HeaderContainer>
    </div>
  );
};
