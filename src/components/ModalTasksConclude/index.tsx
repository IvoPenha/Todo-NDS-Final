import { faPen, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { ModalHeader } from "../ModalHeader/index.js";
import { Content, ContentContainer } from "./styles.js";
import { InputComponent } from "../InputComponent/input.js";
import { MainButton } from "../MainButton/index.js";
import { Modal } from "../modal/index.js";
import { useForm, SubmitHandler } from "react-hook-form";
import { api } from "../../services/api.js";
import { usePullTaskData } from "../../hooks/taskContext.js";
import { useEffect, useState } from "react";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";

interface ModalProps {
  modalOpen: boolean;
  SetModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
interface ListModalProps {
  description: string;
  deadline: string,

}


export function TaskConcludeModal({ modalOpen, SetModalOpen }: ModalProps) {

  const { pullTaskData, selectedTaskItem } = usePullTaskData()
  const [hasChange, setHasChange] = useState(true)
  const {  handleSubmit } = useForm<ListModalProps>();
  const onSubmit: SubmitHandler<ListModalProps> = (inputData) =>{
    concludeTask();
  }
  
  function handleCloseModal() {
    SetModalOpen(false);
  }
  function concludeTask() {
    api.patch("/Assignments/" + selectedTaskItem.id +'/conclude');
    pullTaskData()
    handleCloseModal();
    setTimeout(()=> setHasChange(!hasChange) , 500)
  }
  useEffect(()=>{
    pullTaskData()
    
  },[hasChange])
  return (
       <Modal SetModalOpen={SetModalOpen} modalOpen={modalOpen}>
      <ModalHeader icon={faCircleCheck} title="Concluir Tarefa" />
      <ContentContainer>
        <Content>
          <h4>
            {" "}
            Tem certeza de que deseja concluir a tarefa '{` ${selectedTaskItem.description} `}'?{" "}
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
