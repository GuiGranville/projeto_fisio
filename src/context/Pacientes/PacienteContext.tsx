import { createContext, useEffect, useState } from "react"
import { PacienteBanco } from "../../types/PacienteTypes"
import { PacientesController } from "../../controllers/Pacientes/PacientesController"
import { AxiosResponse } from "axios"
import { toast } from "react-toastify"

const PacienteEstadoInicial: PacienteBanco = {
    cd_paciente: 0,
    nm_paciente: "",
    cpf: "",
    ds_sexo: "",
    dt_nascimento: "",
    email: "",
    numero_telefone: "",
    estado_civil: "",
    nm_cidade: "",
    cep: "",
    nm_pais: "",
    cd_multi_empresa: 1,
    ativo: "",
    rg: "",
    profissao: "",
    empresa: "",
    telefone_fixo: "",
    preferencia_contato: "",
    breve_diagnostico: "",
    nm_bairro: "",
    logradouro: "",
    numero_casa: "",
    complemento: "",
    cd_convenio: 0,
    numero_convenio: "",
    validade_carteirinha: "",
    numero_cns: ""
}

interface props{
    children?: React.ReactNode,
}
interface PacientesProps{
    modalCadastrarNovo: boolean,
    setModalCadastrarNovo: React.Dispatch<React.SetStateAction<boolean>>
    cadastroPaciente: PacienteBanco,
    setCadastroPaciente: React.Dispatch<React.SetStateAction<PacienteBanco>>
    postCadastroPacientes: (cadastroPaciente: PacienteBanco) => void
    pacientesObject: PacienteBanco[],
    setPacientesObject: React.Dispatch<React.SetStateAction<PacienteBanco[]>>
    putCadastroPacientes: (cadastroPaciente: PacienteBanco) => void
    countPacientes: number
    page: number
    setPage: React.Dispatch<React.SetStateAction<number>>
}


export const PacienteContext = createContext({} as PacientesProps)

export const PacienteProvider = ({children}: props) =>{
    const pacientesController = new PacientesController()

   

    const [modalCadastrarNovo, setModalCadastrarNovo] = useState(false)  
    const [pacientesObject, setPacientesObject] = useState([] as PacienteBanco[])
    const [countPacientes, setCountPacientes] = useState(0)
    const [page, setPage] = useState(1)
    const [cadastroPaciente, setCadastroPaciente] = useState({} as PacienteBanco)

    useEffect(() =>{
        getAllPacientes()
    }, [page])
    
    async function getAllPacientes(){
        await pacientesController.getPacientes(1, 10, page)
        .then((response: AxiosResponse) =>{
            setPacientesObject(response.data)
        })
        .catch((err) =>{
            toast.error(err.response.data)
            console.log(err)
        })

        await pacientesController.countPacientes(1)
        .then((response: AxiosResponse) =>{
            setCountPacientes(response.data)
        })
        .catch((err) =>{
            toast.error(err.response.data)
            console.log(err)
        })
    }

    async function postCadastroPacientes(cadastroPaciente: PacienteBanco){
        const response = await pacientesController.postPaciente(cadastroPaciente)

        if(response.status === 201){
            toast.success("Criado com Sucesso !")
            setCadastroPaciente({} as PacienteBanco) 
            setPacientesObject(response.data)
        }else{
            toast.error(response.data)
            console.log(response)
        }
       
    }

    async function putCadastroPacientes(cadastroPaciente: PacienteBanco){
        const response = await pacientesController.putPaciente(cadastroPaciente)

        console.log(response)
        if(response.status === 200){
            toast.success("Atualizado com Sucesso !")
            setCadastroPaciente(PacienteEstadoInicial)
            setPacientesObject(response.data)
        }else{
            toast.error(response.data)
            console.log(response)
    }
}
    return(
        <PacienteContext.Provider 
        value={{modalCadastrarNovo, setModalCadastrarNovo,
         cadastroPaciente, setCadastroPaciente,
         postCadastroPacientes, pacientesObject, setPacientesObject,
         putCadastroPacientes, countPacientes,
         page, setPage}}>
            {children}
        </PacienteContext.Provider>
    )
}
