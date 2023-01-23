import { createContext, useState, ReactNode, useContext, useEffect } from "react";
import { api } from "../services/api";
import { TaskEditionModal } from "../components/ModalTasksEdit";
import { TaskRemoveModal } from "../components/modalTasksRemove";
import { TaskConcludeModal } from "../components/ModalTasksConclude";
import { TaskUnconcludeModal } from "../components/ModalTasksUnconclude";

interface TaskDataProps {
  id: string;
  description: string;
  createdAt: Date;
  deadline: Date;
  concluded: boolean;
}

interface TaskDataProvider {
  setTaskUnconcludeModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setTaskConcludeModalOpen: React.Dispatch<React.SetStateAction<boolean>>  
  setTaskEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setTaskRemoveModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedTaskItem: React.Dispatch<React.SetStateAction<TaskDataProps>>;
  total: number;
  TaskData: TaskDataProps[];
  selectedTaskItem: TaskDataProps;
  pullTaskData(): void;
  pullMoreTaskData(): void;
  createTaskEditionModal(): JSX.Element;
  createTaskRemoveModal(): JSX.Element;
  createTaskConcludeModal: () => JSX.Element;
  createTaskUnconcludeModal: () => JSX.Element;
}

export const TaskDataContext = createContext<TaskDataProvider>(
  {} as TaskDataProvider
);

export function TaskDataProvider({ children }: any): JSX.Element {
  const [TaskData, setTaskData] = useState<TaskDataProps[]>([{
    createdAt: new Date(),
    deadline: new Date(),
    description: "",
    id: "",
    concluded: false,
  }]);
  const [total, setTotal] = useState(0);

  const [selectedTaskItem, setSelectedTaskItem] = useState<TaskDataProps>({
    createdAt: new Date(),
    deadline: new Date(),
    description: "",
    concluded: false,
    id: "",
  });

  const [taskEditModalOpen, setTaskEditModalOpen] = useState(false)
  const [taskRemoveModalOpen, setTaskRemoveModalOpen] = useState(false)
  const [taskConcludeModalOpen, setTaskConcludeModalOpen] = useState(false)
  const [taskUnconcludeModalOpen, setTaskUnconcludeModalOpen] = useState(false)
  const [page, setPage] = useState(20)
  

  useEffect(()=>{
    pullTaskData()

  },[page])
 async function pullTaskData() {
     api
    .get("/Assignments?" + "PerPage="+ page)
    .then((r) => {
      setTaskData(r.data.items.sort((a : TaskDataProps,b : TaskDataProps)=> a.deadline < b.deadline ? -1 : a.deadline > b.deadline ? 1 : 0))
      setTotal(r.data.total);
      });

  } 

  function pullMoreTaskData() {
    
    setPage(page+20)
    
  }

  
  
  function createTaskEditionModal() {
    return (
      <>
         <TaskEditionModal
         modalOpen={taskEditModalOpen}
         SetModalOpen={setTaskEditModalOpen}
         />
      </>
    );
  }
  function createTaskRemoveModal() {
    return (
      <>
         <TaskRemoveModal
         modalOpen={taskRemoveModalOpen}
         SetModalOpen={setTaskRemoveModalOpen}
         />
      </>
    );
  }
  function createTaskConcludeModal() {
    return (
      <>
         <TaskConcludeModal
         modalOpen={taskConcludeModalOpen}
         SetModalOpen={setTaskConcludeModalOpen}
         />
      </>
    );
  }
  function createTaskUnconcludeModal() {
    return (
      <>
         <TaskUnconcludeModal
         modalOpen={taskUnconcludeModalOpen}
         SetModalOpen={setTaskUnconcludeModalOpen}
         />
      </>
    );
  }


  

  return (
    <TaskDataContext.Provider
      value={{
        pullTaskData,
        TaskData,
        total,
        selectedTaskItem,
        setSelectedTaskItem,
        createTaskEditionModal,
        setTaskEditModalOpen,
        setTaskRemoveModalOpen,
        createTaskRemoveModal,
        pullMoreTaskData,
        createTaskConcludeModal,
        createTaskUnconcludeModal,
        setTaskConcludeModalOpen,
        setTaskUnconcludeModalOpen
      }}
    >
      {children}
    </TaskDataContext.Provider>
  );
}


export function usePullTaskData() {
  const context = useContext(TaskDataContext);

  return context;
}
