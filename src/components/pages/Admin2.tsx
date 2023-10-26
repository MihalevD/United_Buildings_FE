import * as React from "react";
import {
  Admin,
  Resource,
  ListGuesser,
  Edit,
  SimpleForm,
  Datagrid,
  DateField,
  DateInput,
  EditButton,
  ReferenceManyField,
  TextField,
  TextInput,
  required,
  Create,
} from "react-admin";
import customDataProvider from "../../hooks/location"; // Import your custom data provider
import { QueryClient } from "react-query";
import simpleRestProvider from "ra-data-simple-rest";
import { LocationCreate, LocationEdit, LocationList } from "../admin/Locations";
import { TypeCreate, TypeEdit, TypeList } from "../admin/Types";
import { PriceCreate, PriceEdit, PriceList } from "../admin/Prices";
import {
  ApartmentCreate,
  ApartmentEdit,
  ApartmentList,
} from "../admin/Apartments";

// create the data provider by providing the API endpoint
const dataProvider = simpleRestProvider("http://localhost:3000");

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
      basename="/adminTrain"
      dataProvider={dataProvider}
      queryClient={queryClient}
    >
      <Resource
        name="locations"
        list={LocationList}
        edit={LocationEdit}
        create={LocationCreate}
        hasEdit
      />
      <Resource
        name="types"
        list={TypeList}
        edit={TypeEdit}
        create={TypeCreate}
      />
      <Resource
        name="prices"
        list={PriceList}
        edit={PriceEdit}
        create={PriceCreate}
      />
      <Resource
        name="apartments"
        list={ApartmentList}
        edit={ApartmentEdit}
        create={ApartmentCreate}
      />
      {/* Add more resources as needed */}
    </Admin>
  );
};

export default Admin2;
