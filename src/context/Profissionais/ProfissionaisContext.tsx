import { createContext, useEffect, useState } from "react";
import { ProfissionaisController } from "../../controllers/Profissionais/ProfissionaisController";
import { toast } from "react-toastify";
import { ProfissionalBanco } from "../../types/ProfissionalTypes";
import { AxiosResponse } from "axios";

interface props{
    children?: React.ReactNode
}
interface ProfissionaisProps {
   profissionais: ProfissionalBanco[]
   setProfissionais: React.Dispatch<React.SetStateAction<ProfissionalBanco[]>>
   modalCadastrarNovo: boolean
   setModalCadastrarNovo: React.Dispatch<React.SetStateAction<boolean>>
   cadastroProfissional: ProfissionalBanco
   setCadastroProfissional: React.Dispatch<React.SetStateAction<ProfissionalBanco>>
   postCadastroProfissionais: (cadastroProfissional: ProfissionalBanco) => void
   putCadastroProfissionais: (cadastroProfissional: ProfissionalBanco) => void
}

export const ProfissionaisContext = createContext({} as ProfissionaisProps);


export const ProfissionaisProvider = ({children}: props) =>{

    const profissionaisController = new ProfissionaisController()

    const [profissionais, setProfissionais] = useState([] as ProfissionalBanco[]);
    const [modalCadastrarNovo, setModalCadastrarNovo] = useState(false)

    const [cadastroProfissional, setCadastroProfissional] = useState({
        
    } as ProfissionalBanco)

    useEffect(() =>{
        getAllProfssionais()
    }, [])
    
    async function getAllProfssionais(){
        await profissionaisController.getAllProfssionais()
        .then((response: AxiosResponse) =>{
            setProfissionais(response.data)
        }).catch((err) =>{
            console.log(err)
            toast.error('Erro ao carregar Profissionais')
        })
    }


    async function postCadastroProfissionais(cadastroProfissional: ProfissionalBanco){
        const response = await profissionaisController.postProfissional(cadastroProfissional)
        
        if(response.status === 201){
            toast.success("Criado com Sucesso !")
            setCadastroProfissional({} as ProfissionalBanco)
            getAllProfssionais()
        }else{
            toast.error(response.data)
        }

    }

    async function putCadastroProfissionais(cadastroProfissional: ProfissionalBanco){
        const response = await profissionaisController.putProfissional(cadastroProfissional)
        
        if(response.status === 200){
            toast.success("Atualizado com Sucesso !")
            setCadastroProfissional({} as ProfissionalBanco)
            getAllProfssionais()
        }else{
            toast.error(response.data)
        }
    }
    return(
        <ProfissionaisContext.Provider value={{
            profissionais, setProfissionais, modalCadastrarNovo,
            setModalCadastrarNovo, cadastroProfissional, setCadastroProfissional,
            postCadastroProfissionais, putCadastroProfissionais
            }}>{children}</ProfissionaisContext.Provider>)
}    