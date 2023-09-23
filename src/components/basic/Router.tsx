import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import Helmet from "react-helmet";
import { FilterType } from "../../config/types";
import { Catalog } from "../pages/Catalog";
import { useEffect } from "react";
import React from "react";
import { FilterContext } from "../../App";
import routePaths from "../../config/routePaths";
import isMobile from "../../helper/isMobile";
import { DesktopHeader } from "../DesktopHeader";
import { Footer } from "../Footer";
import { MobileHeader } from "../MobileHeader";
import useIsMobile from "../../helper/isMobile";

type RouterProps = {
  onDeleteFilter: (filters: FilterType) => void;
};

const Router = (props: RouterProps) => {
  const isMobile = useIsMobile();
  useEffect(() => {
    console.log("pathname", window.location.pathname);
  }, [window.location.pathname]);
  return (
    <BrowserRouter>
      <FilterContext.Consumer>
        {(filters) => (
          <Routes>
            {PublicRoutes.map(({ component: Component, path, title }) => (
              <Route
                path={path}
                key={path}
                element={
                  <React.Fragment>
                    {path !== routePaths.admin &&
                      // Render Header for non-AdminPage routes
                      (isMobile ? (
                        <MobileHeader />
                      ) : (
                        <DesktopHeader setFilters={props.onDeleteFilter} />
                      ))}
                    <Component />
                    <Helmet title={title} />
                    {path !== routePaths.admin && (
                      // Render Footer for non-AdminPage routes
                      <Footer />
                    )}
                  </React.Fragment>
                }
              />
            ))}
          </Routes>
        )}
      </FilterContext.Consumer>
    </BrowserRouter>
  );
};

export default Router;
