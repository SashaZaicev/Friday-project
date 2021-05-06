import {Dispatch} from "redux";
import {recoverPasswordAPI} from "../api/api";

const initialState = {
    email: null as null || "",
    from: "test-front-admin <ai73a@yandex.by>",
    message: `<div style="background-color: #00ff00; padding: 15px">password recovery link: <a href='https://NataliaKirik.github.io/set-new-password/$token$'>link</a></div>`,
    errorMessage: "",
    infoMessage: "",
    status: false
}

type InitialStateType = typeof initialState

export const recoverPasswordReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case "CHANGE_EMAIL": { // меняет значение email на пользовательский
            return {...state, email: action.email}
        }
        case "SET_STATUS": { // отображает крутилку :)
            return {...state, status: action.status}
        }
        case "INFO_MESSAGE": { // сообщение при успехе :р
            return {...state, infoMessage: action.infoMessage}
        }
        case "ERROR_MESSAGE": { // сообщение при наличии ошибки -_-
            return {...state, errorMessage: action.errorMessage}
        }
        default:
            return state;
    }
};

// action
export const changeEmailAC = (email: string) => ({type: "CHANGE_EMAIL", email: email} as const);
export const setStatusAC = (status: boolean) => ({type: "SET_STATUS", status: status} as const);
export const infoMessageAC = (infoMessage: string) => ({type: "INFO_MESSAGE", infoMessage: infoMessage} as const);
export const errorMessageAC = (errorMessage: string) => ({type: "ERROR_MESSAGE", errorMessage: errorMessage} as const);

// thunks
export const recoverPasswordTC = (email: string, from: string, message: string) => {
    return (dispatch: ThunkDispatch) => {
        dispatch(changeEmailAC(email))
        console.log(email)
        dispatch(setStatusAC(true))
        recoverPasswordAPI.recoverPassword(email, from, message)
            .then((res) => {
                dispatch(infoMessageAC(res.data.info))
                console.log("then " + res.data.info)
                setTimeout(() => dispatch(infoMessageAC('')), 3000)
            })
            .catch((error) => {
                dispatch(errorMessageAC(error.response.data.error))
                console.log("error " + error.response.data.error)
                setTimeout(() => dispatch(errorMessageAC('')), 3000)
            })
            .finally(() => {
                dispatch(setStatusAC(false))
            })
    }
}

// type
export type sentEmailActionType = ReturnType<typeof changeEmailAC>
export type setStatusActionType = ReturnType<typeof setStatusAC>
export type infoMessageActionType = ReturnType<typeof infoMessageAC>
export type errorMessageActionType = ReturnType<typeof errorMessageAC>

type ActionsType = sentEmailActionType | setStatusActionType | infoMessageActionType | errorMessageActionType
type ThunkDispatch = Dispatch<ActionsType>