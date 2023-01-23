import { Container } from "./styles";

interface MainButtonProps{
    Text: string;
    BtnType?: string;
    BtnSize?: string;
    buttonOnClick?: (React.MouseEventHandler<HTMLButtonElement> & Function) | undefined

}

export function MainButton({Text, BtnType, buttonOnClick, BtnSize} : MainButtonProps){
    return (
        <Container BtnType={BtnType} onClick={buttonOnClick} BtnSize={BtnSize}>
            {Text}
        </Container>
    )
}