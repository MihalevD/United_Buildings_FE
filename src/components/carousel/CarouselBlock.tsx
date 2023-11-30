import styled from "@emotion/styled";
import BasicBox from "../basic/BasicBox";
import { ImageContainer } from "../basic/ImageContainer";
import { TextContainer } from "../basic/TextContainer";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

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

export type ApartType = {
  id: number;
  image_url: { src: string }[];
  type_name: string;
  price: string;
  address: string;
  size: string;
  description?: string;
  location_name: string;
  project_name?: string;
  floor?: string;
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

type CarouselBlockTypes = {
  apartment: ApartType;
  fullWidth?: boolean;
};

export const CarouselBlock: React.FC<CarouselBlockTypes> = ({
  apartment,
  fullWidth,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch({ type: "SET_CHOSEN_APARTMENT", payload: apartment });
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/property/" + apartment.id);
  };
  console.log(apartment);

  return (
    <BasicBox fullWidth={fullWidth} justify="center">
      <Wrapper direction="column" onClick={handleClick}>
        <BasicBox fullWidth>
          <ImageContainer
            animation={false}
            imageSrc={apartment?.image_url ? apartment.image_url[0].src : ""}
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
                text={apartment?.type_name}
                textStyles={textStylesHeading}
              />
              <TextContainer
                text={"€ " + apartment?.price + ",000"}
                textStyles={textStylesHeading}
              />
            </BasicBox>
            <TextContainer
              text={apartment?.address}
              textStyles={textStylesSubHeading}
            />
          </BasicBox>
          <BasicBox justify="space-between" fullWidth>
            <TextContainer
              text={"Етаж  " + (apartment?.floor || "1")}
              textStyles={textStylesSubHeading}
            />
            <BasicBox>
              <AspectRatioIcon sx={{ fontSize: "32px", marginRight: "8px" }} />
              <TextContainer
                text={apartment?.size + " кв.м."}
                textStyles={textStylesSubHeading}
              />
            </BasicBox>
          </BasicBox>
        </BasicBox>
      </Wrapper>
    </BasicBox>
  );
};
