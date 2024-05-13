import { createContext } from "react"


export const GlobalContext = createContext({} as any)

export const GlobalProvider = ({children}: any) =>{

    return(
        <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>
    )
}
