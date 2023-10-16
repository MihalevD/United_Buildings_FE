import { SearchButton } from "./SearchButton";
import BasicBox from "./basic/BasicBox";
import { TextContainer } from "./basic/TextContainer";
import { useState } from "react";
import useIsTablet from "../helper/isTablet";
import { useLocation, useNavigate } from "react-router-dom";
import { ActionMeta, MultiValue } from "react-select";
import Select from "./basic/Select";
import {
  useGetLocations,
  useGetTypes,
  useGetPriceRanges,
} from "../hooks/filterHooks";

const textStyles = {
  fontSize: "40px",
  lineHeight: "53px",
  color: "#3f4554",
};

const blockStyle = (top: string) => ({
  position: "absolute" as "absolute",
  top: top,
  width: "100%",
});

const innerStyle = {
  backdropFilter: "blur(30px)",
  boxShadow: "0px 3px 6px #00000029",
  borderRadius: "20px",
  width: "75%",
  boxSizing: "border-box" as const,
};

type OptionType = { label: string; value: string };

// type SearchBarProps = {
//   setFilters: (filters: FilterType) => void;
// };

export const SearchBar = () => {
  const [filters, setFilters] = useState({
    type: [] as OptionType[],
    place: [] as OptionType[],
    price: [] as OptionType[],
  });
  const isTablet = useIsTablet();
  const location = useLocation();
  const navigate = useNavigate();

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

  const top =
    window.location.pathname === "/" ? (isTablet ? "41.5%" : "34%") : "49%";

  const { data: locationData } = useGetLocations();
  const { data: typeData } = useGetTypes();
  const { data: priceData } = useGetPriceRanges();

  return (
    <BasicBox style={blockStyle(top)} justify="center">
      <BasicBox
        direction="column"
        justify="space-between"
        style={innerStyle}
        fullPadding={true}
        top={window.location.pathname === "/" ? "30px" : "50px"}
        bottom="50px"
        left="70px"
        right="70px"
        fullWidth
      >
        {window.location.pathname === "/" && (
          <BasicBox fullWidth align="center" direction="column">
            <TextContainer
              className="search-text"
              text="Намерете перфектният недвижим"
              textStyles={textStyles}
            />
            <TextContainer
              className="search-text"
              text="имот за Вас!"
              textStyles={textStyles}
            />
          </BasicBox>
        )}
        <BasicBox
          top={
            window.location.pathname === "/"
              ? isTablet
                ? "30px"
                : "50px"
              : "0px"
          }
          fullWidth
        >
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
          <SearchButton onClick={() => onApply()} />
        </BasicBox>
      </BasicBox>
    </BasicBox>
  );
};
