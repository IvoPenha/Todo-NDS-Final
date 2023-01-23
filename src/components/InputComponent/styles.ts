import styled from "styled-components";

export const Container = styled.div`
  background-color: transparent;
  border: #ced4da 1px solid;
  border-radius: 4px;
  width: 20rem;
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
`;
export const Content = styled.div`
  color: var(--textPrimary);
  span {
    color: var(--danger);
  }
`;

export const Input = styled.input`
  height: 100%;
  color: var(--textPrimary);
  width: 100%;
  background: none;
  border: none !important;
  &[type="submit"] {
    background-color: var(--brand);
    padding: 1rem 0;
    filter: brightness(0.8);
    cursor: pointer;
    &:hover {
      filter: brightness(1);
    }
  }
  &:focus {
    outline: none;
  }
  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 50px #fff inset;
  }

  /* Cor do texto do autocomplete */
  &:-webkit-autofill {
    -webkit-text-fill-color: var(--textPrimary) !important;
  }
`;
