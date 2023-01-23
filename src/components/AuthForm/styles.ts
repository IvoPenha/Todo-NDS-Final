import styled from 'styled-components'


export const Container = styled.div `
    display: flex;
    justify-content: center;

`

export const AuthFormDiv = styled.div `
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 11rem;
    h2{
        padding-left: 10px;
        border-left: 7px solid var(--brand);
    }
    


`

export const Form = styled.form`

    display: flex;
    flex-direction: column;
    gap:.1875rem;
    div{
        background-color: transparent;
        border: #E9ECEF 1px solid;
        border-radius: 4px;
        width: 20rem;
        padding: 0.5rem 1rem;
        margin-bottom:.5rem;
        &:focus-within{
            border: var(--brand) 1px solid;
        }
    }
    input{
        height: 100%;
        color: var(--textSecondary);
        width: 100%;
        background: none;
        border: none !important;
        &:-webkit-autofill {
            -webkit-box-shadow: 0 0 0 50px var(--primary) inset;         
        }

        /* Cor do texto do autocomplete */
        &:-webkit-autofill {
            -webkit-text-fill-color: var(--textSecondary) !important;
        }
        &[type=submit]{
            background-color: var(--brand);
            border-radius: 4px;
            border: none ;
            padding: 1rem 0;
            opacity: 0.8;
            cursor: pointer;
            &:hover{
            opacity: 1;


            }
        }
        &:focus{
            outline: none;
        }
       
    }

    
`
