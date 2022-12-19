import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Table from "react-bootstrap/Table";
import { Container, StyledTable, TableAction } from "./table.styles";
import DataTable, { TableColumn } from 'react-data-table-component';
import { ReactNode } from "react";


interface DataRow {
  name: string,
  description: string,
  actions: JSX.Element,
}

const Tcolumns: TableColumn<DataRow>[] = [
    {
        name: 'Nome',
        selector: row => row.name,
    },
    {
        name: 'Descrição',
        selector: row => row.description,
    },
    {
        name: 'Ações',
        selector : row => row.actions,
    }
];

const data = [
    {
        id: 1,
        name: 'Gabriel Cleitores',
        description: ' Lorem Ipsum ',
        actions: <TableAction> <button><FontAwesomeIcon icon={faPen}/></button> <button> <FontAwesomeIcon icon={faTrash}/></button>  </TableAction>
    },
    {
        id: 2,
        name: 'Joaozinho',
        description: ' Lorem Ipsum ',
        actions: <TableAction> <button><FontAwesomeIcon icon={faPen}/></button> <button> <FontAwesomeIcon icon={faTrash}/></button>  </TableAction>
    },
]
const paginationOptions = {
  noRowsPerPage: true,
}

export function ListTable() {
  return (
    <Container>
      <StyledTable 
        columns={Tcolumns}
        data={data}
        pagination
        paginationComponentOptions={paginationOptions}
        
      />;
    </Container>
  );
}
