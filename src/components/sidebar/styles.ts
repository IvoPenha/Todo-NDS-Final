import styled from "styled-components";

export const Container = styled.ul<{ isOpen: boolean }>`
    
    list-style:none;
    display: flex;
    flex-direction: column;
    background-color: var(--primary);
    width: ${props => props.isOpen ? '14rem' : '7rem'};
    transition: width .3s;
    padding: 0 1rem;
    gap:32px;
    height: 100vh;
    Link{
        background: white !important;
    }
    li{
        &:first-child {
            justify-content: space-around;
        }
      
        padding: 1rem;
        border-radius: 10px;
        color:white;
        display: flex;
        align-items: center;
        justify-content: ${props => props.isOpen ? 'flex-start' : 'center'};;
        gap: 1rem;
        cursor: pointer;
        transition: background-color .3s ease-in-out;
        button{
            visibility: hidden;
            .menu-icon{
                visibility: visible !important;
                color: var(--textSecondary);
            }
        }
        &:not(:first-child):hover{
            color: var(--primary);
            background: white;
        }
    }
    
`
export const BottomContainer = styled.div<{ isOpen: boolean }>`
    background-color: var(--secondary);
    width: ${props => props.isOpen ? '14em' : '7em'};
    transition: width .3s;
    display: flex;
    position: fixed;
    justify-content: ${props => props.isOpen ? 'space-between' : 'center'};;
    padding: 0 .8rem;
    align-items: center;
    left:0;
    bottom: 0rem;
    height: 6rem;
    section {
        display: ${props => props.isOpen ? 'flex' : 'none'};
        flex-direction:row;
        align-items: center;
        gap: 1rem;
        transition: display 2s ease-in-out;
        width: 80%;
        div{
            &:first-child {
            display: flex;
            align-items: center;
            gap: .5rem;
            }
            &:last-child{
                display: flex;
                flex-direction:column;
            }
        }
    }
    
    
`