import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalProvider } from "../context/GlobalContext";
import { Header } from "../components/Header/Header";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { PacientesWrapper } from "../pages/Pacientes/Pacientes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function PrivateRoutes() {
    return (
        <>
            <GlobalProvider>
                <ToastContainer />
                <Header/>
                <Sidebar/>
                <Routes>
                <Route path="/pacientes" element={<PacientesWrapper/>}/>
                </Routes>
            </GlobalProvider>
        </>
    )
}

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<PrivateRoutes />} />
                
            </Routes>
        </BrowserRouter>
    )
}