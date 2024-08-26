import { FaTimes } from "react-icons/fa"
import "./styleModalEvolucao.scss"
import { AgendamentoRetornoSelect } from "../../../types/AgendamentoTypes"
import moment from "moment"
import { Title } from "../../styleComponents/title"
import { Button } from "../../styleComponents/button"


interface modalEvolucaoProps{
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    modalDetalhesAgendamentoInfos: AgendamentoRetornoSelect
}

export function ModalEvolucao(props: modalEvolucaoProps) {

    function closeModal(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        if (e.target === e.currentTarget) {
            props.setOpen(false)
        }

    }
    return(
        <div className="modalEvolucao" style={{display: props.open ? "flex" : "none"}} onClick={(e) => { closeModal(e) }}>
            <div className="modalEvolucao-container">
                <div className="modalEvolucao-header">
                    <Title style={{ fontSize: "20px", fontWeight: "600" }}>Evolução</Title>
                    <div onClick={() => props.setOpen(false)}><FaTimes color="#FFFFFF" style={{width: "20px", height: "20px"}}/></div>
                </div>
                <div className="modalEvolucao-body">
                    <div className="modalEvolucao-infos">
                        <div>
                            <p>Nome: </p><p className="modalEvolucao-infos-campo">{props.modalDetalhesAgendamentoInfos.nm_paciente}</p>
                        </div>
                        <div>
                            <p>Data: </p><p className="modalEvolucao-infos-campo">{moment(props.modalDetalhesAgendamentoInfos.dt_inicio).format("DD/MM/YYYY")}</p>
                            <p>Horário: </p><p className="modalEvolucao-infos-campo">{props.modalDetalhesAgendamentoInfos.hr_inicio} às {props.modalDetalhesAgendamentoInfos.hr_fim}</p>
                        </div>
                        <div>
                            <p>Convênio: </p><p className="modalEvolucao-infos-campo">{props.modalDetalhesAgendamentoInfos.nm_convenio}</p>
                        </div>
                        <div>
                            <p>Procedimento: </p><p className="modalEvolucao-infos-campo">{props.modalDetalhesAgendamentoInfos.nm_procedimento}</p>
                        </div>
                    </div>
                    <div className="modalEvolucao-text">
                        <textarea placeholder="Digite Aqui" id="" cols={30} rows={10}></textarea>
                    </div>
                    <div className="modalEvolucao-buttons">
                        <Button onClick={() => props.setOpen(false)} style={{background: "#ef1b1b", width: "150px"}}>Cancelar</Button>
                        <Button style={{background: "#2D9CDB", width: "150px"}}>Salvar</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}    