import BasicBox from "./basic/BasicBox";
import styled from "@emotion/styled";
import { TextContainer } from "./basic/TextContainer";
import { useNavigate } from "react-router-dom";

type ProjectBoxProps = {
  id: number;
  project_name: string;
  location_name: string;
  image_url: { src: string }[];
};

const Wrapper = styled(BasicBox)<{ $img_url: string }>`
  background-image: url(${({ $img_url }) => $img_url});
  min-height: 300px;
  min-width: 300px;
  background-size: cover;

  border-radius: 30px;
  backdrop-filter: blur(2px);
  cursor: pointer;
  z-index: 1;
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 30px;
  top: 0;
  left: 0;
  border-radius: 30px;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4px);
  z-index: 0;
  :hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const TextBox = styled(BasicBox)`
  z-index: 1;
  position: absolute;
  bottom: 40px;
  left: 30px;
  color: white;
`;

const textStylesHeading = {
  textAlign: "center" as const,
  font: "normal normal 600 32px/43px Segoe UI",
  letterSpacing: "0px",
  color: "#F5F5F5",
};

const textStylesSubHeading = {
  textAlign: "center" as const,
  font: "normal normal normal 18px/24px Segoe UI",
  letterSpacing: "0px",
  color: "#F5F5F5",
};

export const ProjectBox: React.FC<ProjectBoxProps> = ({
  id,
  project_name: name,
  location_name: location,
  image_url,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(`/projects/${id}`);
  };

  return (
    <Wrapper
      fullWidth
      $img_url={image_url ? image_url[0].src : ""}
      onClick={() => handleClick()}
    >
      <TextBox direction="column" gap="8px">
        <TextContainer text={name} textStyles={textStylesHeading} />
        <TextContainer text={location} textStyles={textStylesSubHeading} />
      </TextBox>
      <Overlay />
    </Wrapper>
  );
};
