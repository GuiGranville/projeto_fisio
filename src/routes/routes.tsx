import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { GlobalProvider } from "../context/GlobalContext";
import { Header } from "../components/Header/Header";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { PacientesWrapper } from "../pages/Pacientes/Pacientes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AgendamentoWrapper } from "../pages/Agendamento/Agendamento";
import { ProfissionaisWrapper } from "../pages/Profissionais/Profissionais";
import { LoginWrapper } from "../pages/Login/Login";


function PrivateRoutes() {
    const token = localStorage.getItem("token");
    if(!token) {
        return <Navigate to={"/login"}/>;
    }
    return (
        <>
            <GlobalProvider>
                <ToastContainer />
                <Header/>
                <Sidebar/>
                <Routes>
                <Route path="/pacientes" element={<PacientesWrapper/>}/>
                <Route path="/" element={<AgendamentoWrapper/>}/>
                <Route path="/agendamento" element={<AgendamentoWrapper/>}/>
                <Route path="/profissionais" element={<ProfissionaisWrapper/>}/>
                
                </Routes>
            </GlobalProvider>
        </>
    )
}

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginWrapper/>}/>
                <Route path="*" element={<PrivateRoutes />} />
            </Routes>
        </BrowserRouter>
    )
}