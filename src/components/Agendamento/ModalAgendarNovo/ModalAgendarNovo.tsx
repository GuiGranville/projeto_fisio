import "./styleModalAgendarNovo.scss"
import { Title } from "../../styleComponents/title";
import { InputWithTitle } from "../../styleComponents/Pacientes/ModalCadastroNovo/InputWithTitle";
import { Input } from "../../styleComponents/input";
import { SelectWithTitle } from "../../styleComponents/Pacientes/ModalCadastroNovo/selectWithTitle";
import { Button } from "../../styleComponents/button";
import { AgendamentoBanco, ProcedimentoBanco, SalaBanco } from "../../../types/AgendamentoTypes";
import { ProfissionalBanco } from "../../../types/ProfissionalTypes";
import { debounce } from "../../../utils/debounce";
import { PacienteBanco } from "../../../types/PacienteTypes";
import { SelecionaPaciente } from "../SelecionaPaciente/SelecionaPaciente";
import { validaInputsObrigatorios } from "../../../utils/validarInputsObrigatorios";
import { toast } from "react-toastify";

interface props{
    cadastroAgendamento: AgendamentoBanco
    setCadastroAgendamento: React.Dispatch<React.SetStateAction<AgendamentoBanco>>
    cancelaNovoAgendamento: () => void
    novoAgendamentoModal: boolean
    listaProfissionais: ProfissionalBanco[]
    listaPacientes: PacienteBanco[]
    setListaPacientes: React.Dispatch<React.SetStateAction<PacienteBanco[]>>
    postAgendamento: (cadastroAgendamento: AgendamentoBanco) => void
    getPacienteName: (nome: any) => void
    salas: SalaBanco[]
    procedimentos: ProcedimentoBanco[]
}
export function ModalAgendarNovo(props: props) {
    const listaProfissionais: any = [{label: "Selecione um Profissional", value: 0}]
    const listaProcedimentos: any = [{label: "", value: 0}]
    const listaSalas: any = [{label: "", value: 0}]
    const lembreteSms = [{label: "Sim", value: "S"}, {label: "Não", value: "N"}]
    const status = [{label: "Agendado", value: "A"}, {label: "Cancelado", value: "C"}, {label: "Realizado", value: "R"}]
    const convenios = [{label: "Particular", value: 2}]

    function handleChange(e: Event){
        const {name, value} = e.target as HTMLInputElement
        props.setCadastroAgendamento({...props.cadastroAgendamento, [name]: value})
    }
   
    if(props.listaProfissionais && props.listaProfissionais.length > 0){
        
        for(let i = 0; i < props.listaProfissionais.length; i++){
            listaProfissionais.push({label: props.listaProfissionais[i].nm_profissional, value: props.listaProfissionais[i].cd_profissional})   
        }  
        for(let i = 0; i < props.procedimentos.length; i++){
            listaProcedimentos.push({label: props.procedimentos[i].nm_procedimento, value: props.procedimentos[i].cd_procedimento})
        }
        for(let i = 0; i < props.salas.length; i++){
            listaSalas.push({label: props.salas[i].nm_sala, value: props.salas[i].cd_sala})
        }    
    }

    function setPaciente(cdPaciente: number, nmPaciente: string){

        props.setListaPacientes([])
        const input = document.getElementById("nm_paciente") as HTMLInputElement
        input.value = nmPaciente
        props.setCadastroAgendamento({...props.cadastroAgendamento, cd_paciente: cdPaciente})
    }    
    
    function createAgendamento(){
        const arraysObrigatorios = ['dt_inicio', 'hr_inicio', 'hr_fim', 'cd_profissional', 'cd_paciente', 'cd_convenio', 'cd_procedimento']
        console.log(props.cadastroAgendamento)
        const faltaCampos = validaInputsObrigatorios(props.cadastroAgendamento, arraysObrigatorios)
        if(!faltaCampos){
            return props.postAgendamento(props.cadastroAgendamento)
        }
        toast.error("Faltam campos obrigatórios")
    }
    const callDebounce = debounce(props.getPacienteName, 500)

    return(
        <div className="modalAgendarNovo-background" style={{ display: props.novoAgendamentoModal ? "flex" : "none" }}>
            <div className="modalAgendarNovo">
                <div className="modalAgendarNovo-header">
                    <Title style={{ fontSize: "20px", fontWeight: "600" }}>Novo Agendamento</Title>
                </div>
                <div className="modalAgendarNovo-body">
                    <div>
                        <InputWithTitle fnEdit={(e) => handleChange(e)} name="dt_inicio" type="date" title="Data*" inputWidth="30%" wrapperWidth="30%"/>
                        <InputWithTitle fnEdit={(e) => handleChange(e)} name="hr_inicio" type="time" title="Horário*" inputWidth="30%" wrapperWidth="30%"/>
                        <p style={{ marginTop: "1.3rem" }}>às</p>
                        <Input onChange={(e: any) => handleChange(e)} name="hr_fim" type="time" style={{ width: "30%", marginTop: "1.3rem" }}/>
                    </div>
                    <div>
                        <SelectWithTitle listaItens={listaProfissionais} fnEdit={(e) => handleChange(e)} name="cd_profissional" title="Profissional*" wrapperWidth="100%"/>
                    </div>
                    <div style={{position: "relative", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "0", justifyContent: "center" }}>
                        <p>Paciente*</p>
                        <Input onChange={callDebounce} name="cd_paciente" id="nm_paciente"/>
                        {props.listaPacientes.length > 0 &&(
                            <SelecionaPaciente setPaciente={setPaciente} pacientes={props.listaPacientes}/>
                        )}
                    </div>
                    <div>
                        <SelectWithTitle listaItens={convenios} fnEdit={(e) => handleChange(e)} name="cd_convenio" title="Convênio*" wrapperWidth="50%"/>
                        <SelectWithTitle listaItens={listaProcedimentos} fnEdit={(e) => handleChange(e)} name="cd_procedimento" title="Procedimento*" wrapperWidth="50%"/>
                    </div>
                    <div>
                        <SelectWithTitle listaItens={status} fnEdit={(e) => handleChange(e)} name="status" title="Status" wrapperWidth="100%"/>
                        <SelectWithTitle listaItens={listaSalas} fnEdit={(e) => handleChange(e)} name="cd_sala" title="Sala" wrapperWidth="100%"/>
                    </div>
                    <div>
                        <InputWithTitle title="Celular" wrapperWidth="50%"/>
                        <SelectWithTitle fnEdit={(e) => handleChange(e)} name="lembrete_sms" title="Lembrete SMS" wrapperWidth="50%" listaItens={lembreteSms}/>
                        <SelectWithTitle fnEdit={(e) => handleChange(e)} name="lembrete_whatsapp" title="Lembrete Whatsapp" wrapperWidth="50%"/>
                    </div>
                    <div>
                        <InputWithTitle fnEdit={(e) => handleChange(e)} name="observacao" type="text" title="Observação" wrapperWidth="100%" />
                    </div>
                    <div>
                        <Button onClick={() => props.cancelaNovoAgendamento()} style={{ background: "#EF1B1B"}}>Cancelar</Button>
                        <Button onClick={() => createAgendamento()} style={{background: "#5198EC"}}>Salvar</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}