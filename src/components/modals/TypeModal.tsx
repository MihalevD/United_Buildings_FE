import React, { useEffect, useState } from "react";
import { SmallButton } from "../basic/SmallButton";
import {
  ModalOverlay,
  ModalContent,
  StyledInput,
  ButtonsContainer,
  RedButton,
} from "../../styles/ModalStyles";
import { usePostType, useUpdateType } from "../../hooks/filterHooks";

const initialFormData = {
  type_name: "",
};

interface TypeModalProps {
  onClose: () => void;
  mode: "create" | "edit"; // Define a mode prop
  typeData?: { [key: string]: string }; // Pass existing data when in edit mode
  updateTypeInList?: (data: any) => void;
  addTypeInList?: (data: any) => void;
}

const TypeModal: React.FC<TypeModalProps> = ({
  onClose,
  mode,
  typeData = {},
  updateTypeInList = () => {},
  addTypeInList = () => {},
}) => {
  const [formData, setFormData] = useState(initialFormData);
  const [images, setImages] = useState<File[]>([]);

  useEffect(() => {
    if (mode === "edit" && typeData) {
      setFormData({
        type_name: typeData.type_name,
      });
    }
  }, [mode, typeData]);

  const addType = usePostType();
  const updateType = useUpdateType();

  const handleInputChange = (value: string, name: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      if (mode === "create") {
        const data = await addType.mutateAsync({
          ...formData,
        });
        addTypeInList(data);
      } else if (mode === "edit") {
        const newData = await updateType.mutateAsync({
          idtypes: +typeData.idtypes,
          ...formData,
        });
        console.log(newData);
        updateTypeInList(newData[0]);
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
            ? "Добави Тип"
            : `Промени Тип №${typeData.idtypes || ""}`}
        </h2>

        <StyledInput
          type="text"
          name="type_name"
          placeholder="Име на тип"
          value={formData.type_name}
          onChange={(e) => handleInputChange(e.target.value, "type_name")}
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

export default TypeModal;
