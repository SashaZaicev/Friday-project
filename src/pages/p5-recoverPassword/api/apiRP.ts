import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true
})

// api

export const recoverPasswordAPI = {
    recoverPassword(email: string, from: string, message: string) {
        return instance.post<ResponseType>('auth/forgot', { email, from, message });
    }
}
export const newPasswordAPI = {
    changePassword(newPassword: string, token: string | undefined) {
        return instance.post<ResponseType>('auth/set-new-password', {newPassword, token})
    }
}

export type ResponseType = {
    info: string
    error: ErrorType
}

type ErrorType = {
    error: string
    email: string
    emailRegExp: {}
    in: string
}

