import { faPen, faPlus, faRotateLeft, faTrash } from "@fortawesome/free-solid-svg-icons";
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


export function TaskUnconcludeModal({ modalOpen, SetModalOpen }: ModalProps) {

  const { pullTaskData, selectedTaskItem } = usePullTaskData()
  const [hasChange, setHasChange] = useState(true)
  const {  handleSubmit } = useForm<ListModalProps>();
  const onSubmit: SubmitHandler<ListModalProps> = (inputData) =>{
    unconcludeTask();
  }
  
  function handleCloseModal() {
    SetModalOpen(false);
  }
  function unconcludeTask() {
    api.patch("/Assignments/" + selectedTaskItem.id +'/unconclude');
    pullTaskData()
    handleCloseModal();
    setTimeout(()=> setHasChange(!hasChange) , 500)
  }
  useEffect(()=>{
    pullTaskData()
    
  },[hasChange])
  return (
       <Modal SetModalOpen={SetModalOpen} modalOpen={modalOpen}>
      <ModalHeader icon={faRotateLeft} title="Desconcluir Tarefa" />
      <ContentContainer>
        <Content>
          <h4>
            {" "}
            Tem certeza de que deseja desconcluir a tarefa '{` ${selectedTaskItem.description} `}'?{" "}
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
