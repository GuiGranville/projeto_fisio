
import { AgendamentoRetornoSelect } from "../../../../types/AgendamentoTypes"
import "./styleModalDetalhesAgendamento.scss"
import { Button } from "../../../styleComponents/button"
import { FaRegTrashAlt, FaPencilAlt  } from "react-icons/fa";


interface props{
    modalDetalhesAgendamentoInfos: AgendamentoRetornoSelect
    setModalDetalhesAgendamento: React.Dispatch<React.SetStateAction<boolean>>
    modalDetalhesAgendamento: boolean
}

export function ModalDetalhesAgendamento(props: props) {
    function closeModal(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        if (e.target === e.currentTarget) {
            props.setModalDetalhesAgendamento(false)
        }

    }

    console.log(props.modalDetalhesAgendamentoInfos)
    return (
        <div onClick={(e) => closeModal(e)} style={{display: props.modalDetalhesAgendamento ? "flex" : "none"}} className="modalDetalhesAgendamento-background">
            <div className="modalDetalhesAgendamento">
                <h3>Horário: {props.modalDetalhesAgendamentoInfos.hr_inicio} - {props.modalDetalhesAgendamentoInfos.hr_fim}</h3>
                <p><b>Fisioterapeuta:</b> {props.modalDetalhesAgendamentoInfos.nm_profissional}</p>
                <p><b>Paciente:</b> {props.modalDetalhesAgendamentoInfos.nm_paciente}</p>
                <p><b>Celular:</b> {props.modalDetalhesAgendamentoInfos.numero_telefone}</p>
                <p><b>Convênio:</b> {props.modalDetalhesAgendamentoInfos.nm_convenio}</p>
                <p><b>Procedimento:</b> {props.modalDetalhesAgendamentoInfos.nm_procedimento}</p>
                <p><b>Sala:</b> {props.modalDetalhesAgendamentoInfos.nm_sala}</p>
                <hr/>
                <div className="modalDetalhesAgendamento-buttons">
                    <Button style={{width: "60%"}}>Iniciar Atendimento</Button>
                    <Button style={{width: "20%", background: "#5198EC"}}><FaPencilAlt /></Button>
                    <Button style={{width: "20%", background: "#EF1B1B"}}><FaRegTrashAlt/></Button>
                </div>
            </div>
        </div>
    )
}