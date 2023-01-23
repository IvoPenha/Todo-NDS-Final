import { Container } from "./styles"
import { AuthForm } from "../../components/AuthForm"
import Button from 'react-bootstrap/Button';
import { Header } from "../../components/AuthHeader"
import GlobalStyle from "../../globalStyles"
function AuthPage() {

  return (
    <Container>
      
      <Header type="login"/>
      <AuthForm/>
      
    </Container>
  )
}

export default AuthPage
