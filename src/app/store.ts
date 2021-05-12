import {applyMiddleware, combineReducers, createStore} from "redux";
import {loginReducer} from "../pages/p1-login/bll/loginReducer";
import thunkMiddleware from "redux-thunk"
import {checkInReducer} from "../pages/p2-checkIn/bll/checkInReducer";
import {profileReducer} from "../pages/p3-profile/bll/profileReducer";
import {recoverPasswordReducer} from "../pages/p5-recoverPassword/bll/recoverPasswordReducer";
import {newPasswordReducer} from "../pages/p6-newPassword/bll/newPasswordReducer";
import {searchReducer} from "../pages/p8-tableFilter/bll/searchReducer";
import {packsReducer} from "../pages/p3-packs/bll/packsReducer";

const rootReducer = combineReducers({
    login: loginReducer,
    registration: checkInReducer,
    profile: profileReducer,
    recoverPassword: recoverPasswordReducer,
    newPassword: newPasswordReducer,
    search: searchReducer
    newPassword: newPasswordReducer,
    packs: packsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;