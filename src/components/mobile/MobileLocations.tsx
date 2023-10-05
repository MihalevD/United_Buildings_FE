import BasicBox from "../basic/BasicBox";
import { ImageContainer } from "../basic/ImageContainer";
import { TextContainer } from "../basic/TextContainer";
import bs from "../../img/betterquality/Burgas.jpg";
import sz from "../../img/sz.jpg";
import ch from "../../img/betterquality/chernomorets2.jpg";
import styled from "@emotion/styled";

const text2 =
  "РАЗГЛЕДАЙТЕ НАЙ-АТРАКТИВНИТЕ КАТЕГОРИИ ЗА ДА ОТКРИЕТЕ СВОЕТО ЖИЛИЩЕ";

const tagTextStyles = {
  color: "#C9C7C7",
  fontSize: "18px",
  lineHeight: "24px",
  fontWeight: "700",
  alignText: "left" as const,
};

const textStylesSubHeading = {
  color: "#000000",
  fontSize: "19px",
  lineHeight: "28px",
  textAlign: "left" as const,
  fontWeight: "600",
};

const Wrapper = styled(BasicBox)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 140px 140px;
  column-gap: 10px;
  row-gap: 15px;
  grid-template-areas:
    "header header"
    "image2 image3";
`;

const imgStyles = {
  width: "100%",
  height: "100%",
};

const imgStyles1 = {
  ...imgStyles,
  gridArea: "header",
};

const imgStyles2 = {
  ...imgStyles,
  gridArea: "image2",
};

const imgStyles3 = {
  ...imgStyles,
  gridArea: "image3",
};

const styles = {
  borderRadius: "30px",
  boxShadow: "0px 3px 6px #00000029",
  objectFit: "cover",
};

export const MobileLocations = () => {
  return (
    <BasicBox
      left="36px"
      right="36px"
      top="50px"
      fullWidth
      bottom="50px"
      direction="column"
      style={{ boxSizing: "border-box" }}
    >
      <BasicBox bottom="47px" direction="column">
        <TextContainer
          text={text2}
          textStyles={textStylesSubHeading}
        ></TextContainer>
      </BasicBox>
      <Wrapper direction="column">
        <ImageContainer
          imageSrc={bs}
          imageStyles={imgStyles1}
          fullHeight
          fullWidth
          tag="Бургас"
          top
          style={styles}
          tagTextStyles={tagTextStyles}
        />
        <ImageContainer
          imageSrc={sz}
          imageStyles={imgStyles2}
          fullHeight
          fullWidth
          tag="Созопол"
          style={styles}
          tagTextStyles={tagTextStyles}
        />
        <ImageContainer
          imageSrc={ch}
          imageStyles={imgStyles3}
          tag="Черноморец"
          fullHeight
          fullWidth
          style={styles}
          tagTextStyles={tagTextStyles}
        />
      </Wrapper>
    </BasicBox>
  );
};
