import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Table from "react-bootstrap/Table";
import { Container, StyledTable } from "./table.styles";

export function ListTable() {
  return (
    <Container>
      <StyledTable striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Gabriel Cleitores</td>
            <td>Tarefa de casa</td>
            <td><button><FontAwesomeIcon icon={faPen}/></button> <button> <FontAwesomeIcon icon={faTrash}/></button> </td>
          </tr>
          <tr>
            <td>Joaozinho Silva da aparecida</td>
            <td>Prova</td>
            <td><button><FontAwesomeIcon icon={faPen}/></button> <button> <FontAwesomeIcon icon={faTrash}/></button> </td>
          </tr>
        </tbody>
      </StyledTable>
    </Container>
  );
}
