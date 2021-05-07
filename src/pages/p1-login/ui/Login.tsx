import React from 'react'
import SuperInputText from "../../../components/SuperComponents/SuperInput/SuperInputText";
import s from './login.module.css'
import SuperCheckbox from "../../../components/SuperComponents/SuperCheckbox/SuperCheckbox";
import SuperButton from "../../../components/SuperComponents/SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from '../../../app/store';
import {loginTC, setEmailAC, setPasswordAC, setRememberMeAC} from "../bll/loginReducer";

export const Login = () => {
    const dispatch = useDispatch()

    const email = useSelector<AppRootStateType, string>(state => state.login.email)
    const password = useSelector<AppRootStateType, string>(state => state.login.password)
    const rememberMe = useSelector<AppRootStateType, boolean>(state => state.login.rememberMe)
    const error = useSelector<AppRootStateType, string>(state => state.login.errorText)

    return (
        <>
            Login Page
            <div className={s.containerCenter}>
                Email
            </div>
            <SuperInputText onChangeText={(value) => {
                dispatch(setEmailAC(value))
            }}
                            value={email}
                            error={error}/>

            <div>
                <div className={s.containerCenter}>
                    Password
                </div>
                <SuperInputText value={password} onChangeText={(value) => {
                    dispatch(setPasswordAC(value))
                }}/>
                <div className={s.containerCenter}>
                    <span>Remember me</span>
                    <SuperCheckbox value={rememberMe.toString()} onChangeChecked={(value) => {
                        dispatch(setRememberMeAC(value))
                    }}/>
                </div>
                <div className={s.containerCenter}>
                    <SuperButton onClick={() => {
                        dispatch(loginTC({email, password, rememberMe}))
                    }}
                                 name={"Sign in"}
                                 error={error}
                    />
                </div>
                <div><a href="#recover_password">forgot password?</a></div>
                <a href="#check-in">register</a>

            </div>
        </>
    )
}