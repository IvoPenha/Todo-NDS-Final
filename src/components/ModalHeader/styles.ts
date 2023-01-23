import styled from "styled-components";

export const Container = styled.div`
    gap: .6rem;
    color : var(--textPrimary);
    display : flex;
    align-items : center;
    h2{
        color: var(--primary)
    }
`
export const IconDiv = styled.div`
    height: 1.2rem;
    display: flex;
    align-items : center;
    font-size: .9rem;
    font-weight: lighter;
`
export const Header = styled.div`
    height: fit-content;
    display: flex;
    h2{
        font-family: Karla;
        font-size: 1.3rem;
        font-weight: bold;
    }
    section{
        position: absolute;
        right: 5rem;
    }
`