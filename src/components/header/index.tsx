import { AuthHeader } from "./styles";
import Logo from '../../assets/Logo.svg';
import { Link } from "react-router-dom";
import Register from "../../pages/Register/AuthPage";

interface HeaderProps{
    type: 'login' | 'register'
}

export function Header({type} : HeaderProps){
    return (
        <>
            <AuthHeader>
                <div className="">
                    <img src={Logo} alt="" />
                    
                    {type === 'login' ? <Link to={'/Register'}>Não possui uma conta</Link> : <Link to={'/login'}>voce possui uma conta</Link> }
                </div>

            </AuthHeader>
        </>
    )
}