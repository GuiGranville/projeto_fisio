import { useContext } from 'react'
import Calendar from "react-calendar";
import './styleCalendarioNavegacao.scss'
import { AgendamentoContext } from '../../../../context/Agendamento/AgendamentoContext'
import moment from 'moment';

export default function CalendarioNavegacao() {
    const {dateChange} = useContext(AgendamentoContext)


    function handleDateChange(date: string) {
        const dateAux = moment(date).format("YYYY-MM-DD");
        dateChange(dateAux);
    }
    return(
        <div className="calendarioNavegacao">
            <Calendar 
            showFixedNumberOfWeeks
             onChange={(e: any) => handleDateChange(e)}
             formatShortWeekday={(locale, value) => new Intl.DateTimeFormat(locale, { weekday: 'short' }).format(value)}
             />
        </div>
    )
}    