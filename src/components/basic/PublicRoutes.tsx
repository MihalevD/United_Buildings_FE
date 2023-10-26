import routePaths from "../../config/routePaths";
import { AboutUs } from "../AboutUs";
import AdminPage from "../pages/Admin";
import { Catalog } from "../pages/Catalog";
import { HomePage } from "../pages/HomePage";
import { ProjectPage } from "../pages/ProjectPage";
import { Projects } from "../pages/Projects";
import { PropertyPage } from "../pages/PropertyPage";
import AdminPage2 from "../pages/Admin2";

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
    component: () => <Projects />,
    title: "Projects",
  },
  {
    path: routePaths.project,
    component: () => <ProjectPage />,
    title: "Project Page",
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
  {
    path: routePaths.adminTrain,
    component: () => <AdminPage2 />,
    title: "Admin Train",
  },
];

export default PublicRoutes;
