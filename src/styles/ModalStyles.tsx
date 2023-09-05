import styled from "@emotion/styled";
import { SmallButton } from "../components/basic/SmallButton";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 70px;
  background: #ffffff;
  border: 1px solid #c9c7c7;
  border-radius: 20px;
  opacity: 1;
  padding-left: 15px;
  font-size: 18px;
  line-height: 27px;
  color: black;
  box-shadow: none;
  margin-bottom: 10px;

  box-sizing: border-box;
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  width: 90%; /* Adjust the width as needed */
  max-width: 400px; /* Limit the width if needed */
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FormInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font: normal 600 16px/24px "Segoe UI", sans-serif; /* Match the font family */
  box-sizing: border-box;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
`;

export const ImageContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

export const Thumbnail = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-bottom: 10px;
`;

export const RedButton = styled(SmallButton)`
  background: #e57373; /* Red background color */
  color: white; /* White text color */
  :hover {
    background: #f44336 !important; /* Darker red on hover */
  }
`;

export const DeleteCircle = styled.div`
  width: 14px;
  height: 14px;
  right: -7px;
  top: -7px;
  border-radius: 50%;
  background: #ed0000;
  position: absolute;
  cursor: pointer;
  ::after {
    content: "X";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
  }
`;
