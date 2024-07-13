import { AxiosResponse } from "axios";
import { ApiUrl } from "../../services/api";
import { makeRequest } from "../../utils/makeRequest";
import { AgendamentoBanco } from "../../types/AgendamentoTypes";


export class AgendamentoController {

    async getAllAgendamentos() {
        const response: AxiosResponse = await makeRequest({
            method: "GET",
            url: `${ApiUrl}/agendamento/getAll`
        })
        return response
    }

    async postAgendamento(agendamento: AgendamentoBanco) {
        const response: AxiosResponse = await makeRequest({
            method: "POST",
            url: `${ApiUrl}/agendamento/create`,
            data: {data: agendamento}
        })
        return response
    }

    async getProcedimentos(){
        const response: AxiosResponse = await makeRequest({
            method: "GET",
            url: `${ApiUrl}/agendamento/procedimentos`
        })
        return response
    }

    async getSalas(){
        const response: AxiosResponse = await makeRequest({
            method: "GET",
            url: `${ApiUrl}/agendamento/salas`
        })
        return response
    }
}    