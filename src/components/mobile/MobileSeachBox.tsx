import styled from "@emotion/styled";
import BasicBox from "../basic/BasicBox";
import { TextContainer } from "../basic/TextContainer";
import { useState } from "react";
import useIsTablet from "../../helper/isTablet";
import { useLocation, useNavigate } from "react-router-dom";
import { ActionMeta, MultiValue } from "react-select";
import {
  OptionType,
  useGetLocations,
  useGetPriceRanges,
  useGetTypes,
} from "../../hooks/filterHooks";
import Select from "../basic/Select";
import { DarkButton } from "../basic/DarkButton";

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

const textStyles = {
  fontSize: "18px",
  lineHeight: "24px",
  fontWeight: "bold",
  color: "#3f4554",
  textAlign: "center" as const,
};

export const MobileSearchBox = () => {
  const [filters, setFilters] = useState({
    type: [] as OptionType[],
    place: [] as OptionType[],
    price: [] as OptionType[],
  });
  const isTablet = useIsTablet();
  const location = useLocation();
  const navigate = useNavigate();
  const isProductPage = location.pathname.split("/")[1] == "property";

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
          optionSelected={filters.place}
          handleChange={handleMultiChange("place")}
          isMulti
        />

        <Select
          options={typeData ?? []}
          handleChange={handleMultiChange("type")}
          optionSelected={filters.type}
          placeholder="Тип"
          isMulti
        />

        <Select
          options={priceData ?? []}
          placeholder="Цена"
          optionSelected={filters.price}
          handleChange={handleMultiChange("price")}
        />

        <DarkButton onClick={() => onApply()}>Търси</DarkButton>
      </InnerWrapper>
    </Wrapper>
  );
};
