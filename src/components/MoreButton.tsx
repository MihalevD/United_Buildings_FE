import styled from "@emotion/styled";

export const CustomButton = styled.button`
  width: 229px;
  height: 56px;
  background: #cdd5b1 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 30px;
  text-align: center;
  font: normal normal 600 20px/27px Segoe UI;
  letter-spacing: 0px;
  color: #3f4554;
  border: none;
  cursor: pointer;
  :hover {
    background: #dce2c5 0% 0% no-repeat padding-box !important;
  }
`;

type MoreButtonProps = {
  onClick: () => void;
  max: boolean;
};

export const MoreButton = (props: MoreButtonProps) => {
  return (
    <div>
      {!props.max && (
        <CustomButton onClick={props.onClick}>Покажи още</CustomButton>
      )}
    </div>
  );
};
