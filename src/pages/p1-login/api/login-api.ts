import axios from 'axios'
import {LoginParamsType} from "../bll/loginReducer";

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
})

export const authAPI = {
    login(data: LoginParamsType) {
        return instance.post(('auth/login'), data)
    }
}