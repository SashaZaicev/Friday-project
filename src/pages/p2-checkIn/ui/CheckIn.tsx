import React, {useEffect, useState} from 'react'
import SuperInputText from "../../../components/SuperComponents/SuperInput/SuperInputText";
import SuperButton from "../../../components/SuperComponents/SuperButton/SuperButton";
import s from './CheckIn.module.css'
import {useDispatch, useSelector} from "react-redux";
import {
    actionsCheckIn, createUserTC,
} from "../bll/checkInReducer";
import SuperCheckbox from "../../../components/SuperComponents/SuperCheckbox/SuperCheckbox";
import {timePing, userAPI} from "../api/api";
import {AppRootStateType} from "../../../app/store";
import {Redirect} from "react-router-dom";

export const CheckIn = () => {

    const dispatch = useDispatch();

    const [login, setLogin] = useState('test@bks.ru')
    const [password, setPassword] = useState('test pass')
    const [password2, setPassword2] = useState('test pass')
    const [rememberMe, setRememberMe] = useState(false)
    const stateRegistrationIsSuccess = useSelector<AppRootStateType>(state => state.registration.isSuccess)


    const addUser = () => {
        console.log('первый', password, 'второй', password2)
        if (password === password2) {
            dispatch(createUserTC(login, password))
            actionsCheckIn.postLogin(login)
            // actionsCheckIn.setSuccess(true)
        } else {
            actionsCheckIn.setSuccess(false)
        }
    }
    const time = Date.now()
    useEffect(()=>{
        timePing.ping(time)
    })
    const onLoginChange = (e: React.FormEvent<HTMLInputElement>) => {
        let login = e.currentTarget.value
        setLogin(login)
    }

    const onPasswordChange = (e: React.FormEvent<HTMLInputElement>) => {
        let password = e.currentTarget.value
        setPassword(password)
    }

    const repeatOnPasswordChange = (e: React.FormEvent<HTMLInputElement>) => {
        let repeatPassword = e.currentTarget.value
        setPassword2(repeatPassword)
    }
    //какой выбрать тип
    const setRememberMeChange = (e: React.FormEvent<any>) => {
        let checkedRemember = e.currentTarget.checked
        setRememberMe(checkedRemember)
    }

    if  (stateRegistrationIsSuccess) return  <Redirect to={"/profile"} />
    return (
        <div className={s.checkInBlock}>
            <h2 className={s.checkInTitle}>Registration</h2>
            <label>Email:
                <label className={s.help}>Example: Alex@company.com</label>
                <SuperInputText
                    value={login}
                    onChange={onLoginChange}
                    type={'email'}
                    placeholder={'Alex@company.com'}/>
            </label>
            <label>Password:
                <label className={s.help}>Example: Must be between
                    8-20 character </label>
                <SuperInputText
                    value={password}
                    onChange={onPasswordChange}
                    // type={'password'}
                    placeholder={'password'}
                />
            </label>
            <label>Confirm password:
                <label className={s.help}>Example: Must be between
                    8-20 character </label>
                <SuperInputText
                    value={password2}
                    onChange={repeatOnPasswordChange}
                    // type={'password'}
                    placeholder={'confirm password'}
                />
            </label>
            <div className={s.checkInBtn}>
                <SuperButton callFunction={addUser}
                             title={'Register'}
                />
                <SuperCheckbox onChange={setRememberMeChange}/>
            </div>
            <a href="#/login">Sign In</a>
        </div>
    )
}