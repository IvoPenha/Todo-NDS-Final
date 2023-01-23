import { AuthFormDiv, Form, Container } from "./styles";
import Logo from '../../assets/Logo.svg';
import Button from 'react-bootstrap/Button';
import { useForm, SubmitHandler  } from "react-hook-form";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/authContext";

interface IntefaceFormInput {
    email: string;
    password: string;
  }

export function AuthForm(){
    
    const {signIn, user}  = useAuth()  
    
   
    const { register, handleSubmit } = useForm<IntefaceFormInput>();
    const onSubmit: SubmitHandler<IntefaceFormInput> = data => handleSignIn({email : data.email, password : data.password})
    
    function handleSignIn({email, password} : IntefaceFormInput) {
        signIn({email, password}) 
    }

   

    return (
        <Container>
            
            <AuthFormDiv>
                <h2>Autenticação</h2>
                <Form action="submit" onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="email">Email</label>
                    <div className="input">
                    <input maxLength={30} minLength={8} {...register("email", { required: true, maxLength: 20, minLength: 8 })} />
                    </div>
                    <label htmlFor="password">password</label>
                    <div className="input">
                    <input type='password'  maxLength={30} minLength={4}  {...register("password", { required: true, maxLength: 20, minLength: 4 })} />
                    </div>
                    <input type="submit" />
                </Form>

            </AuthFormDiv>
        </Container>
       
    )
}