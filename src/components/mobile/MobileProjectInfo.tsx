import { ProjectData } from "../../config/types";
import { keyForDataProjectInfo } from "../../tokens/Texts";
import BasicBox from "../basic/BasicBox";
import { ProjectInfoBox } from "../basic/mobile/ProjectInfoBox";

export const MobileProjectInfo = () => {
  const data: ProjectData = {
    size: "1000",
    status: "В процес на реализация",
    year: "2020",
    investor: "Инвеститор",
    builder: "Изпълнител",
  };
  return (
    <BasicBox direction="column" fullWidth bottom="20px">
      {data &&
        Object.entries(data).map(([key, value], index, arr) => {
          return (
            <ProjectInfoBox
              key={index}
              customKey={keyForDataProjectInfo[key]}
              value={value}
              top={index !== 0}
            />
          );
        })}
    </BasicBox>
  );
};
