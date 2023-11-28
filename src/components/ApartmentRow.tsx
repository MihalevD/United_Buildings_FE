import { useState } from "react";
import BasicBox from "./basic/BasicBox";
import styled from "@emotion/styled";
import { CarouselBlock, CarouselBlockTypes } from "./carousel/CarouselBlock";
import { items } from "../helper/constants";

export const ApartmentRow = () => {
  const [options, setOptions] = useState([
    "Студиа",
    "Едностайни",
    "Двустайни",
    "Мезонети",
  ]);
  const [selected, setSelected] = useState(0);
  const [data, setData] = useState<CarouselBlockTypes[]>(items.slice(0, 6));

  return (
    <BasicBox fullWidth direction="column" top="40px">
      <BasicBox fullWidth>
        {options.map((option, index) => {
          return (
            <WrapperBox
              fullWidth
              key={index}
              $selected={selected === index}
              onClick={() => setSelected(index)}
              justify="center"
            >
              {option}
            </WrapperBox>
          );
        })}
      </BasicBox>
      <OptWrapper top="40px">
        {data &&
          data.map((item, index) => <CarouselBlock key={index} {...item} />)}
      </OptWrapper>
    </BasicBox>
  );
};

const WrapperBox = styled(BasicBox)<{ $selected: boolean }>`
  background: ${({ $selected }) => ($selected ? "#cdd5b1" : "white")} 0% 0%
    no-repeat padding-box;
  border: ${({ $selected }) => (!$selected ? "none" : "1px solid #707070")};
  cursor: pointer;
  font: normal normal normal 24px/50px Segoe UI;
  letter-spacing: 0px;
  color: #3f4554;
  border-bottom: ${({ $selected }) =>
    $selected ? "none" : "1px solid #707070"};
`;

const OptWrapper = styled(BasicBox)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3%;
`;
