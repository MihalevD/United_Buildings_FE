import React from "react";
import { Modal } from "react-modal-button";
import {
  EmailShareButton,
  FacebookShareButton,
  ViberShareButton,
  WhatsappShareButton,
  EmailIcon,
  FacebookIcon,
  ViberIcon,
  WhatsappIcon,
} from "react-share";
import BasicBox from "../basic/BasicBox";
import styled from "@emotion/styled";

type ShareModalProps = {
  onClose: () => void;
  isOpen: boolean;
};

const windowStyles = {
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  borderRadius: 3,
  border: 0,
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
};

export const ShareModal: React.FC<ShareModalProps> = ({ onClose, isOpen }) => {
  const [customText, setCustomText] = React.useState("Copy link");
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      showCloseButton={true}
      height="fit-content"
      windowStyles={windowStyles}
      width="fit-content"
    >
      <BasicBox
        fullPadding
        spacing="16px"
        fullWidth
        style={{ boxSizing: "border-box" }}
        gap="16px"
      >
        <EmailShareButton url="https://united-buildings-fe.vercel.app/property/4">
          <EmailIcon size={48} round={true} />
        </EmailShareButton>
        <FacebookShareButton url="https://united-buildings-fe.vercel.app/property/4">
          <FacebookIcon size={48} round={true} />
        </FacebookShareButton>
        <ViberShareButton url="https://united-buildings-fe.vercel.app/property/4">
          <ViberIcon size={48} round={true} />
        </ViberShareButton>
        <WhatsappShareButton url="https://united-buildings-fe.vercel.app/property/4">
          <WhatsappIcon size={48} round={true} />
        </WhatsappShareButton>
        <CustomButton
          onClick={() => {
            setCustomText("Copied!");
            navigator.clipboard.writeText(
              "https://united-buildings-fe.vercel.app/property/4"
            );
          }}
        >
          {customText}
        </CustomButton>
      </BasicBox>
    </Modal>
  );
};

const CustomButton = styled.button`
  width: fit-content;
  padding: 10px 24px;
  height: 48px;
  background: white 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 30px;
  text-align: center;
  font: normal normal 600 18px/24px Segoe UI;
  letter-spacing: 0px;
  color: #3f4554;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  margin-right: 16px;
  :hover {
    background: gray 0% 0% no-repeat padding-box !important;
  }
`;
