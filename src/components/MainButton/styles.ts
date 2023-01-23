import styled from "styled-components";

interface MainButtonProps{
    BtnType?: string;
    onClick?: Function
    BtnSize?: string;

}

export const Container = styled.button<MainButtonProps>`
    background: ${(props) => (props.BtnType ==='save' ? "var(--success)" : props.BtnType==='cancel' ? 'var(--danger)' : 'var(--primary)')};
    color: var(--textSecondary);
    font-family: poppins, sans-serif;
    font-weight: bold;
    width: ${props => props.BtnSize ? props.BtnSize  : '6.25rem'};
    height: 2.3125rem;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    transition: all 0.5s;
    &:hover{
        filter: brightness(1.2)
    }
`