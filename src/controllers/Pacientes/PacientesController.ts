import { AxiosResponse } from "axios";
import { ApiUrl } from "../../services/api";
import { PacienteBanco } from "../../types/PacienteTypes";
import { makeRequest } from "../../utils/makeRequest";


export class PacientesController {

    async getPacientes(cd_multi_empresa: number, qt_resultados: number, page: number) {
        const response: AxiosResponse = await makeRequest({
            method: "GET",
            url: `${ApiUrl}/paciente/getAll`,
            params: {cd_multi_empresa: cd_multi_empresa, qt_resultados: qt_resultados, page: page}
        })
        return response
    }

    async countPacientes(cd_multi_empresa: number) {
        const response: AxiosResponse = await makeRequest({
            method: "GET",
            url: `${ApiUrl}/paciente/count`,
            params: {cd_multi_empresa: cd_multi_empresa}
        })
        return response
    }

    async postPaciente(cadastroPaciente: PacienteBanco){
        const response: AxiosResponse = await makeRequest({
            method: "POST",
            url: `${ApiUrl}/paciente/create`,
            data: {data: cadastroPaciente}
        })
        return response
    }

    async putPaciente(cadastroPaciente: PacienteBanco){
        const response: AxiosResponse = await makeRequest({
            method: "PUT",
            url: `${ApiUrl}/paciente/update`,
            data: {data: cadastroPaciente},
            params: {cd_paciente: cadastroPaciente.cd_paciente, cd_multi_empresa: cadastroPaciente.cd_multi_empresa}
        })
        return response
    }
}