import { useContext, useState } from "react"
import { HeaderPages } from "../../components/Global/HeaderPages/HeaderPages"
import { HeaderFiltros } from "../../components/Pacientes/HeaderFiltros/HeaderFiltros"
import { PacienteContext, PacienteProvider } from "../../context/Pacientes/PacienteContext"
import "./stylePacientes.scss"
import { ModalCadastroNovo } from "../../components/Pacientes/ModalCadastroNovo/ModalCadastroNovo"
import { ListaPacientes } from "../../components/Pacientes/ListaPacientes/ListaPacientes"
import { PacienteBanco } from "../../types/PacienteTypes"

function Pacientes() {

    const { modalCadastrarNovo, setModalCadastrarNovo, cadastroPaciente,
        setCadastroPaciente, postCadastroPacientes, putCadastroPacientes,
        pacientesObject, countPacientes, setPage } = useContext(PacienteContext)

    const [editMode, setEditMode] = useState(false)

    function openEditPacienteModal(paciente: PacienteBanco) {
        setEditMode(true)
        setModalCadastrarNovo(true)
        setCadastroPaciente(paciente)
    }

    return (
        <div className="pacientes">
            <ModalCadastroNovo editMode={editMode} modalCadastrarNovo={modalCadastrarNovo} setModalCadastrarNovo={setModalCadastrarNovo}
                cadastroPaciente={cadastroPaciente} setCadastroPaciente={setCadastroPaciente} postCadastroPacientes={postCadastroPacientes}
                putCadastroPacientes={putCadastroPacientes} />

            <div className="pacientes-header"><HeaderPages title="Pacientes" /></div>
            <div className="pacientes-body">
                <div className="pacientes-container">
                    <div className="pacientes-container-filtros">
                        <HeaderFiltros />
                    </div>
                    <div className="pacientes-container-body">
                        <ListaPacientes setPage={setPage} countPacientes={countPacientes} Pacientes={pacientesObject} openEditPacienteModal={openEditPacienteModal} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export function PacientesWrapper() {

    return (
        <PacienteProvider>
            <Pacientes />
        </PacienteProvider>
    )
}