import React, { createContext, useState } from "react";
import "./App.css";
import { Footer } from "./components/Footer";
import { DesktopHeader } from "./components/DesktopHeader";
import Router from "./components/basic/Router";
import useIsMobile from "./helper/isMobile";
import { MobileHeader } from "./components/MobileHeader";
import BasicBox from "./components/basic/BasicBox";
import { FilterType } from "./config/types";
import { BrowserRouter } from "react-router-dom";
import { useIsPropertyPage } from "./helper/isPropertyPage";

export const FilterContext = createContext<FilterType>({});

function App() {
  const isMobile = useIsMobile();
  const [filters, setFilters] = useState<FilterType>({});
  const isProductPage = useIsPropertyPage();
  return (
    <BasicBox fullWidth fullHeight direction="column">
      <BrowserRouter>
        <FilterContext.Provider value={filters}>
          {isMobile ? (
            <MobileHeader />
          ) : (
            <DesktopHeader
              setFilters={setFilters}
              isPropertyPage={isProductPage}
            />
          )}
          <Router onDeleteFilter={setFilters} />
          <Footer />
        </FilterContext.Provider>
      </BrowserRouter>
    </BasicBox>
  );
}

export default App;
