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
  NumberField,
  FileField,
  NumberInput,
  FileInput,
  ImageField,
  ImageInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

export const ApartmentList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <NumberField source="size" />
      <NumberField source="price" />
      <TextField source="location_name" />
      <TextField source="type_name" />
      <TextField source="project_name" />
      <ImageField source="image_url" />
    </Datagrid>
  </List>
);

export const ApartmentEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput disabled source="id" />
      <NumberInput source="size" validate={required()} />
      <NumberInput source="price" validate={required()} />
      <TextInput source="location_name" validate={required()} />
      <TextInput source="type_name" validate={required()} />
      <TextInput source="project_name" />
      <ImageInput source="image_url" label="Related pictures" multiple>
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Edit>
);

export const ApartmentCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput disabled source="id" />
      <NumberInput source="size" validate={required()} />
      <NumberInput source="price" validate={required()} />
      <ReferenceInput
        label="Location"
        source="id_location"
        reference="locations"
      >
        <SelectInput
          label="Location"
          source="id_location"
          optionText="location_name"
          validate={required()}
        />
      </ReferenceInput>
      <ReferenceInput label="Type" source="id_type" reference="types">
        <SelectInput
          label="Type"
          source="id_type"
          optionText="type_name"
          validate={required()}
        />
      </ReferenceInput>
      <TextInput source="project_name" />
      <ImageInput source="image_url" label="Related pictures" multiple>
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Create>
);
