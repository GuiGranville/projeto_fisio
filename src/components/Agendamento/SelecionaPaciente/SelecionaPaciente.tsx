import "./styleSelecionaPaciente.scss"
import { PacienteBanco } from "../../../types/PacienteTypes"

interface props{
    pacientes: PacienteBanco[]
    setPaciente: (cdPaciente: number, nmPaciente: string) => void
}
export function SelecionaPaciente(props: props) {

    return(
        <div className="selecionaPaciente" style={{height: "300px"}}>
            {props.pacientes.map((paciente, index) => (
                <div className="paciente" key={index} onClick={() => props.setPaciente(paciente.cd_paciente, paciente.nm_paciente)}>
                    <p>{paciente.nm_paciente}</p>
                </div>
            ))}
        </div>
    )
}    