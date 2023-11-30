import { AboutProjectDesktop } from "../AboutProjectDesktop";
import { Apartments } from "../Apartments";
import { InfoProjectBox } from "../InfoProjectBox";
import BasicBox from "../basic/BasicBox";
import project from "../../img/project.jpg";
import styled from "@emotion/styled";
import { TextContainer } from "../basic/TextContainer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { useEffect } from "react";
import { asyncGetChosenProject } from "../../redux/actions/projectActions";
import { useParams } from "react-router-dom";

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
  const project = useSelector(
    (state: RootState) => state.projects.chosenProject
  );
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    console.log(project);
    if (!project) {
      dispatch(asyncGetChosenProject(Number(id)) as any);
    }
  }, []);
  return (
    <>
      <BasicBox
        fullWidth
        justify="center"
        style={{ maxHeight: "700px", position: "relative" }}
      >
        <Image
          src={
            project?.image_url
              ? Array.isArray(project.image_url)
                ? project.image_url[0].src
                : project.image_url.src
              : ""
          }
        />
        <NameBox>
          <TextContainer
            text={project?.project_name}
            textStyles={textStyles[0]}
          />
          <TextContainer text="гр. Бургас" textStyles={textStyles[1]} />
        </NameBox>
      </BasicBox>
      <BasicBox top="80px" bottom="80px" fullWidth justify="center">
        <BasicBox width="75%" direction="column">
          <BasicBox fullWidth justify="space-between" gap="10%">
            <InfoProjectBox
              stats={[
                { name: "eтажа", value: project?.floor },
                { name: "апартамента", value: project?.apartments_num },
                { name: "паркоместа", value: project?.park_space },
              ]}
            />
            <AboutProjectDesktop html={project.description || ""} />
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
