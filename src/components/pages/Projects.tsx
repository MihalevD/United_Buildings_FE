import useIsMobile from "../../helper/isMobile";
import { MobileProjects } from "../mobile/MobileProjects";

export const Projects = () => {
  const isMobile = useIsMobile();

  return <>{isMobile ? <div></div> : <MobileProjects></MobileProjects>}</>;
};
