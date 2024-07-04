import { AxiosResponse } from "axios"
import { makeRequest } from "../../utils/makeRequest"
import { ApiUrl } from "../../services/api"
import { ProfissionalBanco } from "../../types/ProfissionalTypes"

export class ProfissionaisController {

    async getAllProfssionais() {
        const response: AxiosResponse = await makeRequest({
            method: "GET",
            url: `${ApiUrl}/profissional/getAll`,
            
        })
        return response
    }   

    async postProfissional(profissional: ProfissionalBanco) {
        const response: AxiosResponse = await makeRequest({
            method: "POST",
            url: `${ApiUrl}/profissional/create`,
            data: {data: profissional}
        })
        return response
    }

    async putProfissional(profissional: ProfissionalBanco) {
        const response: AxiosResponse = await makeRequest({
            method: "PUT",
            url: `${ApiUrl}/profissional/update`,
            data: {data: profissional},
            params: {cd_profissional: profissional.cd_profissional}
        })
        return response
    }
}    