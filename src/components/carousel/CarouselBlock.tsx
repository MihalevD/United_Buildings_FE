import styled from "@emotion/styled";
import BasicBox from "../basic/BasicBox";
import { ImageContainer } from "../basic/ImageContainer";
import { TextContainer } from "../basic/TextContainer";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import { useNavigate } from "react-router-dom";

const Wrapper = styled(BasicBox)`
  flex-shrink: 0;
  cursor: pointer;
  width: 400px;
  height: 400px;
  aspect-ratio: 1/1;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 30px;
  margin-bottom: 52px;
  transition: background-color 1s;
  :hover {
    background: #cdd5b1 0% 0% no-repeat padding-box;
  }
`;
const imgStyles = {
  width: "100%",
  height: "269px",
  objectFit: "cover" as const,
};

export type CarouselBlockTypes = {
  id: number;
  image_url: { src: string }[];
  imgAlt: string;
  type_name: string;
  price: string;
  address: string;
  size: string;
  rooms: string;
  fullWidth?: boolean;
};

const textStylesHeading = {
  color: "#000000",
  fontSize: "25px",
  lineHeight: "35px",
  textAlign: "left" as const,
  fontWeight: "600",
};

const textStylesSubHeading = {
  color: "#000000",
  fontSize: "22px",
  lineHeight: "35px",
  textAlign: "left" as const,
};

export const CarouselBlock = (props: CarouselBlockTypes) => {
  const navigate = useNavigate();
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/property/" + props.id);
  };

  return (
    <BasicBox fullWidth={props.fullWidth} justify="center">
      <Wrapper direction="column" onClick={handleClick}>
        <BasicBox fullWidth>
          <ImageContainer
            animation={false}
            imageSrc={props.image_url ? props.image_url[0].src : ""}
            imageStyles={imgStyles}
            style={{
              borderRadius: "30px",
              border: "1px solid #C9C7C7",
              objectFit: "cover",
            }}
            fullWidth
          />
        </BasicBox>
        <BasicBox
          left="24px"
          right="15px"
          direction="column"
          bottom="30px"
          style={{ width: "auto" }}
          fullHeight
          justify="space-between"
        >
          <BasicBox
            justify="space-between"
            fullWidth
            direction="column"
            top="12px"
          >
            <BasicBox justify="space-between" fullWidth>
              <TextContainer
                text={props.type_name}
                textStyles={textStylesHeading}
              />
              <TextContainer
                text={"€ " + props.price + ",000"}
                textStyles={textStylesHeading}
              />
            </BasicBox>
            <TextContainer
              text={props.address}
              textStyles={textStylesSubHeading}
            />
          </BasicBox>
          <BasicBox justify="space-between" fullWidth>
            <TextContainer
              text={props.rooms + " спални"}
              textStyles={textStylesSubHeading}
            />
            <BasicBox>
              <AspectRatioIcon sx={{ fontSize: "32px", marginRight: "8px" }} />
              <TextContainer
                text={props.size + " кв.м."}
                textStyles={textStylesSubHeading}
              />
            </BasicBox>
          </BasicBox>
        </BasicBox>
      </Wrapper>
    </BasicBox>
  );
};
