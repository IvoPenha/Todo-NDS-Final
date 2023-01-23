import styled from "styled-components";

export const Container = styled.div`
    gap: .75rem;
    color : var(--textPrimary);
    display : flex;
    align-items : center;
    h2{
        color: var(--primary)
    }
`
export const IconDiv = styled.div`
    display: flex;
    align-items : center;
    justify-content : center;
    height: 53px;
    width: 53px;
    border-radius: 4px;
    background: white;
`
export const Header = styled.div`
    height: fit-content;
    height: 3.25rem;
    width: 75%;
    display: flex;
    align-items : center;
    justify-content: space-between;
    h2{
        font-size: 1.5rem;
    }
    h3{
        font-size: 1.2rem;
    }
    section{
        position: absolute;
        right: 0;
        margin-right: 5rem;
    }
`