import { Container } from "./styles"
import { AuthForm } from "../../components/AuthForm"
import Button from 'react-bootstrap/Button';
import { Header } from "../../components/header"
import GlobalStyle from "../../globalStyles"
function AuthPage() {

  return (
    <Container>
      <GlobalStyle/>
      <Header type="login"/>
      <AuthForm/>
      
    </Container>
  )
}

export default AuthPage
