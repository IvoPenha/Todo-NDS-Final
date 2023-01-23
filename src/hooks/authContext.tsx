import { createContext, useState, ReactNode, useContext, useEffect } from "react";
import { api } from "../services/api";

interface SignInProps {
  email: string;
  password: string;
}
interface ProviderProps {
  signIn({ email, password }: SignInProps): any,
  user: {id : string, name : string, email : string},
  signOut : ()=>void,
  validateTokenExpiration: () => boolean | undefined
}
interface LoggedUserProps {
  user: {id : string, name : string, email : string};
  accessToken: string
  expiresIn: number;
}

export const AuthContext = createContext<ProviderProps>({} as ProviderProps);




export function SignInProvider({ children }: any) {
  const[data , setData]  = useState<LoggedUserProps>({user: {id : '', name : '', email : ''}, accessToken : '', expiresIn: 0}) 
  let expiredDate: Date
  async function signIn({ email, password} : SignInProps){
    try {
      const response = await api.post("/Auth/login", { email, password });
      const {user , accessToken, expiresIn} : LoggedUserProps = response.data
      let expiredDate = new Date()
      expiredDate.setSeconds(expiredDate.getSeconds() + expiresIn)
      localStorage.setItem("@Todo:user", JSON.stringify(user))
      localStorage.setItem("@Todo:token", (accessToken))
      localStorage.setItem("@Todo:expiresIn", (expiredDate.toString()))
      api.defaults.headers.authorization = "Bearer " + accessToken
      setData({user : user, accessToken : accessToken, expiresIn: expiresIn})
    } catch (error: any) {
      alert("Não foi possível entrar. ");
    }
  }
  function signOut(){
    localStorage.removeItem("@Todo:user")
    localStorage.removeItem("@Todo:token")
    localStorage.removeItem("@Todo:expiresIn")

    setData({user: {id : '', name : '', email : ''}, accessToken : '', expiresIn: 0}) 
  }

  function validateTokenExpiration(){
    const expiresInDate : string | null = localStorage.getItem("@Todo:expiresIn")
    if (expiresInDate!== null){
      const agora = new Date()
      if(new Date(expiresInDate) < agora){
        console.log(expiresInDate)
        signOut()
        return false
      }
  
      return true

    }

  
  }


  useEffect(() => {
    const user = localStorage.getItem("@Todo:user")
    const token = localStorage.getItem("@Todo:token")
    const expiresIn = localStorage.getItem("@Todo:expiresIn")
    
    if (token && user){
      api.defaults.headers.authorization = "Bearer " + token
      setData(
        {user: JSON.parse(user),
        accessToken: token,
        expiresIn: expiresIn!=null ? +expiresIn : 0,
        })
    }
  }, [])
  

  return <AuthContext.Provider value={{signIn, user : data.user, signOut, validateTokenExpiration}}> {children} </AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
