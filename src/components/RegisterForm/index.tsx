import { AuthFormDiv, Form, Container } from "./styles";
import Logo from "../../assets/Logo.svg";
import Button from "react-bootstrap/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

interface IntefaceFormInput {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export function RegisterForm() {
  const { register, handleSubmit, reset } = useForm<IntefaceFormInput>();
  const onSubmit: SubmitHandler<IntefaceFormInput> = (data) =>
    signUpSuceed(data);
  const navigate = useNavigate();

  async function signUpSuceed(data: IntefaceFormInput) {
    try {
      api
        .post("/Auth/register", { ...data })
        .then((r) => alert(`Usuario ${r.data.user.name} criado com sucesso`))
        .then((x) => reset())
        .then((y) => navigate("/login"));
    } catch (error) {
      alert("Error: " + error);
    }
  }

  return (
    <Container>
      <AuthFormDiv>
        <h2>Registre-se</h2>
        <Form action="submit" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="nome">Nome</label>
          <div className="input">
            <input
              maxLength={30}
              minLength={8}
              {...register("name", {
                required: true,
                maxLength: 20,
                minLength: 8,
              })}
            />
          </div>
          <label htmlFor="email">Email</label>
          <div className="input">
            <input
              maxLength={30}
              minLength={8}
              {...register("email", {
                required: true,
                maxLength: 20,
                minLength: 8,
              })}
            />
          </div>
          <label htmlFor="password">password</label>
          <div className="input">
            <input
              type="password"
              maxLength={30}
              minLength={4}
              {...register("password", {
                required: true,
                maxLength: 20,
                minLength: 4,
              })}
            />
          </div>
          <label htmlFor="password">Confirm your password</label>
          <div className="input">
            <input
              type="password"
              maxLength={30}
              minLength={4}
              {...register("passwordConfirm", {
                required: true,
                maxLength: 20,
                minLength: 4,
              })}
            />
          </div>
          <input type="submit" />
        </Form>
      </AuthFormDiv>
    </Container>
  );
}
