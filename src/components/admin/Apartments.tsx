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
  useRecordContext,
  SimpleShowLayout,
  FieldTitle,
  ChipField,
  useDataProvider,
  useListContext,
  BooleanField,
  BooleanInput,
  useNotify,
  useRedirect,
  useRefresh,
} from "react-admin";
import Button from "@mui/material/Button";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Lightbox from "react-modal-image";
import Colors from "../../tokens/Colors";
import { Apartment } from "../../hooks/apartmentHooks";

export const ApartmentList = () => (
  <List aside={<PostFilterSidebar />}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="floor" />
      <NumberField source="size" />
      <NumberField source="price" />
      <TextField source="location_name" />
      <ChipField
        source="type_name"
        sx={{
          backgroundColor: "transparent",
          border: `1px solid ${Colors.primary}`,
        }}
      />
      <TextField source="project_name" />
      <EditButton />
      <ImagesButton />
      <ExtrasButton />
      <TextButton />
    </Datagrid>
  </List>
);

export const ImagesList = () => {
  const { id } = useParams();
  const [isOpenPage, setIsOpenPage] = useState(false);
  const [image, setImage] = useState<any>();
  const openLightbox = () => {
    setIsOpenPage(true);
  };
  const closeLightbox = () => {
    setIsOpenPage(false);
  };
  return (
    <>
      <List resource="apartments" filter={{ id: id }} pagination={<></>}>
        <Datagrid header={<></>} bulkActionButtons={false}>
          <CustomImageField setImage={setImage} openLightBox={openLightbox} />
        </Datagrid>
      </List>
      {isOpenPage && (
        // @ts-ignore
        <Lightbox
          small={image}
          medium={image}
          hideZoom={true}
          alt="Plan"
          onClose={() => closeLightbox()}
        />
      )}
    </>
  );
};

export const ExtrasList = (props: any) => {
  const { id } = useParams();
  return (
    <Edit
      {...props}
      resource="amenities"
      filter={{ apart_id: id }}
      redirect="/admin/apartments"
    >
      <SimpleForm>
        <BooleanInput source="chip" />
        <BooleanInput source="gym" />
        <BooleanInput source="green" />
        <BooleanInput source="security" />
        <BooleanInput source="park" />
      </SimpleForm>
    </Edit>
  );
};

export const Desription = (props: any) => {
  const { id } = useParams();
  return (
    <Edit
      {...props}
      resource="apartments"
      filter={{ apart_id: id }}
      redirect="/admin/apartments"
    >
      <SimpleForm>
        <RichTextInput source="description" />
      </SimpleForm>
    </Edit>
  );
};

const ImagesButton = () => {
  const record = useRecordContext();
  if (!record.image_url) return null;
  return (
    <Button
      component={Link}
      to={`/admin/apartments/${record.id}/images`}
      color="primary"
    >
      СНИМКИ
    </Button>
  );
};

const ExtrasButton = () => {
  const record = useRecordContext();
  return (
    <Button
      component={Link}
      to={`/admin/apartments/${record.id}/extras`}
      color="primary"
    >
      ЕКСТРИ
    </Button>
  );
};

const TextButton = () => {
  const record = useRecordContext();
  return (
    <Button
      component={Link}
      to={`/admin/apartments/${record.id}/text`}
      color="primary"
    >
      ОПИСАНИЕ
    </Button>
  );
};

export const CustomImageField = ({ setImage, openLightBox }: any) => {
  const record = useRecordContext();
  if (!record) return null;
  const images = Array.isArray(record.image_url) ? (
    record.image_url.map((image: any, index: any) => (
      <img
        key={index}
        src={image.src}
        alt={`Image ${index + 1}`}
        style={{
          maxWidth: "200px",
          maxHeight: "200px",
          marginRight: "10px",
          cursor: "pointer",
        }}
        onClick={() => {
          setImage(image.src);
          openLightBox();
        }}
      />
    ))
  ) : (
    <img
      src={record.image_url.src}
      alt={`Image`}
      style={{
        maxWidth: "200px",
        maxHeight: "200px",
        marginRight: "10px",
        cursor: "pointer",
      }}
      onClick={() => {
        setImage(record.image_url.src);
        openLightBox();
      }}
    />
  );

  return <div key={record.id}>{images}</div>;
};

import { SavedQueriesList, FilterList, FilterListItem } from "react-admin";
import { Card, CardContent } from "@mui/material";
import ApartmentIcon from "@mui/icons-material/Apartment";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import MapIcon from "@mui/icons-material/Map";
import { RichTextInput } from "ra-input-rich-text";
import { generateApiUrl, useApiCall } from "../../hooks/useApiCall";

