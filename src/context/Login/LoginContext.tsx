import { createContext } from "react";
import { LoginController } from "../../controllers/Login/LoginController";
import { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";

interface props{
    children?: React.ReactNode
}

interface propsConext {
    auth: (email: string, password: string) => void
}


export const LoginContext = createContext({} as propsConext);


export const LoginProvider = ({ children }: props) => {
    const loginController = new LoginController();
    const navigate = useNavigate()
    
    async function auth(email: string, password: string) {
        await loginController.auth(email, password)
        .then((response: AxiosResponse) =>{
            if(response.status === 200){
                localStorage.setItem("token", response.data.token)
                navigate("/agendamento")
            }

        }).catch((err) =>{
            console.log(err)
        })   
    }
    return(
        <LoginContext.Provider value={{auth}}>{children}</LoginContext.Provider>
    )
}    