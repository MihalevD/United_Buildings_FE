import Select from "react-select/dist/declarations/src/Select";
import BasicBox from "./basic/BasicBox";
import { TextContainer } from "./basic/TextContainer";
import MySelectC from "./basic/Select";
import { useState } from "react";
import styled from "@emotion/styled";
import { ImageContainer } from "./basic/ImageContainer";
import CreditSVG from "../img/svg/CreditSVG";

type CreditCalculatorProps = {
  price: number;
};

const Wrapper = styled(BasicBox)`
  @media (max-width: 850px) {
    padding-top: 0px;
  }
`;
const InnerWrapper = styled(BasicBox)`
  @media (max-width: 850px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-left: 0px;
    padding-left: 0px;
    padding-top: 0px;
  }
`;

const InfoWrapper = styled(BasicBox)`
  width: 50%;
  @media (max-width: 850px) {
    width: 70%;
    margin-left: 0px;
    padding-left: 0px;
  }
`;

const textStyles = {
  font: "normal normal bold 30px/40px Segoe UI",
  letterSpacing: "0px",
  color: "#3F4554",
  opacity: "1",
};

const secondaryTextStyles = {
  fontWeight: "bold",
};

export const CreditCalculator: React.FC<CreditCalculatorProps> = ({
  price,
}) => {
  const [selectedOption, setSelectedOption] = useState(1);
  const [result, setResult] = useState(Number(price) / (selectedOption * 12));

  const handleChange = (selectedOption: any) => {
    setSelectedOption(selectedOption);
    const newNumber = Number((price / (selectedOption * 12)).toFixed(2));
    setResult(newNumber);
  };

  return (
    <Wrapper
      background="#f8f3ec"
      top="10px"
      bottom="10px"
      width="100vw"
      style={{ marginLeft: "-100px", boxSizing: "border-box" }}
      justify="center"
      align="center"
    >
      <InnerWrapper width="85%" direction="row" justify="center" align="center">
        <CreditSVG />
        <InfoWrapper direction="column" width="50%">
          <BasicBox direction="column" align="center" fullWidth gap="10px">
            <TextContainer text="Кредитен Калкулатор" textStyles={textStyles} />
            <TextContainer text="Пресметнете колко би ви била месечната вноска за този апартамент" />
          </BasicBox>
          <BasicBox top="20px" bottom="20px" justify="center" fullWidth>
            <BasicBox
              style={{ height: "auto", borderRadius: "10px" }}
              gap="5px"
              fullPadding
              spacing="10px"
              background="white"
              direction="column"
              align="center"
            >
              <TextContainer
                text="Цена на имота"
                textStyles={{ textAlign: "center" }}
              />
              <TextContainer
                text={"€" + price}
                textStyles={secondaryTextStyles}
              />
            </BasicBox>
            <BasicBox
              style={{ fontWeight: "bold", height: "auto", fontSize: "18px" }}
              left="10px"
              right="10px"
              alignText="center"
              align="center"
            >
              X
            </BasicBox>
            <BasicBox
              style={{ height: "auto", borderRadius: "10px" }}
              gap="5px"
              fullPadding
              spacing="10px"
              background="white"
              direction="column"
              align="center"
            >
              <TextContainer
                text="Брой години"
                textStyles={{ textAlign: "center" }}
              />
              <input
                type="number"
                value={selectedOption}
                style={{ width: "50%" }}
                onChange={(e) => {
                  handleChange(e.target.value);
                }}
              />
            </BasicBox>
            <BasicBox
              style={{ fontWeight: "bold", height: "auto", fontSize: "18px" }}
              left="10px"
              right="10px"
              align="center"
            >
              =
            </BasicBox>
            <BasicBox
              style={{ height: "auto", borderRadius: "10px" }}
              gap="5px"
              fullPadding
              spacing="10px"
              background="white"
              direction="column"
              align="center"
            >
              <TextContainer
                text="Месечна вноска"
                textStyles={{ textAlign: "center" }}
              />
              <TextContainer
                text={"€" + result}
                textStyles={secondaryTextStyles}
              />
            </BasicBox>
          </BasicBox>
          <BasicBox fullWidth align="center" alignText="center">
            <TextContainer text="Изчисленията на калкулатора целят да Ви дадат отправна точка за размера на погасителните вноски по търсения от Вас размер кредит. Възможно е да се различават от стойностите, които Банките ще Ви предложат в зависимост от Вашия индивидуален профил." />
          </BasicBox>
        </InfoWrapper>
      </InnerWrapper>
    </Wrapper>
  );
};
