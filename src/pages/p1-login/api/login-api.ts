import axios from 'axios'
import {LoginParamsType, loginResponseType} from "../bll/loginReducer";

const instance = axios.create({
    baseURL: 'http://localhost:7542/2.0/',
})

export const authAPI = {
    login(data: LoginParamsType) {
        return instance.post<loginResponseType>(('auth/login'), data)
    },
    logOut() {
        return instance.delete<loginResponseType>(`auth/me`)
    },
    authMe() {
        return instance.post<loginResponseType>(`auth/me`)
    }
}