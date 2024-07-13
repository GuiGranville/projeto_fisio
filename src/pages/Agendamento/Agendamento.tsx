import { useContext } from "react";
import { CalendarioAgendamento } from "../../components/Agendamento/CalendarioAgendamento/CalendarioAgendamento";
import { ModalAgendarNovo } from "../../components/Agendamento/ModalAgendarNovo/ModalAgendarNovo";
import CalendarioNavegacao from "../../components/Agendamento/NavegacaoLateral/CalendarioNavegacao/CalendarioNavegacao";
import { HeaderPages } from "../../components/Global/HeaderPages/HeaderPages";
import { Button } from "../../components/styleComponents/button";
import { AgendamentoContext, AgendamentoProvider } from "../../context/Agendamento/AgendamentoContext"
import "./styleAgendamento.scss";

function Agendamento() {

    const {cadastroAgendamento, setCadastroAgendamento,
         cancelaNovoAgendamento, listaProfissionais,
          postAgendamento, novoAgendamentoModal, setNovoAgendamentoModal,
          agendamentos, getPacienteName,
          listaPacientes, setListaPacientes,
          salas, procedimentos} = useContext(AgendamentoContext)
    
    return(
        <div className="agendamento">

            <ModalAgendarNovo getPacienteName={getPacienteName} postAgendamento={postAgendamento} listaProfissionais={listaProfissionais} 
            listaPacientes={listaPacientes} setListaPacientes={setListaPacientes}
            cadastroAgendamento={cadastroAgendamento} setCadastroAgendamento={setCadastroAgendamento} 
            cancelaNovoAgendamento={cancelaNovoAgendamento} novoAgendamentoModal={novoAgendamentoModal}
            salas={salas} procedimentos={procedimentos}/>

            <div className="agendamento-header">
                <HeaderPages title="Agendamento"/>
            </div>
            <div className="agendamento-body">
                <div className="agendamento-container">
                    <div className="agendamento-container-left">
                        <div className="agendamento-container-left-calendario">
                            <CalendarioNavegacao/>
                        </div>
                    </div>
                    <div className="agendamento-container-mid">
                        <div className="agendamento-container-mid-calendario">
                            <CalendarioAgendamento agendamentos={agendamentos}/>
                        </div>
                        <div className="agendamento-container-left-buttons">
                            <Button onClick={() => setNovoAgendamentoModal(true)} style={{width: "15rem"}}>Novo Agendamento</Button>
                            
                        </div>
                    </div>
                    <div className="agendamento-container-right">

                    </div>
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