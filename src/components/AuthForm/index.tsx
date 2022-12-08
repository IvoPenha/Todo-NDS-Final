import { AuthFormDiv, Form, Container } from "./styles";
import Logo from '../../assets/Logo.svg';
import Button from 'react-bootstrap/Button';
import { useForm, SubmitHandler  } from "react-hook-form";

interface IntefaceFormInput {
    email: string;
    password: string;
  }

export function AuthForm(){
    const { register, handleSubmit } = useForm<IntefaceFormInput>();
    const onSubmit: SubmitHandler<IntefaceFormInput> = data => console.log(data);


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