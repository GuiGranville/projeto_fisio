import { createContext } from "react"

interface GlobalProps{
    children?: React.ReactNode
}



export const GlobalContext = createContext({} as GlobalProps)

export const GlobalProvider = ({children}: GlobalProps) =>{

    return(
        <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>
    )
}
