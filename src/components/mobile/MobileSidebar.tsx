import React, { useState } from "react";
import styled from "@emotion/styled";
import BasicBox from "../basic/BasicBox";
import CloseIcon from "@mui/icons-material/Close";
import { MobileLogo } from "../basic/MobileLogo";
import { navigation } from "../../tokens/Texts";

const Container = styled.div`
  position: relative;
  overflow: hidden;
`;

const Sidebar = styled(BasicBox)<{ isOpen: boolean }>`
  height: 100%;
  width: ${(props) => (props.isOpen ? "250px" : "0")};
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(205, 213, 177, 1);
  transition: 0.3s;
  padding-top: 16px;
  z-index: 10000;
`;

const SidebarLink = styled.a`
  padding: 15px;
  text-decoration: none;
  font-size: 24px;
  line-height: 32px;
  color: rgba(63, 69, 84, 1);
  display: block;
  transition: 0.2s;

  &:hover {
    background-color: #555;
  }
`;
type MobileSidebarProps = {
  isOpen: boolean;
  closeSidebar: (event: any) => void;
};

const MobileSidebar: React.FC<MobileSidebarProps> = ({
  isOpen,
  closeSidebar,
}) => {
  return (
    <Sidebar left="16px" isOpen={isOpen} direction="column">
      <CloseIcon
        sx={{ fontSize: "50px", color: "rgba(63, 69, 84, 1)" }}
        onClick={(e) => closeSidebar(e)}
      />
      <BasicBox direction="column" top="50px">
        {navigation.map((nav) => {
          return (
            <SidebarLink key={nav.name} href={nav.path}>
              {nav.name}
            </SidebarLink>
          );
        })}
      </BasicBox>
      <MobileLogo
        width="220px"
        styles={{ position: "absolute", bottom: "35px" }}
      />
    </Sidebar>
  );
};

export default MobileSidebar;
