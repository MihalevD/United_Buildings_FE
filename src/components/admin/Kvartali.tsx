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
  ReferenceInput,
  SelectInput,
} from "react-admin";

export const KvartaliList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="location_name" />
      <EditButton />
    </Datagrid>
  </List>
);

export const KvartalEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput disabled label="Id" source="id" />
      <TextInput source="name" validate={required()} />
      <ReferenceInput
        label="Location"
        source="id_location"
        reference="locations"
      >
        <SelectInput
          label="Location"
          source="id_location"
          optionText="location_name"
        />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);

export const KvartalCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput disabled label="Id" source="id" />
      <TextInput source="name" validate={required()} />
      <ReferenceInput
        label="Location"
        source="id_location"
        reference="locations"
      >
        <SelectInput
          label="Location"
          source="id_location"
          optionText="location_name"
        />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
