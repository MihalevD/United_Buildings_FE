import styled from "@emotion/styled";
import { SearchButton } from "./SearchButton";
import BasicBox from "./basic/BasicBox";
import { TextContainer } from "./basic/TextContainer";
import { useEffect, useState } from "react";
import { FilterType } from "../config/types";
import useIsTablet from "../helper/isTablet";
import { useLocation, useNavigate } from "react-router-dom";
import Select, {
  StylesConfig,
  ActionMeta,
  MultiValue,
  components,
} from "react-select";
import React from "react";
const textStyles = {
  fontSize: "40px",
  lineHeight: "53px",
  color: "#3f4554",
};

const blockStyle = (top: string) => {
  return {
    background: "rgba(255, 255, 255, 0.82)",
    boxShadow: "0px 3px 6px #00000029",
    borderRadius: "20px 0 20px 20px",
    clipPath: "polygon(0 0, 0 100%, 100% 100%, 100% 25%, 89% 0)",
    position: "absolute" as "absolute",
    top: top,
    width: "70vw",
    maxWidth: "960px",
  };
};

const InputBlock = styled.input`
  width: 23%;
  min-width: 100px;
  height: 70px;
  background: #ffffff;
  border: 1px solid #c9c7c7;
  border-radius: 20px;
  opacity: 1;
  padding-left: 35px;
  font-size: 18px;
  line-height: 27px;
  margin-right: 16px;
  @media (max-width: 1100px) {
    padding-left: 15px;
  }

  ::placeholder {
    color: black;
    font-size: 18px;
    line-height: 27px;
  }
`;
type OptionType = { label: string; value: string };

const customStyles: StylesConfig<OptionType, true> = {
  menuPortal: (base) => ({ ...base, zIndex: 9999 }),
  input: (base) => ({
    ...base,
    display: "none",
  }),
  container: (provided) => ({
    ...provided,
    width: "100%",
    minWidth: "100px",
    marginRight: "16px",
  }),
  control: (provided) => ({
    ...provided,
    width: "100%",
    height: "70px",
    background: "#ffffff",
    border: "1px solid #c9c7c7",
    borderRadius: "20px",
    opacity: 1,
    paddingLeft: "5px",
    fontSize: "18px",
    lineHeight: "27px",
    color: "black",
    boxShadow: "none",
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: "20px",
    background: "#ffffff",
    paddingLeft: "5px",
    paddingRight: "15px",
    paddingTop: "10px",
    paddingBottom: "10px",
    marginTop: "5px",
    zIndex: 1000,
  }),
  option: (provided, state) => ({
    ...provided,
    background: state.isFocused ? "#c9c7c7" : "white",
  }),
};

type SearchBarProps = {
  setFilters: (filters: FilterType) => void;
};

const MultiValues = (props: any) => {
  // Don't display the MultiValue label if it's the third (or more) option.
  const children = props.data.isOverLimit ? null : props.children;
  return <components.MultiValue {...props}>{children}</components.MultiValue>;
};

const ValueContainer = ({ children, ...props }: any) => {
  let newChildren = children;

  let hiddenLength = React.Children.count(children[0]) - 1;

  if (React.Children.count(children[0]) > 1) {
    newChildren = [
      React.Children.toArray(children[0]).slice(0, 1),
      children[1],
      <div {...props} style={{ marginLeft: "7px" }}>
        + {hiddenLength}
      </div>,
    ];
  }

  return (
    <components.ValueContainer {...props} style="display: flex">
      {newChildren}
    </components.ValueContainer>
  );
};
export const customComponents = {
  MultiValues,
  ValueContainer,
};

export const SearchBar = (props: SearchBarProps) => {
  const [filters, setFilters] = useState({
    type: [] as OptionType[],
    place: [] as OptionType[],
    price: [] as OptionType[], // price is now an array of OptionType
  });
  const isTablet = useIsTablet();
  const location = useLocation();
  const navigate = useNavigate();

  const [types, setTypes] = useState([{}] as OptionType[]);
  const [places, setPlaces] = useState([{}] as OptionType[]);

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const onApply = () => {
    if (location.pathname == "/") {
      navigate("/catalog");
    }
    //props.setFilters(filters);
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

  useEffect(() => {
    fetch(
      "https://gugz7lj3y0.execute-api.eu-north-1.amazonaws.com/prod/cities",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setPlaces(
          data.map((name: any) => {
            return { value: name.name, label: name.name };
          }) as OptionType[]
        );
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    fetch(
      "https://gugz7lj3y0.execute-api.eu-north-1.amazonaws.com/prod/types",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setTypes(
          data.map((name: any) => {
            return { value: name.name, label: name.name };
          }) as OptionType[]
        );
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const top =
    window.location.pathname === "/" ? (isTablet ? "41.5%" : "34%") : "49%";

  return (
    <BasicBox
      direction="column"
      style={blockStyle(top)}
      justify="space-between"
      fullPadding={true}
      top={window.location.pathname === "/" ? "30px" : "50px"}
      bottom="50px"
      left="70px"
      right="70px"
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
          options={types} // replace this with your actual options
          styles={customStyles}
          menuPortalTarget={document.body}
          menuPosition={"fixed"}
          placeholder="Тип имот"
          isMulti
          value={filters.place}
          onChange={handleMultiChange("place")}
          components={customComponents}
        />

        <Select
          options={places} // replace this with your actual options
          styles={customStyles}
          menuPortalTarget={document.body}
          menuPosition={"fixed"}
          placeholder="Местоположение"
          isMulti
          value={filters.type}
          onChange={handleMultiChange("type")}
          components={customComponents}
        />

        <Select
          options={options} // replace this with your actual options
          styles={customStyles}
          menuPortalTarget={document.body}
          menuPosition={"fixed"}
          placeholder="Цена"
          value={filters.price}
          onChange={handleMultiChange("price")}
          components={customComponents}
        />
        <SearchButton onClick={() => onApply()} />
      </BasicBox>
    </BasicBox>
  );
};
