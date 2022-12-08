import { Container } from "./styles";

interface MainButtonProps{
    Text: string
}

export function MainButton({Text} : MainButtonProps){
    return (
        <Container>
            {Text}
        </Container>
    )
}