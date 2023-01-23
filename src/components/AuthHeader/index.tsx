import { AuthHeader } from "./styles";
import Logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";
import Register from "../../pages/Register/AuthPage";

interface HeaderProps {
  type: "login" | "register";
}

export function Header({ type }: HeaderProps) {
  return (
    <>
      <AuthHeader>
        <div className="">
          <Link to={"/login"}>
            <img src={Logo} alt="" />
          </Link>

          {type === "login" ? (
            <Link to={"/Register"}>Não possui uma conta</Link>
          ) : (
            <Link to={"/login"}>voce possui uma conta</Link>
          )}
        </div>
      </AuthHeader>
    </>
  );
}
