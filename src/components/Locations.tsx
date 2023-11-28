import BasicBox from "./basic/BasicBox";
import { ImageContainer } from "./basic/ImageContainer";
import { TextContainer } from "./basic/TextContainer";
import bs from "../img/betterquality/Burgas.jpg";
import sz from "../img/sz.jpg";
import ch from "../img/betterquality/chernomorets2.jpg";
import styled from "@emotion/styled";

const text2 =
  "РАЗГЛЕДАЙТЕ НАЙ-АТРАКТИВНИТЕ КАТЕГОРИИ ЗА ДА ОТКРИЕТЕ СВОЕТО ЖИЛИЩЕ";

const tagTextStyles = {
  color: "#C9C7CF",
  fontSize: "30px",
  lineHeight: "20px",
  fontWeight: "700",
  alignText: "left" as const,
};

const textStylesSubHeading = {
  color: "#000000",
  fontSize: "25px",
  lineHeight: "32px",
  textAlign: "left" as const,
  fontWeight: "600",
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 16px 16px;
  grid-template-areas:
    "first first . ."
    ". . . .";
  @media (max-width: 1365px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-areas:
      "first first"
      "second second"
      "third third"
      "fourth fourth";
    gap: 16px 16px;
  }
`;

const imgStyles = {
  width: "100%",
  height: "inherit",
  maxHeight: "300px",
};

const styles = {
  borderRadius: "30px",
  boxShadow: "0px 3px 6px #00000029",
  objectFit: "cover",
  cursor: "pointer",
};

const ImageContainerWithHover = styled(ImageContainer)``;

export const Locations = () => {
  return (
    <BasicBox
      top="73px"
      bottom="92px"
      direction="column"
      style={{ width: "75%" }}
    >
      <BasicBox bottom="47px" direction="column">
        <TextContainer
          text={text2}
          textStyles={textStylesSubHeading}
        ></TextContainer>
      </BasicBox>
      <Wrapper>
        <ImageContainerWithHover
          imageSrc={bs}
          imageStyles={{ ...imgStyles, gridArea: "first" }}
          fullHeight
          fullWidth
          tag="Бургас"
          top
          style={{ ...styles, gridarea: "first" }}
          tagTextStyles={tagTextStyles}
          overlay
        />
        <ImageContainerWithHover
          overlay
          imageSrc={sz}
          imageStyles={imgStyles}
          fullHeight
          fullWidth
          tag="Созопол"
          style={styles}
          tagTextStyles={tagTextStyles}
        />
        <ImageContainerWithHover
          overlay
          imageSrc={ch}
          imageStyles={imgStyles}
          tag="Черноморец"
          fullHeight
          fullWidth
          style={styles}
          tagTextStyles={tagTextStyles}
        />
        <ImageContainerWithHover
          overlay
          imageSrc={sz}
          imageStyles={imgStyles}
          fullHeight
          fullWidth
          tag="Созопол"
          style={styles}
          tagTextStyles={tagTextStyles}
        />
        <ImageContainerWithHover
          overlay
          imageSrc={ch}
          imageStyles={imgStyles}
          tag="Черноморец"
          fullHeight
          fullWidth
          style={styles}
          tagTextStyles={tagTextStyles}
        />
        <ImageContainerWithHover
          overlay
          imageSrc={sz}
          imageStyles={imgStyles}
          fullHeight
          fullWidth
          tag="Созопол"
          style={styles}
          tagTextStyles={tagTextStyles}
        />
        <ImageContainerWithHover
          overlay
          imageSrc={ch}
          imageStyles={imgStyles}
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
