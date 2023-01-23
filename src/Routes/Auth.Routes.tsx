import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../globalStyles";
import AuthPage from "../pages/Authentication/AuthPage";
import Register from "../pages/Register/AuthPage";
import { SidebarProvider } from "../hooks/useSidebar";
import { SignInProvider } from "../hooks/authContext";

export function AuthRoutes() {
  return (
            <Routes>
              <Route path="/register" element={<Register />} />
              <Route path="/*" element={<AuthPage />} />
            </Routes>
  );
}
