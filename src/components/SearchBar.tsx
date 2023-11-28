import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../redux/actions/filterActions";
import { SearchButton } from "./SearchButton";
import BasicBox from "./basic/BasicBox";
import { TextContainer } from "./basic/TextContainer";
import { useState } from "react";
import useIsTablet from "../helper/isTablet";
import { useLocation, useNavigate } from "react-router-dom";
import { MultiValue } from "react-select";
import Select from "./basic/Select";
import { RootState } from "../store";
import { blockStyle, innerStyle, textStyles } from "../styles/SearchBarStyles";
import { MySlider } from "./basic/Slider";
import { asyncGetApartments } from "../redux/actions/apartmentActions";

type OptionType = { label: string; value: string };

function valuetext(value: number) {
  return `${value}€`;
}

export const SearchBar = () => {
  const dispatch = useDispatch();
  const isTablet = useIsTablet();
  const location = useLocation();
  const navigate = useNavigate();

  const locationData = useSelector((state: RootState) => state.locations);
  const kvartaliData = useSelector((state: RootState) => state.kvartals);
  const typeData = useSelector((state: RootState) => state.types);

  const [localFilters, setLocalFilters] = useState({
    location: [],
    kvartal: [],
    type: [],
    priceRange: [50, 140],
  });

  const onApply = () => {
    Object.entries(localFilters).forEach(([key, value]) => {
      dispatch(changeFilter({ value: value, filterType: key }));
    });

    dispatch(asyncGetApartments() as any);

    if (location.pathname === "/") {
      navigate("/catalog");
    }
  };

  const handleMultiChange =
    (field: keyof typeof localFilters) =>
    (newValue: MultiValue<OptionType>) => {
      setLocalFilters((prev) => ({ ...prev, [field]: newValue }));
    };

  const handleChange = (event: Event, newValue: number | number[]) => {
    setLocalFilters((prev) => ({ ...prev, priceRange: newValue as number[] }));
  };

  const top =
    window.location.pathname === "/" ? (isTablet ? "41.5%" : "34%") : "45%";
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
          <BasicBox fullWidth direction="column">
            <BasicBox fullWidth>
              <Select
                options={locationData ?? []}
                placeholder="Местоположение"
                optionSelected={localFilters.location}
                handleChange={handleMultiChange("location")}
                isMulti
              />

              <Select
                disabled={
                  localFilters.location &&
                  localFilters.location.find(
                    (item: { label: string }) => item.label === "Бургас"
                  )
                    ? false
                    : true
                }
                options={kvartaliData ?? []}
                placeholder="Квартали"
                optionSelected={localFilters.kvartal}
                handleChange={handleMultiChange("kvartal")}
                isMulti
              />

              <Select
                options={typeData ?? []}
                handleChange={handleMultiChange("type")}
                optionSelected={localFilters.type}
                placeholder="Тип"
                isMulti
              />
            </BasicBox>
            <BasicBox fullWidth top="20px">
              <MySlider
                value={localFilters.priceRange}
                handleChange={handleChange}
                valuetext={valuetext}
              />
            </BasicBox>
          </BasicBox>
          <SearchButton onClick={() => onApply()} />
        </BasicBox>
      </BasicBox>
    </BasicBox>
  );
};
