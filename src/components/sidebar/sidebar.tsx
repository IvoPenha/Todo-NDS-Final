import { useState } from "react";
import { Container, BottomContainer, TopSection } from "./sidebar.styles";
import { faUserCircle, faCheckSquare } from '@fortawesome/free-regular-svg-icons'
import { faSignOut,faBars, faListUl,  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import WhiteLogo from '../../assets/whiteLogo.svg'
import { VanilaLink } from "./sidebar.styles";
import { initState} from "../../hooks/useHook";


interface SidebarProps{
    currentPage: string;
}

export function Sidebar({currentPage}: SidebarProps){
    const [isOpen, setIsOpen] = useState(true)
    
    function handleIsOpen(){
        setIsOpen(!isOpen)
    }
    interface VanilaLinkProps{
        namePage: string;
    }
    return(
               
        <Container isOpen ={isOpen}>
            <TopSection>
                
                <li> {isOpen ? <img src={WhiteLogo} alt="" /> : <></>}  
                     <button onClick={handleIsOpen}><FontAwesomeIcon icon={faBars} size = 'xl' cursor={'pointer'} className='menu-icon'/></button></li>
               <VanilaLink to={'/tasks'} namePage='tasks' currentPage={currentPage} >  <li><FontAwesomeIcon icon={faCheckSquare} size = '2xl' /> {isOpen ? <><h4>Tarefas<p>4</p></h4> </> : <></>}</li> </VanilaLink>
               <VanilaLink to={'/listagem'} namePage='listagem' currentPage={currentPage} >  <li> <FontAwesomeIcon icon={faListUl} size = '2xl' /> {isOpen ? <h4>Listas</h4> : <></>} </li> </VanilaLink> 
                
            </TopSection>
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