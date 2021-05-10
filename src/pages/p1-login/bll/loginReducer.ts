import {Dispatch} from "redux";
import {authAPI} from "../api/login-api";

const initialState = {
    name: '',
    isAuth: false,
    errorText: ''
}

export const loginReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case 'login/SET_ERROR-TEXT':
            return {...state, errorText: action.text}
        case 'login/SET-NAME':
            return {...state, name: action.name}
        case 'login/SET-IS-LOGGED-IN':
            return {...state, isAuth: action.value}
        default:
            return {...state}
    }
};

//actions
export const setIsLoggedInAC = (value: boolean) => ({type: 'login/SET-IS-LOGGED-IN', value} as const)
export const setNameAC = (name: string) => ({type: 'login/SET-NAME', name} as const)
export const setErrorTextAC = (text: string) => ({type: 'login/SET_ERROR-TEXT', text} as const)

// thunk
export const loginTC = (data: LoginParamsType) => (dispatch: Dispatch<ActionsType>) => {
    authAPI.login(data)
        .then((res) => {
                dispatch(setNameAC(res.data.name))
                dispatch(setIsLoggedInAC(true))
            }
        )
        .catch(err => {
            dispatch(setIsLoggedInAC(false))
            dispatch(setErrorTextAC(err.response.data.error))
        })
}

export const logOutTC = () => (dispatch: Dispatch) => {
    authAPI.logOut()
        .then(() => {
                dispatch(setIsLoggedInAC(false))
            }
        )
        .catch(e => {
            // dispatch(setIsLoggedInAC(false))
            const error = e.response
                ? e.response.data.error
                : (e.message + ', more details in the console')
            // dispatch(setErrorTextAC(error))
            console.log(error)
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
type ActionsType =
    setIsLoggedInACType
    | setErrorTextACType
    | setNameACType