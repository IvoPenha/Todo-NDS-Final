import { Table } from "react-bootstrap";
import styled from "styled-components";
import DataTable, { TableColumn, TableProps} from 'react-data-table-component';
import { useSidebar } from "../../hooks/useSidebar";



export const Container = styled.div<{ isOpen: boolean }>`


  margin-top: 1.25rem; 
  display: grid;
  grid-template-columns: ${(props) => (props.isOpen ? '1fr 1fr 1fr 1fr' : '1fr 1fr 1fr 1fr 1fr' )};
  gap: ${(props) => (props.isOpen ? '5rem' : '4rem' )};
  & div{
    max-width: ${(props) => (props.isOpen ? '20rem' : '18rem' )};
  }
  row-gap: 2.5rem;
`;