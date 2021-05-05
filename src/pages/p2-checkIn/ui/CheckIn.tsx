import React, {useEffect, useState} from 'react'
import SuperInputText from "../../../components/SuperComponents/SuperInput/SuperInputText";
import SuperButton from "../../../components/SuperComponents/SuperButton/SuperButton";
import s from './CheckIn.module.css'
import {useDispatch, useSelector} from "react-redux";
import {
    actionsCheckIn, createUserTC,
} from "../bll/checkInReducer";
import SuperCheckbox from "../../../components/SuperComponents/SuperCheckbox/SuperCheckbox";
// import {timePing, userAPI} from "../api/api";
import {AppRootStateType} from "../../../app/store";
import {Redirect} from "react-router-dom";

export const CheckIn: React.FC = () => {

    const dispatch = useDispatch();

    const [login, setLogin] = useState('Alex@company.com')
    const [password, setPassword] = useState('123456789')
    const [password2, setPassword2] = useState('123456789')
    const [rememberMe, setRememberMe] = useState(false)
    const stateRegistrationIsSuccess = useSelector<AppRootStateType>(state => state.registration.isSuccess)
    const stateRegistrationError = useSelector<AppRootStateType>(state => state.registration.error)
    const stateLoading = useSelector<AppRootStateType>(state => state.registration.loading)


    const addUser = () => {
        console.log('первый', password, 'второй', password2)
        if (password != '' || password2 != '') {
            if (password === password2) {
                dispatch(createUserTC(login, password))
                dispatch(actionsCheckIn.setLoading(true))
            }
        } else {
            dispatch(actionsCheckIn.setError(true))
            dispatch(actionsCheckIn.setSuccess(false))
        }
    }
    //test server
    // const time = Date.now()
    // useEffect(() => {
    //     timePing.ping(time)
    // })
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

    // if (stateRegistrationIsSuccess) return <Redirect to={"/profile"}/>
    const errInputLogin = (login === '' && stateRegistrationError) ? 'Обязательное поле' : '';
    const errInputPas = (password === '' && stateRegistrationError) ? 'Обязательное поле' : '';
    const errInputPas2 = (password2 === '' && stateRegistrationError) ? 'Обязательное поле' : '';
    return (
        <div className={s.checkInBlock}>
            <h2 className={s.checkInTitle}>Registration</h2>
            {stateLoading
                ? <div style={{color: 'orange'}}>loading...</div>
                : stateRegistrationError
                    ? <div style={{color: 'red'}}>{"УПС ошибочка..."}</div>
                    : stateRegistrationIsSuccess
                        ? <div style={{color: 'lime'}}>Success!</div>
                        : <div><br/></div>
            }

            <label>Email:
                <label className={s.help}>Example: Alex@company.com</label>
                <SuperInputText
                    error={errInputLogin}
                    value={login}
                    onChange={onLoginChange}
                    type={'email'}
                    placeholder={'Alex@company.com'}/>
            </label>
            <label>Password:
                <label className={s.help}>Example: Must be between
                    8-20 character </label>
                <SuperInputText
                    error={errInputPas}
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
                    error={errInputPas2}
                    value={password2}
                    onChange={repeatOnPasswordChange}
                    // type={'password'}
                    placeholder={'confirm password'}
                />
            </label>
            <div className={s.checkInBtn}>
                <SuperButton callFunction={addUser}
                             title={'Register'}
                             disabled={!!stateLoading}
                />
                <SuperCheckbox onChange={setRememberMeChange}/>
            </div>
            <a href="#/login">Sign In</a>
        </div>
    )
}