import  Table  from "react-bootstrap/Table";
import { Container, StyledTable } from "./styles";

export function ListTable(){

    return(
        <Container>


          
                    <StyledTable  bordered hover size="sm" responsive>
                    <thead>
                    <tr>
                      <th>Nome</th>
                      <th>Descrição</th>
                      <th>Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                    </tr>
                    </tbody>
                    </StyledTable>
                    
        </Container>
    )
}