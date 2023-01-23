import { Container, TextArea, Content } from "./styles";


interface TextAreaProps{
  placeholder: string;
  label?: string;
  required?: boolean;
}

export function TextAreaComponent({placeholder, label, required} : TextAreaProps){
  return (
    <Content>
    <label>{label}</label>
    <span>{required!== true ? '' :  '*'}</span>
    <Container>
      <TextArea placeholder={placeholder} required ={required!== true}/>


    </Container>
    </Content>
  )
}