import styled from "@emotion/styled";
import { ProjectData } from "../config/types";
import { keyForDataProjectInfo } from "../tokens/Texts";
import BasicBox from "./basic/BasicBox";
import { ProjectInfoBox } from "./basic/mobile/ProjectInfoBox";

export const InfoProjectBox = ({
  stats,
}: {
  stats: { name: string; value: number }[];
}) => {
  const data: ProjectData = {
    size: "1000",
    status: "В процес на реализация",
    year: "2020",
    investor: "Инвеститор",
    builder: "Изпълнител",
  };
  return (
    <BasicBox direction="column" width="40%">
      <BasicBox direction="column" fullWidth bottom="20px">
        <ProjectInfoBox customKey="" value="" top={false} />
        {data &&
          Object.entries(data).map(([key, value], index, arr) => {
            return (
              <ProjectInfoBox
                key={index}
                customKey={keyForDataProjectInfo[key]}
                value={value}
                top={true}
              />
            );
          })}
      </BasicBox>
      <BasicBox fullWidth gap="40px">
        {stats
          ? stats.map((stat, index) => {
              return (
                <BoxWrapper key={index} fullWidth direction="column">
                  <HeadText>{stat.value}</HeadText>
                  <SecondText>{stat.name}</SecondText>
                </BoxWrapper>
              );
            })
          : null}
      </BasicBox>
    </BasicBox>
  );
};

export const BoxWrapper = styled(BasicBox)`
  padding: 32px 22px;
  background: #7a7d48 0% 0% no-repeat padding-box;
  border-radius: 20px;
  color: white;
  min-width: 100px;
`;

export const HeadText = styled.div`
  font: normal normal normal 30px/30px Segoe UI;
  letter-spacing: 0px;
  color: #ffffff;
  text-align: center;
  opacity: 1;
`;

const SecondText = styled.div`
  font: normal normal normal 18px/30px Segoe UI;
  letter-spacing: 0px;
  color: #ffffff;
  text-align: center;
  opacity: 1;
`;
