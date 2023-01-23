import { Container, Header, IconDiv } from "./styles";
import { faListUl } from '@fortawesome/free-solid-svg-icons'
import {IconDefinition} from '@fortawesome/fontawesome-common-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { MainButton } from "../MainButton";


interface ModalHeaderProps{
    title: string 
    icon: IconDefinition 
}

export function ModalHeader({title, icon} : ModalHeaderProps){
    return (

        <Header>
            <Container>
                <IconDiv>
                <FontAwesomeIcon icon={icon} size = '2x' color='var(--secondary)'/>
                </IconDiv>
                <div>
                    <h2>{title}</h2>
                </div>
            </Container>
            

        </Header>
        
    )
}