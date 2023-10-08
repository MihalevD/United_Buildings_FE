import BasicBox from "../BasicBox";
import { ProjectDetailBox } from "./ProjectDetailBox";

export const ProjectDetails = () => {
  return (
    <BasicBox fullWidth gap="18px" bottom="54px">
      <ProjectDetailBox text="етажа" number="7" />
      <ProjectDetailBox text="апартамента" number="52" />
      <ProjectDetailBox text="паркоместа" number="30" />
    </BasicBox>
  );
};
