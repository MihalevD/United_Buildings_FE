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
  PriceRange,
  usePostPriceRange,
  useUpdatePriceRange,
} from "../../hooks/filterHooks";

const initialFormData = {
  top: 0,
  bottom: 0,
};

interface PriceModalProps {
  onClose: () => void;
  mode: "create" | "edit"; // Define a mode prop
  priceData?: { [key: string]: string }; // Pass existing data when in edit mode
  updatePriceRangeInList?: (data: any) => void;
  addPriceRangeInList?: (data: any) => void;
}

const PriceModal: React.FC<PriceModalProps> = ({
  onClose,
  mode,
  priceData = {},
  updatePriceRangeInList = () => {},
  addPriceRangeInList = () => {},
}) => {
  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    if (mode === "edit" && priceData) {
      setFormData({
        top: +priceData.top,
        bottom: +priceData.bottom,
      });
    }
  }, [mode, priceData]);

  const addPriceRange = usePostPriceRange();
  const updatePriceRange = useUpdatePriceRange();

  const handleInputChange = (value: string, name: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      if (mode === "create") {
        const data = await addPriceRange.mutateAsync({
          ...formData,
        });
        addPriceRangeInList(data);
      } else if (mode === "edit") {
        const newData: PriceRange[] = await updatePriceRange.mutateAsync({
          idprice_range: +priceData.idprice_range,
          ...formData,
        });
        updatePriceRangeInList(newData[0]);
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
            ? "Добави Цена"
            : `Промени Цена №${priceData.idprice_range || ""}`}
        </h2>

        <StyledInput
          type="number"
          name="location_name"
          placeholder="От"
          value={formData.top}
          onChange={(e) => handleInputChange(e.target.value, "top")}
        />
        <StyledInput
          type="number"
          name="bottom"
          placeholder="До"
          value={formData.bottom}
          onChange={(e) => handleInputChange(e.target.value, "bottom")}
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

export default PriceModal;
