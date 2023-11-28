import useIsMobile from "../../helper/isMobile";
import { MobileProjectPage } from "../mobile/MobileProjectPage";
import { DesktopProjectPage } from "./DesktopProjectPage";

export const ProjectPage = () => {
  const isMobile = useIsMobile();
  return (
    <>
      {!isMobile ? (
        <DesktopProjectPage></DesktopProjectPage>
      ) : (
        <MobileProjectPage></MobileProjectPage>
      )}
    </>
  );
};
