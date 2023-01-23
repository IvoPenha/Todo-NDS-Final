import { useEffect, useState } from "react";
import { api } from "../services/api";
import { createContext, ReactNode, useContext } from "react";
import { useAuth } from "./authContext";
import { ListEditionModal } from "../components/ModalListaEdit";
import { RemoveListModal } from "../components/modalListasRemove";

interface PullTableDataContextProps {
  data: any[];
  pullDataFromApi: () => void;
  CreateEditionModal(item: any): JSX.Element;
  setEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setItem: React.Dispatch<React.SetStateAction<{}>>;
  item: {};
  CreateRemoveModal: (item: any) => JSX.Element;
  setRemoveModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PullTableDataContext = createContext<PullTableDataContextProps>(
  {} as PullTableDataContextProps
);

export function DataTableProvider({ children }: any): JSX.Element {
  const { validateTokenExpiration } = useAuth();
  const [data, setData] = useState<any[]>([]);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [RemoveModalOpen, setRemoveModalOpen] = useState(false);
  const [item, setItem] = useState({});
  async function pullDataFromApi() {
    validateTokenExpiration();
    await api
      .get("/AssignmentList?PerPage=126")
      .then((response) => setData(response.data.items))
  }
  function CreateEditionModal(item: any) {
    return (
      <>
         <ListEditionModal
         modalOpen={editModalOpen}
         SetModalOpen={setEditModalOpen}
         editItem={item}
         />
      </>
    );
  }
  function CreateRemoveModal(item: { id: string; name: string }) {
    return (
      <>
        <RemoveListModal
          modalOpen={RemoveModalOpen}
          SetModalOpen={setRemoveModalOpen}
          editItem={item}
        />
      </>
    );
  }

  useEffect(() => {
    pullDataFromApi();
  }, []);
  return (
    <PullTableDataContext.Provider
      value={{
        data,
        pullDataFromApi,
        CreateEditionModal,
        setEditModalOpen,
        setItem,
        item,
        CreateRemoveModal,
        setRemoveModalOpen,
      }}
    >
      {children}
    </PullTableDataContext.Provider>
  );
}

export function usePullTableData() {
  const context = useContext(PullTableDataContext);

  return context;
}
