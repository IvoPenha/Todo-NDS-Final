import { Sidebar } from "../../components/sidebar";
import { MainHeader } from "../../components/MainHeader";
import { Container } from "./styles";
import {faListUl} from '@fortawesome/free-solid-svg-icons'
export function Listage(){
    return(
        <Container>
            <Sidebar/>
            <MainHeader 
                icon={faListUl}
                title="Listas"
                description="Pagina de listagem"
                button = {true}
                buttonText = 'Novo'
            />
        </Container>

    )
}