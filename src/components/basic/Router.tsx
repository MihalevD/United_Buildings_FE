import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import Helmet from "react-helmet";
import { FilterType } from "../../config/types";
import { Catalog } from "../pages/Catalog";
import { useEffect } from "react";

type RouterProps = {
  onDeleteFilter: (filters: FilterType) => void;
};

const Router = (props: RouterProps) => {
  const location = useLocation();
  useEffect(() => {
    console.log(location);
  }, [location.pathname]);
  return (
    <Routes>
      {PublicRoutes.map(({ component: Component, path, title }) => {
        if (path === "/catalog") {
          return (
            <Route
              path={path}
              key={path}
              element={
                <>
                  <Catalog onDelete={props.onDeleteFilter} />
                  <Helmet title={title} />
                </>
              }
            />
          );
        } else {
          return (
            <Route
              path={path}
              key={path}
              element={
                <>
                  <Component />
                  <Helmet title={title} />
                </>
              }
            />
          );
        }
      })}
    </Routes>
  );
};

export default Router;
