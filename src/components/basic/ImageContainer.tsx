import styled from "@emotion/styled";
import React from "react";
import Colors from "../../tokens/Colors";
import BasicBox from "./BasicBox";
import { TextContainer } from "./TextContainer";

const boxStyle = {
  position: "absolute" as const,
  bottom: "8%",
  left: "8%",
  zIndex: 2,
};

export const ImageContainer: React.FC<{
  imageStyles?: { [name: string]: string };
  imageSrc?: string;
  imgText?: string;
  fullWidth?: boolean;
  fullHeight?: boolean;
  tag?: string;
  style?: { [name: string]: string };
  children?: React.ReactNode;
  top?: boolean;
  tagTextStyles?: { [name: string]: string };
  animation?: boolean;
  overlay?: boolean;
}> = ({
  imageSrc,
  imageStyles,
  fullWidth,
  fullHeight,
  imgText,
  tag,
  style,
  children,
  tagTextStyles,
  animation = true,
  overlay = false,
}) => {
  return (
    <Wrapper
      fullWidth={fullWidth}
      fullHeight={fullHeight}
      style={imageStyles}
      $animation={animation}
    >
      {!!imageSrc && (
        <ImageComponent
          imageSrc={imageSrc}
          imageStyles={imageStyles}
          outerStyle={style}
        />
      )}

      {!!children && children}

      {imgText && (
        <TextContainer
          text={imgText}
          customStyles={{
            position: "absolute",
            bottom: "10px",
            left: "10px",
          }}
        />
      )}
      {tag && (
        <BasicBox style={boxStyle}>
          <TextContainer text={tag} textStyles={tagTextStyles} />
        </BasicBox>
      )}
      {overlay && (
        <BasicBox
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "black",
            opacity: "0.3",
            zIndex: 1,
            borderRadius: "30px",
          }}
        />
      )}
    </Wrapper>
  );
};
const Wrapper = styled(BasicBox)<{ $animation: boolean }>`
  position: relative;
  transition: ${({ $animation }) =>
    $animation ? "all 0.5s ease-in-out" : "none"};
  :hover {
    scale: ${({ $animation }) => ($animation ? 1.1 : "none")};
    transition: all 0.5s ease-in-out;
    cursor: pointer;
    z-index: 10;
  }
`;

export const ImageComponent: React.FC<{
  imageStyles?: { [name: string]: string };
  imageSrc: string;
  outerStyle?: { [name: string]: string };
}> = ({ imageSrc, imageStyles, outerStyle }) => {
  return (
    <img
      src={imageSrc}
      alt={"static img"}
      {...imageStyles}
      style={outerStyle}
    ></img>
  );
};
