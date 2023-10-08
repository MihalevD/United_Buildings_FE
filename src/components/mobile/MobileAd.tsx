import { useState } from "react";
import { AdChoose } from "../AdChoose";
import { AdForm } from "../AdForm";
import BasicBox from "../basic/BasicBox";
import styled from "@emotion/styled";
import useIsMobile from "../../helper/isMobile";

const Wrapper = styled(BasicBox)`
  background: #7a7d48 0% 0% no-repeat padding-box;
  border: 1px solid #707070;
  border-radius: 20px;
`;

const Text = styled.span`
  text-align: center;
  font-size: 20px;
  line-height: 20px;
  letter-spacing: 0px;
  width: 90%;
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

type MobileAdProps = {
  hasPadding?: boolean;
};

export const MobileAd: React.FC<MobileAdProps> = ({ hasPadding = true }) => {
  const [chosen, setChosen] = useState(false);
  const [formBuy, setFormBuy] = useState(false);
  const isMobile = useIsMobile();
  return (
    <BasicBox
      left={hasPadding ? "36px" : "0px"}
      right={hasPadding ? "36px" : "0px"}
      fullWidth
      style={{ boxSizing: "border-box" }}
      bottom="50px"
    >
      <Wrapper>
        <BasicBox
          top="30px"
          bottom="30px"
          direction="column"
          align="center"
          justify="center"
          left="18px"
          right="18px"
        >
          <Text>
            С <span style={{ fontWeight: "bold" }}>United Buildings</span>{" "}
            винаги е лесно
          </Text>
          <SecondaryText>
            <span>Направи запитване</span>
          </SecondaryText>
          {chosen && isMobile && (
            <AdChoose setChosen={setChosen} setFormBuy={setFormBuy} />
          )}
          {chosen ? (
            <AdForm formBuy={formBuy} />
          ) : (
            <AdChoose setChosen={setChosen} setFormBuy={setFormBuy} />
          )}
        </BasicBox>
      </Wrapper>
    </BasicBox>
  );
};
