import { AboutProjectDesktop } from "../AboutProjectDesktop";
import { Apartments } from "../Apartments";
import { InfoProjectBox } from "../InfoProjectBox";
import BasicBox from "../basic/BasicBox";
import project from "../../img/project.jpg";
import styled from "@emotion/styled";
import { TextContainer } from "../basic/TextContainer";

const exampleProject = {
  project_name: "Example Project",
  description:
    "lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit",
  start_data: "2021-01-01",
  end_data: "2021-12-31",
  akt: 14,
  size: 100,
  floors: 10,
  apartments_num: 100,
  park_space: 100,
};

const textStyles = [
  {
    font: "normal normal 600 40px/50px Segoe UI",
    textAlign: "left" as "left",
  },
  {
    font: "normal normal 600 24px/50px Segoe UI",
    textAlign: "left" as "left",
  },
];

export const DesktopProjectPage = () => {
  return (
    <>
      <BasicBox
        fullWidth
        justify="center"
        style={{ maxHeight: "700px", position: "relative" }}
      >
        <Image src={project} />
        <NameBox>
          <TextContainer text="Example Project" textStyles={textStyles[0]} />
          <TextContainer text="гр. Бургас" textStyles={textStyles[1]} />
        </NameBox>
      </BasicBox>
      <BasicBox top="80px" bottom="80px" fullWidth justify="center">
        <BasicBox width="75%" direction="column">
          <BasicBox fullWidth justify="space-between" gap="10%">
            <InfoProjectBox
              stats={[
                { name: "eтажа", value: exampleProject.floors },
                { name: "апартамента", value: exampleProject.apartments_num },
                { name: "паркоместа", value: exampleProject.park_space },
              ]}
            />
            <AboutProjectDesktop />
          </BasicBox>
          <Apartments />
        </BasicBox>
      </BasicBox>
    </>
  );
};

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  margin-top: -120px;
  max-height: 700px;
`;

const NameBox = styled.div`
  position: absolute;
  bottom: 0;
  left: 10%;
  background: #69696980 0% 0% no-repeat padding-box;
  color: white;
  padding: 40px 60px;
`;
