import { Sidebar } from "../../components/sidebar";
import { MainHeader } from "../../components/MainHeader";
import { Container, Content } from "./styles";
import {faListUl} from '@fortawesome/free-solid-svg-icons'
import { ListTable } from "../../components/Table";
export function Listage(){
    return(
        <Container>
        
            <Sidebar/>
        <Content>
            <MainHeader 
                icon={faListUl}
                title="Listas"
                description="Pagina de listagem"
                button = {true}
                buttonText = 'Novo'
            />
            <div>

                <ListTable/>    
            </div>
        </Content>

        </Container>

    )
}