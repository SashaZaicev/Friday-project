import {Dispatch} from "redux";
import {authAPI} from "../api/login-api";
import {Redirect} from "react-router-dom";

const initialState = {
    email: '',
    password: '',
    rememberMe: false,
    isLoggedIn: false,
    errorText: ''
}

export const loginReducer = (state: InitialStateType = initialState, action: any) => {
    switch (action.type) {
        case 'login/SET_EMAIL':
            return {...state, email: action.email}
        case 'login/SET_PASSWORD':
            return {...state, password: action.password}
        case 'login/SET_REMEMBER-ME':
            return {...state, rememberMe: action.rememberMe}
        case 'login/SET_ERROR-TEXT':
            return {...state, errorText: action.text}
        case 'login/SET-IS-LOGGED-IN':
            return {...state, isLoggedIn: action.value}
        default:
            return {...state}
    }
};

//actions
export const setIsLoggedInAC = (value: boolean) => ({type: 'login/SET-IS-LOGGED-IN', value} as const)
export const setEmailAC = (email: string) => ({type: 'login/SET_EMAIL', email} as const)
export const setPasswordAC = (password: string) => ({type: 'login/SET_PASSWORD', password} as const)
export const setRememberMeAC = (rememberMe: boolean) => ({type: 'login/SET_REMEMBER-ME', rememberMe} as const)
export const setErrorTextAC = (text: boolean) => ({type: 'login/SET_ERROR-TEXT', text} as const)

// thunk
export const loginTC = (data: LoginParamsType) => (dispatch: Dispatch) => {
    authAPI.login(data)
        .then(res => {
                dispatch(setIsLoggedInAC(true))
                console.log(res)
            }
        )
        .catch(err => {
            dispatch(setIsLoggedInAC(false))
            console.log(err.response.data.error)
            dispatch(setErrorTextAC(err.response.data.error))
        })
}


//types
type InitialStateType = typeof initialState
export type LoginParamsType = {
    email: string
    password: string
    rememberMe: boolean
}