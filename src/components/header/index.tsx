import { AuthHeader } from "./styles";
import Logo from '../../assets/Logo.svg';

export function Header(){
    return (
        <>
            <AuthHeader>
                <div className="">
                    <img src={Logo} alt="" />

                    <a href="">Não possui uma conta</a>
                </div>

            </AuthHeader>
        </>
    )
}