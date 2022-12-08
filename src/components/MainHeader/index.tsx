import { Container, Header, IconDiv } from "./styles";
import { faListUl } from '@fortawesome/free-solid-svg-icons'
import {IconDefinition} from '@fortawesome/fontawesome-common-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { MainButton } from "../MainButton";
import { ReactNode } from "react";

interface MainHeaderProps{
    title: string 
    description: string 
    button: boolean 
    buttonText: string 
    icon: IconDefinition 
}

export function MainHeader({title, description, button, buttonText, icon} : MainHeaderProps){
    return (

        <Header>
            <Container>
                <IconDiv>
                <FontAwesomeIcon icon={icon} size = '2x' color='var(--secondary)'/>
                </IconDiv>
                <div>
                    <h2>{title}</h2>
                    <h3>{description}</h3>
                </div>
            </Container>
            {button && <MainButton Text={buttonText} />}
            

        </Header>
        
    )
}