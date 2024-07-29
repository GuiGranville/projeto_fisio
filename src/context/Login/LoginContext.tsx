import { createContext, useState } from "react";
import { LoginController } from "../../controllers/Login/LoginController";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface props{
    children?: React.ReactNode
}

interface propsContext {
    auth: (email: string, password: string) => void
    mensagemErroSenha: boolean
    setMensagemErroSenha: React.Dispatch<React.SetStateAction<boolean>>
}


export const LoginContext = createContext({} as propsContext);


export const LoginProvider = ({ children }: props) => {
    const loginController = new LoginController();
    const navigate = useNavigate()
    const [mensagemErroSenha, setMensagemErroSenha] = useState(false)
    
    async function auth(email: string, password: string) {
        const response = await loginController.auth(email, password)
        console.log(response)
        if(response.status === 200){
            localStorage.setItem("token", response.data.token)
            navigate("/agendamento")
            window.location.reload()
        }
        toast.error("Email ou Senha Incorreta")
       
    }
    return(
        <LoginContext.Provider value={{auth, mensagemErroSenha, setMensagemErroSenha}}>{children}</LoginContext.Provider>
    )
}    