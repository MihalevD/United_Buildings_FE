import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import BasicBox from "../basic/BasicBox";
import Table from "../tables/ApartTable"; // Replace with the actual path to your Table component
import {
  useDeleteApartment,
  useGetApartments,
  useUpdateApartment,
} from "../../hooks/apartmentHooks";
import {
  useGetLocations,
  useGetPriceRanges,
  useGetProjects,
  useGetTypes,
} from "../../hooks/filterHooks";
import LocationTable from "../tables/LocationTable";
import TypeTable from "../tables/TypeTable";
import PriceTable from "../tables/PriceTable";
import ProjectTable from "../tables/ProjectTable";

const PageContainer = styled(BasicBox)`
  background-color: #f7f7f7;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Modal = styled(BasicBox)`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
`;

const ButtonContainer = styled(BasicBox)`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  align-items: center;
  min-width: 300px;
  width: 40%;
`;

const Button = styled.button`
  background-color: #cdd5b1;
  width: 90%;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 15px 30px;
  cursor: pointer;
  font-size: 1rem; /* Initial font size */

  &:hover {
    background-color: black;
  }

  @media (min-width: 768px) {
    font-size: 1.2rem; /* Font size for larger screens */
  }

  @media (min-width: 1024px) {
    font-size: 1.5rem; /* Font size for even larger screens */
  }
`;

const AdminPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const locationQuery = useGetLocations();
  const typeQuery = useGetTypes();
  const projectQuery = useGetProjects();
  const priceRangeQuery = useGetPriceRanges();
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(true);
  const prices = priceRangeQuery.data;
  const locations = locationQuery.data;
  const types = typeQuery.data;
  const projects = projectQuery.data;

  useEffect(() => {
    // Check the password from local storage during the initial load
    const check = localStorage.getItem("admin"); // Replace 'admin' with the key used to store the password in local storage

    // Check if the stored password matches the correct password
    if (check) {
      setShowModal(false); // Close the modal if the password is correct
    }
  }, []);

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  const handleBackClick = () => {
    setActiveTab(null);
  };

  const handlePasswordSubmit = () => {
    if (password === "admin") {
      setShowModal(false);
      localStorage.setItem("admin", "true");
    } else {
      alert("Wrong password");
    }
  };

  return (
    <PageContainer>
      {showModal && (
        <ModalOverlay>
          <ModalContent>
            <h2>Enter Password</h2>
            <StyledInput
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={handlePasswordSubmit}>Submit</Button>
          </ModalContent>
        </ModalOverlay>
      )}
      {!activeTab && !showModal && (
        <Modal>
          <ButtonContainer>
            <Button onClick={() => handleTabClick("apartments")}>
              АПАРТАМЕНТИ
            </Button>
            <Button onClick={() => handleTabClick("projects")}>ПРОЕКТИ</Button>
            <Button onClick={() => handleTabClick("locations")}>ЛОКАЦИИ</Button>
            <Button onClick={() => handleTabClick("types")}>ТИПОВЕ</Button>
            <Button onClick={() => handleTabClick("priceRanges")}>ЦЕНИ</Button>
          </ButtonContainer>
        </Modal>
      )}
      {activeTab === "apartments" && <Table onBack={handleBackClick} />}
      {activeTab === "projects" && <ProjectTable onBack={handleBackClick} />}
      {activeTab === "locations" && <LocationTable onBack={handleBackClick} />}
      {activeTab === "types" && <TypeTable onBack={handleBackClick} />}
      {activeTab === "priceRanges" && <PriceTable onBack={handleBackClick} />}
    </PageContainer>
  );
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const ModalContent = styled(BasicBox)`
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  min-width: 300px;
  flex-direction: column;
  width: 40%;
  text-align: center;
  align-items: center;
`;

export const StyledInput = styled.input`
  width: 90%;
  height: 70px;
  background: #ffffff;
  border: 1px solid #c9c7c7;
  border-radius: 20px;
  opacity: 1;
  padding-left: 15px;
  font-size: 18px;
  line-height: 27px;
  color: black;
  box-shadow: none;
  margin-bottom: 10px;

  box-sizing: border-box;
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export default AdminPage;
