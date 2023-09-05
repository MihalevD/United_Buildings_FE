import React from "react";
import styled from "@emotion/styled";

const StyledBackButton = styled.button`
  background-color: #cdd5b1;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    background-color: black;
  }
`;

const BackButton: React.FC = () => {
  const handleBackClick = () => {
    // Handle going back to the button selection screen
  };

  return <StyledBackButton onClick={handleBackClick}>Back</StyledBackButton>;
};

export default BackButton;
