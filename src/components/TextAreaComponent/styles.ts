import styled from "styled-components";

export const Container = styled.div`
  background-color: transparent;
  border: #CED4DA 1px solid;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  margin-bottom:.5rem;
`
export const Content = styled.div`
  label{
    color: #343A40;
  }
  color: var(--textPrimary);
  span{
    color: var(--danger)
  }

`

export const TextArea = styled.textarea`

  resize: none;
  height: 100%;
  color: var(--textPrimary);
  width: 100%;
  background: none;
  border: none !important;
  font-family: Poppins;
  &:focus{
      outline: none;
  }
  &::placeholder{
    font-family: Poppins;
  }  
`