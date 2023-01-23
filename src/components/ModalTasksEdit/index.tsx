import { faPen, faPlus } from "@fortawesome/free-solid-svg-icons";
import { ModalHeader } from "../ModalHeader/index.js";
import { Content, ContentContainer } from "./styles.js";
import { InputComponent } from "../InputComponent/input.js";
import { MainButton } from "../MainButton/index.js";
import { Modal } from "../modal/index.js";
import { useForm, SubmitHandler } from "react-hook-form";
import { api } from "../../services/api.js";
import { usePullTaskData } from "../../hooks/taskContext.js";
import { useEffect, useState } from "react";

interface ModalProps {
  modalOpen: boolean;
  SetModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
interface ListModalProps {
  description: string;
  deadline: string,
  id: string

}


export function TaskEditionModal({ modalOpen, SetModalOpen }: ModalProps) {

  const { pullTaskData, selectedTaskItem } = usePullTaskData()
  const [hasChange, setHasChange] = useState(true)
  const { setValue, register, handleSubmit, resetField } = useForm<ListModalProps>();
  const onSubmit: SubmitHandler<ListModalProps> = (inputData) =>{
    newListItem(inputData);
    resetField('description')
    resetField('deadline')
  }
  
  const deadlineTime = selectedTaskItem.deadline.toString().slice(0,10)
  setValue('description', selectedTaskItem.description)
  setValue('deadline',  deadlineTime )


  function handleCloseModal() {
    SetModalOpen(false);
  }
  function newListItem({description, deadline, id} : ListModalProps) {
    api.put("/Assignments/" + selectedTaskItem.id, {id, description , deadline});
    pullTaskData()
    handleCloseModal();
    setTimeout(()=> setHasChange(!hasChange) , 500)
  }
  useEffect(()=>{
    pullTaskData()
    
  },[hasChange])
  return (
    <Modal SetModalOpen={SetModalOpen} modalOpen={modalOpen}>
      <ModalHeader icon={faPen} title="Edição de Tareas" />
      <ContentContainer>
        <Content>
          <form action="submit" onSubmit={handleSubmit(onSubmit)}>
            <InputComponent
              type="text"
              placeholder="Digite o nome da Lista"
              label="Nome"
              required
              register={{
                ...register("description", {
                  required: true,
                  minLength: 1,
                }),
              }}
            />
            <InputComponent
              type="date"
              placeholder="Escolha a data de conclusão"
              label="Data de conclusão"
              required
              register={{
                ...register("deadline", {
                  required: true,
                  minLength: 1,
                }),
              }
            }
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
