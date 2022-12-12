import styled from "styled-components";

export const Container = styled.button`
    background: var(--primary);
    color: var(--textSecondary);
    font-family: poppins, sans-serif;
    font-weight: bold;
    width: 6.25rem;
    height: 2.3125rem;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    transition: all 0.5s;
    &:hover{
        filter: brightness(1.2)
    }
`