import React from "react";
import styled from "@emotion/styled";
import BasicBox from "../basic/BasicBox";
import CloseIcon from "@mui/icons-material/Close";
import { MobileLogo } from "../basic/MobileLogo";
import { navigation } from "../../tokens/Texts";
import { useSpring, animated, config } from "react-spring"; // Import react-spring

const Sidebar = styled(animated(BasicBox))<{ isOpen: boolean }>`
  height: 100%;
  width: ${(props) => (props.isOpen ? "250px" : "0")};
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(205, 213, 177, 1);
  transition: 0.3s;
  padding-top: 16px;
  z-index: 10000;
  overflow: ${(props) => (props.isOpen ? "visible" : "hidden")};
`;

const SidebarLink = styled.a`
  min-width: 200px;
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
  const sidebarAnimation = useSpring({
    width: isOpen ? "250px" : "0px",
    opacity: isOpen ? 1 : 0,
    config: {
      duration: 250, // Adjust the duration here (e.g., 250ms for faster animation)
    },
  });

  return (
    <Sidebar isOpen={isOpen} style={sidebarAnimation} direction="column">
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
        styles={{ position: "absolute", bottom: "35px", left: "15px" }}
      />
    </Sidebar>
  );
};

export default MobileSidebar;

// import React from "react";
// import { useSpring, animated } from "react-spring";

// type MobileSidebarProps = {
//   open: boolean;
//   setOpen: (open: boolean) => void;
// };

// const MobileSidebar: React.FC<MobileSidebarProps> = ({ open, setOpen }) => {
//   const props = useSpring({ width: open ? 250 : 0 });

//   return (
//     <div onClick={() => setOpen(false)}>
//       <animated.div
//         style={{
//           width: props.width,
//           height: "50px",
//           background: "hotpink",
//           overflow: "hidden", // Hide content when the width is 0
//         }}
//       />
//     </div>
//   );
// };

// export default MobileSidebar;
