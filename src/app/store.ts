import {applyMiddleware, combineReducers, createStore} from "redux";
import {loginReducer} from "../pages/p1-login/bll/loginReducer";
import thunkMiddleware from "redux-thunk"

import {
    actionsCheckIn,
    checkInReducer,
} from "../pages/p2-checkIn/bll/checkInReducer";
import {profileReducer} from "../pages/p3-profile/bll/profileReducer";
import {recoverPasswordReducer} from "../pages/p5-recoverPassword/bll/recoverPasswordReducer";
import {newPasswordReducer} from "../pages/p6-newPassword/bll/newPasswordReducer";

const rootReducer = combineReducers({
    login: loginReducer,
    registration: checkInReducer,
    profile: profileReducer,
    recoverPassword: recoverPasswordReducer,
    newPassword: newPasswordReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof rootReducer>

export type CheckInUserType = {
    id: string,
    login: string,
    password: string,
    isSuccess: boolean,
    rememberMe: boolean

}
type PostLoginUserActionType = ReturnType<typeof actionsCheckIn.postLogin>
type PostPasswordUserActionType = ReturnType<typeof actionsCheckIn.postPassword>
type PostPassword2UserActionType = ReturnType<typeof actionsCheckIn.postRepeatPassword>
type setSuccessUserActionType = ReturnType<typeof actionsCheckIn.setSuccess>
type PostRememberUserActionType = ReturnType<typeof actionsCheckIn.postRememberMe>
export type ActionsTypes =
    | PostLoginUserActionType
    | PostPasswordUserActionType
    | PostPassword2UserActionType
    | PostRememberUserActionType
    | setSuccessUserActionType

// @ts-ignore
window.store = store;