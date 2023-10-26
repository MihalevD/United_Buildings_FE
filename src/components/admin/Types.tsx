import {
  Edit,
  SimpleForm,
  Datagrid,
  TextField,
  TextInput,
  required,
  Create,
  List,
  EditButton,
} from "react-admin";

export const TypeList = () => (
  <List filters={typeFilters}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="type_name" />
      <EditButton />
    </Datagrid>
  </List>
);
const typeFilters = [<TextInput label="Search" source="type_name" alwaysOn />];

export const TypeEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput disabled label="Id" source="id" />
      <TextInput source="type_name" validate={required()} />
    </SimpleForm>
  </Edit>
);

export const TypeCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput disabled label="Id" source="id" />
      <TextInput source="type_name" label="type Name" />
    </SimpleForm>
  </Create>
);
