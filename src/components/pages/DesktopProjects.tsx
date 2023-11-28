import BasicBox from "../basic/BasicBox";
import { ProjectBox } from "../ProjectBox";
import apart1 from "../../img/apart.jpg";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";

export const DesktopProjects = () => {
  const projects = useSelector((state: any) => state.projects);

  return (
    <BasicBox fullWidth justify="center" align="center">
      <ProjectWrapper
        top="96px"
        width="75%"
        bottom="96px"
        gap="70px"
        style={{ flexWrap: "wrap" }}
      >
        {projects &&
          projects.map((project: any, index: any) => (
            <ProjectBox key={index} {...project} />
          ))}
      </ProjectWrapper>
    </BasicBox>
  );
};

const ProjectWrapper = styled(BasicBox)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 70px;
  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;
