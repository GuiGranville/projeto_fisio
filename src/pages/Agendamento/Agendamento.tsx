import { HeaderPages } from "../../components/Global/HeaderPages/HeaderPages";
import { AgendamentoProvider } from "../../context/Agendamento/AgendamentoContext"
import "./styleAgendamento.scss";

function Agendamento() {

    return(
        <div className="agendamento">
            <div className="agendamento-header">
                <HeaderPages title="Agendamento"/>
            </div>
            <div className="agendamento-body">
                <div className="agendamento-container">

                </div>
            </div>
        </div>
    )
}


export function AgendamentoWrapper(){

    return(
        <AgendamentoProvider>
            <Agendamento/>
        </AgendamentoProvider>
    )
}