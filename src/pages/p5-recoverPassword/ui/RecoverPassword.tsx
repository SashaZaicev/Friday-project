import React from 'react'
import s from './../recoverPassword.module.css'
import nya from './PYh.gif'
import SuperInputText from "../../../components/SuperComponents/SuperInput/SuperInputText";
import SuperButton from "../../../components/SuperComponents/SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {recoverPasswordTC, changeEmailAC} from "../bll/recoverPasswordReducer";
import {AppRootStateType} from "../../../app/store";

export const RecoverPassword = () => {
    const dispatch = useDispatch()
    const email = useSelector<AppRootStateType, string>(state => state.recoverPassword.email)
    const from = useSelector<AppRootStateType, string>(state => state.recoverPassword.from)
    const message = useSelector<AppRootStateType, string>(state => state.recoverPassword.message)
    const info = useSelector<AppRootStateType, string>(state => state.recoverPassword.infoMessage)
    const error = useSelector<AppRootStateType, string>(state => state.recoverPassword.errorMessage)
    const status = useSelector<AppRootStateType, boolean>(state => state.recoverPassword.status)
    const recoverPassword = (email: string, from: string, message: string) => {
        dispatch(recoverPasswordTC(email, from, message))
    }
    const preloader = status ? <img src={nya} alt={''}/> : '' // отображение крутилки

    return (
        <div className={s.content}>
            <div className={s.preloader}> {preloader} </div>
            <div>
                <SuperInputText value={email}
                                info={info}
                                error={error}
                                onChangeValue={(email) => dispatch(changeEmailAC(email))}/>
            </div>
            <div>
                <SuperButton name={"Recover password"}
                             error={error}
                             onClick={() => recoverPassword(email, from, message)}
                             disabled={status}/>
            </div>
        </div>
    )
}
