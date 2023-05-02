import styled from "@emotion/styled";
import React from "react";
import Colors from "../../tokens/Colors";
import BasicBox from "./BasicBox";
import { TextContainer } from "./TextContainer";

const tagTextStyles = {
  color: "#C9C7C7",
  fontSize: "30px",
  lineHeight: "20px",
  fontWeight: "700",
  alignText: "left" as const,
};

const boxStyle = {
  position: "absolute" as const,
  bottom: "55px",
  left: "26px",
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
}> = ({
  imageSrc,
  imageStyles,
  fullWidth,
  fullHeight,
  imgText,
  tag,
  style,
  children,
}) => {
  return (
    <Wrapper fullWidth={fullWidth} fullHeight={fullHeight} style={imageStyles}>
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
    </Wrapper>
  );
};
const Wrapper = styled(BasicBox)`
  position: relative;
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
