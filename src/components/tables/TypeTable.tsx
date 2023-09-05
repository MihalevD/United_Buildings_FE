import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { TrashIcon } from "../../img/svg/TrashIcon";
import { EditIcon } from "../../img/svg/EditIcon";
import TypeModal from "../modals/TypeModal"; // Import your TypeModal component
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
import { useDeleteType } from "../../hooks/filterHooks";
import BasicBox from "../basic/BasicBox";

type TableProps = {
  onBack: () => void;
};

const TypeTable: React.FC<TableProps> = ({ onBack }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const queryClient = useQueryClient();
  const queryTypes: any[] = queryClient.getQueryData("types") || [];
  const [editTypeData, setEditTypeData] = useState<any | null>(null);
  const deleteTypeCB = useDeleteType();

  const [types, setTypes] = useState(queryTypes);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openEditModal = (type: any) => {
    setIsEditModalOpen(true);
    setEditTypeData(type);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const addTypeInList = (newType: any) => {
    setTypes((prevTypes: any[]) => [...prevTypes, newType]);
  };

  const updateTypeInList = (updatedType: any) => {
    setTypes((prevTypes: any[]) =>
      prevTypes.map((type: any) =>
        type.idtypes === updatedType.idtypes ? updatedType : type
      )
    );
  };

  const deleteType = async (id: number) => {
    await deleteTypeCB.mutateAsync(id);
    setTypes((prevTypes: any[]) =>
      prevTypes.filter((type: any) => type.idtypes !== id)
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
          Добави Тип
        </AddButton>
      </BasicBox>
      <TableWrapper>
        <TableHeader numColumns={3}>
          <div>ID</div>
          <div>Type Name</div>
          <div>Actions</div>
        </TableHeader>
        <TableContent>
          {types.map((type: any) => (
            <TableRow numColumns={3} key={type.idtypes}>
              <div>{type.idtypes}</div>
              <div>{type.type_name}</div>
              <ActionsColumn>
                <EditIcon onClick={() => openEditModal(type)} />
                <TrashIcon onClick={() => deleteType(type.idtypes)} />
              </ActionsColumn>
            </TableRow>
          ))}
        </TableContent>
      </TableWrapper>
      {isModalOpen && <TypeModal onClose={closeModal} mode="create" />}
      {isEditModalOpen && (
        <TypeModal
          onClose={closeEditModal}
          mode="edit"
          addTypeInList={addTypeInList}
          updateTypeInList={updateTypeInList}
          typeData={editTypeData}
        />
      )}
    </TableContainer>
  );
};

export default TypeTable;
