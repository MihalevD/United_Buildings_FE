import styled from "@emotion/styled";
import BasicBox from "./basic/BasicBox";
import { TextContainer } from "./basic/TextContainer";

const CustomText = styled(TextContainer)`
  text-align: left;
  font: normal normal 600 30px/40px Segoe UI;
  letter-spacing: 0px;
  color: #3f4554;
`;

const Wrapper = styled(BasicBox)`
  background: #7a7d48 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
`;

const HeaderText = styled(TextContainer)`
  text-align: left;
  font: normal normal normal 20px/28px Segoe UI;
  letter-spacing: 0px;
  color: #cdd5b1;
`;

export const ClientsAboutUs = () => {
  const data = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "- Иван Иванов",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "- Иван Иванов",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "- Иван Иванов",
    },
  ];
  return (
    <>
      <BasicBox top="80px" bottom="50px">
        <CustomText text="НАШИТЕ ДОВОЛНИ КЛИЕНТИ" />
      </BasicBox>
      <Wrapper fullWidth justify="space-evenly">
        {data.map(({ text, name }) => (
          <BasicBox
            top="63px"
            style={{ maxWidth: "360px" }}
            direction="column"
            bottom="63px"
          >
            <HeaderText text={text} />
            <BasicBox fullWidth justify="flex-end">
              <HeaderText text={name} />
            </BasicBox>
          </BasicBox>
        ))}
      </Wrapper>
    </>
  );
};
