import React, { createContext, useState } from "react";
import "./App.css";
import { Footer } from "./components/Footer";
import { DesktopHeader } from "./components/DesktopHeader";
import Router from "./components/basic/Router";
import useIsMobile from "./helper/isMobile";
import { MobileHeader } from "./components/MobileHeader";
import BasicBox from "./components/basic/BasicBox";
import { FilterType } from "./config/types";
import { BrowserRouter, useLocation } from "react-router-dom";
import routePaths from "./config/routePaths";

export const FilterContext = createContext<FilterType>({});

function App() {
  const isMobile = useIsMobile();
  const [filters, setFilters] = useState<FilterType>({});

  return (
    <BasicBox fullWidth fullHeight direction="column">
      <FilterContext.Provider value={filters}>
        <Router onDeleteFilter={setFilters} />
      </FilterContext.Provider>
    </BasicBox>
  );
}

export default App;
