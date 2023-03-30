import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Table from "react-bootstrap/Table";
import DataTable, { TableColumn } from "react-data-table-component";
import { ReactNode, useEffect, useState } from "react";
import { api } from "../../services/api";
import { usePullTableData } from "../../hooks/listContext";
import { ListEditionModal } from "../ModalListaEdit";
import { Container } from "./styles";
import { TaskCard } from "../TaskCard";
import { usePullTaskData } from "../../hooks/taskContext";
import { useSidebar } from "../../hooks/useSidebar";

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

interface TaskCardProps {
  description: string;
  createdAt: Date;
  deadline: Date;
  id: string;
}


export function TaskGroup() {
  const { pullTaskData, TaskData  } = usePullTaskData();
  useEffect(()=>{
    pullTaskData()
    
  },[])
  const { isOpen } = useSidebar()
  
  useEffect(()=>{

  },[])
  function createTasksCard() {
    return TaskData.map(item => <TaskCard key={item.id} description={item.description} createdAt={item.createdAt} deadline ={item.deadline} id = {item.id} concluded= { item.concluded }/>  )
  }

  return (

    <Container isOpen={isOpen}>
      {
        createTasksCard()
      }

    </Container>
  );
}
