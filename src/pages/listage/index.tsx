import { Sidebar } from "../../components/sidebar/sidebar";
import { MainHeader } from "../../components/MainHeader";
import { Container, Content, MainContent } from "./styles";
import { faListUl } from "@fortawesome/free-solid-svg-icons";
import { ListTable } from "../../components/Table/Table";
import { useState } from "react";
import { ModalComponent } from "../../components/modalListas";
import { ListEditionModal } from "../../components/ModalListaEdit";
import { usePullTableData } from "../../hooks/listContext";



export function Listage() {
  const [modalOpen, setModalOpen] = useState(false);
  const {CreateEditionModal, setEditModalOpen, item, setRemoveModalOpen, CreateRemoveModal} = usePullTableData()

  return (
    <Container>
      <ModalComponent
        modalOpen={modalOpen}
        SetModalOpen={setModalOpen}
        />
      {CreateEditionModal(item)}
      {CreateRemoveModal(item)}
      <Sidebar PageAtual="listagem" />
      <Content>
        <MainHeader
          icon={faListUl}
          title="Listas"
          description="Pagina de listagem"
          button={true}
          buttonText="Novo"
          buttonOnClick={() => setModalOpen(true)}
        />
        <MainContent>
          <ListTable setEditModalOpen={setEditModalOpen} setRemoveModalOpen={setRemoveModalOpen} />
        </MainContent>
      </Content>
    </Container>
  );
}
