import { faPen, faPlus } from "@fortawesome/free-solid-svg-icons";
import { ModalHeader } from "../ModalHeader/index.js";
import { Content, ContentContainer } from "./styles.js";
import { InputComponent } from "../InputComponent/input.js";
import { TextAreaComponent } from "../TextAreaComponent/input.js";
import { MainButton } from "../MainButton/index.js";
import { Modal } from "../modal/index.js";
import { useForm, SubmitHandler } from "react-hook-form";
import { api } from "../../services/api.js";
import { usePullTableData } from "../../hooks/listContext.js";
import { useEffect, useState } from "react";

interface editItemProps{
  id: string;
  name: string;
}

interface ModalProps {
  modalOpen: boolean;
  SetModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  editItem: editItemProps
}
interface ListModalProps {
  name: string;
}


export function ListEditionModal({ modalOpen, SetModalOpen, editItem }: ModalProps) {

  const { data, pullDataFromApi } = usePullTableData()
  const [hasChange, setHasChange] = useState(true)
  const { register, handleSubmit, resetField, setValue } = useForm<ListModalProps>();
  if(editItem)
    setValue("name",editItem.name)
  const onSubmit: SubmitHandler<ListModalProps> = (inputData) =>{
    newListItem(inputData.name);
    resetField('name')
  }

  function handleCloseModal() {
    SetModalOpen(false);
  }
  function newListItem(name: string) {
    const { id } = editItem
    api.put(`/AssignmentList/${id}`, { id, name })
    pullDataFromApi()
    handleCloseModal();
    setTimeout(()=> setHasChange(!hasChange) , 1000)
  }
  useEffect(()=>{
    pullDataFromApi()
  },[hasChange])
  return (
    <Modal SetModalOpen={SetModalOpen} modalOpen={modalOpen}>
      <ModalHeader icon={faPen} title="Edição de Tarefas" />
      <ContentContainer>
        <Content>
          <form action="submit" onSubmit={handleSubmit(onSubmit)}>
            <InputComponent
              type="text"
              placeholder="Digite o nome da tarefa"
              label="Nome"
              required
              register={{
                ...register("name", {
                  required: true,
                  minLength: 1,
                }),
              }}
            />
          </form>
        </Content>
      </ContentContainer>

      <section>
        <MainButton
          Text="Cancelar"
          BtnType="cancel"
          buttonOnClick={handleCloseModal}
        />
        <MainButton
          Text="Salvar"
          BtnType="save"
          buttonOnClick={handleSubmit(onSubmit)}
        />
      </section>
    </Modal>
  );
}
