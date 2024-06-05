import { Button } from "../../styleComponents/button"
import { Input } from "../../styleComponents/input"
import { Select } from "../../styleComponents/select"
import { FaRegFileExcel } from "react-icons/fa";
import "./styleHeaderFiltros.scss"

export function HeaderFiltros() {

    return (
        <div className="headerFiltros">
            <div className="headerFiltros-left">
                <div className="headerFiltros-left-inputs">
                    <div>
                        <p>Aniversariantes:</p>
                        <Select>
                            <option value="1">Nome</option>
                            <option value="2">CPF</option>
                            <option value="3">Data de Nascimento</option>
                        </Select>
                    </div>
                    <div>
                        <p>Sexo/Gênero:</p>
                        <Select>
                            <option value="Todos">Todos</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Feminino">Feminino</option>
                        </Select>
                    </div>
                    <div>
                        <p>Pesquisar:</p>
                        <Input placeholder="Pesquisar Paciente" />
                    </div>
                    <div>
                        <p>Qt resultados:</p>
                        <Select style={{ width: "5rem" }}>
                            <option value="10">10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                        </Select>
                    </div>
                </div>
            </div>
            <div className="headerFiltros-right">
                <div className="headerFiltros-right-buttons">
                    <div>
                        <Button style={{ background: "#D9D9D9"}}><FaRegFileExcel />Exportar para Excel</Button>
                    </div>
                    <div>
                        <Button style={{focusColor: "#8FC56B"}}>Cadastrar Novo</Button>
                    </div>

                </div>

            </div>
        </div>
    )
}