import { Table } from "react-bootstrap";
import styled from "styled-components";

export const StyledTable = styled(Table)` 
    border-collapse: collapse;
    border: var(--background) 1px solid;
    color: var(--textPrimary);
    width: 100%;
    padding-right 28px;
    thead{
        background: var(--textSecondary) ;
        
    }
    th,td{
        border-bottom: var(--background) 1px solid;

        padding: .875rem 0 ;
        
    }
    td:last-child{
        display: flex;
        justify-content: center;
        gap: 10px;
        button{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 2rem;
            height: 2rem;
            border: none;
            cursor: pointer;
            border-radius: 4px;
            color:white;            
        }
        button:first-child{
            background-color: var(--warning);
        }
        button:last-child{
            background-color: var(--danger);

        }
        
    }
    tbody{
        background: #ffffff;
    }
    text-align: center;
    
`
export const Container = styled.div`
    margin-top:24px;
    background: #fff;
    height: fit-content;
    border-radius: 4px;
    padding: .625rem .5rem;
    width: 100%;
    
    
`