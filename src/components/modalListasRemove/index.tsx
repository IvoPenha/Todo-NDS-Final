import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { ModalHeader } from "../ModalHeader/index.js";
import { Content, ContentContainer } from "./styles.js";
import { MainButton } from "../MainButton/index.js";
import { Modal } from "../modal/index.js";
import { useForm, SubmitHandler } from "react-hook-form";
import { api } from "../../services/api.js";
import { usePullTableData } from "../../hooks/listContext.js";
import { useEffect, useState } from "react";
import { AxiosRequestConfig } from "axios";

interface editItemProps {
  id: string;
  name: string;
}

interface ModalProps {
  modalOpen: boolean;
  SetModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  editItem: editItemProps;
}
interface ListModalProps {
  name: string;
}

export function RemoveListModal({
  modalOpen,
  SetModalOpen,
  editItem,
}: ModalProps) {
  const { pullDataFromApi } = usePullTableData();
  const [hasChange, setHasChange] = useState(true);
  const { handleSubmit, resetField } = useForm<ListModalProps>();
  const onSubmit: SubmitHandler<ListModalProps> = (inputData) => {
    newListItem(inputData.name);
    resetField("name");
  };

  function handleCloseModal() {
    SetModalOpen(false);
  }
  function newListItem(name: string) {
    const { id }  = editItem;
    api.delete(`/AssignmentList/${id}`, id as AxiosRequestConfig<any> );
    pullDataFromApi();
    handleCloseModal();
    setTimeout(() => setHasChange(!hasChange), 1000);
  }
  useEffect(() => {
    pullDataFromApi();
  }, [hasChange]);
  return (
    <Modal SetModalOpen={SetModalOpen} modalOpen={modalOpen}>
      <ModalHeader icon={faTrash} title="Excluir Lista" />
      <ContentContainer>
        <Content>
          <h4>
            {" "}
            Tem certeza de que deseja excluir a lista '{` ${editItem.name} `}'?{" "}
          </h4>
        </Content>
      </ContentContainer>

      <section>
        <MainButton
          Text="Cancelar"
          BtnType="cancel"
          buttonOnClick={handleCloseModal}
        />
        <MainButton
          Text="Confirmar"
          BtnType="save"
          buttonOnClick={handleSubmit(onSubmit)}
        />
      </section>
    </Modal>
  );
}
