import { Container, Input, Content } from "./styles";


interface InputProps{
  type: string;
  placeholder: string;
  label?: string;
  required?: boolean;
  register?: any;

}

export function InputComponent({type, placeholder, label, required, register} : InputProps){
  return (
    <Content>
    <label>{label}</label>
    <span>{required!== true ? '' :  '*'}</span>
    <Container>
      <Input type={type} placeholder={placeholder} {...register}/>


    </Container>
    </Content>
  )
}