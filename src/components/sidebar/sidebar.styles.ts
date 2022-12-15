import styled from "styled-components";
import { Link, useLocation} from "react-router-dom";
export const Container = styled.ul<{ isOpen: boolean}>`
    
    list-style:none;
    display: flex;
    flex-direction: column;
    background-color: var(--primary);
    width: ${(props) => (props.isOpen ? "14rem" : "7rem")};
    justify-content:space-between;
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
        h4{
          width: 100%;
          display:flex;
          gap:16px;
          
        }
        p{
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--secondary);
            width: 1.5rem;
            height: 1.5rem;
            border-radius: 4px;
        }
        padding: 1rem;
        border-radius: 10px;
        color:white;
        display: flex;
        align-items: center;
        justify-content: ${(props) =>
          props.isOpen ? "flex-start" : "center"};;
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
    
`;


export const VanilaLink = styled(Link)<{ namePage: string, currentPage: string }>`

    text-decoration: none;
    border: none;
    li{
      color: ${props => (props.currentPage == props.namePage ? 'var(--primary)': '')};
      background: ${props => (props.currentPage == props.namePage ? 'white': '')};
      p{
        color: ${props => (props.currentPage == props.namePage ? 'var(--textSecondary)' : 'inherit')};
      }
    }
    &:hover li{
        
            color: var(--primary);
            background: white;
            p{
              color: var(--textSecondary);
            }
        }}


`;

export const TopSection = styled.div`
  list-style:none;
    display: flex;
    flex-direction: column;
    transition: width .3s;
    gap:2.5rem;
`

export const BottomContainer = styled.div<{ isOpen: boolean }>`
  background-color: var(--secondary);
  width: ${(props) => (props.isOpen ? "14.5rem" : "7.5rem")};
  /* width: 120%; */
  margin-left:-1.5rem;
  transition: width 0.3s;
  display: flex;
  position: relative;
  justify-content: ${(props) => (props.isOpen ? "space-between" : "center")};
  padding: 0 0.8rem;
  align-items: center;
  left: 0;
  bottom: 0rem;
  height: 6rem;
  section {
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    transition: display 2s ease-in-out;
    width: 100%;
    div {
      &:first-child {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
      &:last-child {
        display: flex;
        flex-direction: column;
      }
    }
  }
`;
