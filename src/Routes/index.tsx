import { useAuth } from '../hooks/authContext'
import { AppRoutes } from './App.Routes'
import { AuthRoutes } from './Auth.Routes'
import { BrowserRouter, Route } from "react-router-dom";
import { SidebarProvider } from "../hooks/useSidebar";
import { SignInProvider } from "../hooks/authContext";
import GlobalStyle from '../globalStyles';


export function Routes(){
  const {user} = useAuth()
  return(

        <BrowserRouter>
          { user.id!=='' ? <AppRoutes/> : <AuthRoutes/>}
        </BrowserRouter>


  )

}