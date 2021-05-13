import axios from 'axios'
import {LoginParamsType, loginResponseType} from "../pages/p1-login/bll/loginReducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:7542/2.0/',
})
// baseURL: 'https://neko-back.herokuapp.com/2.0/'

const instance1 = axios.create({  // @@@ необходимо для проверки восстановления пароля @@@
    withCredentials: true,
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
})
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
        return instance1.post<ResponseType>('auth/forgot', {email, from, message});
    },
    changePassword(newPassword: string, token: string | undefined) {
        return instance.post('auth/set-new-password', {password: newPassword, resetPasswordToken: token})
    },
    //packs-cards
    getPacks(min: number, max: number, searchName: string, page?: number, pageCount?: number, sortProducts?: string) {
        return instance.get<getPacksResponseType>(`cards/pack?`
            + (max ? `min=${min}&max=${max}&` : '')
            + (searchName.length > 0 ? `name=${searchName}&` : '')
            + (page ? `page=${page}&pageCount=${pageCount}&` : '')
            + (sortProducts ? `sortProducts=${sortProducts}&` : ''))

    },
    addPack() {
        return instance.post(`cards/pack`, {cardsPack: {name: 'new test pack'}})
    },
    deletePack(packId: string) {
        return instance.delete(`cards/pack?id=${packId}`)
    },
    updatePack(packId: string, name?: string) {
        return instance.put(`cards/pack`, {cardsPack: {_id: packId, name: 'test pack update'}})
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
