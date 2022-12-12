import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import { Sidebar } from "../components/sidebar";
import GlobalStyle from "../globalStyles";
import AuthPage from "../pages/Authentication/AuthPage"
import { Listage } from "../pages/listage";
import Register from "../pages/Register/AuthPage";
import { TaskPage } from "../pages/TaskPage";


export function ReactRoutes(){
    return(
        <BrowserRouter>
        <Routes>
          <Route path='/login' element={<AuthPage/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/Sidebar' element={<Listage/>} />
          <Route path='/Tasks' element={<TaskPage/>} />
        </Routes>
        <GlobalStyle/>

        </BrowserRouter>
    )
}