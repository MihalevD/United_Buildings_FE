import React, { useEffect, useState } from "react";
import {
  useDeleteApartment,
  useGetApartments,
} from "../../hooks/apartmentHooks";
import BasicBox from "../basic/BasicBox";
import { TrashIcon } from "../../img/svg/TrashIcon";
import { EditIcon } from "../../img/svg/EditIcon";
import ApartmentModal from "../modals/ApartmentModal";
import {
  TableContainer,
  AddButton,
  TableWrapper,
  TableHeader,
  TableContent,
  TableRow,
  ActionsColumn,
  BackButton,
} from "../../styles/TableStyles";
import useUrl from "../../hooks/useURL";

type TableProps = {
  onBack: () => void;
};

const Table: React.FC<TableProps> = ({ onBack }) => {
  const deleteApartmentMutation = useDeleteApartment();
  const [apartments, setApartments] = useState<any | null>(null);
  const [page, setPage] = useState<number>(1);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editApartmentData, setEditApartmentData] = useState<any | null>(null); // Add state for edit data
  const urlDomain = useUrl();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  useEffect(() => {
    const fetchApartments = async () => {
      const fetchedApartments = await useGetApartments(page);
      console.log(fetchedApartments?.data);
      setPage(page + 1);
      setApartments(fetchedApartments?.data);
    };

    fetchApartments();
  }, []);

  const updateApartmentInList = (updatedApartment: { idapartments: any }) => {
    setApartments((prevApartments: any[]) =>
      prevApartments.map((apartment: { idapartments: any }) =>
        apartment.idapartments === updatedApartment.idapartments
          ? updatedApartment
          : apartment
      )
    );
  };
  const addApartmentToList = (newApartment: any) => {
    console.log("Adding new apartment:", newApartment);
    setApartments((prevApartments: any) => [newApartment, ...prevApartments]);
  };

  const openUpdateModal = (item: any) => {
    setEditApartmentData(item);
    setIsEditModalOpen(true);
  };

  const handleDeleteApartment = async (apartmentId: number) => {
    try {
      await deleteApartmentMutation.mutateAsync(apartmentId);
      setApartments(
        apartments.filter((item: any) => item.idapartments !== apartmentId)
      );
    } catch (error) {
      // Handle error
      alert("Грешка при изтриване на апартамент");
    }
  };

  return (
    <TableContainer>
      <BasicBox style={{ gap: "40px" }} bottom="40px">
        <BackButton onClick={onBack}>Назад</BackButton>
        <AddButton
          onClick={openModal}
          style={{ width: "-webkit-fill-available!important" }}
        >
          Добави апартамент
        </AddButton>
      </BasicBox>
      {isModalOpen && <ApartmentModal mode="create" onClose={closeModal} />}
      {isEditModalOpen && (
        <ApartmentModal
          mode="edit"
          onClose={closeEditModal}
          apartmentData={editApartmentData}
          updateApartmentInList={updateApartmentInList}
          addApartmentToList={addApartmentToList}
        />
      )}
      <TableWrapper>
        <TableHeader numColumns={7}>
          <div>ID</div>
          <div>Тип</div>
          <div>Локация</div>
          <div>Цена</div>
          <div>Размер</div>
          <div>Проекти</div>
          <div>Снимки</div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            Действия
          </div>
        </TableHeader>
        <TableContent>
          {apartments &&
            apartments.length > 0 &&
            apartments.map((item: any) => (
              <TableRow numColumns={7} key={item.idapartments}>
                <div>{item.idapartments}</div>
                <div>{item.type_name}</div>
                <div>{item.location_name}</div>
                <div>{item.price}</div>
                <div>{item.size}</div>
                <div>{item.project_name}</div>
                <div>
                  {item.image_url &&
                    item.image_url.map((url: any) => {
                      return (
                        <img
                          key={url}
                          crossOrigin="anonymous"
                          src={urlDomain + "/images/" + url}
                          alt=""
                          style={{ width: "100px" }}
                        />
                      );
                    })}
                </div>
                <ActionsColumn>
                  <EditIcon onClick={() => openUpdateModal(item)} />
                  <TrashIcon
                    onClick={() => handleDeleteApartment(item.idapartments)}
                  />
                </ActionsColumn>
              </TableRow>
            ))}
        </TableContent>
      </TableWrapper>
    </TableContainer>
  );
};

export default Table;
