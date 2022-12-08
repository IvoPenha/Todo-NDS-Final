import { Container } from "./styles"
import { AuthForm } from "../../components/AuthForm"
import Button from 'react-bootstrap/Button';
import { Header } from "../../components/header"
import GlobalStyle from "../../globalStyles"
function Register() {

  return (
    <Container>
      <GlobalStyle/>
      <Header type="register"/>
      <AuthForm/>
      
    </Container>
  )
}

export default Register
