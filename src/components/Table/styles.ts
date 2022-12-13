import { Table } from "react-bootstrap";
import styled from "styled-components";

export const StyledTable = styled(Table)`
    color: var(--textPrimary);
    width: 100%;
    padding-right 28px;
    thead{
        background: #D9DBDE;
    }
    th,td{
        padding: .875rem 0 ;
        
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
    padding: .625rem .5rem;
    width: 100%;
    
    
`