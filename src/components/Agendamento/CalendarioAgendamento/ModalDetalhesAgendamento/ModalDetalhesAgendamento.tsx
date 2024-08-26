
import { AgendamentoRetornoSelect } from "../../../../types/AgendamentoTypes"
import "./styleModalDetalhesAgendamento.scss"
import { Button } from "../../../styleComponents/button"
import { FaRegTrashAlt, FaPencilAlt } from "react-icons/fa";
import { SlArrowDown } from "react-icons/sl";
import { useContext, useEffect, useState } from "react";
import { DropDown } from "../../../Global/DropDown/DropDown";
import { ModalEvolucao } from "../../ModalEvolucao/ModalEvolucao";
import { AgendamentoContext } from "../../../../context/Agendamento/AgendamentoContext";

interface props {
    modalDetalhesAgendamentoInfos: AgendamentoRetornoSelect
    setModalDetalhesAgendamento: React.Dispatch<React.SetStateAction<boolean>>
    modalDetalhesAgendamento: boolean
    putStatusAgendamento: (status: string, cd_it_agenda_central: number) => void
    deleteAgendamento: (cd_it_agenda_central: number) => void
}

export function ModalDetalhesAgendamento(props: props) {
    const { modalAvaliacao, setModalAvalicao, modalEvolucao, setModalEvolucao } = useContext(AgendamentoContext)
    const [openDropDown, setOpenDropDown] = useState(false)
    const [optionsDropDown, setOptionsDropDown] = useState<{ value: string; fn: () => void; }[]>([
        { value: "Iniciar avaliação", fn: () => openModaisAvaliacaoEvolucao("Avaliacao") },
        { value: "Iniciar evolução", fn: () => openModaisAvaliacaoEvolucao("Evolucao") }
    ]);

    function closeModal(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        if (e.target === e.currentTarget) {
            props.setModalDetalhesAgendamento(false)
            setOpenDropDown(false)
        }

    }

    function openModaisAvaliacaoEvolucao(flag: string) {
        if (flag === 'Avaliacao') {

        } else if (flag === 'Evolucao') {
            console.log(flag)
            setModalEvolucao(true)
        }
    }


    return (
        <div onClick={(e) => { closeModal(e) }} style={{ display: props.modalDetalhesAgendamento ? "flex" : "none" }} className="modalDetalhesAgendamento-background">
            <ModalEvolucao modalDetalhesAgendamentoInfos={props.modalDetalhesAgendamentoInfos} open={modalEvolucao} setOpen={setModalEvolucao}/>
            <div className="modalDetalhesAgendamento">
                <h3>Horário: {props.modalDetalhesAgendamentoInfos.hr_inicio} - {props.modalDetalhesAgendamentoInfos.hr_fim}</h3>
                <p><b>Fisioterapeuta:</b> {props.modalDetalhesAgendamentoInfos.nm_profissional}</p>
                <p><b>Paciente:</b> {props.modalDetalhesAgendamentoInfos.nm_paciente}</p>
                <p><b>Celular:</b> {props.modalDetalhesAgendamentoInfos.numero_telefone}</p>
                <p><b>Convênio:</b> {props.modalDetalhesAgendamentoInfos.nm_convenio}</p>
                <p><b>Procedimento:</b> {props.modalDetalhesAgendamentoInfos.nm_procedimento}</p>
                <p><b>Sala:</b> {props.modalDetalhesAgendamentoInfos.nm_sala}</p>
                <hr />
                <div className="modalDetalhesAgendamento-buttons">
                    <Button onClick={() => props.putStatusAgendamento("EA", props.modalDetalhesAgendamentoInfos.cd_it_agenda_central)} style={{ width: "60%" }}>Iniciar Atendimento</Button>
                    <div style={{ width: "20%" }}><Button onClick={() => setOpenDropDown(!openDropDown)} ><SlArrowDown /></Button><DropDown isOpen={openDropDown} options={optionsDropDown} /></div>
                    <Button style={{ width: "20%", background: "#5198EC" }}><FaPencilAlt /></Button>
                    <Button onClick={() => props.deleteAgendamento(props.modalDetalhesAgendamentoInfos.cd_it_agenda_central)} style={{ width: "20%", background: "#EF1B1B" }}><FaRegTrashAlt /></Button>
                </div>
            </div>
        </div>
    )
}