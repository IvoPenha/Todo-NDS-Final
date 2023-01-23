import { Table } from "react-bootstrap";
import styled from "styled-components";
import DataTable, { TableColumn, TableProps} from 'react-data-table-component';
interface DataRow {
  name: string,
  actions: JSX.Element,
}


export const StyledTable = styled(DataTable)` 
    border-collapse: collapse;
    border: var(--background) 1px solid;
    color: var(--textPrimary);
    width: 100%;
    .rdt_TableHeadRow{
      padding: 1rem 0;
      background:var(--background);
    }
    .rdt_TableRow{
      background:#F4F5F6;
    }
    .rdt_TableCell{
      font-size: 1rem;
      font-Family: 'Karla';
      font-weight: 400;
      display: flex;
      justify-content: center;
      padding: 10px 0;

    } 
    .rdt_TableCol{
      font-Family: 'Karla';
      display: flex;
      font-size: 1rem;
      font-weight: 700;
      justify-content: center;
    }
   
`;
export const Container = styled.div`
  margin-top: 24px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: fit-content;
  border-radius: 4px;
  padding: 1rem .625rem 0;
  width: 100%;
  &:first-child{
    text-align: center !important;
  }
`;

export const TableAction = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: center;
  
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .4375rem;
    font-size: 1rem;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    color: white;
  }
  button:first-child {
    background-color: var(--warning);
  }
  button:last-child {
    background-color: var(--danger);
  }
`;
