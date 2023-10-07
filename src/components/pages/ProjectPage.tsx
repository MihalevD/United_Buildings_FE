import useIsMobile from "../../helper/isMobile";
import BasicBox from "../basic/BasicBox";
import { MobileProjectPage } from "../mobile/MobileProjectPage";

export const ProjectPage = () => {
  const isMobile = useIsMobile();
  return (
    <>
      {isMobile ? (
        <BasicBox></BasicBox>
      ) : (
        <MobileProjectPage></MobileProjectPage>
      )}
    </>
  );
};
