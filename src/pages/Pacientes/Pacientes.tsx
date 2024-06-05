import { HeaderPages } from "../../components/Global/HeaderPages/HeaderPages"
import { HeaderFiltros } from "../../components/Pacientes/HeaderFiltros/HeaderFiltros"
import "./stylePacientes.scss"

export function Pacientes(){

    return(
        <div className="pacientes">
            <div className="pacientes-header"><HeaderPages title="Pacientes"/></div>
            <div className="pacientes-body">
                <div className="pacientes-container">
                    <div className="pacientes-container-filtros">
                        <HeaderFiltros/>
                    </div>
                </div>
            </div>
        </div>
    )
}