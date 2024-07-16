import { createContext } from "react";

interface props{
    children?: React.ReactNode
}

interface propsConext {
}


export const LoginContext = createContext({} as propsConext);


export const LoginProvider = ({ children }: props) => {

    return(
        <LoginContext.Provider value={{}}>{children}</LoginContext.Provider>
    )
}    