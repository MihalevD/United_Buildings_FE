import { TextContainer } from "./basic/TextContainer";
import BasicBox from "./basic/BasicBox";
import styled from "@emotion/styled";
import CloseIcon from "@mui/icons-material/Close";
import { OptionType } from "../hooks/filterHooks";
import { useDispatch } from "react-redux";

const textStyles = {
  fontSize: "18px",
  lineHeight: "24px",
  color: "#3f4554",
};
const Wrapper = styled(BasicBox)`
  background: #cdd5b1 0% 0% no-repeat padding-box;
  border-radius: 20px;
  margin-right: 16px;
`;

type FilterTypes = {
  text: string;
  item: OptionType;
  type: string;
  close?: boolean;
};

export const Filter = ({ close = true, ...props }) => {
  const dispatch = useDispatch();
  console.log(props);
  const removeFilter = () => {
    dispatch({
      type: "REMOVE_FILTER",
      payload: { value: props.item, filterType: props.type },
    });
  };
  return (
    <>
      {props.text && (
        <Wrapper>
          <BasicBox
            left="16px"
            top="6px"
            bottom="10px"
            right={close ? "10px" : "15px"}
            align="center"
          >
            <TextContainer text={props.text} textStyles={textStyles} />
            {close && (
              <BasicBox
                left="15px"
                onClick={() => removeFilter()}
                style={{ cursor: "pointer", zIndex: 1 }}
              >
                <CloseIcon />
              </BasicBox>
            )}
          </BasicBox>
        </Wrapper>
      )}
    </>
  );
};
