import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../globalStyles";
import AuthPage from "../pages/Authentication/AuthPage";
import { Listage } from "../pages/listage";
import Register from "../pages/Register/AuthPage";
import { TaskPage } from "../pages/TaskPage";
import { SidebarProvider } from "../hooks/useSidebar";
import { SignInProvider } from "../hooks/authContext";
import { DataTableProvider } from "../hooks/listContext";
import { TaskDataProvider } from "../hooks/taskContext";

export function AppRoutes() {
  return (
    <SidebarProvider>
                <DataTableProvider>
                <TaskDataProvider>
                  
            <Routes>

                <Route path="/listagem" element={<Listage />} />
                <Route path="/*" element={<TaskPage />} />
            </Routes>
                </TaskDataProvider>
                </DataTableProvider>
    </SidebarProvider>
  );
}
