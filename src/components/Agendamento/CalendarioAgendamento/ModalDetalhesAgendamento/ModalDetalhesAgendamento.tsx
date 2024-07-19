import "./styleModalDetalhesAgendamento.scss"


interface props{
    detalhes: string
}
export function ModalDetalhesAgendamento(props: props) {
    return (
        <div className="modalDetalhesAgendamento">
            <p>${props.detalhes}</p>
        </div>
    )
}