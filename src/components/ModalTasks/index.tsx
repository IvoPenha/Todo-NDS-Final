import { faPlus } from "@fortawesome/free-solid-svg-icons";
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
  deadline: Date,

}


export function ModalTaskComponent({ modalOpen, SetModalOpen }: ModalProps) {

  const { pullTaskData } = usePullTaskData()
  const [hasChange, setHasChange] = useState(true)
  const { register, handleSubmit, resetField } = useForm<ListModalProps>();
  const onSubmit: SubmitHandler<ListModalProps> = (inputData) =>{
    if(inputData.deadline =='Invalid Date'){
      window.alert('Escolhe uma data direito po')
      throw Error()
    }
    if(inputData.deadline < new Date()){
      alert('Escolha uma data que virá')
      throw Error()
    }
    newListItem(inputData);
    resetField('description')
    resetField('deadline')
  }

  function handleCloseModal() {
    SetModalOpen(false);
  }
  function newListItem({description, deadline} : ListModalProps) {
    api.post("/Assignments", {description , deadline});
    pullTaskData()
    handleCloseModal();
    setTimeout(()=> setHasChange(!hasChange) , 500)
  }
  useEffect(()=>{
    pullTaskData()
    
  },[hasChange])
  return (
    <Modal SetModalOpen={SetModalOpen} modalOpen={modalOpen}>
      <ModalHeader icon={faPlus} title="Cadastro de Tarefas" />
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
                  minLength: 3,
                }),
              }}
            />
            <InputComponent
              type="date"
              placeholder="Escolha a data de conclusão"
              label="Data de conclusão"
              required
              register={
                { 
                ...register("deadline", {
                  valueAsDate: true,
                  required: true,
                  minLength: 9,
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
