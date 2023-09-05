import styled from "@emotion/styled";
import { SmallButton } from "../components/basic/SmallButton";

export const TableContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f7f7f7;
  width: fit-content;
  flex-direction: column;
`;

export const TableWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

interface TableHeaderProps {
  numColumns: number;
}

export const TableHeader = styled.div<TableHeaderProps>`
  display: grid;
  grid-template-columns: ${({ numColumns }) =>
    `repeat(${numColumns}, 1fr) auto auto`};
  gap: 10px;
  padding: 20px;
  background-color: #cdd5b1;
  color: white;
  align-items: center;
`;

export const TableContent = styled.div`
  padding: 20px;
`;

export const TableRow = styled.div<TableHeaderProps>`
  display: grid;
  grid-template-columns: ${({ numColumns }) =>
    `repeat(${numColumns}, 1fr) auto auto`};
  gap: 10px;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #e0e0e0;
`;

export const ActionsColumn = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-right: 20px;
`;
export const BackButton = styled(SmallButton)`
  background-color: black;
  color: white;
  cursor: pointer;
  :hover {
    background-color: #3f4554 !important;
  }
`;
export const AddButton = styled(SmallButton)`
  width: -webkit-fill-available;
`;
