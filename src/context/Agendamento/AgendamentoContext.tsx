import { createContext } from "react";

interface props{
    children?: React.ReactNode,
}
interface AgendamentoProps {
    
}
export const AgendamentoContext = createContext({} as AgendamentoProps)


export const AgendamentoProvider = ({children}: props) => {
    return(
        <AgendamentoContext.Provider value={{}}>{children}</AgendamentoContext.Provider>
    )
}