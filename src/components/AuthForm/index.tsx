import { AuthForm } from "./styles";
import Logo from '../../assets/Logo.svg';

export function Form(){
    return (
            <AuthForm>
                <form action="submit">
                    <label htmlFor="email">Email</label>
                    <div className="input">
                    <input type="email" name="email" />
                    </div>
                    <label htmlFor="password">password</label>
                    <div className="input">
                    <input type="password" name="password" />
                    </div>
                </form>
            </AuthForm>
       
    )
}