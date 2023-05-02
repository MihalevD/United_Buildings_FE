import styled from "@emotion/styled";
import { SearchButton } from "./SearchButton";
import BasicBox from "./basic/BasicBox";
import { TextContainer } from "./basic/TextContainer";
import { useState } from "react";
import { FilterType } from "../config/types";
import useIsTablet from "../helper/isTablet";
import { useLocation, useNavigate } from "react-router-dom";

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

type SearchBarProps = {
  setFilters: (filters: FilterType) => void;
};

export const SearchBar = (props: SearchBarProps) => {
  const [filters, setFilters] = useState({ type: "", place: "", price: "" });
  const isTablet = useIsTablet();
  const location = useLocation();
  const navigate = useNavigate();

  const onApply = () => {
    if (location.pathname == "/") {
      navigate("/catalog");
    }
    props.setFilters(filters);
    clearState();
  };

  const clearState = () => {
    setFilters({ type: "", place: "", price: "" });
  };

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
        <InputBlock
          type="text"
          placeholder={window.innerWidth < 1000 ? "Н.място" : "Населено място"}
          value={filters?.place}
          onChange={(e) => setFilters({ ...filters, place: e.target.value })}
        />
        <InputBlock
          type="text"
          placeholder="Тип имот"
          value={filters?.type}
          onChange={(e) => setFilters({ ...filters, type: e.target.value })}
        />
        <InputBlock
          type="text"
          placeholder="Цена"
          value={filters?.price}
          onChange={(e) => setFilters({ ...filters, price: e.target.value })}
        />
        <SearchButton onClick={() => onApply()} />
      </BasicBox>
    </BasicBox>
  );
};
