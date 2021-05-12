import axios from 'axios'
import {LoginParamsType, loginResponseType} from "../pages/p1-login/bll/loginReducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
})
// baseURL: 'http://localhost:7542/2.0/'

export const commonAPI = {
    login(data: LoginParamsType) {
        return instance.post<loginResponseType>(('auth/login'), data)
    },
    logOut() {
        return instance.delete(`auth/me`)
    },
    authMe() {
        return instance.post<loginResponseType>(`auth/me`) // проверка на залогиненность
    },
    signup(login: string, password: string) {
        return instance.post(`/auth/register/`, {
            'email': login, 'password': password
        })
    },
    recoverPassword(email: string, from: string, message: string) {
        return instance.post<ResponseType>('auth/forgot', {email, from, message});
    },
    changePassword(newPassword: string, token: string | undefined) {
        return instance.post<ResponseType>('auth/set-new-password', {newPassword, token})
    },
    //packs-cards

}




//types
type ResponseType = {
    info: string
    error: ErrorType
}
type ErrorType = {
    error: string
    email: string
    emailRegExp: {}
    in: string
}