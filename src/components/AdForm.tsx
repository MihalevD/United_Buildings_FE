import styled from "@emotion/styled";
import BasicBox from "./basic/BasicBox";
import { ImageContainer } from "./basic/ImageContainer";
import { LightButton } from "./basic/LightButton";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MultiValue, ActionMeta, StylesConfig } from "react-select";
import useIsTablet from "../helper/isTablet";
import {
  OptionType,
  useGetLocations,
  useGetTypes,
  useGetPriceRanges,
} from "../hooks/filterHooks";
import Select from "./basic/Select";
import { useSpring, animated, config } from "react-spring"; // Import react-spring

type AdFormProps = {
  formBuy: boolean;
};

const Wrapper = styled(animated(BasicBox))<{ isOpen: boolean }>`
  height: ${(props) => (props.isOpen ? "450px" : "0")};
  overflow: ${(props) => (props.isOpen ? "visible" : "hidden")};
`;

export const AdForm: React.FC<AdFormProps> = ({ formBuy }) => {
  const [filters, setFilters] = useState({
    type: [] as OptionType[],
    place: [] as OptionType[],
    price: [] as OptionType[],
  });
  const isTablet = useIsTablet();
  const location = useLocation();
  const navigate = useNavigate();
  const isProductPage = location.pathname.split("/")[1] == "property";

  const [isOpen, setIsOpen] = useState(formBuy);

  useEffect(() => {
    // Watch for changes in the formBuy prop
    setIsOpen(formBuy);
  }, [formBuy]);

  const onApply = () => {
    if (location.pathname === "/") {
      navigate("/catalog");
    }
    // setFilters(filters);
    clearState();
  };

  const handleMultiChange =
    (field: keyof typeof filters) =>
    (newValue: MultiValue<OptionType>, actionMeta: ActionMeta<OptionType>) => {
      setFilters({
        ...filters,
        [field]: newValue || [],
      });
    };

  const clearState = () => {
    setFilters({ type: [], place: [], price: [] });
  };

  const { data: locationData } = useGetLocations();
  const { data: typeData } = useGetTypes();
  const { data: priceData } = useGetPriceRanges();

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
        <InputBlock placeholder="Твоето име" style={{ width: "100%" }} />
      </BasicBox>
      <BasicBox fullWidth bottom="8px" justify="space-between">
        <InputBlock placeholder="Твоя телефон" style={{ width: "100%" }} />
      </BasicBox>
      <BasicBox fullWidth>
        <InputBlock placeholder="Твоя имейл" style={{ width: "100%" }} />
      </BasicBox>
      <Select
        options={locationData ?? []}
        placeholder="Населено място"
        optionSelected={filters.place}
        handleChange={handleMultiChange("place")}
        styles={customStyles}
      />

      <Select
        options={typeData ?? []}
        handleChange={handleMultiChange("type")}
        optionSelected={filters.type}
        placeholder="Тип имот"
        styles={customStyles}
      />

      <Select
        options={priceData ?? []}
        placeholder="Цена"
        optionSelected={filters.price}
        styles={customStyles}
        handleChange={handleMultiChange("price")}
      />
      <BasicBox fullWidth justify="center" top="52px">
        <LightButton>Изпрати</LightButton>
      </BasicBox>
    </Wrapper>
  );
};
const CustomTextArea = styled.textarea`
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #707070;
  width: 100%;
  height: 100px;
  resize: none;
  outline-style: none;
  border-radius: 30px;
  padding-left: 30px;
  padding-top: 12px;
  box-sizing: border-box;
  font: normal normal 300 18px/24px Segoe UI;
  letter-spacing: 0px;
  color: #696969;
`;

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
};
