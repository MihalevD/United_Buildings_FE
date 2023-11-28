import styled from "@emotion/styled";
import BasicBox from "./basic/BasicBox";
import { LightButton } from "./basic/LightButton";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { StylesConfig } from "react-select";
import { OptionType } from "../hooks/filterHooks";
import Select from "./basic/Select";
import { useSpring, animated } from "react-spring"; // Import react-spring
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import CloseIcon from "@mui/icons-material/Close";
import {
  FormState,
  clearFilters,
  setInputValue,
} from "../redux/reducers/adFormReducer";

type AdFormProps = {
  formBuy: boolean;
  setChosen: (chosen: boolean) => void;
};

const Wrapper = styled(animated(BasicBox))<{ isOpen: boolean }>`
  height: ${(props) => (props.isOpen ? "450px" : "0")};
  overflow: ${(props) => (props.isOpen ? "visible" : "hidden")};
`;

export const AdForm: React.FC<AdFormProps> = ({ formBuy, setChosen }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const locationData = useSelector((state: RootState) => state.locations);
  const kvartaliData = useSelector((state: RootState) => state.kvartals);
  const typeData = useSelector((state: RootState) => state.types);
  const { inputValues } = useSelector((state: RootState) => state.adForm);

  const [isOpen, setIsOpen] = useState(formBuy);

  const onApply = () => {
    // Dispatch an action to set the filters in the Redux store

    if (location.pathname === "/") {
      navigate("/catalog");
    }

    // Dispatch an action to clear the filters in the Redux store
    dispatch(clearFilters());
  };

  const handleInputChange =
    (field: keyof FormState["inputValues"]) => (value: any) => {
      dispatch(setInputValue({ field, value }));
    };

  const sidebarAnimation = useSpring({
    height: isOpen ? "450px" : "0px",
    opacity: isOpen ? 1 : 0,
    config: {
      duration: 250, // Adjust the duration here (e.g., 250ms for faster animation)
    },
  });
  return (
    <Wrapper
      fullWidth
      top="30px"
      direction="column"
      style={sidebarAnimation}
      isOpen={isOpen}
    >
      <BasicBox fullWidth bottom="8px" justify="space-between">
        <InputBlock
          placeholder="Твоето име"
          style={{ width: "100%" }}
          value={inputValues.name}
          onChange={(e) => handleInputChange("name")(e.target.value)}
        />
      </BasicBox>
      <BasicBox fullWidth bottom="8px" justify="space-between">
        <InputBlock
          placeholder="Твоя телефон"
          style={{ width: "100%" }}
          value={inputValues.phone}
          onChange={(e) => handleInputChange("phone")(e.target.value)}
        />
      </BasicBox>
      <BasicBox fullWidth>
        <InputBlock
          placeholder="Твоя имейл"
          style={{ width: "100%" }}
          value={inputValues.email}
          onChange={(e) => handleInputChange("email")(e.target.value)}
        />
      </BasicBox>
      <Select
        options={locationData ?? []}
        placeholder="Населено място"
        optionSelected={inputValues.place}
        handleChange={handleInputChange("place")}
        styles={customStyles}
      />

      <Select
        options={typeData ?? []}
        handleChange={handleInputChange("type")}
        optionSelected={inputValues.type}
        placeholder="Тип имот"
        styles={customStyles}
      />

      <Select
        options={kvartaliData ?? []}
        placeholder="Цена"
        optionSelected={inputValues.kvartal}
        styles={customStyles}
        handleChange={handleInputChange("kvartal")}
      />
      <BasicBox fullWidth justify="space-evenly" top="52px">
        <LightButton>Изпрати</LightButton>
        <CloseButton onClick={() => setChosen(false)}>
          <CloseIcon />
        </CloseButton>
      </BasicBox>
    </Wrapper>
  );
};

const InputBlock = styled.input`
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #707070;
  border-radius: 30px;
  padding-left: 30px;
  font: normal normal 300 14px/19px Segoe UI;
  letter-spacing: 0px;
  color: rgba(105, 105, 105, 1);
  padding-top: 13px;
  padding-bottom: 13px;
  ::placeholder {
    font: normal normal 300 18px/24px Segoe UI;
    letter-spacing: 0px;
    color: rgba(105, 105, 105, 1);
  }
  outline-style: none;
`;

const customStyles: StylesConfig<OptionType, true> = {
  control: (provided: any) => ({
    ...provided,
    background: "rgba(205, 213, 177, 1)!important",
    height: "45px",
    borderRadius: "30px",
    paddingLeft: "8px",
    color: "rgba(63, 69, 84, 1)",
    marginTop: "12px",
  }),
  placeholder: (provided: any) => ({
    ...provided,
    color: "rgba(63, 69, 84, 1)",
  }),
  indicatorsContainer: (provided: any) => ({
    ...provided,
    color: "rgba(63, 69, 84, 1)",
  }),
  container: (provided: any) => ({
    ...provided,
    marginLeft: "0px",
  }),
};

const CloseButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  color: white;
  font-size: 20px;
  z-index: 1000;
  @media (max-width: 768px) {
    top: 10px;
    right: 5px;
  }
`;
