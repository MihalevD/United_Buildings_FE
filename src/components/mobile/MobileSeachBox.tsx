import styled from "@emotion/styled";
import BasicBox from "../basic/BasicBox";
import { TextContainer } from "../basic/TextContainer";
import { useState } from "react";
import useIsTablet from "../../helper/isTablet";
import { useLocation, useNavigate } from "react-router-dom";
import { ActionMeta, MultiValue } from "react-select";
import { OptionType } from "../../hooks/filterHooks";
import Select from "../basic/Select";
import { DarkButton } from "../basic/DarkButton";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { MySlider } from "../basic/Slider";
import { changeFilter } from "../../redux/actions/filterActions";

const Wrapper = styled(BasicBox)`
  position: absolute;
  width: 100vw;
  top: 21%;
  z-index: 1;
  box-sizing: border-box;
`;
const InnerWrapper = styled(BasicBox)`
  border: 1px solid #707070;
  border-radius: 20px;
  width: 100%;
  backdrop-filter: blur(30px);
  gap: 20px;
  maxwidth: 90%;
`;
function valuetext(value: number) {
  return `${value}€`;
}
const textStyles = {
  fontSize: "18px",
  lineHeight: "24px",
  fontWeight: "bold",
  color: "#3f4554",
  textAlign: "center" as const,
};

export const MobileSearchBox = () => {
  const dispatch = useDispatch();
  const isTablet = useIsTablet();
  const location = useLocation();
  const navigate = useNavigate();
  const isProductPage = location.pathname.split("/")[1] == "property";

  const locationData = useSelector((state: RootState) => state.locations);
  const kvartaliData = useSelector((state: RootState) => state.kvartals);
  const typeData = useSelector((state: RootState) => state.types);

  const filters = useSelector((state: RootState) => state.filters);

  const onApply = () => {
    if (location.pathname === "/") {
      navigate("/catalog");
    }
  };

  const handleMultiChange =
    (field: keyof typeof filters) => (newValue: MultiValue<OptionType>) => {
      // Dispatch actions to update the Redux store with the new filter value
      const selectedValues = newValue || [];
      dispatch(changeFilter({ value: selectedValues, filterType: field }));
    };

  const handleChange = (event: Event, newValue: number | number[]) => {
    dispatch(changeFilter({ value: newValue, filterType: "priceRange" }));
  };

  return (
    <Wrapper left="36px" right="36px">
      <InnerWrapper
        left="16px"
        right="16px"
        top="25px"
        bottom="25px"
        direction="column"
      >
        {!isProductPage && (
          <TextContainer
            text="Намерете перфектният недвижим имот за Вас!"
            textStyles={textStyles}
          />
        )}
        <Select
          options={locationData ?? []}
          placeholder="Местоположение"
          optionSelected={filters.location}
          handleChange={handleMultiChange("location")}
          isMulti
        />

        <Select
          options={kvartaliData ?? []}
          placeholder="Квартал"
          disabled={
            filters.location &&
            filters.location.find((item) => item.label === "Бургас")
              ? false
              : true
          }
          optionSelected={filters.kvartal}
          handleChange={handleMultiChange("kvartal")}
        />

        <Select
          options={typeData ?? []}
          handleChange={handleMultiChange("type")}
          optionSelected={filters.type}
          placeholder="Тип"
          isMulti
        />
        <MySlider
          value={filters.priceRange}
          handleChange={handleChange}
          valuetext={valuetext}
          marks={false}
        />

        <DarkButton onClick={() => onApply()}>Търси</DarkButton>
      </InnerWrapper>
    </Wrapper>
  );
};
