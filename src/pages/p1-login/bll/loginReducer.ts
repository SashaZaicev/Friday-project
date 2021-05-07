import {Dispatch} from "redux";
import {authAPI} from "../api/login-api";

const initialState = {
    email: '',
    password: '',
    rememberMe: false,
    isLoggedIn: false,
    errorText: ''
}

export const loginReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {

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
export const setErrorTextAC = (text: string) => ({type: 'login/SET_ERROR-TEXT', text} as const)

// thunk
export const loginTC = (data: LoginParamsType) => (dispatch: Dispatch<ActionsType>) => {
    authAPI.login(data)
        .then(res => {
                dispatch(setIsLoggedInAC(true))
            }
        )
        .catch(err => {
            dispatch(setIsLoggedInAC(false))
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
export type setIsLoggedInACType = ReturnType<typeof setIsLoggedInAC>
export type setEmailACType = ReturnType<typeof setEmailAC>
export type setPasswordACType = ReturnType<typeof setPasswordAC>
export type setRememberMeACType = ReturnType<typeof setRememberMeAC>
export type setErrorTextACType = ReturnType<typeof setErrorTextAC>
type ActionsType =
    setIsLoggedInACType
    | setEmailACType
    | setPasswordACType
    | setRememberMeACType
    | setErrorTextACType