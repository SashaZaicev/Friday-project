import axios from 'axios'
import {LoginParamsType, loginResponseType} from "../pages/p1-login/bll/loginReducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:7542/2.0/',
})
// baseURL: 'https://neko-back.herokuapp.com/2.0/'


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
    getPacks() {
        return instance.get<getPacksResponseType>('cards/pack')

    }
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
type getPacksResponseType = {
    cardPacks: Array<PackType>
    cardPacksTotalCount: number// количество колод
    maxCardsCount: number
    minCardsCount: number
    page: number// выбранная страница
    pageCount: number // количество элементов на странице
    token: string
    tokenDeathTime: number
}
export type PackType = {
    cardsCount: number
    created: string
    grade: number
    more_id: string
    name: string
    path: string
    private: boolean
    rating: number
    shots: number
    type: string
    updated: string
    user_id: string
    user_name: string
    __v: number
    _id: string
}