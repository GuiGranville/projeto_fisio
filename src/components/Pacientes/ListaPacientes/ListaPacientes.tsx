import moment from "moment"
import { PacienteBanco } from "../../../types/PacienteTypes"
import { Button } from "../../styleComponents/button"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import "./styleListaPacientes.scss"

interface props {
    Pacientes: PacienteBanco[]
    openEditPacienteModal: (paciente: PacienteBanco) => void
    countPacientes: number
    setPage: React.Dispatch<React.SetStateAction<number>>
}

export function ListaPacientes(props: props) {

    const qtPages = Math.ceil(props.countPacientes / 10)

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        console.log(event)
        props.setPage(value);
      };
    return (
        <div className="listaPacientes">
            <div className="listaPacientes-table">
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Celular</th>
                            <th>Data de Nascimento</th>
                            <th>CPF</th>
                            <th>Convênio</th>
                            <th>Cidade</th>
                            <th>Histórico</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.Pacientes?.map((paciente, index) => (
                            <tr key={index}>
                                <td>{paciente.nm_paciente}</td>
                                <td>{paciente.numero_telefone}</td>
                                <td>{moment(paciente.dt_nascimento).format("DD/MM/YYYY")}</td>
                                <td>{paciente.cpf}</td>
                                <td>{paciente.numero_convenio}</td>
                                <td>{paciente.nm_cidade}</td>
                                <td><Button style={{ width: "90%", height: "55%", fontSize: "0.8rem", background: "#5198EC" }}>Histórico</Button></td>
                                <td style={{ display: "flex", gap: "5px", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                                    <Button onClick={() => props.openEditPacienteModal(paciente)} style={{ width: "90%", height: "35%", fontSize: "0.8rem", background: "#5198EC" }}>Editar</Button>
                                    <Button style={{ width: "90%", height: "35%", fontSize: "0.8rem", background: "#FF6363" }}>Desativar</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="listaPacientes-footer">
                <div className="listaPacientes-footer-pages">
                    <Stack spacing={2}>
                        <Pagination onChange={handleChange} count={qtPages} color="standard" variant="outlined"/>
                    </Stack>
                </div>
            </div>
        </div>
    )
}