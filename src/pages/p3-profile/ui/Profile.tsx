import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from 'react-router-dom';
import {AppRootStateType} from "../../../app/store";
import SuperButton from "../../../components/SuperComponents/SuperButton/SuperButton";
import {getAuthUserDataTC, logOutTC} from "../../p1-login/bll/loginReducer";
import {PATH} from "../../../components/routes/Routes";
import s from "./../profile.module.css"

export const Profile = () => {
    const dispatch = useDispatch()
    const name = useSelector<AppRootStateType, string>(state => state.login.name)
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.login.isAuth)


    useEffect(() => {
        if (isAuth) return
        dispatch(getAuthUserDataTC())
    }, [])


    if (!isAuth) return <Redirect to={PATH.LOGIN}/>

    return (
        <div className={s.flexMainContainer}>
            Profile user {name}
            <div>
                <SuperButton name={'log out'} onClick={() => {
                    dispatch(logOutTC())
                }}/>
            </div>
            <div className={s.avatar}>
                <img src="https://shutniki.club/wp-content/uploads/2020/01/smeshnye_avatarki_34_17105705.jpg" alt={"avatar"}/>
            </div>

        </div>
    )
}