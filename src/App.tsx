import React, {createContext, useState} from 'react';
import './App.css';
import {Footer} from './components/Footer';
import {DesktopHeader} from './components/DesktopHeader';
import Router from './components/basic/Router';
import useIsMobile from './helper/isMobile';
import {MobileHeader} from './components/MobileHeader';
import BasicBox from './components/basic/BasicBox';
import {FilterType} from './config/types';

export const FilterContext = createContext<FilterType>({});

function App() {
  const isMobile = useIsMobile();
  const [filters, setFilters] = useState<FilterType>({});
  return (
    <BasicBox fullWidth fullHeight direction='column'>
      <FilterContext.Provider value={filters}>
        {isMobile ? (
          <MobileHeader />
        ) : (
          <DesktopHeader setFilters={setFilters} />
        )}
        <Router onDeleteFilter={setFilters} />
        <Footer />
      </FilterContext.Provider>
    </BasicBox>
  );
}

export default App;
