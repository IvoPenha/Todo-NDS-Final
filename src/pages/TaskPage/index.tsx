import { Sidebar } from "../../components/sidebar/sidebar";
import { MainHeader } from "../../components/MainHeader";
import { faCheckSquare } from '@fortawesome/free-regular-svg-icons'
import { TaskCard } from "../../components/TaskCard";
import { Container, Content } from "./styles";
export function TaskPage(){
    return(
        <>
        <Container>
            <Sidebar currentPage="tasks"/>
            <Content>
            <MainHeader 
                icon={faCheckSquare}
                title="Tarefas"
                description="Pagina de Tarefas"
                button = {true}
                buttonText = 'Novo'
            />
            <TaskCard/>

            </Content>
        </Container>

        </>

    )
}