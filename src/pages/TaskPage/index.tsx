import { Sidebar } from "../../components/sidebar/sidebar";
import { MainHeader } from "../../components/MainHeader";
import { faCheckSquare } from "@fortawesome/free-regular-svg-icons";
import { TaskCard } from "../../components/TaskCard";
import { Container, Content, ButtonSection } from "./styles";
import { useState } from "react";
import { TaskGroup } from "../../components/TaskGroup";
import { ModalTaskComponent } from "../../components/ModalTasks";
import { MainButton } from "../../components/MainButton";
import { usePullTaskData } from "../../hooks/taskContext";
export function TaskPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const { pullMoreTaskData, TaskData, createTaskEditionModal, createTaskRemoveModal, createTaskConcludeModal, createTaskUnconcludeModal, } = usePullTaskData();
  return (
    <>
      <ModalTaskComponent modalOpen={modalOpen} SetModalOpen={setModalOpen} />
      {createTaskEditionModal()}
      {createTaskRemoveModal()}
      {createTaskConcludeModal()}
      {createTaskUnconcludeModal()}
      <Container>
        <Sidebar PageAtual="tasks" />
        <Content>
          <MainHeader
            icon={faCheckSquare}
            title="Tarefas"
            description="Pagina de Tarefas"
            button={true}
            buttonText="Novo"
            buttonOnClick={() => setModalOpen(true)}
          />
          <TaskGroup />
          <ButtonSection>
            {(TaskData.length == 20 || TaskData.length % 20 == 0 && TaskData.length!== 0) ? (
              <MainButton
                Text="Carregar tasks"
                BtnSize="15rem"
                buttonOnClick={()=> pullMoreTaskData()}
              />
            ) : (
              ""
            )}
          </ButtonSection>
        </Content>
      </Container>
    </>
  );
}
