import { Sidebar } from "../../components/sidebar/sidebar";
import { MainHeader } from "../../components/MainHeader";
import { Container, Content, MainContent } from "./styles";
import {faListUl} from '@fortawesome/free-solid-svg-icons'
import { ListTable } from "../../components/Table/Table";

interface ListagemProps{
    isOpen: boolean
}


export function Listage(){
    return(
        <Container>
        
            <Sidebar currentPage="listagem"/>
        <Content>
            <MainHeader 
                icon={faListUl}
                title="Listas"
                description="Pagina de listagem"
                button = {true}
                buttonText = 'Novo'
            />
            <MainContent>

                <ListTable/>    
            </MainContent>
        </Content>

        </Container>

    )
}