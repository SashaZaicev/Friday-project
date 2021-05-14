import {Dispatch} from "redux";
import {commonAPI} from "../../../api/api";
import {setStatusAC, setStatusActionType} from "../../p5-recoverPassword/bll/recoverPasswordReducer";

const initialState = {
    name: '',
    isAuth: false,
    errorText: '',
}

export const loginReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'login/SET_ERROR-TEXT':
            return {...state, errorText: action.text}
        case 'login/SET-NAME':
            return {...state, name: action.name}
        case 'login/SET-IS-LOGGED-IN':
            return {...state, isAuth: action.value}
        case 'login/SET_ME':
            return {...state, ...action.payload}
        default:
            return state
    }
};

//actions
export const setIsLoggedInAC = (value: boolean) => ({type: 'login/SET-IS-LOGGED-IN', value} as const)
export const setNameAC = (name: string) => ({type: 'login/SET-NAME', name} as const)
export const setErrorTextAC = (text: string) => ({type: 'login/SET_ERROR-TEXT', text} as const)
const setAuthUserDataAC = (name: string, isAuth: boolean) => ({
    type: 'login/SET_ME',
    payload: {name, isAuth}
} as const)

// thunk
export const loginTC = (data: LoginParamsType) => (dispatch: Dispatch<ActionsType>) => {
    dispatch(setStatusAC(true))
    commonAPI.login(data)
        .then((res) => {
                dispatch(setNameAC(res.data.name))
                dispatch(setIsLoggedInAC(true))
            }
        )
        .catch(err => {
            dispatch(setIsLoggedInAC(false))
            dispatch(setErrorTextAC(err.response.data.error))
            setTimeout(() => dispatch(setErrorTextAC('')), 3000)
        })
        .finally(() => {
            dispatch(setStatusAC(false))
        })
}

export const logOutTC = () => (dispatch: Dispatch) => {
    dispatch(setStatusAC(true))
    commonAPI.logOut()
        .then(() => {
                dispatch(setIsLoggedInAC(false))
            }
        )
        .catch(e => {
            const error = e.response
                ? e.response.data.error
                : (e.message + ', more details in the console')
            console.log(error)
        })
        .finally(() => {
            dispatch(setStatusAC(false))
        })
}

export const getAuthUserDataTC = () => (dispatch: Dispatch) => {
    dispatch(setStatusAC(true))
    commonAPI.authMe()
        .then(res => {
            dispatch(setAuthUserDataAC(res.data.name, true))
        })
        .catch(e => {
            const error = e.response
                ? e.response.data.error
                : (e.message + ', more details in the console')
            dispatch(setErrorTextAC(error))
            setTimeout(() => dispatch(setErrorTextAC('')), 3000)
        })
        .finally(() => {
            dispatch(setStatusAC(false))
        })
}

//types
type InitialStateType = typeof initialState
export type LoginParamsType = {
    email: string
    password: string
    rememberMe: boolean
}
export type loginResponseType = {
    _id: string;
    email: string;
    name: string;
    avatar?: string;
    publicCardPacksCount: number; // количество колод
    created: Date;
    updated: Date;
    isAdmin: boolean;
    verified: boolean; // подтвердил ли почту
    rememberMe: boolean;
    error?: string;
}

export type setIsLoggedInACType = ReturnType<typeof setIsLoggedInAC>
export type setErrorTextACType = ReturnType<typeof setErrorTextAC>
export type setNameACType = ReturnType<typeof setNameAC>
export type setMeACType = ReturnType<typeof setAuthUserDataAC>
type ActionsType =
    setIsLoggedInACType
    | setErrorTextACType
    | setNameACType
    | setMeACType
    | setStatusActionType