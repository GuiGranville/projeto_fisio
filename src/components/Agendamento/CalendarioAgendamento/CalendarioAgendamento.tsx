import "./styleCalendarioAgendamento.scss"
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import { AgendamentoRetornoSelect } from "../../../types/AgendamentoTypes";
import { useContext, useEffect, useRef } from "react";
import { AgendamentoContext } from "../../../context/Agendamento/AgendamentoContext";
import { ModalDetalhesAgendamento } from "./ModalDetalhesAgendamento/ModalDetalhesAgendamento";

interface props{
  agendamentos: AgendamentoRetornoSelect[]
  date: any 
}
export function CalendarioAgendamento(props: props) {
  const calendarRef = useRef(null) as any;
  const {setModalDetalhesAgendamentoInfos, modalDetalhesAgendamentoInfos, setModalDetalhesAgendamento, modalDetalhesAgendamento} = useContext(AgendamentoContext)


  const goToDate = (date: Date) => {
    if(calendarRef.current){
      calendarRef.current.getApi().gotoDate(date)
    }
  }

  useEffect(() => {
    if (props.date) {
      goToDate(props.date);
    }
  }, [props.date]);

  function handleOpenModalDetalhes(props: AgendamentoRetornoSelect ){
    setModalDetalhesAgendamentoInfos(props)
    setModalDetalhesAgendamento(true)

  }
    return (
        <div className="calendarioAgendamento">
          <ModalDetalhesAgendamento modalDetalhesAgendamento={modalDetalhesAgendamento} setModalDetalhesAgendamento={setModalDetalhesAgendamento} modalDetalhesAgendamentoInfos={modalDetalhesAgendamentoInfos}/>
            
          <FullCalendar 
            ref={calendarRef}
            plugins={[dayGridPlugin, timeGridPlugin]}
            initialView="timeGridWeek"
            initialDate={new Date()}
            weekends={true}
            editable={true}
            dayMaxEvents={true}
            eventShortHeight={50}
            slotEventOverlap={false}
            nowIndicator={false}
            moreLinkText={(n) => `+${n} mais`}
            aspectRatio={1.5}
            timeZone="pt-br"
            locale="pt-br"
            allDaySlot={false}
            buttonText={{
              month: "Mês",
              week: "Semana",
              day: "Dia",
            }}
            headerToolbar={{
              left: "timeGridDay,timeGridWeek,dayGridMonth",
              center: "prev,title,next",
              right: "myCustomButton",
            }}
            dayHeaderFormat={{
              weekday: "long",
            }}
            slotLabelFormat={{
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            }}
            slotLabelInterval={{
              hour: 1,
              minute: 0,
            }}
            expandRows={true}
            eventMaxStack={3}
            moreLinkClick="popover"
            slotDuration={"01:00:00"}
            events={
                props.agendamentos &&
                props.agendamentos.map((item: AgendamentoRetornoSelect) =>{
                    return {
                      title: `${item.nm_paciente} (${item.nm_profissional})`,
                      start: item.dt_inicio,
                      end: item.dt_fim,    
                      
                      extendedProps: item
                    }
                })
                
            }
            eventClick={
                (info) => {
                   handleOpenModalDetalhes(info.event.extendedProps as AgendamentoRetornoSelect)
                }
              }
            />
        </div>
    )
}