export const PostFilterSidebar = () => {
  const dataProvider = useDataProvider();
  const [types, setTypes] = useState<any[]>([]);
  const [locations, setLocations] = useState<any[]>([]);
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    dataProvider
      .getList("locations", {
        pagination: { page: 1, perPage: 100 },
        sort: { field: "id", order: "ASC" },
        filter: {},
      })
      .then(({ data }) => {
        setLocations(data);
        console.log(locations, "locations");
      })
      .catch((error) => {
        console.log(error);
      });
    dataProvider
      .getList("types", {
        pagination: { page: 1, perPage: 100 },
        sort: { field: "id", order: "ASC" },
        filter: {},
      })
      .then(({ data }) => {
        setTypes(data);
        console.log(types, "types");
      })
      .catch((error) => {
        console.log(error);
      });
    dataProvider
      .getList("projects", {
        pagination: { page: 1, perPage: 100 },
        sort: { field: "id", order: "ASC" },
        filter: {},
      })
      .then(({ data }) => {
        setProjects(data);
        console.log(projects, "projects");
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Card sx={{ order: -1, mr: 2, mt: 6, width: 200 }}>
      <CardContent>
        <SavedQueriesList />
        <FilterList label="Location" icon={<MapIcon />}>
          {locations.map((location) => (
            <FilterListItem
              key={location.id}
              label={location.location_name}
              value={{ id_location: location.id }}
            />
          ))}
        </FilterList>
        <FilterList label="Type" icon={<ApartmentIcon />}>
          {types.map((type) => (
            <FilterListItem
              key={type.id}
              label={type.type_name}
              value={{ id_type: type.id }}
            />
          ))}
        </FilterList>
        <FilterList label="Project" icon={<AccountTreeIcon />}>
          {projects.map((project) => (
            <FilterListItem
              key={project.id}
              label={project.project_name}
              value={{ id_project: project.id }}
            />
          ))}
        </FilterList>
      </CardContent>
    </Card>
  );
};

export const CustomApartmentCreate = (props: any) => {
  const notify = useNotify();
  const refresh = useRefresh();
  const redirect = useRedirect();

  const saveWithImages = async (values: any) => {
    const formData = new FormData();
    formData.append("apartmentData", JSON.stringify(values));
    if (values.image_url) {
      for (const imageFile of values.image_url) {
        // const binaryData = await readImageFileAsBinary(imageFile);
        formData.append("images", imageFile.rawFile);
      }
    }
    const options = {
      method: "POST",
      body: formData,
    };

    const url = generateApiUrl(`apartments`);
    return useApiCall<Apartment>(url, options)
      .then(() => {
        notify("Apartment created successfully", { type: "success" });
        redirect("/admin/apartments");
        refresh();
      })
      .catch((error: any) => {
        notify("Error creating apartment", { type: "error" });
        console.error(error);
      });
  };

  return (
    <Create {...props}>
      <SimpleForm onSubmit={saveWithImages as any}>
        <TextInput disabled source="id" />
        <NumberInput source="floor" />
        <NumberInput source="size" />
        <NumberInput source="price" />
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
        <ReferenceInput label="Type" source="id_type" reference="types">
          <SelectInput label="Type" source="id_type" optionText="type_name" />
        </ReferenceInput>
        <ReferenceInput
          label="Project"
          source="id_project"
          reference="projects"
        >
          <SelectInput
            label="Project"
            source="id_project"
            optionText="project_name"
          />
        </ReferenceInput>
        <FileInput
          source="image_url"
          label="Related pictures"
          multiple
          accept="image/*"
        >
          <ImageField source="src" title="title" />
        </FileInput>
      </SimpleForm>
    </Create>
  );
};

export const CustomApartmentEdit = (props: any) => {
  const notify = useNotify();
  const refresh = useRefresh();
  const redirect = useRedirect();

  const saveWithImages = async (values: any) => {
    const formData = new FormData();
    const { image_url, ...rest } = values;

    formData.append("updatedData", JSON.stringify(values));
    if (values.image_url && values.image_url.length > 0) {
      for (const imageFile of values.image_url) {
        // const binaryData = await readImageFileAsBinary(imageFile);
        formData.append("images", imageFile.rawFile);
      }
    }
    const options = {
      method: "PUT",
      body: formData,
    };

    const url = generateApiUrl(`apartments`, values.id);
    return useApiCall<Apartment>(url, options)
      .then(() => {
        notify("Apartment edited successfully", { type: "success" });
        redirect("/admin/apartments");
        refresh();
      })
      .catch((error: any) => {
        notify("Error creating apartment", { type: "error" });
        console.error(error);
      });
  };

  return (
    <Edit {...props}>
      <SimpleForm onSubmit={saveWithImages as any}>
        <TextInput disabled source="id" />
        <NumberInput source="floor" validate={required()} />
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
          />
        </ReferenceInput>
        <ReferenceInput label="Type" source="id_type" reference="types">
          <SelectInput label="Type" source="id_type" optionText="type_name" />
        </ReferenceInput>
        <ReferenceInput
          label="Project"
          source="id_project"
          reference="projects"
        >
          <SelectInput
            label="Project"
            source="id_project"
            optionText="project_name"
          />
        </ReferenceInput>
        <ImageInput source="image_url" label="Related pictures" multiple>
          <ImageField source="src" title="title" />
        </ImageInput>
      </SimpleForm>
    </Edit>
  );
};
