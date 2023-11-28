import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import Helmet from "react-helmet";
import { FilterType } from "../../config/types";
import { useEffect } from "react";
import React from "react";
import routePaths from "../../config/routePaths";
import { DesktopHeader } from "../DesktopHeader";
import { Footer } from "../Footer";
import { MobileHeader } from "../MobileHeader";
import useIsMobile from "../../helper/isMobile";
import { MobileFooter } from "../mobile/MobileFooter";
import { useDispatch } from "react-redux";
import { asyncGetTypes } from "../../redux/actions/typesActions";
import { asyncGetLocations } from "../../redux/actions/locationsActions";
import { asyncGetKvartals } from "../../redux/actions/kvartaliActions";
import useIsTablet from "../../helper/isTablet";
import { asyncGetProjects } from "../../redux/actions/projectActions";

const Router = () => {
  const isMobile = useIsMobile();
  const dispatch = useDispatch();
  const isTablet = useIsTablet();

  useEffect(() => {
    // Fetch data when the component mounts
    dispatch(asyncGetLocations() as any);
    dispatch(asyncGetKvartals() as any);
    dispatch(asyncGetTypes() as any);
    dispatch(asyncGetProjects() as any);
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        {PublicRoutes.map(({ component: Component, path, title }) => (
          <Route
            path={path}
            key={path}
            element={
              <React.Fragment>
                {path !== routePaths.admin &&
                  // Render Header for non-AdminPage routes
                  (isMobile ? <MobileHeader /> : <DesktopHeader />)}
                <Component />
                <Helmet title={title} />
                {isMobile ? (
                  <MobileFooter />
                ) : path !== routePaths.admin ? (
                  <Footer />
                ) : null}
              </React.Fragment>
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
