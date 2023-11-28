import { useState } from "react";
import { AdChoose } from "./AdChoose";
import { AdForm } from "./AdForm";
import BasicBox from "./basic/BasicBox";
import styled from "@emotion/styled";
import HouseSVG from "../img/svg/HouseSVG";
import { useDispatch, useSelector } from "react-redux";
import { setFormBuy } from "../redux/reducers/adFormReducer";

const Wrapper = styled(BasicBox)`
  background: #7a7d48 0% 0% no-repeat padding-box;
  border: 1px solid #707070;
  border-radius: 20px;
  box-shadow: 0px 3px 6px #00000029;
  width: 75%;
  min-width: 800px;
`;

const Text = styled.span`
  text-align: left;
  font-size: 30px;
  line-height: 38px;
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
  const { formBuy } = useSelector((state: any) => state.adForm);
  const dispatch = useDispatch();

  const setFormBuyLocal = (value: boolean) => {
    dispatch(setFormBuy(value));
  };
  return (
    <Wrapper justify="center" style={{ position: "relative" }}>
      <HouseSVG />
      <BasicBox
        right="96px"
        style={{ height: "auto" }}
        align="center"
        top={chosen ? "40px" : "0px"}
        bottom={chosen ? "20px" : "0px"}
      >
        <BasicBox direction="column" justify="center">
          <Text>С United Buildings винаги е лесно</Text>
          <SecondaryText>
            <span>Направи запитване</span>
          </SecondaryText>
          {chosen ? (
            <AdForm formBuy={chosen} setChosen={setChosen} />
          ) : (
            <AdChoose setChosen={setChosen} setFormBuy={setFormBuyLocal} />
          )}
        </BasicBox>
      </BasicBox>
    </Wrapper>
  );
};
