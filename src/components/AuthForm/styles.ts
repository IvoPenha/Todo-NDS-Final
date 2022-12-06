import styled from 'styled-components'
export const AuthForm = styled.div `
    overflow: hidden;
    height: 750px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #25294C;
    form{
        display: flex;
        flex-direction: column;
        .input{
            background-color: transparent;
            border: #E9ECEF 1px solid;
            border-radius: 4px;
            padding: 0 1rem;
        }
        input{
            background: none;
            border: none;
            &:focus{
                outline: none;
            }
        }

    }


`