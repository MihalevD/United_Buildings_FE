import routePaths from "../../config/routePaths";
import { AboutUs } from "../AboutUs";
import SwipeableTextMobileStepper from "../mobile/MobileStepper";
import AdminPage from "../pages/Admin";
import { Catalog } from "../pages/Catalog";
import { HomePage } from "../pages/HomePage";
import { PropertyPage } from "../pages/PropertyPage";

const PublicRoutes = [
  {
    path: routePaths.entry,
    component: () => <HomePage />,
    title: "Home Page",
  },
  {
    path: routePaths.catalog,
    component: () => <Catalog onDelete={() => {}} />,
    title: "Catalog",
  },
  {
    path: routePaths.aboutUs,
    component: () => <AboutUs />,
    title: "About Us",
  },
  {
    path: routePaths.projects,
    component: () => <SwipeableTextMobileStepper />,
    title: "Projects",
  },
  {
    path: routePaths.property,
    component: () => <PropertyPage />,
    title: "Property",
  },
  {
    path: routePaths.admin,
    component: () => <AdminPage />,
    title: "Admin",
  },
];

export default PublicRoutes;
