import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { ModalHeader } from "../ModalHeader/index.js";
import { Content, ContentContainer } from "./styles.js";
import { InputComponent } from "../InputComponent/input.js";
import { MainButton } from "../MainButton/index.js";
import { Modal } from "../modal/index.js";
import { useForm, SubmitHandler } from "react-hook-form";
import { api } from "../../services/api.js";
import { usePullTableData } from "../../hooks/listContext.js";
import { useEffect, useState } from "react";

interface ModalProps {
  modalOpen: boolean;
  SetModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
interface ListModalProps {
  name: string;
}


export function ModalComponent({ modalOpen, SetModalOpen }: ModalProps) {

  const { data, pullDataFromApi } = usePullTableData()
  const [hasChange, setHasChange] = useState(true)
  const { register, handleSubmit, resetField } = useForm<ListModalProps>();
  const onSubmit: SubmitHandler<ListModalProps> = (inputData) =>{
    newListItem(inputData as any);
    resetField('name')
  }

  function handleCloseModal() {
    SetModalOpen(false);
  }
  function newListItem(name: string) {
    api.post("/AssignmentList", name);
    pullDataFromApi()
    handleCloseModal();
    setTimeout(()=> setHasChange(!hasChange) , 500)
  }
  useEffect(()=>{
    pullDataFromApi()
    
  },[hasChange])
  return (
    <Modal SetModalOpen={SetModalOpen} modalOpen={modalOpen}>
      <ModalHeader icon={faPlus} title="Cadastro de Listas" />
      <ContentContainer>
        <Content>
          <form action="submit" onSubmit={handleSubmit(onSubmit)}>
            <InputComponent
              type="text"
              placeholder="Digite o nome da Lista"
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
