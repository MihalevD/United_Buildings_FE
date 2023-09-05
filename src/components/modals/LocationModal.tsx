import React, { useEffect, useState } from "react";
import { SmallButton } from "../basic/SmallButton";
import {
  ModalOverlay,
  ModalContent,
  StyledInput,
  ButtonsContainer,
  RedButton,
} from "../../styles/ModalStyles";
import {
  Location,
  usePostLocation,
  useUpdateLocation,
} from "../../hooks/filterHooks";

const initialFormData = {
  location_name: "",
};

interface LocationModalProps {
  onClose: () => void;
  mode: "create" | "edit"; // Define a mode prop
  locationData?: { [key: string]: string }; // Pass existing data when in edit mode
  updateLocationInList?: (data: any, add?: boolean) => void;
}

const LocationModal: React.FC<LocationModalProps> = ({
  onClose,
  mode,
  locationData = {},
  updateLocationInList = () => {},
}) => {
  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    if (mode === "edit" && locationData) {
      setFormData({
        location_name: locationData.location_name,
      });
    }
  }, [mode, locationData]);

  const addLocation = usePostLocation();
  const updateLocation = useUpdateLocation();

  const handleInputChange = (value: string, name: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    let newData;
    if (mode === "create") {
      const data: Location = await addLocation.mutateAsync({
        ...formData,
      });
      newData = data;
      window.location.reload();
    }
    if (mode === "edit") {
      const data: Location[] = await updateLocation.mutateAsync({
        idlocations: +locationData.idlocations,
        ...formData,
      });
      newData = data[0];
    }

    updateLocationInList(newData, mode === "create");
    onClose();
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <h2>
          {mode === "create"
            ? "Добави Локация"
            : `Промени Локация №${locationData.idlocations || ""}`}
        </h2>

        <StyledInput
          type="text"
          name="location_name"
          placeholder="Име на локация"
          value={formData.location_name}
          onChange={(e) => handleInputChange(e.target.value, "location_name")}
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

export default LocationModal;
