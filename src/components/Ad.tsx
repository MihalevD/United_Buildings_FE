import { useState } from "react";
import { AdChoose } from "./AdChoose";
import { AdForm } from "./AdForm";
import BasicBox from "./basic/BasicBox";
import styled from "@emotion/styled";
import HouseSVG from "../img/svg/HouseSVG";

const Wrapper = styled(BasicBox)`
  position: absolute;
  width: 75%;
  background: #7a7d48 0% 0% no-repeat padding-box;
  border: 1px solid #707070;
  border-radius: 20px;
  box-shadow: 0px 3px 6px #00000029;
  top: -150%;
`;

const Text = styled.span`
  text-align: left;
  font-size: 30px;
  line-height: 20px;
  letter-spacing: 0px;
  color: #cdd5b1;
  opacity: 1;
`;

const SecondaryText = styled.span`
  text-align: center;
  font: normal normal normal 20px/27px Segoe UI;
  letter-spacing: 0px;
  color: #cdd5b1;
  opacity: 1;
  padding-top: 10px;
  padding-bottom: 4px;
`;

export const Ad = () => {
  const [chosen, setChosen] = useState(false);
  const [formBuy, setFormBuy] = useState(false);
  return (
    <Wrapper justify="center">
      <HouseSVG />
      <BasicBox right="96px" style={{ height: "auto" }} align="center">
        <BasicBox direction="column" justify="center">
          <Text>
            С <span style={{ fontWeight: "bold" }}>United Buildings</span>{" "}
            винаги е лесно
          </Text>
          <SecondaryText>
            <span>Направи запитване</span>
          </SecondaryText>
          {chosen ? (
            <AdForm formBuy={formBuy} />
          ) : (
            <AdChoose setChosen={setChosen} setFormBuy={setFormBuy} />
          )}
        </BasicBox>
      </BasicBox>
    </Wrapper>
  );
};
