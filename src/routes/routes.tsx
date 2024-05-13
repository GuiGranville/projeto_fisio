import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalProvider } from "../context/GlobalContext";
import { Header } from "../components/Header/Header";



function PrivateRoutes() {
    return (
        <>
            <GlobalProvider>
                <Header/>
                <Routes>

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