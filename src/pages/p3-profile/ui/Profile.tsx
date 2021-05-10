import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from 'react-router-dom';
import {AppRootStateType} from "../../../app/store";
import SuperButton from "../../../components/SuperComponents/SuperButton/SuperButton";
import {authAPI} from "../../p1-login/api/login-api";
import {loginResponseType, logOutTC, setErrorTextAC, setIsLoggedInAC, setNameAC} from "../../p1-login/bll/loginReducer";
import {AxiosResponse} from "axios";
import {PATH} from "../../../components/routes/Routes";

export const Profile = () => {
    const dispatch = useDispatch()
    const name = useSelector<AppRootStateType, string>(state => state.login.name)
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.login.isAuth)

    useEffect(() => {
        if (isAuth) return
        authAPI.authMe()
            .catch(err => {
                dispatch(setErrorTextAC(err.response.data.error))
            })
    }, [])

    if (!isAuth) return <Redirect to={PATH.LOGIN}/>

    return (
        <>
            Profile user {name}
            <div>
                <SuperButton name={'log out'} onClick={() => {
                    dispatch(logOutTC())
                }}/>
            </div>
        </>
    )
}