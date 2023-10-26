import {
  Edit,
  SimpleForm,
  Datagrid,
  TextField,
  TextInput,
  required,
  Create,
  List,
  FilterLiveSearch,
  EditButton,
} from "react-admin";

export const LocationList = () => (
  <List filters={locationFilters}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="location_name" />
      <EditButton />
    </Datagrid>
  </List>
);
const locationFilters = [
  <TextInput label="Search" source="location_name" alwaysOn />,
];

export const LocationEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput disabled label="Id" source="id" />
      <TextInput source="location_name" validate={required()} />
    </SimpleForm>
  </Edit>
);

export const LocationCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput disabled label="Id" source="id" />
      <TextInput source="location_name" label="Location Name" />
    </SimpleForm>
  </Create>
);
