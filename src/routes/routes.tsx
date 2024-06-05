import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalProvider } from "../context/GlobalContext";
import { Header } from "../components/Header/Header";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Pacientes } from "../pages/Pacientes/Pacientes";



function PrivateRoutes() {
    return (
        <>
            <GlobalProvider>
                <Header/>
                <Sidebar/>
                <Routes>
                <Route path="/pacientes" element={<Pacientes/>}/>
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