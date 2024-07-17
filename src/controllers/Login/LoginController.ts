import { ApiUrl } from "../../services/api";
import { makeRequest } from "../../utils/makeRequest";


export class LoginController{

    async auth(email: string, password: string){
        const response = await makeRequest({
            method: "POST",
            url: `${ApiUrl}/autenticacao/login`,
            data: {
                email: email,
                password: password
            }
        })
        return response
    }
}