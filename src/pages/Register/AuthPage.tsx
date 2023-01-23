import { Container } from "./styles"
import { AuthForm } from "../../components/AuthForm"
import Button from 'react-bootstrap/Button';
import { Header } from "../../components/AuthHeader"
import GlobalStyle from "../../globalStyles"
import { RegisterForm } from "../../components/RegisterForm";
function Register() {

  return (
    <Container>
      <GlobalStyle/>
      <Header type="register"/>
      <RegisterForm/>
      
    </Container>
  )
}

export default Register
