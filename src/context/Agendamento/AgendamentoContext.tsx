import { createContext, useEffect, useState } from "react";
import { AgendamentoBanco, AgendamentoRetornoSelect, ProcedimentoBanco, SalaBanco } from "../../types/AgendamentoTypes";
import { ProfissionaisController } from "../../controllers/Profissionais/ProfissionaisController";
import { AxiosError, AxiosResponse } from "axios";
import { ProfissionalBanco } from "../../types/ProfissionalTypes";
import { toast } from "react-toastify";
import { AgendamentoController } from "../../controllers/Agendamento/AgendamentoController";
import { PacientesController } from "../../controllers/Pacientes/PacientesController";
import { PacienteBanco } from "../../types/PacienteTypes";

interface props{
    children?: React.ReactNode,
}
interface AgendamentoProps {
    dateChange: (date: string) => void
    dateAuxCalendar: string
    setDateAuxCalendar: React.Dispatch<React.SetStateAction<string>>
    cadastroAgendamento: AgendamentoBanco 
    setCadastroAgendamento: React.Dispatch<React.SetStateAction<AgendamentoBanco>>
    novoAgendamentoModal: boolean
    setNovoAgendamentoModal: React.Dispatch<React.SetStateAction<boolean>>
    cancelaNovoAgendamento: () => void
    listaProfissionais: ProfissionalBanco[]
    postAgendamento: (cadastroAgendamento: AgendamentoBanco) => void
    agendamentos: AgendamentoRetornoSelect[]
    setAgendamentos: React.Dispatch<React.SetStateAction<AgendamentoRetornoSelect[]>>
    getPacienteName: (nome: any) => void
    listaPacientes: PacienteBanco[] 
    setListaPacientes: React.Dispatch<React.SetStateAction<PacienteBanco[]>>
    procedimentos: ProcedimentoBanco[]
    setProcedimentos: React.Dispatch<React.SetStateAction<ProcedimentoBanco[]>>
    salas: SalaBanco[]
    setSalas: React.Dispatch<React.SetStateAction<SalaBanco[]>>
}

const agendamentoEstadoInicial = {
    hr_inicio: "",
    dt_inicio: "",
    hr_fim: "",
    cd_paciente: 0,
    cd_atendimento: 0,
    cd_profissional: 0,
    cd_procedimento: 0,
    cd_sala: 0,
    status: "",
    situacao: "",
    observacao : "",
    lembrete_sms: "S",
    lembrete_whatsapp: "N",
}
export const AgendamentoContext = createContext({} as AgendamentoProps)


export const AgendamentoProvider = ({children}: props) => {
    const profissionaisController = new ProfissionaisController()
    const agendamentoController = new AgendamentoController()
    const pacientesController = new PacientesController()

    const [dateAuxCalendar, setDateAuxCalendar] = useState(new Date().toISOString());
    const [cadastroAgendamento, setCadastroAgendamento] = useState({lembrete_sms: "S", lembrete_whatsapp: "N", status: "A"} as AgendamentoBanco);
    const [agendamentos, setAgendamentos] = useState([] as AgendamentoRetornoSelect[]);
    const [novoAgendamentoModal, setNovoAgendamentoModal] = useState(false);
    
    const [listaPacientes, setListaPacientes] = useState([] as PacienteBanco[]);
    const [listaProfissionais, setListaProfissionais] = useState([] as ProfissionalBanco[]);
    const [procedimentos, setProcedimentos] = useState([] as ProcedimentoBanco[]);
    const [salas, setSalas] = useState([] as SalaBanco[]);

    useEffect(() => {
        getAgendamentos()
        getListaProfissionais()
        getProcedimentos()
        getSalas()
    }, [])

    function cancelaNovoAgendamento(){
        setNovoAgendamentoModal(false);
        setCadastroAgendamento(agendamentoEstadoInicial)
    }
    function dateChange(date: string) {
        setDateAuxCalendar(date);
    }

    async function getListaProfissionais(){
        await profissionaisController.getAllProfssionais()
        .then((response: AxiosResponse) => {
            setListaProfissionais(response.data)
        })
        .catch((err) => {
            console.log(err)
            toast.error('Erro ao carregar Profissionais')
        })
        
    }

    async function getPacienteName(nome: any){
        if(nome.target.value === ""){
            setListaPacientes([])
            return
        }
        await pacientesController.getPacienteByName(nome.target.value, 1)
        .then((response: AxiosResponse) => {
            console.log(response.data)
            setListaPacientes(response.data)
        })
        .catch((err) => {
            console.log(err)
            toast.error('Erro ao carregar Paciente')
        })
    }

    async function getAgendamentos(){
        await agendamentoController.getAllAgendamentos()
        .then((response: AxiosResponse) => {
            
            setAgendamentos(response.data)
        })
    }

    async function postAgendamento(cadastroAgendamento: AgendamentoBanco){
        console.log(cadastroAgendamento)
        await agendamentoController.postAgendamento(cadastroAgendamento)
        .then((response: AxiosResponse) => {
            console.log(response.data)
            if(response.status === 500){
                return toast.error("Erro de servidor")
            }
            toast.success('Agendamento realizado com sucesso!')
            getAgendamentos()
            setNovoAgendamentoModal(false)
        })
        .catch((err) => {
            toast.error(err.response.data)
        })
    }

    async function getProcedimentos(){
        await agendamentoController.getProcedimentos()
        .then((response: AxiosResponse) => {
            setProcedimentos(response.data)
        })
        .catch((err: AxiosError) =>{
            console.log(err)
            toast.error("Erro ao carregar Procedimentos")
        })
    }

    async function getSalas(){
        await agendamentoController.getSalas()
        .then((response: AxiosResponse) => {
            setSalas(response.data)
        })
        .catch((err: AxiosError) =>{
            console.log(err)
            toast.error("Erro ao carregar Salas")
        })
    }
    return(
        <AgendamentoContext.Provider value={{dateChange, dateAuxCalendar, setDateAuxCalendar,
             cadastroAgendamento, setCadastroAgendamento,
             novoAgendamentoModal, setNovoAgendamentoModal,
             cancelaNovoAgendamento, listaProfissionais,
             postAgendamento, agendamentos,
             setAgendamentos, getPacienteName,
             listaPacientes, setListaPacientes,
             procedimentos, setProcedimentos,
             salas, setSalas}}>{children}</AgendamentoContext.Provider>
    )
}