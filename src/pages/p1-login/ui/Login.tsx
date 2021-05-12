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

export const Login = () => {
    const dispatch = useDispatch()

    let [email, setEmail] = useState<string>('nya-admin@nya.nya')
    let [password, setPassword] = useState<string>('1qazxcvBG')
    let [rememberMe, setRememberMe] = useState<boolean>(false)

    const error = useSelector<AppRootStateType, string>(state => state.login.errorText)
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isAuth)

    if (isLoggedIn) {
        return <Redirect to={PATH.PROFILE}/>
    }


    return (
        <div className={s.flexMainContainer}>
            <h3>Login Page</h3>
            <div>Email</div>
            <div>
                <SuperInputText onChangeText={(value) => {
                    setEmail(value)
                }}
                                value={email}
                                error={error}/>
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
    )
}