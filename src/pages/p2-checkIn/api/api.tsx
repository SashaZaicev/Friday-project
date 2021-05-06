import axios from "axios";
import {actionsCheckIn} from "../bll/checkInReducer";


const instance = axios.create({
    baseURL: "http://localhost:7542/2.0/"
});

export const userAPI = {
    signup(login: string, password: string) {
        return instance.post(`/auth/register/`, {
            'email': login, 'password': password
        })
    }
}
// export const timePing = {
//     ping(time: number) {
//         return instance.post(`/ping`, {frontTime: time})
//             .then(res => {
//                 console.log(res)
//             })
//     }
// }