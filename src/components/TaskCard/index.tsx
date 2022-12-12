import { Container, Title, TopSection, Content, CardFooter } from "./styles";
import {faListUl, faClock, faEllipsisV} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'



export function TaskCard(){
    return (
        <Container>
            <TopSection>
                <Title>
                    Para Fazer
                </Title>
            </TopSection>
            <Content>
                <div>
                <h3>Titulo da Task</h3>
                <p> Descrição da Task </p>

                </div>
                <button>
                <FontAwesomeIcon icon={faEllipsisV} size = '1x' color='var(--textTerciary)'/>
                    
                </button>
            </Content>
            <CardFooter>
                <div>
                    <FontAwesomeIcon icon={faListUl} size = '1x' color='var(--textTerciary)'/>
                    <span>Tarefas</span>
                </div>
                <div>
                    <FontAwesomeIcon icon={faClock} size = '1x' color='var(--textTerciary)'/>
                    <span>24 de Outubro, 10:15</span>
                </div>

            </CardFooter>
        </Container>
    )
}