import { LightButton } from "./basic/LightButton";

type MoreButtonProps = {
  onClick: () => void;
  max: boolean;
};

export const MoreButton = (props: MoreButtonProps) => {
  return (
    <div>
      {!props.max && (
        <LightButton onClick={props.onClick}>Покажи още</LightButton>
      )}
    </div>
  );
};
