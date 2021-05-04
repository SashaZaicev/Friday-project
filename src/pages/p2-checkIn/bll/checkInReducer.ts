import {Dispatch} from "redux";
import {ActionsTypes, CheckInUserType} from "../../../app/store";
import {userAPI} from "../api/api";

export let initialState = {
    id: '1',
    login: 'loginn',
    password: 'pas',
    confirmPassword: 'pas',
    isSuccess: false,
    rememberMe: false
};
const SET_LOGIN = "SET_LOGIN"
export const checkInReducer = (state: CheckInUserType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case  SET_LOGIN: {
            return {
                ...state,
                login: action.login
            };
        }
        case  'SET_PASSWORD': {
            return {
                ...state,
                password: action.password
            };
        }
        case  'SET_REPEAT_PASSWORD': {
            return {
                ...state,
                confirmPassword: action.repeatPassword
            };
        }
        case  'SET_SUCCESS': {
            return {
                ...state,
                isSuccess: action.isSuccess
            };
        }
        case  'SET_REMEMBER_ME': {
            return {
                ...state,
                rememberMe: action.rememberMe
            };
        }
        default:
            return state;
    }
};

export const actionsCheckIn = {
    postLogin: (login: string) => ({type: SET_LOGIN, login}) as const,
    postPassword: (password: string) => ({type: 'SET_PASSWORD', password}) as const,
    postRepeatPassword: (repeatPassword: string) => ({type: 'SET_REPEAT_PASSWORD', repeatPassword}) as const,
    setSuccess: (isSuccess: boolean) => ({type: 'SET_SUCCESS', isSuccess}) as const,
    postRememberMe: (rememberMe: boolean) => ({type: 'SET_REMEMBER_ME', rememberMe}) as const,
}

export const createUserTC = (login: string, password: string) => {
    return (dispatch: Dispatch) => {
        userAPI.signup(login, password)
            .then(res=>{
              dispatch(actionsCheckIn.setSuccess(true))
                console.log(res)
            })
    }
}