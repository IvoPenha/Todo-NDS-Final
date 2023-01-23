import { useState, useContext } from "react";
import { Container, BottomContainer, TopSection } from "./sidebar.styles";
import { faUserCircle, faCheckSquare } from '@fortawesome/free-regular-svg-icons'
import { faSignOut,faBars, faListUl,  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import WhiteLogo from '../../assets/whiteLogo.svg'
import { VanilaLink } from "./sidebar.styles";
import { SidebarContext, useSidebar } from "../../hooks/useSidebar";
import { useAuth } from "../../hooks/authContext";
import { Link } from "react-router-dom";
import { StyledLink } from '../StyledLink/StyledLink.styles'
import { usePullTaskData } from "../../hooks/taskContext";


interface SidebarProps{
    PageAtual: string;
}



export function Sidebar({PageAtual}: SidebarProps){
    const {isOpen, setIsOpen} = useSidebar()
    const {signOut, user} = useAuth()
    const{ total } = usePullTaskData()
    
    function handleIsOpen(){
        setIsOpen(!isOpen)
    }
    interface VanilaLinkProps{
        namepage: string;
    }
    return(
               
        <Container isOpen ={isOpen}>
            <TopSection>
                
                <li> {isOpen ? <img src={WhiteLogo} alt="" /> : <></>}  
                     <button onClick={handleIsOpen}><FontAwesomeIcon icon={faBars} size = 'xl' cursor={'pointer'} className='menu-icon'/></button></li>
               <VanilaLink to={'/tasks'} namepage='tasks' pageatual={PageAtual} >  <li><FontAwesomeIcon icon={faCheckSquare} size = '2xl' /> {isOpen ? <><h4>Tarefas<p>{total}</p></h4> </> : <></>}</li> </VanilaLink>
               <VanilaLink to={'/listagem'} namepage='listagem' pageatual={PageAtual} >  <li> <FontAwesomeIcon icon={faListUl} size = '2xl' /> {isOpen ? <h4>Listas</h4> : <></>} </li> </VanilaLink> 
                
            </TopSection>
                <BottomContainer isOpen ={isOpen}>
                    <section>
                        <FontAwesomeIcon icon={faUserCircle} size = '2xl' />

                        <div>
                        <h5>{user.name}</h5>
                        <h6>USUARIO</h6>
                        </div>

                    </section>
                    <StyledLink to={'/login'}>
                    <div onClick={signOut}>
                        <FontAwesomeIcon icon={faSignOut} size = 'lg' />
                    </div>
                    </StyledLink>
                </BottomContainer>
            
        </Container>

    )
}