import { ProfissionalBanco } from "../../../types/ProfissionalTypes"
import { Button } from "../../styleComponents/button"
import "./styleListaProfissionais.scss"

interface props{
    Profissionais: ProfissionalBanco[]
    setEditMode: React.Dispatch<React.SetStateAction<boolean>>
    openEditProfissionalModal: (profissional: ProfissionalBanco) => void
}

export function ListaProfissionais(props: props) {


    const privilegios = new Map()
    privilegios.set('A', "Administrador")
    privilegios.set('U', "Usuário")

    return (
        <div className="listaProfissionais">
            <div className="listaProfissionais-table">
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Celular</th>
                            <th>Email</th>
                            <th>Privilégio</th>
                            <th>Função</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.Profissionais?.map((profissional: ProfissionalBanco, index: number) => (
                            <tr key={index}>
                                <td>{profissional.nm_profissional}</td>
                                <td>{profissional.numero_telefone}</td>
                                <td>{profissional.email}</td>
                                <td>{privilegios.get(profissional.privilegio)}</td>
                                <td>{profissional.cd_tipo_profissional}</td>
                                
                                <td style={{ display: "flex", gap: "5px", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                                    <Button onClick={() => props.openEditProfissionalModal(profissional)}  style={{ width: "90%", height: "35%", fontSize: "0.8rem", background: "#5198EC" }}>Editar</Button>
                                    <Button style={{ width: "90%", height: "35%", fontSize: "0.8rem", background: "#FF6363" }}>Desativar</Button>
                                </td>
                            </tr>
                        ))} 
                    </tbody>
                </table>
            </div>
            
        </div>
    )
}    