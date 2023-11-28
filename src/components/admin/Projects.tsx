import {
  useNotify,
  useRefresh,
  useRedirect,
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  FileInput,
  ImageField,
  Edit,
  required,
  ImageInput,
  Datagrid,
  EditButton,
  List,
  TextField,
  useRecordContext,
  DateField,
  NumberField,
  DateInput,
  useDataProvider,
  FilterLiveSearch,
  PrevNextButtons,
  TopToolbar,
  ShowButton,
} from "react-admin";
import { Apartment } from "../../hooks/apartmentHooks";
import { generateApiUrl, useApiCall } from "../../hooks/useApiCall";
import { Project } from "../../hooks/filterHooks";
import Button from "@mui/material/Button";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Lightbox } from "react-modal-image";
import { CustomImageField } from "./Apartments";
import { RichTextInput } from "ra-input-rich-text";

export const CustomProjectCreate = (props: any) => {
  const notify = useNotify();
  const refresh = useRefresh();
  const redirect = useRedirect();

  const saveWithImages = async (values: any) => {
    const formData = new FormData();
    formData.append("projectData", JSON.stringify(values));
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

    const url = generateApiUrl(`projects`);
    return useApiCall<Project>(url, options)
      .then(() => {
        notify("Project created successfully", { type: "success" });
        redirect("/admin/projects");
        refresh();
      })
      .catch((error: any) => {
        notify("Error creating project", { type: "error" });
        console.error(error);
      });
  };

  return (
    <Create {...props}>
      <SimpleForm onSubmit={saveWithImages as any}>
        <TextInput disabled source="id" />
        <TextInput source="project_name" />
        <DateInput source="start_data" />
        <DateInput source="end_data" />
        <NumberInput source="akt" />
        <NumberInput source="size" />
        <NumberInput source="floor" />
        <NumberInput source="apartments_num" />
        <NumberInput source="park_space" />
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

export const CustomProjectEdit = (props: any) => {
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

    const url = generateApiUrl(`projects`, values.id);
    return useApiCall<Project>(url, options)
      .then(() => {
        notify("Project edited successfully", { type: "success" });
        redirect("/admin/projects");
        refresh();
      })
      .catch((error: any) => {
        notify("Error editing project", { type: "error" });
        console.error(error);
      });
  };

  return (
    <Edit
      {...props}
      actions={
        <TopToolbar
          sx={{
            color: "green",
            justifyContent: "flex-start",
          }}
        >
          <PrevNextButtons />
        </TopToolbar>
      }
    >
      <SimpleForm onSubmit={saveWithImages as any}>
        <TextInput disabled source="id" />
        <TextInput source="project_name" validate={required()} />
        <DateInput source="start_data" />
        <DateInput source="end_data" />
        <NumberInput source="akt" />
        <NumberInput source="size" />
        <NumberInput source="floor" />

        <NumberInput source="apartments_num" />
        <NumberInput source="park_space" />
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

        <ImageInput source="image_url" label="Related pictures" multiple>
          <ImageField source="src" title="title" />
        </ImageInput>
      </SimpleForm>
    </Edit>
  );
};

export const ProjectsList = (props: any) => (
  <List {...props} aside={<ProjectFilterSidebar />}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="project_name" />
      <DateField source="start_data" />
      <DateField source="end_data" />
      <NumberField source="akt" />
      <NumberField source="size" />
      <NumberField source="floor" />
      <NumberField source="apartments_num" />
      <NumberField source="park_space" />
      <EditButton />
      <ImagesButton />
      <TextButton />
    </Datagrid>
  </List>
);

const ImagesButton = () => {
  const record = useRecordContext();
  if (!record.image_url) return null;
  return (
    <Button
      component={Link}
      to={`/admin/projects/${record.id}/images`}
      color="primary"
    >
      СНИМКИ
    </Button>
  );
};

const TextButton = () => {
  const record = useRecordContext();
  return (
    <Button
      component={Link}
      to={`/admin/projects/${record.id}/text`}
      color="primary"
    >
      ОПИСАНИЕ
    </Button>
  );
};

export const DesriptionProject = (props: any) => {
  const { id } = useParams();
  return (
    <Edit
      {...props}
      resource="projects"
      filter={{ id }}
      redirect="/admin/projects"
    >
      <SimpleForm>
        <RichTextInput source="description" />
      </SimpleForm>
    </Edit>
  );
};

export const ProjectImagesList = () => {
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
      <List resource="projects" filter={{ id: id }}>
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

// const CustomImageField = ({ setImage, openLightBox }: any) => {
//   const record = useRecordContext();
//   if (!record) return null;
//   const images = Array.isArray(record.image_url) ? (
//     record.image_url.map((image: any, index: any) => (
//       <img
//         key={index}
//         src={image.src}
//         alt={`Image ${index + 1}`}
//         style={{
//           maxWidth: "200px",
//           maxHeight: "200px",
//           marginRight: "10px",
//           cursor: "pointer",
//         }}
//         onClick={() => {
//           setImage(image.src);
//           openLightBox();
//         }}
//       />
//     ))
//   ) : (
//     <img
//       src={record.image_url.src}
//       alt={`Image`}
//       style={{
//         maxWidth: "200px",
//         maxHeight: "200px",
//         marginRight: "10px",
//         cursor: "pointer",
//       }}
//       onClick={() => {
//         setImage(record.image_url.src);
//         openLightBox();
//       }}
//     />
//   );

//   return <div key={record.id}>{images}</div>;
// };

import { SavedQueriesList, FilterList, FilterListItem } from "react-admin";
import { Card, CardContent } from "@mui/material";
import ApartmentIcon from "@mui/icons-material/Apartment";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import MapIcon from "@mui/icons-material/Map";

export const ProjectFilterSidebar = () => {
  const dataProvider = useDataProvider();
  const [locations, setLocations] = useState<any[]>([]);
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
  }, []);

  return (
    <Card sx={{ order: -1, mr: 2, mt: 6, width: 200 }}>
      <CardContent>
        <SavedQueriesList />
        <FilterLiveSearch source="project_name" />
        <FilterList label="Location" icon={<MapIcon />}>
          {locations.map((location) => (
            <FilterListItem
              key={location.id}
              label={location.location_name}
              value={{ id_location: location.id }}
            />
          ))}
        </FilterList>
      </CardContent>
    </Card>
  );
};
