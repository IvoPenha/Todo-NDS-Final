import { useState } from "react";
import { Container, BottomContainer } from "./styles";
import { faUserCircle, faCheckSquare } from '@fortawesome/free-regular-svg-icons'
import { faSignOut,faBars, faListUl,  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import WhiteLogo from '../../assets/whiteLogo.svg'
import { Link } from "react-router-dom";
import { TaskPage } from "../../pages/TaskPage";

export function Sidebar(){
    const [isOpen, setIsOpen] = useState(false)
    
    function handleIsOpen(){
        setIsOpen(!isOpen)
    }

    return(
               
        <Container isOpen ={isOpen}>
                <li> {isOpen ? <img src={WhiteLogo} alt="" /> : <></>}  
                     <button onClick={handleIsOpen}><FontAwesomeIcon icon={faBars} size = 'xl' cursor={'pointer'} className='menu-icon'/></button></li>
               <Link to={'/tasks'}>  <li><FontAwesomeIcon icon={faCheckSquare} size = '2xl' /> {isOpen ? <h4>Tarefas</h4> : <></>}</li> </Link>
               <Link to={'/Sidebar'}>  <li> <FontAwesomeIcon icon={faListUl} size = '2xl' /> {isOpen ? <h4>Listas</h4> : <></>} </li> </Link> 
                
                <BottomContainer isOpen ={isOpen}>
                    <section>
                        <FontAwesomeIcon icon={faUserCircle} size = '2xl' />

                        <div>
                        <h5>Gabriel cleitores</h5>
                        <h6>USUARIO</h6>
                        </div>

                    </section>
                    
                    <div>
                        <FontAwesomeIcon icon={faSignOut} size = 'lg' />
                    </div>
                </BottomContainer>
            
        </Container>

    )
}