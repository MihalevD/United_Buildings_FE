import {
  Admin,
  Resource,
  defaultTheme,
  radiantLightTheme,
  radiantDarkTheme,
  CustomRoutes,
  ResourceMenuItems,
  Menu,
} from "react-admin";
import { QueryClient } from "react-query";
import simpleRestProvider from "ra-data-simple-rest";
import { LocationCreate, LocationEdit, LocationList } from "../admin/Locations";
import { TypeCreate, TypeEdit, TypeList } from "../admin/Types";
import { KvartalCreate, KvartalEdit, KvartaliList } from "../admin/Kvartali";
import {
  ApartmentList,
  CustomApartmentCreate,
  CustomApartmentEdit,
  Desription,
  ExtrasList,
  ImagesList,
} from "../admin/Apartments";
import { Route } from "react-router-dom";
import {
  ProjectsList,
  CustomProjectEdit,
  CustomProjectCreate,
  ProjectImagesList,
  DesriptionProject,
} from "../admin/Projects";
import authProvider from "../admin/authProvider";
import ApartmentIcon from "@mui/icons-material/Apartment";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import MapIcon from "@mui/icons-material/Map";
const url_name =
  import.meta.env.VITE_NODE_ENV === "production"
    ? "https://united-buildings-be.online"
    : "http://localhost:3000";
// create the data provider by providing the API endpoint
const dataProvider = simpleRestProvider(url_name);

const Admin2 = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000, // 5 minutes
      },
    },
  });

  return (
    <Admin
      // layout={MyLayout}
      basename="/admin"
      dataProvider={dataProvider}
      queryClient={queryClient}
      authProvider={authProvider}
      theme={radiantLightTheme}
      darkTheme={radiantDarkTheme}
      title={"United Building Admin"}
    >
      <Resource
        name="locations"
        list={LocationList}
        edit={LocationEdit}
        create={LocationCreate}
        icon={MapIcon}
        options={{ label: "Локации" }}
      />
      <Resource
        name="types"
        list={TypeList}
        edit={TypeEdit}
        create={TypeCreate}
        options={{ label: "Типове" }}
      />
      <Resource
        name="kvartali"
        list={KvartaliList}
        edit={KvartalEdit}
        create={KvartalCreate}
        icon={MapIcon}
        options={{ label: "Квартали" }}
      />
      <Resource
        name="apartments"
        list={ApartmentList}
        edit={CustomApartmentEdit}
        create={CustomApartmentCreate}
        icon={ApartmentIcon}
        options={{ label: "Апартаменти" }}
      >
        <Route path=":id/images" element={<ImagesList />} />
        <Route path=":id/extras" element={<ExtrasList />} />
        <Route path=":id/text" element={<Desription />} />
      </Resource>
      <Resource
        name="projects"
        list={ProjectsList}
        edit={CustomProjectEdit}
        create={CustomProjectCreate}
        icon={AccountTreeIcon}
        options={{ label: "Проекти" }}
      >
        <Route path=":id/images" element={<ProjectImagesList />} />
        <Route path=":id/text" element={<DesriptionProject />} />
      </Resource>
      {/* Add more resources as needed */}
    </Admin>
  );
};

export default Admin2;
