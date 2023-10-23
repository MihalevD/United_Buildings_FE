import { type } from "os";
import useIsMobile from "../helper/isMobile";
import BasicBox from "./basic/BasicBox";
import { LightButton } from "./basic/LightButton";

type AdChooseProps = {
  setChosen: (choice: boolean) => void;
  setFormBuy: (formBuy: boolean) => void;
};

export const AdChoose: React.FC<AdChooseProps> = ({
  setChosen,
  setFormBuy,
}) => {
  const isMobile = useIsMobile();
  return (
    <BasicBox
      fullWidth
      justify="flex-start"
      top="15px"
      direction={isMobile ? "column" : "row"}
      style={{ gap: "16px" }}
      align="center"
    >
      <LightButton
        onClick={() => {
          setChosen(true);
          setFormBuy(true);
        }}
      >
        Търся апартамент
      </LightButton>
      <LightButton
        style={{ marginLeft: "20px" }}
        onClick={() => {
          setChosen(true);
          setFormBuy(false);
        }}
      >
        Продавам апартамент
      </LightButton>
    </BasicBox>
  );
};
