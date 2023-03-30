import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Table from "react-bootstrap/Table";
import { Container, StyledTable, TableAction } from "./table.styles";
import DataTable, { TableColumn } from "react-data-table-component";
import { ReactNode, useEffect, useState } from "react";
import { api } from "../../services/api";
import { usePullTableData } from "../../hooks/listContext";
import { ListEditionModal } from "../ModalListaEdit";

interface DataRow {
  name: string;
  actions: any;
}

const Tcolumns: TableColumn<DataRow>[] = [
  {
    name: "Nome",
    selector: (row) => row.name,
  },
  {
    name: "Ações",
    selector: (row) => row.actions,
  },
];

const paginationOptions = {
  noRowsPerPage: true,
};

interface ListProps{
  setEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  setRemoveModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}



export function ListTable({setEditModalOpen, setRemoveModalOpen} : ListProps) {
  const [tableData, setTableData] = useState([{}]);
  const { data, setItem  } = usePullTableData();
  function openEditModal(item: any) {
    setEditModalOpen(true)  
    setItem(item)
  }
  function openRemoveModal(item: any) {
    setRemoveModalOpen(true)  
    setItem(item)
  }
  function createTableData(item: { name: string; id: string }) {
    setTableData((prevTableData) => [
      ...prevTableData,
      {
        id: item.id,
        name: item.name,
        actions: (
          <TableAction>
            <button onClick={()=> openEditModal(item)}>
              <FontAwesomeIcon icon={faPen}  />
            </button>
            <button onClick={()=> openRemoveModal(item)}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </TableAction>
        ),
      },
    ]);
  }
  function attTableData() {
    data.map((item, index) => {
      if (index == 0) {
        setTableData([
          {
            id: item.id,
            name: item.name,
            actions: (
              <TableAction>
            <button onClick={()=> openEditModal(item)}>
              <FontAwesomeIcon icon={faPen}  />
            </button>
            <button onClick={()=> openRemoveModal(item)}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </TableAction>
            ),
          },
        ]);
      } else {
        createTableData(item);
      }
    });
  }

  useEffect(() => {
    attTableData();
  }, [data]);

  return (
    <Container>
      <StyledTable
        columns={Tcolumns as TableColumn<any>[]} 
        data={tableData}
        pagination
        paginationComponentOptions={paginationOptions}
        paginationPerPage={8}
      />
    </Container>
  );
}
