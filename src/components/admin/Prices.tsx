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

export const PriceList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="top" />
      <TextField source="bottom" />
      <EditButton />
    </Datagrid>
  </List>
);

export const PriceEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput disabled label="Id" source="id" />
      <TextInput source="top" validate={required()} />
      <TextInput source="bottom" validate={required()} />
    </SimpleForm>
  </Edit>
);

export const PriceCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput disabled label="Id" source="id" />
      <TextInput source="top" validate={required()} />
      <TextInput source="bottom" validate={required()} />
    </SimpleForm>
  </Create>
);
