import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from 'react-router-dom';
import {AppRootStateType} from "../../../app/store";
import SuperButton from "../../../components/SuperComponents/SuperButton/SuperButton";
import {getAuthUserDataTC, logOutTC} from "../../p1-login/bll/loginReducer";
import {PATH} from "../../../components/routes/Routes";
import s from "./../profile.module.css"
import img from "../../../components/img/user-1.png"
import c from '../../../components/commonStyle/common.module.css'

export const Profile = () => {
    const dispatch = useDispatch()
    const name = useSelector<AppRootStateType, string>(state => state.login.name)
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.login.isAuth)
    const avatar = useSelector<AppRootStateType, string>(state => state.login.avatar)


    useEffect(() => {
        if (isAuth) return
        dispatch(getAuthUserDataTC())
    }, [isAuth, dispatch])


    if (!isAuth) return <Redirect to={PATH.LOGIN}/>

    return (
        <div className={c.mainContainer}>
            <div className={c.form}>
                <div>
                    <img src={avatar || img}
                         alt={"avatar"}
                         className={s.avatar}/>
                </div>
                Profile user {name}
                <div>
                    <SuperButton name={'log out'} onClick={() => {
                        dispatch(logOutTC())
                    }}/>
                </div>
            </div>


        </div>
    )
}