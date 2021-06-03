import React, {useState} from 'react'
import SuperInputText from "../../../components/SuperComponents/SuperInput/SuperInputText";
import s from './login.module.css'
import SuperCheckbox from "../../../components/SuperComponents/SuperCheckbox/SuperCheckbox";
import SuperButton from "../../../components/SuperComponents/SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from '../../../app/store';
import {loginTC} from "../bll/loginReducer";
import {NavLink, Redirect} from "react-router-dom";
import {PATH} from "../../../components/routes/Routes";
import Preloader from "../../../components/preloader/Preloader";

export const Login = () => {
    const dispatch = useDispatch()

    let [email, setEmail] = useState<string>('nataliaandkirik@gmail.com')
    let [password, setPassword] = useState<string>('nataliaandkirik1817')
    let [rememberMe, setRememberMe] = useState<boolean>(false)

    const error = useSelector<AppRootStateType, string>(state => state.login.errorText)
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isAuth)
    const status = useSelector<AppRootStateType, boolean>(state => state.recoverPassword.status)

    if (isLoggedIn) return <Redirect to={PATH.PROFILE}/>
    if (status) return <div className={s.preloader}><Preloader/></div>
    return (
        <div className={s.loginMainContainer}>
            <div className={s.loginForm}>
                <div className={s.answerServer}>{error && <span className={s.error}>{error}</span>}</div>
                <div>Email</div>
                <div>
                    <SuperInputText onChangeText={(value) => {
                        setEmail(value)
                    }}
                                    value={email}/>
                </div>

                <div>Password</div>
                <div>
                    <SuperInputText type={"password"}
                                    value={password}
                                    onChangeText={(value) => {
                                        setPassword(value)
                                    }}/>
                </div>

                <div>
                    <span>Remember me</span>
                    <SuperCheckbox checked={rememberMe}
                                   onChangeChecked={(value) => {
                                       setRememberMe(value)
                                   }}/>
                </div>

                <div>
                    <SuperButton onClick={() => {
                        dispatch(loginTC({email, password, rememberMe}))
                    }}
                                 name={"Sign in"}
                                 error={error}
                    />
                </div>

                <div className={s.forgot}>
                    <div>
                        <NavLink to={PATH.PASSWORD_RECOVERY}>forgot password?</NavLink>
                    </div>
                    <div>
                        <NavLink to={PATH.REGISTRATION}>registration</NavLink>
                    </div>
                </div>
            </div>

        </div>
    )
}