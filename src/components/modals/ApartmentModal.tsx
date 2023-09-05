import React, { ChangeEvent, useEffect, useMemo, useState } from "react";
import {
  Apartment,
  usePostApartment,
  useUpdateApartment,
} from "../../hooks/apartmentHooks";
import MySelectC from "../basic/Select";
import { useQueryClient } from "react-query";
import {
  transformLocationData,
  transformProjectData,
  transformTypeData,
} from "../../hooks/filterHooks";
import { SmallButton } from "../basic/SmallButton";
import {
  ModalOverlay,
  ModalContent,
  StyledInput,
  Thumbnail,
  ButtonsContainer,
  RedButton,
  DeleteCircle,
} from "../../styles/ModalStyles";
import { ImageContainer } from "../basic/ImageContainer";
import BasicBox from "../basic/BasicBox";

const initialFormData = {
  id_type: { value: "", label: "" },
  id_location: { value: "", label: "" },
  price: "",
  size: "",
  id_project: { value: "", label: "" },
};

interface ApartmentModalProps {
  onClose: () => void;
  mode: "create" | "edit"; // Define a mode prop
  apartmentData?: Apartment; // Pass existing data when in edit mode
  updateApartmentInList?: (data: any) => void;
  addApartmentToList?: (data: any) => void;
}

const ApartmentModal: React.FC<ApartmentModalProps> = ({
  onClose,
  mode,
  apartmentData,
  updateApartmentInList = () => {},
  addApartmentToList = () => {},
}) => {
  const [formData, setFormData] = useState(initialFormData);
  const [newImages, setNewImages] = useState<File[]>([]);
  const [oldImages, setOldImages] = useState<string[]>(
    apartmentData?.image_url || []
  );

  useEffect(() => {
    if (mode === "edit" && apartmentData) {
      setFormData({
        id_type: {
          value: apartmentData.idtypes || "", // Provide a default value
          label: apartmentData.type_name || "",
        },
        id_location: {
          value: apartmentData.idlocations || "", // Provide a default value
          label: apartmentData.location_name || "",
        },
        price: apartmentData.price || "", // Provide a default value
        size: apartmentData.size || "", // Provide a default value
        id_project: {
          value: apartmentData.idprojects || "", // Provide a default value
          label: apartmentData.project_name || "",
        },
      });
    }
  }, [mode, apartmentData]);

  const queryClient = useQueryClient();
  const locations = useMemo(
    () => transformLocationData(queryClient.getQueryData("locations")) || [],
    [queryClient]
  );
  const types = useMemo(
    () => transformTypeData(queryClient.getQueryData("types")) || [],
    [queryClient]
  );
  const projects = useMemo(
    () => transformProjectData(queryClient.getQueryData("projects")) || [],
    [queryClient]
  );

  const addApart = usePostApartment();
  const updateApart = useUpdateApartment();

  const handleInputChange = (value: string, name: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (selectedFiles) {
      setNewImages((prevImages) => [
        ...prevImages,
        ...Array.from(selectedFiles),
      ]);
    }
  };

  const removeImage = (index: number) => {
    setNewImages((prevImages) => {
      const newImages = [...prevImages];
      newImages.splice(index, 1);
      return newImages;
    });
  };

  const removeFromApartment = (index: number) => {
    setOldImages((prevOldImages) => {
      const newImages = [...prevOldImages];
      newImages.splice(index, 1);
      return newImages;
    });
  };

  const handleSubmit = async () => {
    try {
      const requestData = {
        id_type: Number(formData.id_type.value),
        id_location: Number(formData.id_location.value),
        size: Number(formData.size),
        price: Number(formData.price),
        id_project: formData.id_project.value
          ? Number(formData.id_project.value)
          : null,
        images: oldImages || [],
      };

      if (mode === "create") {
        const data = await addApart.mutateAsync({
          apartmentData: requestData,
          imageFiles: newImages,
        });
        addApartmentToList(data);
      } else if (mode === "edit") {
        if (oldImages) {
          requestData["images"] = oldImages;
        }
        const data = await updateApart.mutateAsync({
          apartmentId: Number(apartmentData?.idapartments),
          updatedData: requestData,
          imageFiles: newImages,
        });
        if (typeof data.image_url === "string") {
          data.image_url = JSON.parse(data.image_url) || [];
        }
        updateApartmentInList && updateApartmentInList(data);
      }

      onClose();
    } catch (error) {
      // Handle error
    }
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <h2>
          {mode === "create"
            ? "Добави Апартамент"
            : `Промени апартамент №${apartmentData?.idapartments || ""}`}
        </h2>

        <MySelectC
          options={types}
          optionSelected={formData.id_type}
          handleChange={(value: any) => handleInputChange(value, "id_type")}
          placeholder="Избери тип"
          isMulti={false}
        />

        <MySelectC
          options={locations}
          optionSelected={formData.id_location}
          handleChange={(value: any) => handleInputChange(value, "id_location")}
          placeholder="Избери локация"
          isMulti={false}
        />

        <StyledInput
          type="text"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={(e) => handleInputChange(e.target.value, "price")}
        />

        <StyledInput
          type="text"
          name="size"
          placeholder="Size"
          value={formData.size}
          onChange={(e) => handleInputChange(e.target.value, "size")}
        />

        <MySelectC
          options={projects}
          optionSelected={formData.id_project}
          handleChange={(value: any) => handleInputChange(value, "id_project")}
          placeholder="Избери проект"
          isMulti={false}
        />

        <BasicBox fullWidth style={{ flexWrap: "wrap", gap: "10px" }}>
          {newImages.map((image, index) => (
            <BasicBox key={index} style={{ position: "relative" }}>
              <Thumbnail
                src={URL.createObjectURL(image)}
                alt={`Image ${index}`}
              />
              <DeleteCircle onClick={() => removeImage(index)} />
            </BasicBox>
          ))}
          {oldImages &&
            oldImages.map((image, index) => {
              return (
                <BasicBox key={index} style={{ position: "relative" }}>
                  <Thumbnail
                    crossOrigin="anonymous"
                    src={"http://localhost:3000/images/" + image}
                    alt={`Image ${index}`}
                  />
                  <DeleteCircle onClick={() => removeFromApartment(index)} />
                </BasicBox>
              );
            })}
        </BasicBox>

        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageUpload}
        />

        <ButtonsContainer>
          <RedButton onClick={onClose}>Затвори</RedButton>
          <SmallButton onClick={handleSubmit}>
            {mode === "create" ? "Създай" : "Запази"}
          </SmallButton>
        </ButtonsContainer>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ApartmentModal;
