import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import AuthPage from "../pages/Authentication/AuthPage"
import Register from "../pages/Register/AuthPage";


export function ReactRoutes(){
    return(
        <BrowserRouter>
        <Routes>
          <Route path='/login' element={<AuthPage/>} />
          <Route path='/register' element={<Register/>} />
        </Routes>
        </BrowserRouter>
    )
}