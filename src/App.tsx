import React, { createContext, useState } from "react";
import "./App.css";
import Router from "./components/basic/Router";
import useIsMobile from "./helper/isMobile";
import BasicBox from "./components/basic/BasicBox";
import { FilterType } from "./config/types";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  const isMobile = useIsMobile();

  return (
    <BasicBox fullWidth fullHeight direction="column">
      <Provider store={store}>
        <Router />
      </Provider>
    </BasicBox>
  );
}

export default App;
