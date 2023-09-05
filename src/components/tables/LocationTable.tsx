import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { TrashIcon } from "../../img/svg/TrashIcon";
import { EditIcon } from "../../img/svg/EditIcon";
import {
  ActionsColumn,
  AddButton,
  BackButton,
  TableContainer,
  TableContent,
  TableHeader,
  TableRow,
  TableWrapper,
} from "../../styles/TableStyles";
import { useQueryClient } from "react-query";
import { useDeleteLocation } from "../../hooks/filterHooks";
import BasicBox from "../basic/BasicBox";
import LocationModal from "../modals/LocationModal";

type TableProps = {
  onBack: () => void;
};

const LocationTable: React.FC<TableProps> = ({ onBack }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const queryClient = useQueryClient();
  const querylocations: any[] = queryClient.getQueryData("locations") || [];
  const [editLocationData, setEditlocationData] = useState<any | null>(null);
  const deleteLocationCB = useDeleteLocation();

  const [locations, setlocations] = useState(querylocations);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openEditModal = (location: any) => {
    setIsEditModalOpen(true);
    setEditlocationData(location);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const updateLocationInList = (updatedlocation: any, add?: boolean) => {
    if (add) {
      setlocations((prevlocations: any[]) => [
        ...prevlocations,
        updatedlocation,
      ]);
    } else {
      setlocations((prevlocations: any[]) =>
        prevlocations.map((location: any) =>
          location.idlocations === updatedlocation.idlocations
            ? updatedlocation
            : location
        )
      );
    }
  };

  const deleteLocation = async (id: number) => {
    await deleteLocationCB.mutateAsync(id);
    setlocations((prevlocations: any[]) =>
      prevlocations.filter((location: any) => location.idlocations !== id)
    );
  };

  return (
    <TableContainer>
      <BasicBox style={{ gap: "40px" }} bottom="40px">
        <BackButton onClick={onBack}>Назад</BackButton>
        <AddButton
          onClick={openModal}
          style={{ width: "-webkit-fill-available!important" }}
        >
          Добави Локация
        </AddButton>
      </BasicBox>
      <TableWrapper>
        <TableHeader numColumns={3}>
          <div>ID</div>
          <div>Location Name</div>
          <div>Actions</div>
        </TableHeader>
        <TableContent>
          {locations.map((location: any) => (
            <TableRow numColumns={3} key={location.idlocations}>
              <div>{location.idlocations}</div>
              <div>{location.location_name}</div>
              <ActionsColumn>
                <EditIcon onClick={() => openEditModal(location)} />
                <TrashIcon
                  onClick={() => deleteLocation(location.idlocations)}
                />
              </ActionsColumn>
            </TableRow>
          ))}
        </TableContent>
      </TableWrapper>
      {isModalOpen && <LocationModal onClose={closeModal} mode="create" />}
      {isEditModalOpen && (
        <LocationModal
          onClose={closeEditModal}
          mode="edit"
          updateLocationInList={updateLocationInList}
          locationData={editLocationData}
        />
      )}
    </TableContainer>
  );
};

export default LocationTable;
