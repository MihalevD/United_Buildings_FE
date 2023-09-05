import React, { useState, useEffect } from "react";
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
import { useDeletePriceRange } from "../../hooks/filterHooks";
import BasicBox from "../basic/BasicBox";
import PriceModal from "../modals/PriceModal";

type TableProps = {
  onBack: () => void;
};

const PriceTable: React.FC<TableProps> = ({ onBack }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const queryClient = useQueryClient();
  const queryPrices: any[] = queryClient.getQueryData("priceRanges") || [];
  console.log(queryPrices);
  const [editPriceRangeData, setEditPriceRangeData] = useState<any | null>(
    null
  );
  const deletePriceRangeCB = useDeletePriceRange();

  const [prices, setPrices] = useState(queryPrices);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const openEditModal = (price: any) => {
    setIsEditModalOpen(true);
    setEditPriceRangeData(price);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const addPriceRangeInList = (newPrice: any) => {
    setPrices((prevPrices: any[]) => [...prevPrices, newPrice]);
  };

  const updatePriceRangeInList = (updatedPriceRange: any) => {
    setPrices((prevPrices: any[]) =>
      prevPrices.map((price: any) =>
        price.idprice_range === updatedPriceRange.idprice_range
          ? updatedPriceRange
          : price
      )
    );
  };

  const deletePriceRange = async (id: number) => {
    await deletePriceRangeCB.mutateAsync(id);
    setPrices((prevPrices: any[]) =>
      prevPrices.filter((price: any) => price.idprice_range !== id)
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
          Добави Цена
        </AddButton>
      </BasicBox>
      <TableWrapper>
        <TableHeader numColumns={4}>
          <div>ID</div>
          <div>From</div>
          <div>To</div>
          <div>Actions</div>
        </TableHeader>
        <TableContent>
          {prices.map((price: any) => (
            <TableRow numColumns={4} key={price.idprice_range}>
              <div>{price.idprice_range}</div>
              <div>{price.top}</div>
              <div>{price.bottom}</div>
              <ActionsColumn>
                <EditIcon onClick={() => openEditModal(price)} />
                <TrashIcon
                  onClick={() => deletePriceRange(price.idprice_range)}
                />
              </ActionsColumn>
            </TableRow>
          ))}
        </TableContent>
      </TableWrapper>
      {isModalOpen && <PriceModal onClose={closeModal} mode="create" />}
      {isEditModalOpen && (
        <PriceModal
          onClose={closeEditModal}
          mode="edit"
          addPriceRangeInList={addPriceRangeInList}
          updatePriceRangeInList={updatePriceRangeInList}
          priceData={editPriceRangeData}
        />
      )}
    </TableContainer>
  );
};

export default PriceTable;
